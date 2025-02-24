interface Product{
    id: number | string;
    name: string;
    price: number;
    category: "electronics" | "clothing" | "food";
    inStock?: boolean;
}

class ProductManager{
    private products :Product[];
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
}

