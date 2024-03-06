import { SvgIcon, Typography } from "@mui/material";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import OverLayerNote from "../../../utils/OverLayerNote";

const ErrorNote = () => {
  return (
    <OverLayerNote>
      <SvgIcon component={PriorityHighIcon} fontSize="medium" />
      <Typography
        sx={{
          fontWeight: 500,
          fontSize: "1.5rem",
        }}
      >
        There is some error in the backend. Please try later!
      </Typography>
    </OverLayerNote>
  );
};

export default ErrorNote;
