export interface IProduct {
    name?: string;
    price?: string;
    link?: string;
    ratings?: number;
    stars?: number;
}
export interface ProductsResponse {
    products: IProduct[]
}