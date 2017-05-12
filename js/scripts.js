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

Pizza.prototype.pizzaPrice = function(price) {
  var price = sizePrice + cheesePrice + toppingsPrice
};

//user interface////////////

$(function(){

  $("form#addPizza").submit(function(event) { debugger;
    event.preventDefault();

    //grab inputs from form
    var size = $("#sizeSelection").val();

    var sizePrice = parseInt(size);

    var sauce = $("#sauceSelection").val();

    var crust = $("#crustSelection").val();

    var cheese = []; $("input:checkbox[name=cheese]:checked").each(function() {
      var selectedCheese = $(this).val();
      cheese.push(selectedCheese);
    });

    var cheesePrice = parseInt(cheese.length);

    var toppings = []; $("input:checkbox[name=toppings]:checked").each(function() {
      var selectedTopping = $(this).val();
      toppings.push(selectedTopping);
    });

    var toppingsPrice = parseInt(toppings.length);

    var newPizza = new Pizza(size, sauce, crust, cheese, toppings, price);

    var price = newPizza.pizzaPrice(sizePrice, cheesePrice, toppingsPrice);

    $("ul").append("<li>" + "Size: " + size + " inches" + "<br>" + "Crust: " + crust + "<br>" + "Sauce: " + sauce + "<br>" + "Cheese: " + cheese + "<br>" + "Toppings: " + toppings + "<br>" + "Price: $" + price + "<br>" + "<br>" + "</li>");
  });
});
