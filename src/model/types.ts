export interface IProduct {
    name?: string;
    price?: string;
    link?: string;
    ratings?: number;
    stars?: number;
    images?: string[]
}
export interface ProductsResponse {
    products: IProduct[]
}

export interface ProductDetailsResponse {
    product: IProduct;
}