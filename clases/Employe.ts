interface Product{
    id: number | string;
    name: string;
    price: number;
    category: "electronics" | "clothing" | "food";
    inStock?: boolean;
}

class ProductManager{
    protected products :Product[];
    constructor(products:Product[]){
        this.products = products;
    }
    addProduct(product:Product):void{
        if(product.price > 0)
            this.products.push(product)
    }
    listProducts():void{
        this.products.forEach((elem)=>{
            console.log(elem);
        })
    }
    findProduct(idProduct:number | string): Product | undefined{
       return  this.products.find((product) => product.id === idProduct);
    }
    filterProductsByCategory(category:string):Product[]{
        const filteredProducts = this.products.filter((product)=>{
            return product.category === category;
        })
        return filteredProducts;
    }
}

 class DiscounterProductManager extends ProductManager{

    applyDiscount(discount:number,idProduct:number |string): string{
        if(discount > 1 || discount <= 0){
            return "Error el descuento debe ser menor a 1 y mayor que 0";
        }
        const product = this.products.find((product)=>product.id === idProduct);
        if(!product){
            return "producto no encontrado";
        }
        const newprice = product.price * (1-discount);
        product.price = newprice;

        return `El nuevo precio es ${newprice}`;
    }

 }


