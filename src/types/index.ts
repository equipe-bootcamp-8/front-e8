export interface Product {
  id?: string;
  code: number;
  name: string;
  description: string;
  price: number;
  image: string;
  available: boolean;
  categoryName: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Category {
  id?: string;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
}