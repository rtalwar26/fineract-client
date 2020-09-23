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
  expectedDisbursementDate: Array<number>,
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
  dateField: Array<number>,
  dateFormat: string,
  dateTimeField: Array<number>,
  activationDate: Array<number>,

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
  expectedDisbursementDate: Array<number>,
  submittedOnDate: Array<number>,
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
  expectedDisbursementDate: Array<number>,
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
  dateFormat: Array<number>,
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
  expectedDisbursementDate: Array<number>,
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
  expectedDisbursementDate: Array<number>
}
export interface LoanApproveConfig {
  locale: string,
  dateFormat: string,
  approvedOnDate: Array<number>,
  approvedLoanAmount?: number,
  expectedDisbursementDate?: Array<number>,
  note: string,
  disbursementData: [LoanDisbursementData]
}
export interface LoanApproveChanges {
  status: LoanStatusInterface,
  locale: string,
  dateFormat: string,
  approvedOnDate: Array<number>,
  note: string
}
export interface LoanApproveResponse {
  officeId: number,
  clientId: number,
  loanId: number,
  resourceId: number,
  changes: LoanApproveChanges
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

}