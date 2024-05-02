// In this example we are gonna create a shop, this shop sells items, but this shop is located in Colombia, so it only handles prices in COP
// In the case we want to sell a foreign item, for example, Indian tea, we are gonna use an adapter to "adapt" the foreign product to a Colombian one

export class CoffeShop {
  sellItem(item: Item) {
    item.sell();
  }
}

export class Item {
  public currency: string = "COP"
  public price: number
  
  constructor(price: number) {
    this.price = price;
  }

  sell() {
    console.log(`Selling product in $${this.price} COP`)
  }
}

export class IndianProduct {
  public currency: string = "INR"
  public price: number

  constructor(price: number) {
    this.price = price;
  }

}

export class IndianProductAdapter extends Item {
  
  constructor(indianProduct: IndianProduct) {
    super(indianProduct.price);
    this.convertCurrency(indianProduct.price)
  }

  private convertCurrency(amount: number) {
    this.price = amount*5;
  }
}