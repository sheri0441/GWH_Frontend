interface OrderItem {
  productId: string;
  quantity: number;
}

export interface Order {
  email: string;
  name: string;
  city: string;
  zipCode: string;
  area: string;
  address: string;
  shipping: "standard" | "express";
  payment: "cash" | "card";
  onlineMethods?: "payoneer" | "stripe";
  instruction?: string;
  cartItem: OrderItem[];
}
