class Rectangle {
    width:number;
    heigth:number;

    constructor(width :number , height :number){
        this.width = width;
        this.heigth = height;
    }

    getArea():number{
        return this.width * this.heigth;
    }
    getPerimeter():number{
        return 2*(this.width + this.heigth);
    }
}

const rect = new Rectangle(10,20);