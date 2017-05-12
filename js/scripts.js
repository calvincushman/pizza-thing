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

Order.prototype.newOrder = function() {
  var newOrder = new Order (pizzas, orderPrice)
};

Order.prototype.addPizza = function() {
  this.pizzas.append(newPizza);
};

Pizza.prototype.newPizza = function() {
  var newPizza = new Pizza (size, sauce, cheese, toppings, price)
};

Pizza.prototype.pizzaPrice = function() {
  this.price = 
}
