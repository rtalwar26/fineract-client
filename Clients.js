"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Clients {
    constructor(fineract_obj) {
        this.fineract_obj = fineract_obj;
    }
    async list_clients() {
        let client_config = {};
        let path = 'clients';
        let response;
        response = await this.fineract_obj.get(path, client_config);
        return response.data;
    }
    async create_clients(client_create_config) {
        let path = 'clients';
        let response = await this.fineract_obj.post(path, client_create_config);
        return response.data;
    }
    async client_login(client_login_config) {
        let mobile_no = client_login_config.mobileNo;
        let path = `search?exactMatch=false&query=${mobile_no}&resource=clients,clientIdentifiers`;
        let response = await this.fineract_obj.get(path, client_login_config);
        return response.data;
    }
}
exports.default = Clients;
