class Product {
    constructor(id,name,price){
        this.id=id;
        this.name=name;
        this.price=price;
    }
}
class Card_item {
    constructor(product,quantity){
        if (!(product instanceof Product)) {
            throw new Error('Invalid product');
        }
       
        this.product=product;
        this.quantity=quantity;
    }
    totalPrice(){return ` ${this.quantity * this.product.price}`}
}
class ShoppingCard {
    
    constructor(){
       
        this.items=[];
    }
    TotalItems(){return `there is ${this.items.length} items in this Card`}
    addCard(cart_item){return this.items.push(cart_item)}
    removeCard(cart_item){
        this.items=this.items.filter(i=>{return i.product.id != cart_item.product.id})
    }
    DisplayItems(i){console.log(i);}
}

var product1 = new Product('001','product_1','45£');
var product2 = new Product('002','product_2','50£');
var product3 = new Product('003','product_3','55£');

var item1=new Card_item(product1,7);
var item2=new Card_item(product2,5);
var item3=new Card_item(product3,2);

var cart_global = new ShoppingCard();


cart_global.addCard(item1);
cart_global.addCard(item2);
cart_global.addCard(item3);

console.log(cart_global.TotalItems());
//cart_global.removeCard(item3);


cart_global.DisplayItems(cart_global.items);

console.log(`total price of item2 is : ${item1.totalPrice()}`);