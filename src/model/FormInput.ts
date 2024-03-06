export interface formInputs {
  name: string;
  email: string;
  city: string;
  zip: string;
  area: string;
  address: string;
  shipping: "standard" | "express";
  payment: "cash" | "card";
  onlineMethod?: "payoneer" | "stripe";
  instructions: string;
}
