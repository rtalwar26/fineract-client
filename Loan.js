"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Loan {
    constructor(fineract_obj) {
        this.fineract_obj = fineract_obj;
    }
    list_loan(config) {
        let path = "loans";
        let response;
        response = this.fineract_obj.get(path, config);
        return response;
        console.log("response:", response);
    }
}
exports.default = Loan;
