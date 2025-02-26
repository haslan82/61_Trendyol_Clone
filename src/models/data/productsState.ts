interface Product{
    id:number;
    title:string;
    price:string;
    description:string;
    category:string;
    image:string;

}
interface ProductsState{
    products:Product[];

}

export type {ProductsState}