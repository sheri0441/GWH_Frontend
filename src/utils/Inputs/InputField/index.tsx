import { UseFormRegisterReturn } from "react-hook-form";
import style from "./index.module.css";

const InputField = ({
  error,
  register,
  label,
  isTextArea = false,
  isDisabled = false,
}: {
  error?: any;
  register: UseFormRegisterReturn;
  label: string;
  isTextArea?: boolean;
  isDisabled?: boolean;
}) => {
  return isTextArea ? (
    <textarea
      cols={30}
      rows={10}
      placeholder={label}
      className={
        error?.message ? `${style.inputField} ${style.error}` : style.inputField
      }
      {...register}
      aria-invalid={error ? "true" : "false"}
    ></textarea>
  ) : (
    <input
      placeholder={label}
      className={
        error?.message ? `${style.inputField} ${style.error}` : style.inputField
      }
      {...register}
      disabled={isDisabled}
      aria-invalid={error ? "true" : "false"}
    />
  );
};

export default InputField;
