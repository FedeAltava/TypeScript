interface Product{
    id: number | string;
    name: string;
    price: number;
    category: "electronics" | "clothing" | "food";
    inStock?: boolean;
}

class ProductManager{
    private products :Product[];
    contructor(products:Product[]){
        this.products = products;
    }
    addPrducts(product:Product):void{
        if(product.price > 0)
            this.products.push(product)
    }
}

