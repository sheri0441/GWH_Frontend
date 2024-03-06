import { Box, Container, Typography } from "@mui/material";
import PageTitle from "../../utils/PageTitle";
import SecondaryBtn from "../../utils/buttons/SecondaryBtn";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import PrimaryBtn from "../../utils/buttons/PrimaryBtn";
import { useAuth0 } from "@auth0/auth0-react";
import { logOutUser } from "../../feature/loginSlice";
import defaultImage from "../../assets/image/genericUser.jpg";

const UserPage = () => {
  const user = useAppSelector((store) => store.login.user);
  const dispatch = useAppDispatch();
  const { logout } = useAuth0();

  const logoutHandler = () => {
    logout();
    dispatch(logOutUser());
  };

  return (
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
            clickEvent={() => console.log("delete")}
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
  );
};

export default UserPage;
