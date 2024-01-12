import { SvgIcon } from "@mui/material";
import SecondaryBtn from "./SecondaryBtn";

interface Props {
  Type: any;
  clickEvent: Function;
  onlySmall?: boolean;
}

const IconSecondaryBtn = ({ Type, clickEvent, onlySmall = false }: Props) => {
  return (
    <SecondaryBtn
      padding="0.5rem 0.5rem"
      clickEvent={clickEvent}
      onlySmall={onlySmall}
    >
      <SvgIcon component={Type} fontSize="small" />
    </SecondaryBtn>
  );
};

export default IconSecondaryBtn;
