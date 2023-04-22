export interface ProductDTO {
    id: number;
    title: string;
    description: string;
    price: number;
    imgUrl: string;
    brand: string;
    user: UserDTO | null;
}

export interface UserDTO {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
}