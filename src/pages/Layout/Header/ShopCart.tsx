import { Box, Typography } from "@mui/material";
import OverLayer from "../../../utils/OverLayer";
import Image from "../../../assets/image/71YXzeOuslL._AC_UY879_.jpg";
import IconSecondaryBtn from "../../../utils/buttons/IconSecondaryBtn";
import DeleteIcon from "@mui/icons-material/Delete";

interface Props {
  showCart: boolean;
  showCartHandler: Function;
}

const ShopCart = ({ showCart, showCartHandler }: Props) => {
  return (
    <OverLayer
      showOverLayer={showCart}
      overLayerHandler={showCartHandler}
      title={"shopping cart"}
    >
      <Box>
        {/* single item cart */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 3fr 1fr",
            gap: 1,
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "30px",
              height: "30px",
              display: "flex",
            }}
          >
            <img style={{ width: "100%" }} src={Image} alt="" />
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident tempore consequuntur sapiente reiciendis consequatur
                similique et. Recusandae fugiat natus aperiam!
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: 1,
                alignItems: "center",
              }}
            >
              <Typography sx={{ fontSize: "0.75rem" }}>2</Typography>
              <Typography sx={{ fontSize: "0.75rem", fontWeight: 600 }}>
                X
              </Typography>
              <Typography sx={{ fontSize: "0.75rem" }}>221$</Typography>
              <Typography sx={{ fontSize: "0.75rem", fontWeight: 600 }}>
                =
              </Typography>
              <Typography sx={{ fontSize: "0.75rem" }}>442$</Typography>
            </Box>
          </Box>
          <IconSecondaryBtn
            Type={DeleteIcon}
            clickEvent={() => console.log("hello from delete")}
            danger={true}
          />
        </Box>
      </Box>
    </OverLayer>
  );
};

export default ShopCart;
