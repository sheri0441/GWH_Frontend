import { Box, Container, Typography } from "@mui/material";
import PageTitle from "../../utils/PageTitle";
import SecondaryBtn from "../../utils/buttons/SecondaryBtn";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import PrimaryBtn from "../../utils/buttons/PrimaryBtn";
import { useAuth0 } from "@auth0/auth0-react";
import { logOutUser } from "../../feature/loginSlice";
import defaultImage from "../../assets/image/genericUser.jpg";
import { useState } from "react";
import OverLayerNote from "../../utils/OverLayerNote";
import axios from "axios";
import LoadingAnimation from "../../utils/LoadingAnimation";

const UserPage = () => {
  const user = useAppSelector((store) => store.login.user);
  const dispatch = useAppDispatch();
  const { logout } = useAuth0();
  const [dialog, setDialog] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const deleteDialogHandler = () => {
    setDialog(!dialog);
  };

  const logoutHandler = () => {
    logout();
    dispatch(logOutUser());
  };

  const deleteAccount = async () => {
    setIsLoading(true);
    try {
      const response = await axios.delete(
        import.meta.env.VITE_API_URL + "/user",
        {
          headers: {
            Authorization: `bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.status === 204) {
        setIsSuccess(true);
      } else {
        alert("Error deleting account");
      }
    } catch (error) {
      alert("Error deleting account");
    }
    setIsLoading(false);
    deleteDialogHandler();
  };

  return (
    <>
      <Container>
        <Box
          sx={{
            paddingTop: "6.5rem",
            paddingBottom: "6.5rem",
          }}
        >
          <PageTitle>User Page</PageTitle>
          <Typography
            sx={{
              fontWeight: 500,
              marginTop: "1rem",
              marginBottom: "1rem",
              textAlign: "center",
              fontSize: { xs: "1rem", md: "1.5rem" },
            }}
          >
            Profile Information
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                aspectRatio: "1 / 1",
                maxWidth: "96px",
                border: "2px solid black",
              }}
            >
              <img
                style={{ width: "100%" }}
                src={user.imageURL}
                alt={user.name}
                onError={(e) => (e.currentTarget.src = defaultImage)}
              />
            </Box>
            <Typography
              component={"h3"}
              sx={{
                textTransform: "capitalize",
                textAlign: "center",
                fontWeight: "600",
              }}
            >
              name
            </Typography>
            <Typography>{user.name}</Typography>
            <Typography
              component={"h3"}
              sx={{
                textTransform: "capitalize",
                textAlign: "center",
                fontWeight: "600",
              }}
            >
              email
            </Typography>
            <Typography>{user.email}</Typography>
            <SecondaryBtn
              padding="0.5rem 0.5rem"
              danger={true}
              clickEvent={deleteDialogHandler}
            >
              Delete Account
            </SecondaryBtn>
            <Box
              sx={{
                maxWidth: "500px",
                marginInline: "auto",
                marginTop: "1.5rem",
              }}
            >
              <PrimaryBtn padding="0.5rem" clickEvent={logoutHandler}>
                Log Out
              </PrimaryBtn>
            </Box>
          </Box>
        </Box>
      </Container>
      {dialog && (
        <OverLayerNote>
          <Box>
            <Typography sx={{ fontSize: "1.25rem" }} component={"h2"}>
              Are you sure, you want to delete your account?
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "1rem",
              width: "fit-content",
              marginInline: "auto",
              marginTop: "1.5rem",
            }}
          >
            <SecondaryBtn
              padding="0.5rem 0.75rem"
              clickEvent={deleteAccount}
              danger={true}
              fullWidth={true}
            >
              Yes
            </SecondaryBtn>
            <PrimaryBtn
              padding="0.5rem 0.75rem"
              clickEvent={deleteDialogHandler}
            >
              No
            </PrimaryBtn>
          </Box>
        </OverLayerNote>
      )}
      {isLoading && (
        <OverLayerNote>
          <Box sx={{ maxWidth: "100px" }}>
            <LoadingAnimation />
          </Box>
        </OverLayerNote>
      )}
      {isSuccess && (
        <OverLayerNote>
          <Typography component={"h2"} sx={{ fontSize: "1.5rem" }}>
            Your account will be deleted in next few days.
          </Typography>
          <Box
            sx={{
              maxWidth: "200px",
              marginInline: "auto",
              marginTop: "1.5rem",
            }}
          >
            <PrimaryBtn
              padding="0.5rem 0.75rem"
              clickEvent={() => setIsSuccess(false)}
            >
              OK!
            </PrimaryBtn>
          </Box>
        </OverLayerNote>
      )}
    </>
  );
};

export default UserPage;
