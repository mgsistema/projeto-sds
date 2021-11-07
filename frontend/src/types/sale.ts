import { Seller } from "./seller"

export type Sale = {
    id: number;
    visited: number;
    deals: number;
    amount: 5501.0,
    date: string;
    seller: Seller;
}

export type SalePage = {
    content?: Sale[];
    totalPages: number;
    totalElements: number;
    last: boolean;
    size?: number;
    number: number;
    first: boolean;
    numberOfElements?: number;
    empty?: boolean;
}

export type SaleSum = {
    sellerName: string;
    sum: number;
}

export type SaleSuccess = {
    sellerName: string;
    visited: number;
    deals: number;
}