import { ReactNode } from "react";
import style from "./index.module.css";
import { UseFormRegisterReturn } from "react-hook-form";

const index = ({
  children,
  id,
  register,
  disabled = false,
}: {
  children: ReactNode;
  id: string;
  register: UseFormRegisterReturn;
  disabled?: boolean;
}) => {
  return (
    <>
      <input
        type="radio"
        id={id}
        className={style.inputRadio}
        value={id}
        {...register}
        disabled={disabled}
      />
      <label htmlFor={id}>{children}</label>
    </>
  );
};

export default index;
