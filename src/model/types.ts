export interface IProduct {
    id?: string;
    name?: string;
    price?: string;
    link?: string;
    ratings?: number;
    stars?: number;
    images?: string[];
    description?: string;
    seller_id?: string;
    image_urls?: string[];
    category?: string;
}
export interface ProductsResponse {
    products: IProduct[]
}

export interface ProductDetailsResponse {
    product: IProduct;
}