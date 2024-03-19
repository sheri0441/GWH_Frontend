import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import PrimaryBtn from "../../../utils/buttons/PrimaryBtn";
import notFound from "../../../assets/image/404.svg";

const NotFound404 = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        height: "calc(100vh - 200px)",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <img src={notFound} alt="" />
      <Box
        sx={{ width: "fit-content", marginInline: "auto", marginTop: "3rem" }}
      >
        <PrimaryBtn padding="1rem" clickEvent={() => navigate("/")}>
          Go Back To Home
        </PrimaryBtn>
      </Box>
    </Box>
  );
};

export default NotFound404;
