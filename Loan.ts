import FineractAPI from './FineractAPI';

export interface LoanListConfig {
  offset?: Number,
  limit?: Number,
  orderBy?: String,
  sortBy?: String,
  officeId?: Number,
  underHierarchy?: String,
  accountNo?: String,
  externalId?: String,
  sqlSearch?: String
}

export interface LoanRetrieveConfig {

  associations?: Array<String>,
  exclude?: Array<String>,
  all?: String,
  repaymentSchedule?: String,
  futureSchedule?: String,
  transactions?: String,
  charges?: String,
  quarantors?: String,
  collatoral?: String

}
export interface LoanObjectStatusInterface {

  id: Number,
  code: String,        // value  given in api doc ->loanStatusType.active", Kindly review the variable type
  value: String,                     // value given in api doc "Active", Kindly review the variable type
  pendingApproval: Boolean,
  waitingForDisbursal: Boolean,
  active: Boolean,
  closedObligationsMet: Boolean,
  closedWrittenOff: Boolean,
  closedRescheduled: Boolean,
  closed: Boolean,
  overpaid: Boolean

}
export interface LoanObjectTypeInterface {
  id: Number,
  code: String,                 //"loanType.individual",Kindly review the variable type
  value: String                //"Individual" ,Kindly review the variable type

}
export interface LoanObjectCurrencyInterface {
  code: String,
  name: String,
  decimalPlaces: Number,
  displaySymbol: String,
  nameCode: String,                              //"currency.USD",Kindly review the variable type
  displayLabel: String

}
export interface LoanObjTermPdFrequencyType {
  id: Number,
  code: String,                                 //"termFrequency.periodFrequencyType.months",Kindly review the variable type
  value: String
}
export interface LoanObjRepaymentFrequencyType {
  id: Number,
  code: String,    // "repaymentFrequency.periodFrequencyType.months",   Kindly review the variable type
  value: String   //"Months" Kindly review the variable type
}
export interface LoanObjInterestRateFrequencyType {
  id: Number,
  code: String,                               //"interestRateFrequency.periodFrequencyType.months",Kindly review the type
  value: String
}
export interface LoanObjAmortizationType {
  id: Number,
  code: String,                            //"amortizationType.equal.installments", Kindly review the type
  value: String                               //"Equal installments"
}
export interface LoanObjInterestType {
  id: Number,
  code: String  //"interestType.declining.balance",
  value: String   //"Declining Balance"
}
export interface LoanObjInterestCalculationPeriodType {
  id: Number,
  code: String    //"interestCalculationPeriodType.same.as.repayment.period",
  value: String     // "Same as repayment period"
}
export interface LoanObjTimeline {
  submittedOnDate: Date,
  submittedByUsername: String,
  submittedByFirstname: String,
  submittedByLastname: String,
  approvedOnDate: Date,
  approvedByUsername: String,
  approvedByFirstname: String,
  approvedByLastname: String,
  expectedDisbursementDate: Date,
  actualDisbursementDate: Date,
  disbursedByUsername: String,
  disbursedByFirstname: String,
  disbursedByLastname: String,
  expectedMaturityDate: Date
}
export interface LoanObjLinkedAccount {
  id: Number,
  accountNo: String
}
export interface LoanObjSummary {
  currency: LoanObjectCurrencyInterface,
  principalDisbursed:Number,
  principalPaid:Number,
  principalWrittenOff:Number,
  principalOutstanding:Number,
  principalOverdue:Number,
  interestCharged:Number,
  interestPaid:Number,
  interestWaived:Number,
  interestWrittenOff:Number,
  interestOutstanding:Number,
  interestOverdue:Number,
  feeChargesCharged:Number,
  feeChargesDueAtDisbursementCharged:Number,
  feeChargesPaid:Number,
  feeChargesWaived:Number,
  feeChargesWrittenOff:Number,
  feeChargesOutstanding:Number,
  feeChargesOverdue:Number,
  penaltyChargesCharged:Number,
  penaltyChargesPaid:Number,
  penaltyChargesWaived:Number,
  penaltyChargesWrittenOff:Number,
  penaltyChargesOutstanding:Number,
  penaltyChargesOverdue:Number,
  totalExpectedRepayment:Number,
  totalRepayment:Number,
  totalExpectedCostOfLoan:Number,
  totalCostOfLoan:Number,
  totalWaived:Number,
  totalWrittenOff:Number,
  totalOutstanding:Number,
  totalOverdue:Number,
  overdueSinceDate:Date

}

export interface LoanObjectInterface {

  id: Number,
  accountNo: Number,
  status: LoanObjectStatusInterface,

  clientId: Number,
  clientName: String,
  clientOfficeId: Number,
  loanProductId: Number,
  loanProductName: String,
  loanProductDescription: String,
  loanType: LoanObjectTypeInterface,
  currency: LoanObjectCurrencyInterface,
  principal: Number,
  termFrequency: Number,
  termPeriodFrequencyType: LoanObjTermPdFrequencyType,
  numberOfRepayments: Number,
  repaymentEvery: Number,
  repaymentFrequencyType: LoanObjRepaymentFrequencyType,
  interestRatePerPeriod: Number,
  interestRateFrequencyType: LoanObjInterestRateFrequencyType,
  annualInterestRate: Number,
  amortizationType: LoanObjAmortizationType,
  interestType: LoanObjInterestType,
  interestCalculationPeriodType: LoanObjInterestCalculationPeriodType,
  transactionProcessingStrategyId: Number,
  timeline: LoanObjTimeline,
  linkedAccount: LoanObjLinkedAccount,
  summary:LoanObjSummary,
  feeChargesAtDisbursementCharged:Number,
  inArrears:Boolean,
  isNPA:Boolean
}


export default class Loan {

  fineract_obj: FineractAPI
  constructor(fineract_obj: FineractAPI) {
    this.fineract_obj = fineract_obj;
  }

  async list_loan(config: LoanListConfig): Promise<[LoanObjectInterface]> {
    let path = "loans";
    let response;
    response = await this.fineract_obj.get(path, config);
    return response;


  }
  async retrieve_loan(loan_retrive_config: LoanRetrieveConfig): Promise<any> {
    let retrieve_path = "loans/";
    let response;
    response = await this.fineract_obj.get(retrieve_path, loan_retrive_config);
    return response;
  }


}