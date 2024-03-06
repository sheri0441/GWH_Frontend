import { Category } from "./Category";

export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
  creationAt: string;
  updatedAt: string;
  category: Category;
}
