import { SvgIcon } from "@mui/material";
import SecondaryBtn from "./SecondaryBtn";

interface Props {
  Type: any;
  clickEvent: Function;
  onlySmall?: boolean;
  danger?: boolean;
}

const IconSecondaryBtn = ({
  Type,
  clickEvent,
  onlySmall = false,
  danger = false,
}: Props) => {
  return (
    <SecondaryBtn
      padding="1.125rem"
      clickEvent={clickEvent}
      onlySmall={onlySmall}
      danger={danger}
    >
      <SvgIcon
        component={Type}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        fontSize="small"
      />
    </SecondaryBtn>
  );
};

export default IconSecondaryBtn;
