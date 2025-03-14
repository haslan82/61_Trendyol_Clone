interface Rating{
count:number;
rate:number;
}

interface Product{
    id:number;
    title:string;
    price:number;
    description:string;
    category:string;
    image:string;
    rating:Rating;
    isFavorite:boolean;
    quantity:0;

}


interface ProductsState{
    products:Product[];
    bestSellerProducts:Product[];
    popularProducts:Product[];
    product:Product;
    pending:boolean;
    error:any;
    

}


interface Params {
    id: number;
  }
 /*  interface rating {
   
      count: number;
      rate: number;
    };
   */

export type {ProductsState, Product, Params,Rating} 