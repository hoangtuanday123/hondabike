export interface PercentSale {
  type: "percent";
  percent: number;
}

export interface FixedSale {
  amount: number;
  type: "fixed";
}

export type Sale = PercentSale | FixedSale;

export interface Option {
  id: string;
  label?: string;
  priceChange?: Sale;
}

export interface BaseVariant {
  id: string;
  label?: string;
  options: Option[];
}

export interface SingleOptionVariant extends BaseVariant {
  type: "single";
  default?: string;
}

export interface MultipleOptionVariant extends BaseVariant {
  type: "multiple";
  default?: string[];
}

export type Variant = SingleOptionVariant | MultipleOptionVariant;

export interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  categoryId: string[];
  description?: string;
  sale?: Sale;
  variants?: Variant[];
}


export interface Bike {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
  promotion:string
  
}

export interface News {
  id: number;
  title: string;
  image: string;
  description: string;
  create_date:string
  
}

export interface Branch {
  id: number;
  name: string;
  image: string;
  address: string;
}

export interface Service {
  id: number;
  name: string;
  price: number;
  image: string;
  detail: string;
}
export interface Bookingtime {
  id: number;
  service: string;
  price: number;
  image: string;
  time: string;
  status:string
}

export interface Information {
  id: number;
  fullname: string;
  phone: string;
  email: string;
  dob: string;
  sex:string
}

