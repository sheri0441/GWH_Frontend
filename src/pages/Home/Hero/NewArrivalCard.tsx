import { Box, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import style from "./NewArrivalCard.module.css";

const NewArrivalCard = () => {
  const theme = useTheme();
  return (
    <Link to={"/"} className={style.arrivalCard}>
      <Box
        sx={{
          width: "127px",
          backgroundColor: theme.palette.background.default,
          display: "flex",
          alignItems: "center",
          paddingInline: "0.5rem",
          aspectRatio: "1 / 2",
        }}
      >
        <img
          style={{ width: "100%" }}
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt=""
        />
      </Box>
      <Box>
        <Typography
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            fontSize: "1rem",
            WebkitLineClamp: "2",
            WebkitBoxOrient: "vertical",
          }}
        >
          Jon Hardy Women's Legends Naga Gold & Silver Dragon Station Chain
          Braceleth
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
          }}
        >
          <Typography
            sx={{
              backgroundColor: "#0009",
              textDecoration: "none",
              color: theme.palette.background.default,
              width: "fit-content",
              padding: "0.125rem 0.5rem",
              fontSize: { xs: "0.5rem", md: "0.75rem" },
            }}
          >
            New Arrival
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "1.5rem", md: "2rem" },
              marginLeft: "auto",
              display: "block",
              width: "fit-content",
            }}
          >
            695$
          </Typography>
        </Box>
      </Box>
    </Link>
  );
};

export default NewArrivalCard;
