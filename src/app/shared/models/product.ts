import { Category } from "./category";

export interface Product {
    id: string;
    img: string;
    categoryId: string;
    category: Category;
    description: string;
    inStock: number;
    price: number;
}
