import { Box, Typography } from "@mui/material";
import IconSecondaryBtn from "./buttons/IconSecondaryBtn";
import DeleteIcon from "@mui/icons-material/Delete";

interface Props {
  product: { title: string; price: number; quantity: number; imageURL: string };
}

const ProductItemCart = ({ product }: Props) => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 3fr 1fr",
        gap: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "2.5rem",
          aspectRatio: "1/1",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginInline: "auto",
        }}
      >
        <img style={{ width: "100%" }} src={product.imageURL} alt="" />
      </Box>
      <Box>
        <Box sx={{ overflow: "hidden" }}>
          <Typography
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              fontSize: "0.75rem",
              WebkitLineClamp: "2",
              WebkitBoxOrient: "vertical",
            }}
          >
            {product.title}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 1,
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: "0.75rem" }}>
            {product.quantity}
          </Typography>
          <Typography sx={{ fontSize: "0.75rem", fontWeight: 600 }}>
            X
          </Typography>
          <Typography sx={{ fontSize: "0.75rem" }}>{product.price}$</Typography>
          <Typography sx={{ fontSize: "0.75rem", fontWeight: 600 }}>
            =
          </Typography>
          <Typography sx={{ fontSize: "0.75rem" }}>
            {product.quantity * product.price}$
          </Typography>
        </Box>
      </Box>
      <Box sx={{ marginInline: "auto" }}>
        <IconSecondaryBtn
          Type={DeleteIcon}
          clickEvent={() => console.log("hello from delete")}
          danger={true}
        />
      </Box>
    </Box>
  );
};

export default ProductItemCart;
