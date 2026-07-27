// Real Subject: representa el servicio al que el Proxy controla el acceso.
export default class UserApi {
    constructor() {
        this.requestCount = 0;
    }

    async getUser(id) {
        this.requestCount++;

        return {
            id,
            name: "QA User",
            role: "tester"
        };
    }
}
