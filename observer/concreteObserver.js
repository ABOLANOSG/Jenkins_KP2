import Observer from "./observer.js";

export class EmailNotifier extends Observer {
    constructor() {
        super();
        this.messages = [];
    }

    update(event, data) {
        let message;

        if (event === "Price update") {
            message = `Email: Your product ${data.product} dropped from ${data.oldPrice} to ${data.newPrice}`;
        }

        if (event === "Restocked") {
            message = `Email: Your product ${data.product} is available again. Stock: ${data.stock}`;
        }

        if (message) {
            this.messages.push(message);
            console.log(message);
        }
    }
}

export class SMSNotifier extends Observer {
    constructor() {
        super();
        this.messages = [];
    }

    update(event, data) {
        if (evento === "reabastecido") {
            const mensaje =
                `SMS: ${datos.producto} disponible ahora`;

            this.mensajes.push(mensaje);
            console.log(mensaje);
        }
    }
}

export class AnaliticsLogger extends Observer {
    constructor() {
        super();
        this.eventos = [];
    }

    update(event, data) {
        this.eventos.push({
            evento,
            data
        });

        console.log(`Analitics: Registered event -> ${event}`, data);
    }
}