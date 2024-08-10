import { ReactNode } from "react";

export type TRoute = {
  path: string;
  element: ReactNode;
};

export type Product = {
  _id?: string;
  name: string;
  price: number;
  description: string;
  available_quantity: number;
  brand: string;
  rating: number;
  image: string;
};

export type RowData = Product;
