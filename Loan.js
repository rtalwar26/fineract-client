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
        return response.data;
    }
    async retrieve_loan(loanId, loan_retrieve_config) {
        let retrieve_path = `loans/${loanId}`;
        let response;
        response = await this.fineract_obj.get(retrieve_path, loan_retrieve_config);
        return response.data;
    }
    async loans_create(loan_create_config) {
        let path = 'loans';
        let response;
        response = await this.fineract_obj.post(path, loan_create_config);
        return response.data;
    }
    async calculate_loan_schedule(loan_repay_config) {
        let path = 'loans?command=calculateLoanSchedule';
        let response;
        response = await this.fineract_obj.post(path, loan_repay_config);
        return response.data;
    }
}
exports.default = Loan;
