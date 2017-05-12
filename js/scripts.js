// constructors
function Order(pizzas, orderPrice) {
  this.pizzas = [];
  this.orderPrice = orderPrice;
}


function Pizza(size, sauce, cheese, toppings, price) {
  this.size = size;
  this.sauce = sauce;
  this.cheese = [];
  this.toppings = [];
  this.price = price;
}
