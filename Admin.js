"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Admin {
    constructor(fineract_obj) {
        this.fineract_obj = fineract_obj;
    }
    async run_report(report_name, adminLoanSummary_query_obj) {
        let path = `runreports/${report_name}`;
        let response = await this.fineract_obj.get(path, adminLoanSummary_query_obj);
        return response.data;
    }
}
exports.default = Admin;
