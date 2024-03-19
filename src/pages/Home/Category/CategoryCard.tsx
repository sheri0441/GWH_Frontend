import { Box, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { Category } from "../../../model/Category";
import ExtractImage from "../../../utils/ExtractImage";
import style from "./CategoryCard.module.css";

const CategoryCard = ({
  category: { image, name },
}: {
  category: Category;
}) => {
  const theme = useTheme();
  return (
    <Link
      className={style.categoryCardLink}
      to={`./products/category/${name.toLowerCase()}`}
    >
      <img
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
        src={ExtractImage(image)}
        alt={name}
      />

      <Box
        sx={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: "0",
          left: "0",
          display: "none",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            color: "#fff",
            background: `linear-gradient(to top, ${theme.palette.secondary.main}, ${theme.palette.background.default})`,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: { sx: "1.5rem", md: "2rem" },
            opacity: "0.5",
          }}
        ></Box>
        <Typography
          sx={{
            width: "100%",
            position: "absolute",
            top: "0",
            left: "0",
            height: "100%",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            fontSize: { xs: "1.5rem", md: "2rem" },
            textTransform: "uppercase",
          }}
        >
          {name}
        </Typography>
      </Box>
    </Link>
  );
};

export default CategoryCard;
