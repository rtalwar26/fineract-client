"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Clients {
    constructor(fineract_obj) {
        this.fineract_obj = fineract_obj;
    }
    // async list_clients(config?: LoanListConfig): Promise<[LoanInterface]> {
    //     let path = 'loans';
    //     let response;
    //     response = await this.fineract_obj.get(path, config);
    //     return response.data;
    // }
    // async list_clients(args: any, req: any) {
    //     let response = await (new FineractAPI(this.config)).get('clients', {});
    //     return response.data && response.data.pageItems;
    // }
    async create_clients(client_create_config) {
        console.log("inside create_clients in fineract client");
        let path = 'clients';
        let response = await (this.fineract_obj).post(path, client_create_config);
        console.log("request passed inside finearct", client_create_config);
        return response.data;
    }
}
exports.default = Clients;
