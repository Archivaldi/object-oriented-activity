function Shape(n, s) {
    this.name = n;
    this.sides = s;
};

function Rectangle(h,w, n, s) {
    this.heigth = h;
    this.width = w;
    Shape.call(this, n, s);
};

Rectangle.prototype = Object.create(Shape.prototype);

Rectangle.prototype.area = function(){
    console.log(this.heigth * this.width);
};

Rectangle.prototype.perimeter = function () {
    console.log(this.heigth * 2 + this.width * 2);
};

function Square(h,n,s){
    Rectangle.call(this, h, h,n,s)
}

Square.prototype = Object.create(Rectangle.prototype);