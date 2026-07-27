// Proxy: conserva la interfaz de UserApi y añade autorización y caché.
export default class UserApiProxy {
    constructor(userApi, token) {
        this.userApi = userApi;
        this.token = token;
        this.cache = new Map();
    }

    async getUser(id) {
        if (!this.token) {
            throw new Error("Unauthorized request");
        }

        if (this.cache.has(id)) {
            return this.cache.get(id);
        }

        const user = await this.userApi.getUser(id);
        this.cache.set(id, user);

        return user;
    }
}
