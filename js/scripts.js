//business logic/////////////

// constructors
function Order(pizzas, orderPrice) {
  this.pizzas = [];
  this.orderPrice = orderPrice;
}


function Pizza(size, sauce, crust, cheese, toppings, price) {
  this.size = size;
  this.sauce = sauce;
  this.crust = crust;
  this.cheese = [];
  this.toppings = [];
  this.price = price;
}

//prototypes

Order.prototype.newOrder = function() {
  var newOrder = new Order (pizzas, 0)
};

Order.prototype.addPizza = function(newPizza) {
  this.pizzas.append(newPizza);
};

Order.prototype.orderPrice = function() {
  this.orderPrice += newPizza.price
};

Pizza.prototype.newPizza = function() {
  var newPizza = new Pizza (size, sauce, cheese, toppings, 0)
};

Pizza.prototype.pizzaPrice = function() {
  this.price = size += sauce += cheese += toppings
};

//user interface////////////

$(function(){
  // make objects newOrder & newPizza
  var newOrder = newOrder.newOrder();
  var newPizza = newPizza.newPizza();

  $("form#addPizza").submit(function(event) {
    event.preventDefault();

    //grab inputs from form
    var size = $("#sizeSelection").val();

    var sauce = $("input:radio[sauce=sauce]:checked").val();

    var crust = $("input:radio[crust=crust]:checked").val();

    var cheese = []; $("input:checkbox[name=cheese]:checked").each(function() {
      var selectedCheese = $(this).val();
      cheese.push(selectedCheese);
    });

    var toppings = []; $("input:checkbox[name=toppings]:checked").each(function() {
      var selectedTopping = $(this).val();
      toppings.push(selectedTopping);
    });

    newPizza = (size, sauce, crust, cheese, toppings);

  });
});
