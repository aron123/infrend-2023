export interface CategoryDTO {
    id: number;
    title: string;
}

export interface UserDTO {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
}

export interface ProductDTO {
    id: number;
    title: string;
    description: string;
    price: number;
    imgUrl: string;
    brand: string;
    categories: CategoryDTO[];
    seller: UserDTO;
}
