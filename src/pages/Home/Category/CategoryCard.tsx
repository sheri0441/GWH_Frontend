import { Link } from "react-router-dom";
import style from "./CategoryCard.module.css";
import { Typography, useTheme } from "@mui/material";

const CategoryCard = ({
  category,
}: {
  category: { imageURL: string; name: string; id: string };
}) => {
  const theme = useTheme();
  return (
    <Link
      className={style.categoryCardLink}
      to={`./products/category/${category.name}`}
    >
      <img
        style={{
          width: "100%",
          height: "100%",
        }}
        src={category.imageURL}
        alt=""
      />
      <Typography
        sx={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: "0",
          left: "0",
          color: "#fff",
          background: `linear-gradient(to top, ${theme.palette.secondary.main}, ${theme.palette.background.default})`,
          display: "none",
          justifyContent: "center",
          alignItems: "center",
          fontSize: { sx: "1.5rem", md: "2rem" },
        }}
      >
        {category.name}
      </Typography>
    </Link>
  );
};

export default CategoryCard;
