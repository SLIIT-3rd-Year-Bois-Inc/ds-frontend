export interface IProduct {
    _id?: string;
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

export interface ISeller {
    _id?: string;
    name?: string;
    email?: string;
    store_name?: string;
    address?: string;
    rating?: string;
}