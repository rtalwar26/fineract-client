import FineractAPI from './FineractAPI';

export interface LoanListConfig {
  offset?: number,
  limit?: number,
  orderBy?: string,
  sortBy?: string,
  officeId?: number,
  underHierarchy?: string,
  accountNo?: string,
  externalId?: string,
  sqlSearch?: string
}

export interface LoanRetrieveConfig {

  associations?: Array<string>,
  exclude?: Array<string>,
  all?: string,
  repaymentSchedule?: string,
  futureSchedule?: string,
  transactions?: string,
  charges?: string,
  quarantors?: string,
  collatoral?: string

}
export interface LoanStatusInterface {

  id: number,
  code: string,        // value  given in api doc ->loanStatusType.active", Kindly review the variable type
  value: string,                     // value given in api doc "Active", Kindly review the variable type
  pendingApproval: boolean,
  waitingForDisbursal: boolean,
  active: boolean,
  closedObligationsMet: boolean,
  closedWrittenOff: boolean,
  closedRescheduled: boolean,
  closed: boolean,
  overpaid: boolean

}
export interface LoanTypeInterface {
  id: number,
  code: string,                 //"loanType.individual",Kindly review the variable type
  value: string                //"Individual" ,Kindly review the variable type

}
export interface LoanCurrencyInterface {
  code: string,
  name: string,
  decimalPlaces: number,
  displaySymbol: string,
  nameCode: string,                              //"currency.USD",Kindly review the variable type
  displayLabel: string

}
export interface LoanTermPdFrequencyType {
  id: number,
  code: string,                                 //"termFrequency.periodFrequencyType.months",Kindly review the variable type
  value: string
}
export interface LoanRepaymentFrequencyType {
  id: number,
  code: string,    // "repaymentFrequency.periodFrequencyType.months",   Kindly review the variable type
  value: string   //"Months" Kindly review the variable type
}
export interface LoanInterestRateFrequencyType {
  id: number,
  code: string,                               //"interestRateFrequency.periodFrequencyType.months",Kindly review the type
  value: string
}
export interface LoanAmortizationType {
  id: number,
  code: string,                            //"amortizationType.equal.installments", Kindly review the type
  value: string                               //"Equal installments"
}
export interface LoanInterestType {
  id: number,
  code: string  //"interestType.declining.balance",
  value: string   //"Declining Balance"
}
export interface LoanInterestCalculationPeriodType {
  id: number,
  code: string    //"interestCalculationPeriodType.same.as.repayment.period",
  value: string     // "Same as repayment period"
}
export interface LoanTimeline {
  submittedOnDate: Array<number>,
  submittedByUsername: string,
  submittedByFirstname: string,
  submittedByLastname: string,
  approvedOnDate: Array<number>,
  approvedByUsername: string,
  approvedByFirstname: string,
  approvedByLastname: string,
  expectedDisbursementDate: Array<number>,
  actualDisbursementDate: Array<number>,
  disbursedByUsername: string,
  disbursedByFirstname: string,
  disbursedByLastname: string,
  expectedMaturityDate: Array<number>
}
export interface LoanLinkedAccount {
  id: number,
  accountNo: string
}
export interface LoanSummary {
  currency: LoanCurrencyInterface,
  principalDisbursed: number,
  principalPaid: number,
  principalWrittenOff: number,
  principalOutstanding: number,
  principalOverdue: number,
  interestCharged: number,
  interestPaid: number,
  interestWaived: number,
  interestWrittenOff: number,
  interestOutstanding: number,
  interestOverdue: number,
  feeChargesCharged: number,
  feeChargesDueAtDisbursementCharged: number,
  feeChargesPaid: number,
  feeChargesWaived: number,
  feeChargesWrittenOff: number,
  feeChargesOutstanding: number,
  feeChargesOverdue: number,
  penaltyChargesCharged: number,
  penaltyChargesPaid: number,
  penaltyChargesWaived: number,
  penaltyChargesWrittenOff: number,
  penaltyChargesOutstanding: number,
  penaltyChargesOverdue: number,
  totalExpectedRepayment: number,
  totalRepayment: number,
  totalExpectedCostOfLoan: number,
  totalCostOfLoan: number,
  totalWaived: number,
  totalWrittenOff: number,
  totalOutstanding: number,
  totalOverdue: number,
  overdueSinceDate: Array<number>

}

export interface LoanInterface {

  id: number,
  accountNo: number,
  status: LoanStatusInterface,

  clientId: number,
  clientName: string,
  clientOfficeId: number,
  loanProductId: number,
  loanProductName: string,
  loanProductDescription: string,
  loanType: LoanTypeInterface,
  currency: LoanCurrencyInterface,
  principal: number,
  termFrequency: number,
  termPeriodFrequencyType: LoanTermPdFrequencyType,
  numberOfRepayments: number,
  repaymentEvery: number,
  repaymentFrequencyType: LoanRepaymentFrequencyType,
  interestRatePerPeriod: number,
  interestRateFrequencyType: LoanInterestRateFrequencyType,
  annualInterestRate: number,
  amortizationType: LoanAmortizationType,
  interestType: LoanInterestType,
  interestCalculationPeriodType: LoanInterestCalculationPeriodType,
  transactionProcessingStrategyId: number,
  timeline: LoanTimeline,
  linkedAccount: LoanLinkedAccount,
  summary: LoanSummary,
  feeChargesAtDisbursementCharged: number,
  inArrears: boolean,
  isNPA: boolean
}
export interface LoanRetrieveInterface {
  id: number,
  accountNo: string,
  status: LoanStatusInterface,
  clientId: number,
  clientName: string,
  clientOfficeId: number,
  loanProductId: number,
  loanProductName: string,
  loanProductDescription: string,
  loanPurposeId: number,
  loanPurposeName: string,
  loanOfficerId: number,
  loanOfficerName: string,
  loanType: LoanTypeInterface,
  currency: LoanCurrencyInterface,
  principal: number,
  termFrequency: number,
  termPeriodFrequencyType: LoanTermPdFrequencyType,
  numberOfRepayments: number,
  repaymentEvery: number,
  repaymentFrequencyType: LoanRepaymentFrequencyType,
  interestRatePerPeriod: number,
  interestRateFrequencyType: LoanInterestRateFrequencyType,
  annualInterestRate: number,
  amortizationType: LoanAmortizationType,
  interestType: LoanInterestType,
  interestCalculationPeriodType: LoanInterestCalculationPeriodType,
  transactionProcessingStrategyId: number,
  timeline: LoanTimeline,
  summary: LoanSummary,
  linkedAccount: LoanLinkedAccount,
  disbursementDetails: [LoanDisbursementDetails],
  fixedEmiAmount: number,
  maxOutstandingLoanBalance: number,
  canDisburse: boolean,
  emiAmountVariations: Array<number>,                //kindly review this type
  inArrears: boolean,
  isNPA: boolean,
  overdueCharges: [LoanOverDueCharges]
}
export interface LoanDisbursementDetails {
  id: number,
  expectedDisbursementDate: string,
  principal: number,
  approvedPrincipal: number
}
export interface LoanOverDueCharges {
  id: number,
  name: string,
  active: boolean,
  penalty: boolean,
  currency: LoanCurrencyInterface,
  amount: number,
  chargeTimeType: LoanChargeTimeType,
  chargeAppliesTo: LoanChargeAppliesTo,
  chargeCalculationType: LoanChargeCalType,
  chargePaymentMode: LoanChargePaymentMode,
  feeInterval: number,
  feeFrequency: LoanFeeFrequency

}

export interface LoanChargeTimeType {
  id: number,
  code: string,                      //"chargeTimeType.overdueInstallment",
  value: string

}
export interface LoanChargeAppliesTo {
  id: number,
  code: string,                              //"chargeAppliesTo.loan,
  value: string
}
export interface LoanChargeCalType {
  id: number,
  code: string,                              //"chargeCalculationType.percent.of.amount",
  value: string

}
export interface LoanChargePaymentMode {
  id: number,
  code: string,     //"chargepaymentmode.regular",
  value: string                //"Regular"
}
export interface LoanFeeFrequency {
  id: number,
  code: string,    // "feeFrequencyperiodFrequencyType.weeks",
  value: string //"Weeks"
}
export interface LoanDataTables {
  registeredTableName: string,
  data: LoanDataTablesData
}

export interface LoanDataTablesData {
  locale: string,
  account_number: string,
  balance: string,
  dateField: string,
  dateFormat: string,
  dateTimeField: string,
  activationDate: string,

}
export interface LoanCreateConfig {
  dateFormat: string,
  locale: string,
  clientId: number,
  productId: number,
  principal: string,
  loanTermFrequency: number,
  loanTermFrequencyType: number,
  loanType: string,
  numberOfRepayments: number,
  repaymentEvery: number,
  repaymentFrequencyType: number,
  interestRatePerPeriod: number,
  amortizationType: number,
  interestType: number,
  interestCalculationPeriodType: number,
  transactionProcessingStrategyId: number,
  expectedDisbursementDate: string,
  submittedOnDate: string,
  linkAccountId?: string,
  fixedEmiAmount?: number,
  maxOutstandingLoanBalance?: string,
  disbursementData?: [LoanDisbursementDetails],
  dataTables: [LoanDataTables],
  graceOnPrincipalPayment?: string,
  graceOnInterestPayment?: string,
  graceOnInterestCharged?: string,
  allowPartialPeriodInterestCalcualtion?: string,
  graceOnArrearsAgeing?: string,
  createStandingInstructionAtDisbursement?: string            //(requires linkedAccountId if set to true)
}
export interface LoanCreateResponse {
  officeId: number,
  clientId: number,
  loanId: number,
  resourceId: number
}
export interface LoanRepaymentSchedule {
  dateFormat: string,
  locale: string,
  productId: number,
  principal: string,
  loanTermFrequency: number,
  loanTermFrequencyType: number,
  numberOfRepayments: number,
  repaymentEvery: number,
  repaymentFrequencyType: number,
  interestRatePerPeriod: number,
  amortizationType: number,
  interestType: number,
  interestCalculationPeriodType: number,
  expectedDisbursementDate: string,
  transactionProcessingStrategyId: number
}
export interface LoanRepaymentScheduleResponse {
  currency: LoanCurrencyInterface,
  loanTermInDays: number,
  totalPrincipalDisbursed: number,
  totalPrincipalExpected: number,
  totalPrincipalPaid: number,
  totalInterestCharged: number,
  totalFeeChargesCharged: number,
  totalPenaltyChargesCharged: number,
  totalWaived: number,
  totalWrittenOff: number,
  totalRepaymentExpected: number,
  totalRepayment: number,
  totalOutstanding: number,
  periods: [LoanRepaymentPeriod]
}
export interface LoanRepaymentPeriod {
  period: number,
  dueDate: Array<number>,
  principalDisbursed: number,
  principalLoanBalanceOutstanding: number,
  feeChargesDue: number,
  feeChargesOutstanding: number,
  totalOriginalDueForPeriod: number,
  totalDueForPeriod: number,
  totalOutstandingForPeriod: number,
  totalOverdue: number,
  totalActualCostOfLoanForPeriod: number,
  fromDate?: Array<number>,
  daysInPeriod?: number,
  principalOriginalDue?: number,
  principalDue?: number,
  principalOutstanding?: number,
  interestOriginalDue?: number,
  interestDue?: number,
  interestOutstanding?: number,
  penaltyChargesDue?: number,
  totalPaidForPeriod?: number
}
export interface LoanUpdateConfig {
  locale: string,
  dateFormat: string, //"dd MMMM yyyy"
  productId: number,
  principal: number,
  loanTermFrequency: number,
  loanTermFrequencyType: number,
  numberOfRepayments: number,
  repaymentEvery: number,
  repaymentFrequencyType: number,
  interestRatePerPeriod: number,
  interestType: number,
  interestCalculationPeriodType: number,
  amortizationType: number,
  expectedDisbursementDate: string,
  transactionProcessingStrategyId: number
}
export interface LoanUpdateChanges {
  principal: number,
  locale: string
}
export interface LoanUpdateResponse {
  officeId: number,
  clientId: number,
  loanId: number,
  resourceId: number,
  changes: LoanUpdateChanges
}
export interface LoanDisbursementData {
  id: number,
  principal: string,
  expectedDisbursementDate: string
}
export interface LoanApproveConfig {
  locale: string,
  dateFormat: string,
  approvedOnDate: string,
  approvedLoanAmount?: number,
  expectedDisbursementDate?: string,
  note: string,
  disbursementData: [LoanDisbursementData]
}
export interface LoanApproveChanges {
  status: LoanStatusInterface,
  locale: string,
  dateFormat: string,
  approvedOnDate: string,
  note: string
}
export interface LoanApproveResponse {
  officeId: number,
  clientId: number,
  loanId: number,
  resourceId: number,
  changes: LoanApproveChanges
}
export interface LoanUndoApproval {
  note: string
}
export interface LoanUndoApprovalChanges {
  status: LoanStatusInterface,
  approvedOnDate: string,
}
export interface LoanUndoApprovalResponse {
  officeId: number,
  clientId: number,
  loanId: number,
  resourceId: number,
  changes: LoanUndoApprovalChanges
}
export interface LoanAssignOfficer {
  toLoanOfficerId: number,
  assignmentDate: string,
  locale: string,
  dateFormat: string,
  fromLoanOfficerId: number
}
export interface LoanAssignOfficerResponse {
  officeId: number,
  clientId: number,
  loanId: number,
  resourceId: number
}
export interface LoanUnassignOfficer {
  unassignedDate: string,
  locale: string,
  dateFormat: string
}
export interface LoanRejectApplication {
  locale: string,
  dateFormat: string,
  rejectedOnDate: string,//expected value in dd MMMM yyyy format
  note: string
}
export interface LoanRejectApplicationChanges {
  status: LoanStatusInterface
  locale: string,
  dateFormat: string,
  rejectedOnDate: string, //expected value in dd MMMM yyyy format
  closedOnDate: string
}
export interface LoanRejectApplicationResponse {
  officeId: number,
  clientId: number,
  loanId: number,
  resourceId: number,
  changes: LoanRejectApplicationChanges
}
export interface LoanWithdrawApplicationChanges {
  status: LoanStatusInterface,
  locale: string,
  dateFormat: string,
  withdrawnOnDate: string,
  closedOnDate: string
}
export interface LoanWithdrawApplication {
  locale: string,
  dateFormat: string,
  withdrawnOnDate: string,
  note: string
}
export interface LoanWithdrawApplicationResponse {
  officeId: number,
  clientId: number,
  loanId: number,
  resourceId: number,
  changes: LoanWithdrawApplicationChanges
}
export interface LoanDisburse {
  dateFormat: string,
  locale: string,
  transactionAmount?: number,
  fixedEmiAmount?: number,
  actualDisbursementDate: string,
  paymentTypeId: string,
  note: string,
  accountNumber: string,
  checkNumber: string,
  routingCode: string,
  receiptNumber: string,
  bankNumber: string
}
export interface LoanDisburseChanges {
  accountNumber: string,
  checkNumber: string,
  routingCode: string,
  receiptNumber: string,
  bankNumber: string,
  status: LoanStatusInterface,
  locale: string,
  dateFormat: string,
  actualDisbursementDate: string,
  transactionAmount: number
}
export interface LoanDisburseResponse {
  officeId: number,
  clientId: number,
  loanId: number,
  resourceId: number,
  changes: LoanDisburseChanges
}
export interface LoanDisburseToSavingsAc {
  dateFormat: string,
  locale: string,
  transactionAmount?: number,
  fixedEmiAmount?: number,
  actualDisbursementDate: string,
  note: string
}
export interface LoanDisburseToSavingsAcChanges {
  status: LoanStatusInterface,
  locale: string,
  dateFormat: string      //"dd MMMM yyyy",
  actualDisbursementDate: string    //in dd MMMM yyyy format "14 May 2013"
  transactionAmount: number
}
export interface LoanDisburseSavingsAcResponse {
  officeId: number,
  clientId: number,
  loanId: number,
  resourceId: number,
  changes: LoanDisburseToSavingsAcChanges
}
export interface LoanUndoDisburse {
  note: string
}
export interface LoanUndoDisburseChanges {
  status: LoanStatusInterface,
  actualDisbursementDate: string
}
export interface LoanUndoDisburseResponse {
  officeId: number,
  clientId: number,
  loanId: number,
  resourceId: number,
  changes: LoanUndoDisburseChanges
}
export interface LoanRecoverGuaranteeResponse {
  loanId: number;
}
export interface LoanRepayment {
  dateFormat: string,
  locale: string,
  transactionDate: string,
  transactionAmount: string,
  paymentTypeId: string,
  note: string,
  accountNumber: string,
  checkNumber: string,
  routingCode: string,
  receiptNumber: string,
  bankNumber: string
}
export interface LoanRepaymentChanges {
  transactionDate: string,
  transactionAmount: string,
  locale: string,
  dateFormat: string,                     //format should be"dd MMMM yyyy",
  note: string,
  accountNumber: string,
  checkNumber: string,
  routingCode: string,
  receiptNumber: string,
  bankNumber: string
}
export interface LoanRepaymentResponse {
  officeId: number,
  clientId: number,
  loanId: number,
  resourceId: number,
  changes: LoanRepaymentChanges
}
export interface LoanWaiveInterest {
  locale: string
  dateFormat: string,
  transactionDate: string,
  transactionAmount: string,
  note: string
}
export interface LoanWaiveInterestResponse {
  officeId: number,
  clientId: number,
  loanId: number,
  resourceId: number,
  changes: LoanWaiveInterest
}
export interface LoanWriteoff {
  locale: string,
  dateFormat: string,
  transactionDate: string,
  note: string
}
export interface LoanWriteoffChanges {
  transactionDate: string,
  locale: string,
  dateFormat: string,
  status: LoanStatusInterface,
  closedOnDate: string,
  writtenOffOnDate: string,
  note: string
}
export interface LoanWriteoffResponse {
  officeId: number,
  clientId: number,
  loanId: number,
  resourceId: number,
  changes: LoanWriteoffChanges
}
export interface LoanUndoWriteoffResponse {
  officeId: number,
  clientId: number,
  loanId: number
}
export interface LoanPrecloseTemplate {
  amount: number,
  principalPortion: number,
  interestPortion: number,
  feeChargesPortion: number,
  penaltyChargesPortion: number
}
export interface LoanRecoveryPayment {
  dateFormat: string        // "dd MMMM yyyy",
  locale: string,
  transactionDate: string,
  transactionAmount: string,
  paymentTypeId: string,
  note: string,
  accountNumber: string,
  checkNumber: string,
  routingCode: string,
  receiptNumber: string,
  bankNumber: string
}
export interface LoanRecoveryPaymentResponse {
  officeId: number,
  clientId: number,
  loanId: number,
  resourceId: number,
  changes: LoanRepaymentChanges
}
export interface LoanAdjustTransaction {
  locale?: string,
  dateFormat?: string,
  transactionDate: string,
  transactionAmount: string,
  note?: string
}
export interface LoanAdjustTransactionResponse {
  resourceId: number
}
export interface LoanActiveRefundCash {
  dateFormat: string,
  locale: string,
  transactionDate: string,
  transactionAmount: string,
  paymentTypeId: string
}
export interface LoanActiveRefundCashChanges {
  transactionDate: string,
  transactionAmount: string,
  locale: string,
  dateFormat: string
}
export interface LoanActiveRefundCashResponse {
  officeId: number,
  clientId: number,
  loanId: number,
  resourceId: number,
  changes: LoanActiveRefundCashChanges
}
export interface LoanActiveForeclosure {
  dateFormat: string,
  locale: string,
  transactionDate: string,
  note: string
}
export interface LoanActiveForeclosureChanges {
  note: string,
  eventAmount: number,
  transactionDate: Array<number>,
  transactions: Array<number>
}
export interface LoanActiveForeclosureResponse {
  changes: LoanActiveForeclosureChanges,
  loanId: number
}
export interface LoanChargeCreate {
  chargeId: string,
  locale?: string,
  amount: string,
  dateFormat?: string,
  dueDate: string
}
export interface LoanChargeCreateResponse {
  officeId: number,
  clientId: number,
  loanId: number,
  resourceId: number
}
export interface LoanChargePay {
  dateFormat: string, //dd MMMM yyyy,
  locale: string,
  transactionDate: string
}
export interface LoanChargePayResponse {
  officeId: number,
  clientId: number,
  loanId: number,
  savingsId: number,
  resourceId: number
}
export interface LoanCreateGuarantor {
  guarantorTypeId: number,
  firstname: string,
  lastname: string,
  savingsId?: string,
  amount?: string
}
export interface LoanCreateGuarantorResponse {
  officeId: number,
  loanId: number,
  resourceId: number
}
export interface LoanCreateCollateral {
  collateralTypeId: string,
  value?: string,
  dateFormat?: string,
  locale?: string,
  description?: string
}
export interface LoanCreateCollateralResponse {
  loanId: number,
  resourceId: number
}
export interface LoanCreateRescheduleRequest {
  loanId: string,
  rescheduleFromDate: string,
  rescheduleReasonId: number,
  submittedOnDate: string,
  graceOnPrincipal: number,
  graceOnInterest: number,
  extraTerms: number,
  newInterestRate: number,
  adjustedDueDate: number,
  recalculateInterest?: boolean,
  rescheduleReasonComment?: string
  dateFormat: string,
  locale: string,
}
export interface LoanCreateRescheduleResponse {
  loanId: number,
  resourceId: number
}
export interface LoanRejectRescheduleRequest {
  locale: string,
  dateFormat: string,
  rejectedOnDate: string
}
export interface LoanRejectRescheduleChanges {
  locale: string,
  dateFormat: string,
  rejectedOnDate: string,
  rejectedByUserId: number
}
export interface LoanRejectRescheduleResponse {
  loanId: number,
  resourceId: number,
  changes: LoanRejectRescheduleChanges
}
export interface LoanApproveReschedule {
  locale: string,
  dateFormat: string,
  approvedOnDate: string
}
export interface LoanApproveRescheduleChanges {
  locale: string,
  dateFormat: string,
  approvedOnDate: string,
  approvedByUserId: number
}
export interface LoanApproveRescheduleResponse {
  loanId: number,
  resourceId: number,
  changes: LoanApproveRescheduleChanges
}
export default class Loan {
  fineract_obj: FineractAPI
  constructor(fineract_obj: FineractAPI) {
    this.fineract_obj = fineract_obj;
  }
  async list_loan(config?: LoanListConfig): Promise<[LoanInterface]> {
    let path = 'loans';
    let response;
    response = await this.fineract_obj.get(path, config);
    return response.data;
  }
  async retrieve_loan(loanId: string, loan_retrieve_config?: LoanRetrieveConfig): Promise<LoanRetrieveInterface> {
    let retrieve_path = `loans/${loanId}`;
    let response;
    response = await this.fineract_obj.get(retrieve_path, loan_retrieve_config);
    return response.data;
  }
  async loans_create(loan_create_config: LoanCreateConfig): Promise<LoanCreateResponse> {
    let path = 'loans';
    let response;
    response = await this.fineract_obj.post(path, loan_create_config)
    return response.data;
  }
  async calculate_loan_schedule(loan_repay_config: LoanRepaymentSchedule): Promise<LoanRepaymentScheduleResponse> {
    let path = 'loans?command=calculateLoanSchedule';
    let response;
    response = await this.fineract_obj.post(path, loan_repay_config);
    return response.data;
  }
  async update_loan(loanId: string, loan_update_config: LoanUpdateConfig): Promise<LoanUpdateResponse> {
    let path = `loans/${loanId}`;
    let response;
    response = await this.fineract_obj.put(path, loan_update_config);
    return response.data;
  }
  async approve_loan(loanId: string, loan_approve_config: LoanApproveConfig): Promise<LoanApproveResponse> {
    let path = `loans/${loanId}?command=approve`;
    let response;
    response = await this.fineract_obj.post(path, loan_approve_config);
    return response.data;
  }
  async undo_approve_loan(loanId: string, loan_undo_approve_config: LoanUndoApproval): Promise<LoanUndoApprovalResponse> {
    let path = `loans/${loanId}?command=undoApproval`;
    let response;
    response = await this.fineract_obj.post(path, loan_undo_approve_config);
    return response.data;
  }
  async assign_loan_officer(loanId: string, loan_assign_officer_config: LoanAssignOfficer): Promise<LoanAssignOfficerResponse> {
    let path = `loans/${loanId}?command=assignLoanOfficer`;
    let response;
    response = await this.fineract_obj.post(path, loan_assign_officer_config)
    return response.data;
  }
  async unassign_loan_officer(loanId: string, loan_unassign_officer_config: LoanUnassignOfficer): Promise<LoanAssignOfficerResponse> {
    let path = `loans/${loanId}?command=unassignLoanOfficer`;
    let response;
    response = await this.fineract_obj.post(path, loan_unassign_officer_config);
    return response.data;
  }
  async reject_loan_application(loanId: string, loan_reject_config: LoanRejectApplication): Promise<LoanRejectApplicationResponse> {
    let path = `loans/${loanId}?command=reject`;
    let response;
    response = await this.fineract_obj.post(path, loan_reject_config);
    return response.data;
  }
  async withdraw_loan_application(loanId: string, loan_withdraw_config: LoanWithdrawApplication): Promise<LoanWithdrawApplicationResponse> {
    let path = `loans/${loanId}?command=withdrawnByApplicant`;
    let response;
    response = await this.fineract_obj.post(path, loan_withdraw_config);
    return response.data;
  }
  async disburse_loan(loanId: string, loan_disburse_config: LoanDisburse): Promise<LoanDisburseResponse> {
    let path = `loans/${loanId}?command=disburse`;
    let response;
    response = await this.fineract_obj.post(path, loan_disburse_config);
    return response.data;
  }
  async disburse_loan_toSavingsAc(loanId: string, loan_disburse_savingAc_config: LoanDisburseToSavingsAc): Promise<LoanDisburseSavingsAcResponse> {
    let path = `loans/${loanId}?command=disburseToSavings`;
    let response;
    response = await this.fineract_obj.post(path, loan_disburse_savingAc_config);
    return response.data;
  }
  async undo_disburse_loan(loanId: string, loan_undo_disburse_config: LoanUndoDisburse): Promise<LoanUndoDisburseResponse> {
    let path = `loans/${loanId}?command=undoDisbursal`;
    let response;
    response = await this.fineract_obj.post(path, loan_undo_disburse_config);
    return response.data;
  }
  async recover_loan_guarantee(loanId: string): Promise<LoanRecoverGuaranteeResponse> {
    let loan_recover_guarantee_obj = {};
    let path = `loans/${loanId}?command=recoverGuarantees`;
    let response;
    response = await this.fineract_obj.post(path, loan_recover_guarantee_obj);
    return response.data;
  }
  async loan_transaction_repayment(loanId: string, loan_repayment_config: LoanRepayment): Promise<LoanRepaymentResponse> {
    let path = `loans/${loanId}/transactions?command=repayment`;
    let response;
    response = await this.fineract_obj.post(path, loan_repayment_config);
    return response.data;
  }
  async loan_waive_interest(loanId: string, loan_waive_interest_config: LoanWaiveInterest): Promise<LoanWaiveInterestResponse> {
    let path = `loans/${loanId}/transactions?command=waiveInterest`;
    let response;
    response = await this.fineract_obj.post(path, loan_waive_interest_config);
    return response.data;
  }
  async loan_writeoff(loanId: string, loan_writeoff_config: LoanWriteoff): Promise<LoanWriteoffResponse> {
    let path = `loans/${loanId}/transactions?command=writeoff`;
    let response;
    response = await this.fineract_obj.post(path, loan_writeoff_config);
    return response.data;
  }
  async undo_loan_writeoff(loanId: string): Promise<LoanUndoWriteoffResponse> {
    let loan_undo_writeoff_config = {};
    let path = `loans/${loanId}/transactions?command=undowriteoff`;
    let response;
    response = await this.fineract_obj.post(path, loan_undo_writeoff_config);
    return response.data;
  }
  async loan_preclose_template(loanId: string): Promise<LoanPrecloseTemplate> {
    let loan_preclose_config = {};
    let path = `loans/${loanId}/transactions?command=prepayLoan`;
    let response;
    response = await this.fineract_obj.post(path, loan_preclose_config);
    return response.data;
  }
  async loan_recovery_payment(loanId: string, loan_recovery_config: LoanRecoveryPayment): Promise<LoanRecoveryPaymentResponse> {
    let path = `loans/${loanId}/transactions?command=recoverypayment`;
    let response;
    response = await this.fineract_obj.post(path, loan_recovery_config);
    return response.data;
  }
  async loan_adjust_transaction(loanId: string, transactionId: string, loan_adjust_traxn_config: LoanAdjustTransaction): Promise<LoanAdjustTransactionResponse> {
    let path = `loans/${loanId}/transactions/${transactionId}`;
    let response;
    response = await this.fineract_obj.post(path, loan_adjust_traxn_config);
    return response.data;
  }
  async loan_active_refundByCash(loanId: string, loan_refundByCash_config: LoanActiveRefundCash): Promise<LoanActiveRefundCashResponse> {
    let path = `loans/${loanId}/transactions?command=refundByCash`;
    let response;
    response = await this.fineract_obj.post(path, loan_refundByCash_config);
    return response.data;
  }
  async loan_active_foreclosure(loanId: string, loan_foreclosure_config: LoanActiveForeclosure): Promise<LoanActiveForeclosureResponse> {
    let path = `loans/${loanId}/transactions?command=foreclosure`;
    let response;
    response = await this.fineract_obj.post(path, loan_foreclosure_config);
    return response.data;
  }
  async create_loan_charge(loanId: string, loan_charge_config: LoanChargeCreate): Promise<LoanChargeCreateResponse> {
    let path = `loans/${loanId}/charges`;
    let response;
    response = await this.fineract_obj.post(path, loan_charge_config);
    return response.data;
  }
  async pay_loan_charge(loanId: string, chargeId: string, loan_chargePay_config: LoanChargePay): Promise<LoanChargePayResponse> {
    let path = `loans/${loanId}/charges/${chargeId}?command=pay`;
    let response;
    response = await this.fineract_obj.post(path, loan_chargePay_config);
    return response.data;
  }
  async loan_create_guarantor(loanId: string, loan_createGuarantor_config: LoanCreateGuarantor): Promise<LoanCreateGuarantorResponse> {
    let path = `loans/${loanId}/guarantors`;
    let response;
    response = await this.fineract_obj.post(path, loan_createGuarantor_config);
    return response.data;
  }
  async loan_create_collateral(loanId: string, loan_createCollateral_config: LoanCreateCollateral): Promise<LoanCreateCollateralResponse> {
    let path = `loans/${loanId}/collaterals`;
    let response;
    response = await this.fineract_obj.post(path, loan_createCollateral_config);
    return response.data;
  }
  async create_loan_rescheduleRequest(loan_createRescheduleReq_config: LoanCreateRescheduleRequest): Promise<LoanCreateRescheduleResponse> {
    let path = `rescheduleloans`;
    let response;
    response = await this.fineract_obj.post(path, loan_createRescheduleReq_config);
    return response.data;
  }
  async reject_loan_rescheduleRequest(requestId: string, loan_rejectRescheduleReq_config: LoanRejectRescheduleRequest): Promise<LoanRejectRescheduleResponse> {
    let path = `rescheduleloans/${requestId}?command=reject`;
    let response;
    response = await this.fineract_obj.post(path, loan_rejectRescheduleReq_config);
    return response.data;
  }
  async approve_loan_rescheduleRequest(requestId: string, loan_approveRescheduleReq_config: LoanApproveReschedule): Promise<LoanApproveRescheduleResponse> {
    let path = `rescheduleloans/${requestId}?command=approve`;
    let response;
    response = await this.fineract_obj.post(path, loan_approveRescheduleReq_config);
    return response.data;
  }
}

