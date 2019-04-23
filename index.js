const Cart = require('./Cart');

function ShopCart() {
    this.items = [];
}
ShopCart.prototype = new Cart;

// ...your code there

Cart.prototype.remove = function (item) {
    const index = this.getItemIndex(item);
    this.items.splice(index,1);
}

Cart.prototype.clear = function () {
    
    delete this.items;
    
    //let len = this.items.length;
    //for (let i = 0; i<len; i++) {
      //  delete this.items[i];
    //}
}

Cart.prototype.setCount = function (item, count) {
    const index = this.getItemIndex(item);
    if ((count) <= 0) {
        throw 'Count should be greater than zero';
    } else {
        this.items[index].count = count;
    }
}

Cart.prototype.toString = function () {
    let sum = 0;
    for (let i=0; i<this.items.length; i++) {
        sum = sum + this.items[i].count;
        };
    return 'In your cart ' + sum + ' items';
}

    module.exports = ShopCart;
