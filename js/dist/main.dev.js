"use strict";

document.querySelector('button').addEventListener('click', getthaiGroceryBrand);

function getthaiGroceryBrand() {
  var groceryBrand, res, data;
  return regeneratorRuntime.async(function getthaiGroceryBrand$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          groceryBrand = document.querySelector('input').value;
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(fetch("https://thai-grocery-api.herokuapp.com/api/thai-grocery-product/".concat(groceryBrand)));

        case 4:
          res = _context.sent;
          _context.next = 7;
          return regeneratorRuntime.awrap(res.json());

        case 7:
          data = _context.sent;
          console.log(data);
          document.querySelector('h2').innerText = data.brand;
          _context.next = 15;
          break;

        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](1);
          console.log(_context.t0);

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 12]]);
}