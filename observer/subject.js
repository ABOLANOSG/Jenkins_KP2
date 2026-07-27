export default class ProductSubject {
    constructor(name, price, stock) {
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.observers = []
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    unsuscribe(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notify(observer, data) {
        this.observers.forEach(observer => observer.update(event, data));
    }

    changePrice(newPrice) {
        const oldPrice = this.price;
        this.price = newPrice;
        this.notify('Price has changed', {
            product: this.name,
            oldPrice,
            newPrice: newPrice
        });
    }

    updateStock(newStock) {
        const oldStock = this.stock;
        this.stock = newStock;

        if (oldStock === 0 && newStock > 0) {
            this.notify('restocked', {
                product: this.name,
                stock: newStock
            });
        }
    }

}
