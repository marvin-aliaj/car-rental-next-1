/* eslint-disable no-unused-vars */

declare type SearchParamProps = {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
declare type Location = {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  isAirport: boolean;
};
// ========================================

declare type Car = {
  id: string;
  brand: string;
  model: string;
  year: number;
  type: string;
  transmission: string;
  engine: string;
  fuelType: string;
  seats: number;
  bags: number;
  lkm: string;
  pricePerDay: number;
  available: boolean;
  features: string;
  imageUrl: string;
  locationId: number;
  description: string;
  category: string;
  location: string;
};

declare type Review = {
  id: string;
  userId: string;
  carId: string;
  rating: number;
  comment: string;
  createdAt: string;
};

declare type Currency = {
  code: string;
  symbol: string;
};

declare type Account = {
  id: number;
  accountNumber: string;
  balance: number;
  name: string;
  description: string;
  color: string;
  currency: Currency;
};

declare type Transaction = {
  id: number;
  $id: string;
  name: string;
  paymentChannel: string;
  type: string;
  status: string;
  accountId: string;
  amount: number;
  pending: boolean;
  category: string;
  cDate: string;
  image: string;
  $createdAt: string;
  channel: string;
  senderAccount: Account;
  receiverAccount: Account;
  currency: Currency;
};

declare module "react-helmet";
