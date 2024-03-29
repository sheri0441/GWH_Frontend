import { zodResolver } from "@hookform/resolvers/zod";
import { Box, SvgIcon, Typography, useTheme } from "@mui/material";
import { useForm } from "react-hook-form";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import BoltIcon from "@mui/icons-material/Bolt";
import InputField from "../../utils/Inputs/InputField";
import InputRadio from "../../utils/Inputs/InputRadio";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import InputSubmit from "../../utils/Inputs/InputSubmit";
import { useEffect, useState } from "react";
import { formInputs } from "../../model/FormInput";
import { orderFormSchema } from "../../schema/OrderFormSchema";
import { useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setCartInfo, updateCart } from "../../feature/loginSlice";
import OverLayerNote from "../../utils/OverLayerNote";

const CheckOutForm = ({
  shippingCostHandler,
  isDisable = false,
  submitHandler,
}: {
  shippingCostHandler: Function;
  isDisable: boolean;
  submitHandler: Function;
}) => {
  const theme = useTheme();
  const isLogin = useAppSelector((store) => store.login.isLogin);
  const dispatch = useAppDispatch();
  const [isPayingWithCard, setIsPayingWithCard] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const status = queryParams.get("status");

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<formInputs>({
    resolver: zodResolver(orderFormSchema),
    defaultValues: {
      shipping: "standard",
      payment: "cash",
      onlineMethod: "stripe",
    },
  });

  const successNoteHandler = () => {
    setIsSuccess(true);

    setTimeout(() => {
      setIsSuccess(false);
    }, 5000);
  };

  const onSubmit = (data: formInputs) => {
    let formStructure: formInputs = {
      name: data.name,
      email: data.email,
      city: data.city,
      zip: data.zip,
      area: data.area,
      address: data.address,
      instructions: data.instructions,
      payment: data.payment,
      shipping: data.shipping,
    };

    if (formStructure.payment === "card") {
      formStructure["onlineMethod"] = data.onlineMethod;
    }

    submitHandler(formStructure, reset);
  };

  useEffect(() => {
    const subscription = watch((value) => {
      if (value.shipping === "express") {
        shippingCostHandler(20);
      } else {
        shippingCostHandler(0);
      }

      if (value.payment === "card") {
        setIsPayingWithCard(true);
      } else {
        setIsPayingWithCard(false);
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  useEffect(() => {
    if (status === "success") {
      reset();
      if (isLogin) {
        dispatch(updateCart([]));
      } else {
        dispatch(setCartInfo([]));
        localStorage.setItem("cart", JSON.stringify([]));
      }
      successNoteHandler();
    }
  }, [status]);

  return (
    <>
      <Box sx={{ marginTop: "1.5rem", gridColumn: { md: "3 / 4" } }}>
        {isSuccess && (
          <OverLayerNote>
            <Typography sx={{ fontWeight: "600", fontSize: "1.5rem" }}>
              Successfully submitted!
            </Typography>
          </OverLayerNote>
        )}
        <Typography
          component={"h2"}
          sx={{
            textAlign: "center",
            fontSize: "1.25rem",
            fontWeight: 600,
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.background.default,
            padding: "0.25rem",
          }}
        >
          Shipping Information
        </Typography>
        <Box
          component={"form"}
          sx={{
            display: "grid",
            gridTemplateColumns: { sm: "repeat(2, 1fr)", md: "1fr" },
            gap: "1rem",
            paddingTop: "1rem",
          }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1rem",
              width: "100%",
              gridColumn: { sm: "1 / 2", md: "auto" },
              gridRow: { sm: "1 / 3", md: "auto" },
            }}
          >
            <InputField
              error={errors.name}
              register={register("name")}
              label="name"
            />
            <InputField
              error={errors.email}
              register={register("email")}
              label="email"
            />
            <InputField
              error={errors.city}
              register={register("city")}
              label="City"
            />
            <InputField
              error={errors.zip}
              register={register("zip")}
              label="Zip Code"
            />
            <InputField
              error={errors.area}
              register={register("area")}
              label="area"
            />
            <InputField
              error={errors.address}
              register={register("address")}
              label="address"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              gridColumn: { sm: "2 / 3", md: "auto" },
            }}
          >
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: "1.25rem",
                marginBottom: { xs: "1rem" },
              }}
            >
              Shipping Options
            </Typography>
            <Box sx={{ width: "100%", maxWidth: "380px" }}>
              <InputRadio id="standard" register={register("shipping")}>
                <SvgIcon component={LocalShippingIcon} /> Standard
                <strong>+0$</strong>
              </InputRadio>
              <Typography
                component={"span"}
                sx={{
                  padding: "0",
                  opacity: "0.75",
                  fontSize: "0.75rem",
                  margin: "0",
                }}
              >
                Deliver under 7 working days.
              </Typography>
            </Box>
            <Box
              sx={{ width: "100%", maxWidth: "380px", marginTop: "0.75rem" }}
            >
              <InputRadio id="express" register={register("shipping")}>
                <SvgIcon component={BoltIcon} /> Express <strong>+20$</strong>
              </InputRadio>

              <Typography
                component={"span"}
                sx={{
                  padding: "0",
                  opacity: "0.75",
                  fontSize: "0.75rem",
                  margin: "0",
                }}
              >
                Deliver under 3 working days.
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              gridColumn: { sm: "2 / 3", md: "auto" },
              gap: "1rem",
            }}
          >
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: "1.25rem",
              }}
            >
              Payment Options
            </Typography>
            <Box sx={{ width: "100%", maxWidth: "380px" }}>
              <InputRadio id="cash" register={register("payment")}>
                <SvgIcon component={LocalAtmIcon} /> Cash on Delivery
              </InputRadio>
            </Box>
            <Box sx={{ width: "100%", maxWidth: "380px" }}>
              <InputRadio id="card" register={register("payment")}>
                <SvgIcon component={CreditCardIcon} /> Debit/Credit Card
              </InputRadio>
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              maxWidth: "380px",
              gridRow: { sm: "3 / 4", md: "auto" },
              marginInline: "auto",
            }}
          >
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: "1.25rem",
                marginBottom: { xs: "1rem" },
                textAlign: "center",
              }}
            >
              Any Instruction (optional)
            </Typography>
            <InputField
              error={undefined}
              register={register("instructions")}
              label={"Instructions"}
              isTextArea={true}
            />
            {isPayingWithCard && (
              <Box
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.background.default,
                  padding: "0.5rem",
                  marginBottom: "1rem",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "600",
                  }}
                >
                  Please enter following card details.
                </Typography>
                <Typography>Card Number: 4242424242424242</Typography>
                <Typography>
                  Expiry Date: {new Date().getMonth() + 2}/
                  {new Date().getFullYear() + 1}
                </Typography>
                <Typography>CVS: 123</Typography>
              </Box>
            )}
            <InputSubmit isDisable={isDisable} value="confirm" />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CheckOutForm;
