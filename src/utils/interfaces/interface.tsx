import { ReactElement } from "react";

export interface DataType {
  avatar?: ReactElement;
  name?: string;
  email?: string;
  gender?: string;
  role?: string;
  user?: string;
  amount?: number;
  discount?: number;
  quantity?: number;
  status?: ReactElement;
  photo?: ReactElement;
  price?: number;
  stock?: number;
  action: ReactElement;
}
