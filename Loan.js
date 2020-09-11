"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Loan {
    constructor(fineract_obj) {
        this.fineract_obj = fineract_obj;
    }
    async list_loan(config) {
        let path = 'loans';
        let response;
        response = await this.fineract_obj.get(path, config);
        return response;
    }
    async retrieve_loan(loanId, loan_retrieve_config) {
        let retrieve_path = `loans/${loanId}`;
        let response;
        response = await this.fineract_obj.get(retrieve_path, loan_retrieve_config);
        return response;
    }
    async loans_create(loan_create_config) {
        let path = 'loans';
        let response;
        response = await this.fineract_obj.post(path, loan_create_config);
        return response;
    }
}
exports.default = Loan;
