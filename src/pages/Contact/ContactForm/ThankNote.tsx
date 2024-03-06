import { SvgIcon, Typography } from "@mui/material";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import OverLayerNote from "../../../utils/OverLayerNote";

const ThankNote = () => {
  return (
    <OverLayerNote>
      <SvgIcon component={DoneOutlineIcon} fontSize="medium" />
      <Typography
        sx={{
          fontWeight: 500,
          fontSize: "1.5rem",
        }}
      >
        Thanks for getting in touch with us.
      </Typography>
    </OverLayerNote>
  );
};

export default ThankNote;
