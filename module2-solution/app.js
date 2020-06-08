(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuyList = this;

  toBuyList.items = ShoppingListCheckOffService.getToBuyList();

  toBuyList.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex,toBuyList.items[itemIndex].name, toBuyList.items[itemIndex].quantity);
    toBuyList.everythingBought = ShoppingListCheckOffService.isEverythingBought();
  }

  toBuyList.everythingBought = ShoppingListCheckOffService.isEverythingBought();
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtList = this;

  boughtList.alreadyBoughtItem = ShoppingListCheckOffService.getAlreadyBoughtList();
  boughtList.nothingBoughtYet = ShoppingListCheckOffService.isNothingBoughtYet();


  console.log("boughtList.nothingBoughtYet: " + boughtList.nothingBoughtYet);

}

function ShoppingListCheckOffService() {
  var service = this;

  var toBuyList = [{name: "Patate", quantity: 10},{name: "Carciofi", quantity: 5},{name: "Mele", quantity: 20},{name: "Pere", quantity: 13},{name: "Asparagi", quantity: 22}];
  var alreadyBoughtList = [];

  service.getToBuyList = function () {
    return toBuyList;
  };

  service.getAlreadyBoughtList = function () {
    return alreadyBoughtList;
  };

  service.buyItem = function (itemIndex, itemName, itemQuantity) {
    var item = {name: itemName, quantity: itemQuantity};
    alreadyBoughtList.push(item);
    toBuyList.splice(itemIndex, 1);
  };

  service.isNothingBoughtYet = function() {
    if (alreadyBoughtList.length > 0) {
     return "";
   } else {
     return "Nothing bought yet!";
     }
  };

  service.isEverythingBought = function () {
    if (toBuyList.length > 0) {
     return "";
   } else {
     return "Everything is bought!";
     }
  };
}
})();
