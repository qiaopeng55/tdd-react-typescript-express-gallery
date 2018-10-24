export interface Product {
  id: number;
  price: string;
  product_name: string;
  description: string;
  product_image: string;
}

export interface ProductAction<T> {
  type: string;
  payload?: T;
}
