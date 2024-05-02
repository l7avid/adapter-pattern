import { CoffeShop, IndianProduct, IndianProductAdapter, Item } from './adapter-pattern';

const shop = new CoffeShop()
const product = new Item(10000);
shop.sellItem(product);

// Untill now everything is ok, but if we want to sell an Indian product we are gonna have an error
const indianProduct = new IndianProduct(20000);
//shop.buyItem(indianProduct); --> Error

//So we have to "adapt" the Indian product to a Colombian one
const adapter = new IndianProductAdapter(indianProduct);
shop.sellItem(adapter); //Now we are able to sell an item with the correct currency