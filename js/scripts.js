//business logic/////////////

// constructors
function Order(pizzas, orderPrice) {
  this.pizzas = [];
  this.orderPrice = orderPrice;
};


function Pizza(size, sauce, crust, cheese, toppings) {
  this.size = size;
  this.sauce = sauce;
  this.crust = crust;
  this.cheese = cheese;
  this.toppings = toppings;
};

//prototypes

Order.prototype.orderPrice = function() {
  return this.orderPrice + newPizza.price
};

Pizza.prototype.pizzaPrice = function() {
  return this.size + this.cheese.length + this.toppings.length
};
//user interface////////////

$(function(){

  $("form#addPizza").submit(function(event) {
    event.preventDefault();

    //grab inputs from form
    var size = parseInt($("#sizeSelection").val());

    var sauce = $("#sauceSelection").val();

    var crust = $("#crustSelection").val();

    var cheese = []; $("input:checkbox[name=cheese]:checked").each(function() {
      var selectedCheese = $(this).val();
      cheese.push(selectedCheese);
    });

    var toppings = []; $("input:checkbox[name=toppings]:checked").each(function() {
      var selectedTopping = $(this).val();
      toppings.push(selectedTopping);
    });

    var newPizza = new Pizza(size, sauce, crust, cheese, toppings);

    var price = newPizza.pizzaPrice();

    var newOrder = new Order
    $("ul").append("<li>" + "Size: " + size + " inches" + "<br>" + "Crust: " + crust + "<br>" + "Sauce: " + sauce + "<br>" + "Cheese: " + cheese + "<br>" + "Toppings: " + toppings + "<br>" + "Price: $" + price + "<br>" + "<br>" + "</li>");
  });
});
