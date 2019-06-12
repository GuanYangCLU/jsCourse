function Shape() {
  this.name = 'Shape';
  this.toString1 = function() {
    return this.name;
  };
}

function TwoDShape() {
  this.name = '2D shape';
  this.toString2 = function() {
    return this.name + ' in toString2';
  };
}

function Triangle(side, height) {
  this.name = 'Triangle';
  this.side = side;
  this.height = height;
}

TwoDShape.prototype = new Shape();
Triangle.prototype = new TwoDShape();

Triangle.prototype.getArea = function() {
  return (this.side * this.height) / 2;
};

/*
Triangle.prototype = {
		getArea: function () {
			return this.side * this.height / 2;
		}
};
*/

// 2. creating object matters

var my = new Triangle(5, 10);
console.log(my.constructor);
