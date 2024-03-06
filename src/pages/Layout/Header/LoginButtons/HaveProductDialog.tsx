import { Box, Dialog, DialogTitle } from "@mui/material";
import SecondaryBtn from "../../../../utils/buttons/SecondaryBtn";
import PrimaryBtn from "../../../../utils/buttons/PrimaryBtn";
import { updateCart } from "../../../../feature/loginSlice";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";

const HaveProductDialog = ({
  open,
  showDialogHandler,
}: {
  open: boolean;
  showDialogHandler: Function;
}) => {
  const cart = useAppSelector((store) => store.login.user.cart);
  const dispatch = useAppDispatch();

  const transferCartListToAccount = () => {
    dispatch(updateCart(cart));
    showDialogHandler(false);
    localStorage.removeItem("cart");
  };

  const closeDialogHandler = () => {
    showDialogHandler(false);
    localStorage.removeItem("cart");
  };

  return (
    <Dialog open={open} PaperProps={{ sx: { borderRadius: "0px" } }}>
      <DialogTitle sx={{ textAlign: "center" }}>
        You have products in your cart. Do you like to transfer them into your
        account.
      </DialogTitle>
      <Box
        sx={{
          display: "flex",
          maxWidth: "50%",
          marginInline: "auto",
          width: "100%",
          gap: "1rem",
          marginBottom: "1.5rem",
        }}
      >
        <PrimaryBtn clickEvent={transferCartListToAccount} padding="0.25rem">
          Yes
        </PrimaryBtn>
        <SecondaryBtn
          clickEvent={closeDialogHandler}
          padding="0.25rem"
          fullWidth={true}
        >
          No
        </SecondaryBtn>
      </Box>
    </Dialog>
  );
};

export default HaveProductDialog;
