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
    async update_loan(loanId, loan_update_config) {
        let path = `loans/${loanId}`;
        let response;
        response = await this.fineract_obj.put(path, loan_update_config);
        return response.data;
    }
    async approve_loan(loanId, loan_approve_config) {
        let path = `loans/${loanId}?command=approve`;
        let response;
        response = await this.fineract_obj.post(path, loan_approve_config);
        return response.data;
    }
    async undo_approve_loan(loanId, loan_undo_approve_config) {
        let path = `loans/${loanId}?command=undoApproval`;
        let response;
        response = await this.fineract_obj.post(path, loan_undo_approve_config);
        return response.data;
    }
    async assign_loan_officer(loanId, loan_assign_officer_config) {
        let path = `loans/${loanId}?command=assignLoanOfficer`;
        let response;
        response = await this.fineract_obj.post(path, loan_assign_officer_config);
        return response.data;
    }
    async unassign_loan_officer(loanId, loan_unassign_officer_config) {
        let path = `loans/${loanId}?command=unassignLoanOfficer`;
        let response;
        response = await this.fineract_obj.post(path, loan_unassign_officer_config);
        return response.data;
    }
    async reject_loan_application(loanId, loan_reject_config) {
        let path = `loans/${loanId}?command=reject`;
        let response;
        response = await this.fineract_obj.post(path, loan_reject_config);
        return response.data;
    }
    async withdraw_loan_application(loanId, loan_withdraw_config) {
        let path = `loans/${loanId}?command=withdrawnByApplicant`;
        let response;
        response = await this.fineract_obj.post(path, loan_withdraw_config);
        return response.data;
    }
    async disburse_loan(loanId, loan_disburse_config) {
        let path = `loans/${loanId}?command=disburse`;
        let response;
        response = await this.fineract_obj.post(path, loan_disburse_config);
        return response.data;
    }
    async disburse_loan_toSavingsAc(loanId, loan_disburse_savingAc_config) {
        let path = `loans/${loanId}?command=disburseToSavings`;
        let response;
        response = await this.fineract_obj.post(path, loan_disburse_savingAc_config);
        return response.data;
    }
    async undo_disburse_loan(loanId, loan_undo_disburse_config) {
        let path = `loans/${loanId}?command=undoDisbursal`;
        let response;
        response = await this.fineract_obj.post(path, loan_undo_disburse_config);
        return response.data;
    }
    async recover_loan_guarantee(loanId) {
        let loan_recover_guarantee_obj = null;
        let path = `loans/${loanId}?command=recoverGuarantees`;
        let response;
        response = await this.fineract_obj.post(path, loan_recover_guarantee_obj);
        return response.data;
    }
    async loan_transaction_repayment(loanId, loan_repayment_config) {
        let path = `loans/${loanId}/transactions?command=repayment`;
        let response;
        response = await this.fineract_obj.post(path, loan_repayment_config);
        return response.data;
    }
    async loan_waive_interest(loanId, loan_waive_interest_config) {
        let path = `loans/${loanId}/transactions?command=waiveInterest`;
        let response;
        response = await this.fineract_obj.post(path, loan_waive_interest_config);
        return response.data;
    }
    async loan_writeoff(loanId, loan_writeoff_config) {
        let path = `loans/${loanId}/transactions?command=writeoff`;
        let response;
        response = await this.fineract_obj.post(path, loan_writeoff_config);
        return response.data;
    }
    async undo_loan_writeoff(loanId) {
        let loan_undo_writeoff_config = null;
        let path = `loans/${loanId}/transactions?command=undowriteoff`;
        let response;
        response = await this.fineract_obj.post(path, loan_undo_writeoff_config);
        return response.data;
    }
    async loan_preclose_template(loanId) {
        let loan_preclose_config = null;
        let path = `loans/${loanId}/transactions?command=prepayLoan`;
        let response;
        response = await this.fineract_obj.post(path, loan_preclose_config);
        return response.data;
    }
    async loan_recovery_payment(loanId, loan_recovery_config) {
        let path = `loans/${loanId}/transactions?command=recoverypayment`;
        let response;
        response = await this.fineract_obj.post(path, loan_recovery_config);
        return response.data;
    }
    async loan_adjust_transaction(loanId, transactionId, loan_adjust_traxn_config) {
        let path = `loans/${loanId}/transactions/${transactionId}`;
        let response;
        response = await this.fineract_obj.post(path, loan_adjust_traxn_config);
        return response.data;
    }
    async loan_active_refundByCash(loanId, loan_refundByCash_config) {
        let path = `loans/${loanId}/transactions?command=refundByCash`;
        let response;
        response = await this.fineract_obj.post(path, loan_refundByCash_config);
        return response.data;
    }
    async loan_active_foreclosure(loanId, loan_foreclosure_config) {
        let path = `loans/${loanId}/transactions?command=foreclosure`;
        let response;
        response = await this.fineract_obj.post(path, loan_foreclosure_config);
        return response.data;
    }
    async create_loan_charge(loanId, loan_charge_config) {
        let path = `loans/${loanId}/charges`;
        let response;
        response = await this.fineract_obj.post(path, loan_charge_config);
        return response.data;
    }
    async pay_loan_charge(loanId, chargeId, loan_chargePay_config) {
        let path = `loans/${loanId}/charges/${chargeId}?command=pay`;
        let response;
        response = await this.fineract_obj.post(path, loan_chargePay_config);
        return response.data;
    }
    async loan_create_guarantor(loanId, loan_createGuarantor_config) {
        let path = `loans/${loanId}/guarantors`;
        let response;
        response = await this.fineract_obj.post(path, loan_createGuarantor_config);
        return response.data;
    }
    async loan_create_collateral(loanId, loan_createCollateral_config) {
        let path = `loans/${loanId}/collaterals`;
        let response;
        response = await this.fineract_obj.post(path, loan_createCollateral_config);
        return response.data;
    }
    async create_loan_rescheduleRequest(loan_createRescheduleReq_config) {
        let path = `rescheduleloans`;
        let response;
        response = await this.fineract_obj.post(path, loan_createRescheduleReq_config);
        return response.data;
    }
    async reject_loan_rescheduleRequest(requestId, loan_rejectRescheduleReq_config) {
        let path = `rescheduleloans/${requestId}?command=reject`;
        let response;
        response = await this.fineract_obj.post(path, loan_rejectRescheduleReq_config);
        return response.data;
    }
    async approve_loan_rescheduleRequest(requestId, loan_approveRescheduleReq_config) {
        let path = `rescheduleloans/${requestId}?command=approve`;
        let response;
        response = await this.fineract_obj.post(path, loan_approveRescheduleReq_config);
        return response.data;
    }
    async calculate_loan_repayment_termVariation(loanId, loan_repayTermVariatn_config) {
        let path = `loans/${loanId}/schedule?command=calculateLoanSchedule`;
        let response;
        response = await this.fineract_obj.post(path, loan_repayTermVariatn_config);
        return response.data;
    }
    async update_loan_repayment_termVariation(loanId, loan_update_repayTermVariatn) {
        let path = `loans/${loanId}/schedule?command=addVariations`;
        let response;
        response = await this.fineract_obj.post(path, loan_update_repayTermVariatn);
        return response.data;
    }
    async remove_loan_repayment_termVariation(loanId) {
        let path = `loans/${loanId}/schedule?command=deleteVariations`;
        let loan_remove_repayTermVariatn = null;
        let response;
        response = await this.fineract_obj.post(path, loan_remove_repayTermVariatn);
        return response.data;
    }
    async retrieve_transaction_details(loanId, transactionId) {
        let path = `loans/${loanId}/transactions/${transactionId}`;
        let loan_retrieveTxnDetail_config = null;
        let response;
        response = await this.fineract_obj.get(path, loan_retrieveTxnDetail_config);
        return response.data;
    }
    async retrieve_loan_charge(loanId, chargeId) {
        let path = `loans/${loanId}/charges/${chargeId}`;
        let loan_retrieveCharge_config = null;
        let response;
        response = await this.fineract_obj.get(path, loan_retrieveCharge_config);
        return response.data;
    }
    async loan_list_guarantors(loanId) {
        let path = `loans/${loanId}/guarantors`;
        let loan_list_guarantors_config = null;
        let response;
        response = await this.fineract_obj.get(path, loan_list_guarantors_config);
        return response.data;
    }
    async loan_retrieve_guarantor(loanId, guarantorId) {
        let path = `loans/${loanId}/guarantors/${guarantorId}`;
        let loan_retrieve_guarantor_config = null;
        let response;
        response = await this.fineract_obj.get(path, loan_retrieve_guarantor_config);
        return response.data;
    }
    async loan_list_collaterals(loanId) {
        let path = `loans/${loanId}/collaterals`;
        let loan_list_collaterals_config = null;
        let response;
        response = await this.fineract_obj.get(path, loan_list_collaterals_config);
        return response.data;
    }
    async loan_retrieve_collateral(loanId, guarantorId) {
        let path = `loans/${loanId}/collaterals/${guarantorId}`;
        let loan_retrieve_collateral_config = null;
        let response;
        response = await this.fineract_obj.get(path, loan_retrieve_collateral_config);
        return response.data;
    }
    async retrieve_loan_rescheduleRequest(requestId) {
        let path = `rescheduleloans/${requestId}`;
        let loan_retrieve_rescheduleRequest = null;
        let response;
        response = await this.fineract_obj.get(path, loan_retrieve_rescheduleRequest);
        return response.data;
    }
    async retrieve_preview_newLoanRepaymentSchedule(requestId) {
        let path = `rescheduleloans/${requestId}?command=previewLoanReschedule`;
        let retrieve_previewLoanReschedule = null;
        let response;
        response = await this.fineract_obj.get(path, retrieve_previewLoanReschedule);
        return response.data;
    }
    async delete_loan_application(loanId) {
        let path = `loans/${loanId}`;
        let loan_delete_config = null;
        let response;
        response = await this.fineract_obj.delete(path, loan_delete_config);
        return response.data;
    }
    async delete_loan_charge(loanId, chargeId) {
        let path = `loans/${loanId}/charges/${chargeId}`;
        let loanCharge_delete_config = null;
        let response;
        response = await this.fineract_obj.delete(path, loanCharge_delete_config);
        return response.data;
    }
    async delete_loan_guarantor(loanId, guarantorId) {
        let path = `loans/${loanId}/guarantors/${guarantorId}`;
        let loanGuarantor_delete_config = null;
        let response;
        response = await this.fineract_obj.delete(path, loanGuarantor_delete_config);
        return response.data;
    }
    async delete_loan_collateral(loanId, collateralId) {
        let path = `loans/${loanId}/collaterals/${collateralId}`;
        let loanCollateral_delete_config = null;
        let response;
        response = await this.fineract_obj.delete(path, loanCollateral_delete_config);
        return response.data;
    }
    async update_loan_charge(loanId, chargeId, loanCharge_update_config) {
        let path = `loans/${loanId}/charges/${chargeId}`;
        let response;
        response = await this.fineract_obj.put(path, loanCharge_update_config);
        return response.data;
    }
    async update_loan_guarantor(loanId, guarantorId, loanGuarantor_update_config) {
        let path = `loans/${loanId}/guarantors/${guarantorId}`;
        let response;
        response = await this.fineract_obj.put(path, loanGuarantor_update_config);
        return response.data;
    }
    async update_loan_collateral(loanId, collateralId, loanCollateral_update_config) {
        let path = `loans/${loanId}/collaterals/${collateralId}`;
        let response;
        response = await this.fineract_obj.put(path, loanCollateral_update_config);
        return response.data;
    }
}
exports.default = Loan;
