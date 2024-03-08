import {
  Box,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import InputField from "../../utils/Inputs/InputField";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import InputSubmit from "../../utils/Inputs/InputSubmit";
import axios from "axios";
import { useState } from "react";
import LoadingAnimation from "../../utils/LoadingAnimation";

interface Track {
  order: string;
}

interface Order {
  orderId: string;
  price: number;
  status: string;
}

const TrackOrderPage = () => {
  const [order, setOrder] = useState<Order>({
    orderId: "",
    price: 0,
    status: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [notFound, setNotFound] = useState<boolean>(false);
  const [showResult, setShowResult] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm<Track>({
    resolver: zodResolver(
      z.object({
        order: z
          .string({
            required_error: "Name is required",
            invalid_type_error: "Name must be a string",
          })
          .min(3),
      })
    ),
  });

  const getOrderDetail = async (orderNumber: string) => {
    setShowResult(false);
    setIsLoading(true);
    setNotFound(false);
    try {
      const response = await axios.get(
        import.meta.env.VITE_API_URL + `/order/${orderNumber}`
      );

      if (response.status === 200) {
        setOrder({
          orderId: orderNumber,
          status: response.data.status,
          price: response.data.total,
        });
        setShowResult(true);
      } else {
        setNotFound(true);
      }
    } catch (error) {
      setNotFound(true);
    }
    setIsLoading(false);
  };

  const onSubmit = (data: { order: string }) => {
    getOrderDetail(data.order);
    reset();
  };

  return (
    <Container maxWidth="sm" sx={{ minHeight: "100vh" }}>
      <Box sx={{ paddingTop: "6.5rem", paddingBottom: "6.5rem" }}>
        <Typography
          sx={{
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
            textAlign: "center",
            fontWeight: "600",
          }}
          component={"h1"}
        >
          Track Order
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            marginTop: "2rem",
          }}
        >
          <Box
            component={"form"}
            sx={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              alignItems: "center",
            }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <InputField label="Tracking Number" register={register("order")} />
            <Box>
              <InputSubmit value="search" />
            </Box>
          </Box>
          {!isLoading && !notFound && showResult && (
            <TableContainer component={Paper}>
              <Table size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    <TableCell>Order ID</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableCell component="th" scope="row">
                    {order.orderId}
                  </TableCell>
                  <TableCell align="right">{order.price}$</TableCell>
                  <TableCell align="right">{order.status}</TableCell>
                </TableBody>
              </Table>
            </TableContainer>
          )}
          {!isLoading && notFound && (
            <Typography sx={{ textAlign: "center", fontSize: "1.25rem" }}>
              Not able to find order please try again later.
            </Typography>
          )}
          {isLoading && (
            <Box sx={{ maxWidth: "100px", marginInline: "auto" }}>
              <LoadingAnimation />
            </Box>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default TrackOrderPage;
