interface Iproduct{
    readonly name:string;
    price:number;
}
let product:Iproduct={
    name:"TV",
    price:15425
}
//product.name="samsung Tv";
product.price=5455452;
console.log(product.price);
