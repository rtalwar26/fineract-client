import FineractAPI from './FineractAPI';

export interface LoanListConfig {
  offset?:number,
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
export interface LoanObjectStatusInterface {

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
export interface LoanObjectTypeInterface {
  id: number,
  code: string,                 //"loanType.individual",Kindly review the variable type
  value: string                //"Individual" ,Kindly review the variable type

}
export interface LoanObjectCurrencyInterface {
  code: string,
  name: string,
  decimalPlaces: number,
  displaySymbol: string,
  nameCode: string,                              //"currency.USD",Kindly review the variable type
  displayLabel: string

}
export interface LoanObjTermPdFrequencyType {
  id: number,
  code: string,                                 //"termFrequency.periodFrequencyType.months",Kindly review the variable type
  value: string
}
export interface LoanObjRepaymentFrequencyType {
  id: number,
  code: string,    // "repaymentFrequency.periodFrequencyType.months",   Kindly review the variable type
  value: string   //"Months" Kindly review the variable type
}
export interface LoanObjInterestRateFrequencyType {
  id: number,
  code: string,                               //"interestRateFrequency.periodFrequencyType.months",Kindly review the type
  value: string
}
export interface LoanObjAmortizationType {
  id: number,
  code: string,                            //"amortizationType.equal.installments", Kindly review the type
  value: string                               //"Equal installments"
}
export interface LoanObjInterestType {
  id: number,
  code: string  //"interestType.declining.balance",
  value: string   //"Declining Balance"
}
export interface LoanObjInterestCalculationPeriodType {
  id: number,
  code: string    //"interestCalculationPeriodType.same.as.repayment.period",
  value: string     // "Same as repayment period"
}
export interface LoanObjTimeline {
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
export interface LoanObjLinkedAccount {
  id: number,
  accountNo: string
}
export interface LoanObjSummary {
  currency: LoanObjectCurrencyInterface,
  principalDisbursed:number,
  principalPaid:number,
  principalWrittenOff:number,
  principalOutstanding:number,
  principalOverdue:number,
  interestCharged:number,
  interestPaid:number,
  interestWaived:number,
  interestWrittenOff:number,
  interestOutstanding:number,
  interestOverdue:number,
  feeChargesCharged:number,
  feeChargesDueAtDisbursementCharged:number,
  feeChargesPaid:number,
  feeChargesWaived:number,
  feeChargesWrittenOff:number,
  feeChargesOutstanding:number,
  feeChargesOverdue:number,
  penaltyChargesCharged:number,
  penaltyChargesPaid:number,
  penaltyChargesWaived:number,
  penaltyChargesWrittenOff:number,
  penaltyChargesOutstanding:number,
  penaltyChargesOverdue:number,
  totalExpectedRepayment:number,
  totalRepayment:number,
  totalExpectedCostOfLoan:number,
  totalCostOfLoan:number,
  totalWaived:number,
  totalWrittenOff:number,
  totalOutstanding:number,
  totalOverdue:number,
  overdueSinceDate:Array<number>

}

export interface LoanObjectInterface {

  id: number,
  accountNo: number,
  status: LoanObjectStatusInterface,

  clientId: number,
  clientName: string,
  clientOfficeId: number,
  loanProductId: number,
  loanProductName: string,
  loanProductDescription: string,
  loanType: LoanObjectTypeInterface,
  currency: LoanObjectCurrencyInterface,
  principal: number,
  termFrequency: number,
  termPeriodFrequencyType: LoanObjTermPdFrequencyType,
  numberOfRepayments: number,
  repaymentEvery: number,
  repaymentFrequencyType: LoanObjRepaymentFrequencyType,
  interestRatePerPeriod: number,
  interestRateFrequencyType: LoanObjInterestRateFrequencyType,
  annualInterestRate: number,
  amortizationType: LoanObjAmortizationType,
  interestType: LoanObjInterestType,
  interestCalculationPeriodType: LoanObjInterestCalculationPeriodType,
  transactionProcessingStrategyId: number,
  timeline: LoanObjTimeline,
  linkedAccount: LoanObjLinkedAccount,
  summary:LoanObjSummary,
  feeChargesAtDisbursementCharged:number,
  inArrears:boolean,
  isNPA:boolean
}
export interface LoanRetrieveObjInterface{
  id:number,
  accountNo:string,
  status:LoanObjectStatusInterface,
  clientId:number,
  clientName:string,
  clientOfficeId:number,
  loanProductId:number,
  loanProductName:string,
  loanProductDescription:string,
  loanPurposeId:number,
  loanPurposeName:string,
  loanOfficerId:number,
  loanOfficerName:string,
  loanType:LoanObjectTypeInterface,
  currency:LoanObjectCurrencyInterface, 
  principal:number,
  termFrequency:number,
  termPeriodFrequencyType:LoanObjTermPdFrequencyType ,
  numberOfRepayments:number,
  repaymentEvery:number,
  repaymentFrequencyType:LoanObjRepaymentFrequencyType,
  interestRatePerPeriod:number,
  interestRateFrequencyType:LoanObjInterestRateFrequencyType ,
  annualInterestRate:number,
  amortizationType:LoanObjAmortizationType,
  interestType:LoanObjInterestType ,
  interestCalculationPeriodType:LoanObjInterestCalculationPeriodType,
  transactionProcessingStrategyId:number,
  timeline:LoanObjTimeline ,
  summary:LoanObjSummary,    
  linkedAccount:LoanObjLinkedAccount,
  disbursementDetails:[LoanObjDisbursementDetails],
  fixedEmiAmount:number,
  maxOutstandingLoanBalance:number,
  canDisburse:boolean,
  emiAmountVariations:Array<number>,                //kindly review this type
  inArrears:boolean,
  isNPA:boolean,
  overdueCharges:[LoanObjOverDueCharges]        
}
export interface LoanObjDisbursementDetails{
  id:number,
  expectedDisbursementDate:Array<number>,
  principal:number,
  approvedPrincipal:number
}
export interface LoanObjOverDueCharges{
  id:number,
  name:string,
  active:boolean,
  penalty:boolean,
  currency:LoanObjectCurrencyInterface ,
  amount:number,
  chargeTimeType:LoanObjChargeTimeType,
  chargeAppliesTo:LoanObjChargeAppliesTo,
  chargeCalculationType:LoanObjChargeCalType,
  chargePaymentMode:LoanObjChargePaymentMode,
  feeInterval:number,
  feeFrequency:LoanObjFeeFrequency

}  
export interface LoanObjChargeTimeType{
    id:number,
    code:string,   // "chargeTimeType.overdueInstallment",
    value:string
}  
export interface LoanObjChargeTimeType{
  id:number,
  code:string,                      //"chargeTimeType.overdueInstallment",
  value:string

}    
export interface LoanObjChargeAppliesTo{
  id:number,
  code:string,                              //"chargeAppliesTo.loan,
  value:string
}
export interface LoanObjChargeCalType{
  id:number,
  code:string,                              //"chargeCalculationType.percent.of.amount",
  value:string

}
export interface LoanObjChargePaymentMode{
  id:number,
  code:string,     //"chargepaymentmode.regular",
  value:string                //"Regular"
}
export interface LoanObjFeeFrequency{
  id:number,
  code:string,    // "feeFrequencyperiodFrequencyType.weeks",
  value:string //"Weeks"
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
  async retrieve_loan(loan_retrive_config: LoanRetrieveConfig): Promise<LoanRetrieveObjInterface> {
    let retrieve_path = "loans/";
    let response;
    response = await this.fineract_obj.get(retrieve_path, loan_retrive_config);
    return response;
  }


}