import style from "./index.module.css";

const InputSubmit = ({
  isDisable = false,
  value,
}: {
  isDisable?: boolean;
  value: string;
}) => {
  return (
    <input
      disabled={isDisable}
      type="submit"
      className={style.submitBtn}
      value={value}
    />
  );
};

export default InputSubmit;
