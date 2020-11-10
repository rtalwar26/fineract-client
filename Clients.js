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
    async search_client_by_mobile_no(mobile_no) {
        let search_query_obj = {
            exactMatch: "false",
            query: mobile_no,
            resource: "clients,clientIdentifiers",
        };
        let path = 'search';
        let response = await this.fineract_obj.get(path, search_query_obj);
        return response.data;
    }
    async create_datatable(datatable_create_config) {
        let path = 'datatables';
        let response = await this.fineract_obj.post(path, datatable_create_config);
        return response.data;
    }
    async clients_retrieve(clientId) {
        let path = `clients/${clientId}`;
        let response = await this.fineract_obj.get(path, clientId);
        return response.data;
    }
    async clients_accounts_retrieve(clientId) {
        let path = `clients/${clientId}/accounts`;
        let response = await this.fineract_obj.get(path, clientId);
        return response.data;
    }
    async create_datatable_entry(datatable_name, create_entrydatatable_config) {
        let clientId = create_entrydatatable_config.clientId;
        let path = `datatables/${datatable_name}/${clientId}`;
        let response = await this.fineract_obj.post(path, create_entrydatatable_config);
        return response.data;
    }
}
exports.default = Clients;
