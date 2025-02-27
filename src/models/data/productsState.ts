interface Product{
    id:number;
    title:string;
    price:number;
    description:string;
    category:string;
    image:string;

}
interface ProductsState{
    products:Product[];
    deneme:string;

}

export type {ProductsState}