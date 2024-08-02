import { ReactNode } from "react";

export type TProductsPath = {
  name: string;
  path: string;
  element: ReactNode;
};
export type TRoute = {
  path: string;
  element: ReactNode;
};

export type Product = {
  name: string;
  price: number;
  description: string;
  available_quantity: number;
  brand: string;
  rating: number;
  image: string;
};

export type RowData = {
  _id?: string;
  name: string;
  price: number;
  description: string;
  available_quantity: number;
  brand: string;
  rating: number;
  image: string;
};

export type cart = {
  cartItems: string[];
  cartTotalAmount: number;
  cartQuantity: number;
  imageUrl: string;
};
