import { Typography } from "@mui/material";
import IconSecondaryBtn from "../../../utils/buttons/IconSecondaryBtn";
import SecondaryBtn from "../../../utils/buttons/SecondaryBtn";
import Person2Icon from "@mui/icons-material/Person2";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButtons = () => {
  const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0();

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
    <SecondaryBtn
      padding="1.125rem"
      clickEvent={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
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
      />
    </SecondaryBtn>
  );
};

export default LoginButtons;
