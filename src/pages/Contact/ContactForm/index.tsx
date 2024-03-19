import { useEffect, useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { red } from "@mui/material/colors";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import axios from "axios";
import { z } from "zod";
import bodyOverflowHandler from "../../../utils/bodyOverflowHandler";
import InputField from "../../../utils/Inputs/InputField";
import InputSubmit from "../../../utils/Inputs/InputSubmit";
import ThankNote from "./ThankNote";
import ErrorNote from "./ErrorNote";

interface formInputs {
  name: string;
  email: string;
  message: string;
}

const schema = z
  .object({
    name: z
      .string({
        required_error: "Name is required",
        invalid_type_error: "Name must be a string",
      })
      .min(3),

    email: z.string().email({ message: "Invalid email address" }),
    message: z.string().trim().min(10),
  })
  .required();

const ContactForm = () => {
  const theme = useTheme();
  const [showThankNote, setShowThankNote] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<formInputs>({
    resolver: zodResolver(schema),
  });

  const thankYouNoteHandler = () => {
    setShowThankNote((showThankNote) => !showThankNote);
  };

  const errorNoteHandler = () => {
    setHasError((hasError) => !hasError);
  };

  const submitMessage = async (data: formInputs) => {
    try {
      const response = await axios({
        url: import.meta.env.VITE_API_URL + "/contact",
        method: "POST",
        data: data,
      });

      if (response?.status === 200) {
        thankYouNoteHandler();
        setTimeout(() => {
          thankYouNoteHandler();
        }, 5000);
        reset();
        return;
      } else {
        errorNoteHandler();
        setTimeout(() => {
          errorNoteHandler();
        }, 5000);
        return;
      }
    } catch (error) {
      console.log(error);

      errorNoteHandler();
      setTimeout(() => {
        errorNoteHandler();
      }, 5000);
    }
  };

  const onSubmit = (data: formInputs) => {
    submitMessage(data);
  };

  useEffect(() => {
    bodyOverflowHandler(showThankNote || hasError);
  }, [showThankNote, hasError]);

  return (
    <>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: { sm: "1.5rem", md: "2rem" },
        }}
      >
        Get In Touch
      </Typography>
      <Box
        component={"form"}
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "380px",
          marginInline: "auto",
          gap: { xs: "1rem", md: "1.5rem" },
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <InputField
          label="Your Name"
          error={errors?.name}
          register={register("name")}
        />
        <InputField
          label="email"
          error={errors?.email}
          register={register("email")}
        />
        <InputField
          error={errors.message}
          register={register("message")}
          label="message"
          isTextArea={true}
        />
        {errors && (
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            {Object.keys(errors).map((error: string) => {
              const fieldError = errors as Record<string, { message: string }>;
              return (
                <Typography
                  key={error}
                  sx={{
                    backgroundColor: red[500],
                    color: theme.palette.background.default,
                    padding: "0.5rem",
                  }}
                >
                  {String(fieldError[error]?.message)}
                </Typography>
              );
            })}
          </Box>
        )}
        <InputSubmit value="send message" />
      </Box>
      {showThankNote && <ThankNote />}
      {hasError && <ErrorNote />}
    </>
  );
};

export default ContactForm;
