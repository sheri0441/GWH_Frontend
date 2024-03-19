import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Box, SvgIcon, Typography } from "@mui/material";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import Person2Icon from "@mui/icons-material/Person2";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import {
  logIn,
  setCartInfo,
  toggleHasError,
} from "../../../../feature/loginSlice";
import IconSecondaryBtn from "../../../../utils/buttons/IconSecondaryBtn";
import SecondaryBtn from "../../../../utils/buttons/SecondaryBtn";
import LoadingAnimation from "../../../../utils/LoadingAnimation";
import OverLayerNote from "../../../../utils/OverLayerNote";
import HaveProductDialog from "./HaveProductDialog";
import defaultImage from "../../../../assets/image/genericUser.jpg";

const LoginButtons = () => {
  const { loginWithRedirect, user, isAuthenticated, getAccessTokenSilently } =
    useAuth0();

  const navigate = useNavigate();

  const { isLoading, hasError } = useAppSelector((store) => store.login);
  const dispatch = useAppDispatch();

  const [showDialog, setShowDialog] = useState<boolean>(false);

  const showDialogHandler = (boolean: boolean) => {
    setShowDialog(boolean);
  };

  const getCart = async () => {
    const accessToken = await getAccessTokenSilently({
      authorizationParams: {
        audience: import.meta.env.VITE_AUDIENCE,
        scope: import.meta.env.VITE_AUTH0_SCOPE,
      },
    });

    window.localStorage.setItem("token", accessToken);

    const response = await axios({
      method: "POST",
      url: import.meta.env.VITE_API_URL + "/user",
      headers: {
        Authorization: `bearer ${accessToken}`,
      },
      data: { name: user?.name, email: user?.email, image: user?.picture },
    });

    if (response.status !== 200) {
      console.log(response.statusText);
    }

    const { cart, id } = response.data;

    dispatch(
      logIn({
        name: user!.name!,
        email: user!.email!,
        image: user!.picture!,
        id: id,
      })
    );

    const localCart = localStorage.getItem("cart");

    if (localCart !== null) {
      setShowDialog(true);
    }

    dispatch(setCartInfo(JSON.parse(cart)));
  };

  useEffect(() => {
    isAuthenticated && getCart();
  }, [isAuthenticated]);

  useEffect(() => {
    let errorTimeOUt = setTimeout(() => {
      hasError && dispatch(toggleHasError());
    }, 2000);

    return () => {
      clearTimeout(errorTimeOUt);
    };
  }, [hasError]);

  return !isAuthenticated ? (
    <>
      <IconSecondaryBtn
        Type={Person2Icon}
        clickEvent={() => loginWithRedirect()}
        onlySmall={true}
      />
      <SecondaryBtn
        padding="0.5rem 1rem"
        clickEvent={() => loginWithRedirect()}
        hideOnSmall={true}
      >
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "medium",
          }}
          component={"span"}
        >
          Login/Register
        </Typography>
      </SecondaryBtn>
    </>
  ) : (
    <>
      <SecondaryBtn
        padding="1.125rem"
        clickEvent={() => navigate("/user/profile")}
      >
        <img
          style={{
            width: "100%",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
          src={user?.picture}
          onError={(e) => (e.currentTarget.src = defaultImage)}
        />
      </SecondaryBtn>
      <HaveProductDialog
        open={showDialog}
        showDialogHandler={showDialogHandler}
      />
      {isLoading && (
        <OverLayerNote>
          <Box sx={{ width: "100px", height: "100px" }}>
            <LoadingAnimation />
          </Box>
        </OverLayerNote>
      )}
      {hasError && (
        <OverLayerNote>
          <SvgIcon component={PriorityHighIcon} />
          <Typography>There is some issue in the backend.</Typography>
        </OverLayerNote>
      )}
    </>
  );
};

export default LoginButtons;
