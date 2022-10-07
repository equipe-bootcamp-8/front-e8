export interface Product {
    id?: string;
    name: string;
    description: string;
    price: number;
    image: string;
    categoryId: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface Category {
  id?: string;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
}