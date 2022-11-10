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

export interface Users {
  name?: string;
  email?: string;
  image?:string;
  createdAt?: Date;
  updatedAt?: Date;
}


export interface Members {  
  id?: string;
  name: string;
  stack: string;
  bio: string;
  role?: string;
  github: string;
  linkedin: string;
  image: string;
}

