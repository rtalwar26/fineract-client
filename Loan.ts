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
  activationDate: string
}
export interface LoanCreateConfig {
  dateFormat: string,
  locale: string,
  clientId: string,
  productId: number,
  principal: number,
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
  linkAccountId?: number,
  fixedEmiAmount?: number,
  maxOutstandingLoanBalance?: string,
  disbursementData?: Array<LoanDisbursementData>,
  dataTables?: [LoanDataTables],
  graceOnPrincipalPayment?: string,
  graceOnInterestPayment?: string,
  graceOnInterestCharged?: string,
  allowPartialPeriodInterestCalculation?: boolean,
  graceOnArrearsAgeing?: string,
  createStandingInstructionAtDisbursement?: boolean,          //(requires linkedAccountId if set to true)
  inArrearsTolerance?: number,
  isEqualAmortization: boolean,
  fundId?: number,
  externalId?: string,
  loanOfficerId?: number,
  repaymentFrequencyDayOfWeekType?: number,
  repaymentFrequencyNthDayType?: number,
  repaymentsStartingFromDate?: string,
  allowPartialPeriodInterestCalcualtion: boolean
}
export interface LoanCreateResponse {
  officeId: number,
  clientId: string,
  loanId: number,
  resourceId: number
}
export interface LoanRepaymentSchedule {
  allowPartialPeriodInterestCalcualtion: boolean,
  loanType: string,
  clientId?: string,
  dateFormat: string,
  locale: string,
  productId: number,
  principal: number,
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
  transactionProcessingStrategyId: number,
  submittedOnDate: string
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
  disbursementData?: Array<LoanDisbursementData>
}
export interface LoanApproveChanges {
  status: LoanStatusInterface,
  locale: string,
  dateFormat: string,
  approvedOnDate: string,
  note: string,
  expectedDisbursementDate?: string
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
  accountNumber?: string,
  checkNumber: string,
  routingCode?: string,
  receiptNumber?: string,
  bankNumber?: string
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
  transactionAmount: number,
  paymentTypeId: number,
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
export interface LoanModifiedInstallments {
  dueDate: string,
  modifiedDueDate: string
}
export interface LoanDeletedInstallments {
  dueDate: string,
}
export interface LoanNewInstallments {
  dueDate: string,
  installmentAmount: string
}
export interface LoanExceptions {
  modifiedinstallments: [LoanModifiedInstallments],
  deletedinstallments: [LoanDeletedInstallments],
  newinstallments: [LoanNewInstallments]
}
export interface LoanRepaymentTermVariations {
  locale: string,
  dateFormat: string,
  exceptions: LoanExceptions
}
export interface LoanRepaymentTermVariatnResponse {
  currency: LoanCurrencyInterface,
  loanTermInDays: number,
  totalPrincipalDisbursed: number,
  totalPrincipalExpected: number,
  totalInterestCharged: number,
  totalFeeChargesCharged: number,
  totalPenaltyChargesCharged: number,
  totalRepaymentExpected: number,
  periods: [LoanRepaymentPeriod]
}
export interface LoanUpdateRepaymentTermType {
  id: number,
  code: string,        //"loanTermType.dueDate",
  value: string
}
export interface LoanUpdateRepaymentTermVariations {
  id: number,
  termType: LoanUpdateRepaymentTermType,
  termVariationApplicableFrom: Array<number>,
  dateValue: Array<number>,
  isSpecificToInstallment: boolean
}
export interface LoanUpdateRepaymentTermVariationChanges {
  loanTermVariations: [LoanUpdateRepaymentTermVariations]
}
export interface LoanUpdateRepaymentTermVariatnResponse {
  loanId: string,
  changes: LoanUpdateRepaymentTermVariationChanges
}
export interface LoanRemoveTermVariationChanges {
  removedEntityIds: Array<number>
}
export interface LoanRemoveTermVariation {
  loanId: number,
  changes: LoanRemoveTermVariationChanges
}
export interface LoanRetrieveTxnDetailsType {
  id: number,
  code: string                 //"loanTransactionType.repayment",
  value: string               //"Repayment",
  disbursement: boolean,
  repaymentAtDisbursement: boolean,
  repayment: boolean,
  contra: boolean,
  waiveInterest: boolean,
  waiveCharges: boolean,
  writeOff: boolean,
  recoveryRepayment: boolean
}
export interface LoanRetrieveTxnDetailsResponse {
  id: number,
  type: LoanRetrieveTxnDetailsType,
  date: Array<number>,                         // [2012, 5, 14],
  manuallyReversed: boolean,
  currency: LoanCurrencyInterface,
  amount: number,
  interestPortion: number
}
export interface LoanChargeTimeType {
  id: number,
  code: string,                         //"chargeTimeType.disbursement",
  value: string                   // "Disbursement"
}
export interface LoanChargeCalculationType {
  id: number,
  code: string,                         //"chargeCalculationType.flat",
  value: string                         //"Flat"
}
export interface LoanChargeRetrieve {
  id: number,
  chargeId: number,
  name: string,
  chargeTimeType: LoanChargeTimeType
  chargeCalculationType: LoanChargeCalculationType,
  percentage: number,
  amountPercentageAppliedTo: number,
  currency: LoanCurrencyInterface,
  amount: number,
  amountPaid: number,
  amountWaived: number,
  amountWrittenOff: number,
  amountOutstanding: number,
  amountOrPercentage: number,
  penalty: boolean
}
export interface LoanGuarantorType {
  id: number,
  code: string,    //"guarantor.existing.customer",
  value: string
}
export interface LoanListGuarantorsResponse {
  id: number,
  loanId: number,
  guarantorType: LoanGuarantorType,
  firstname: string,
  lastname: string,
  officeName: string,
  joinedDate: Array<number>
}
export interface LoanCollateralType {
  id: number,
  name: string      //"Gold"
}
export interface LoanListCollaterals {
  id: number,
  type: LoanCollateralType,
  value: number,
  description: string,
  currency: LoanCurrencyInterface
}
export interface LoanApplicationDeleteResponse {
  officeId: number,
  clientId: number,
  loanId: number,
  resourceId: number
}
export interface LoanGuarantorDeleteResponse {
  officeId: number,
  loanId: number,
  resourceId: number
}
export interface LoanCollateralDeleteResponse {
  loanId: number,
  resourceId: number
}
export interface LoanChargeUpdate {
  dateFormat: string,
  locale: string,
  amount: number,
  dueDate: string
}
export interface LoanChargeUpdateChanges {
  dueDate: string,
  dateFormat: string,
  locale: string,
  amount: number
}
export interface LoanChargeUpdateResponse {
  officeId: number,
  clientId: number,
  loanId: number,
  resourceId: number,
  changes: LoanChargeUpdateChanges
}
export interface LoanUpdateGuarantor {
  entityId: number
}
export interface LoanUpdateGuarantorResponse {
  officeId: number,
  resourceId: number,
  changes: LoanUpdateGuarantor
}
export interface LoanUpdateCollateral {
  description: string
}
export interface LoanUpdateCollateralResponse {
  loanId: number,
  resourceId: number,
  changes: LoanUpdateCollateral
}
export interface LoanRescheduleStatusEnum {
  id: number,
  code: string,     //"loanStatusType.submitted.and.pending.approval",
  value: string,       // "Submitted and pending approval",
  pendingApproval: boolean,
  approved: boolean,
  rejected: boolean
}
export interface LoanRescheduleReasonCodeValue {
  id: number,
  name: string,// "Passport",
  isActive: boolean
}
export interface LoanRescheduleTimeline {
  submittedOnDate: Array<number>,
  submittedByUsername: string,
  submittedByFirstname: string,
  submittedByLastname: string
}
export interface LoanRetrieveRescheduleRequest {
  id: number,
  loanId: string,
  clientId: number,
  clientName: string,
  loanAccountNumber: string,
  statusEnum: LoanRescheduleStatusEnum,
  rescheduleFromInstallment: number,
  rescheduleFromDate: Array<number>,
  recalculateInterest: boolean,
  rescheduleReasonCodeValue: LoanRescheduleReasonCodeValue,
  timeline: LoanRescheduleTimeline,
  rescheduleReasonComment: string,
  loanTermVariationsData: [LoanUpdateRepaymentTermVariations]
}
export interface LoanRepaymentSchedulePreviewRetrieve {
  currency: LoanCurrencyInterface,
  loanTermInDays: number,
  totalPrincipalDisbursed: number,
  totalPrincipalExpected: number,
  totalPrincipalPaid: number,
  totalInterestCharged: number,
  totalFeeChargesCharged: number,
  totalPenaltyChargesCharged: number,
  totalRepaymentExpected: number,
  totalOutstanding: number,
  periods: [LoanRepaymentPeriod]
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
    let loan_recover_guarantee_obj = null;
    let path = `loans/${loanId}?command=recoverGuarantees`;
    let response;
    response = await this.fineract_obj.post(path, loan_recover_guarantee_obj);
    return response.data;
  }
  async loan_transaction_repayment(loanId: number, loan_repayment_config: LoanRepayment): Promise<LoanRepaymentResponse> {
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
    let loan_undo_writeoff_config = null;
    let path = `loans/${loanId}/transactions?command=undowriteoff`;
    let response;
    response = await this.fineract_obj.post(path, loan_undo_writeoff_config);
    return response.data;
  }
  async loan_preclose_template(loanId: string): Promise<LoanPrecloseTemplate> {
    let loan_preclose_config = null;
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
  async calculate_loan_repayment_termVariation(loanId: string, loan_repayTermVariatn_config: LoanRepaymentTermVariations): Promise<LoanRepaymentTermVariatnResponse> {
    let path = `loans/${loanId}/schedule?command=calculateLoanSchedule`;
    let response;
    response = await this.fineract_obj.post(path, loan_repayTermVariatn_config);
    return response.data;
  }
  async update_loan_repayment_termVariation(loanId: string, loan_update_repayTermVariatn: LoanRepaymentTermVariations): Promise<LoanUpdateRepaymentTermVariatnResponse> {
    let path = `loans/${loanId}/schedule?command=addVariations`;
    let response;
    response = await this.fineract_obj.post(path, loan_update_repayTermVariatn);
    return response.data;
  }
  async remove_loan_repayment_termVariation(loanId: string): Promise<LoanRemoveTermVariation> {
    let path = `loans/${loanId}/schedule?command=deleteVariations`;
    let loan_remove_repayTermVariatn = null;
    let response;
    response = await this.fineract_obj.post(path, loan_remove_repayTermVariatn);
    return response.data;
  }
  async retrieve_transaction_details(loanId: string, transactionId: string): Promise<LoanRetrieveTxnDetailsResponse> {
    let path = `loans/${loanId}/transactions/${transactionId}`;
    let loan_retrieveTxnDetail_config = null;
    let response;
    response = await this.fineract_obj.get(path, loan_retrieveTxnDetail_config);
    return response.data;
  }
  async retrieve_loan_charge(loanId: string, chargeId: string): Promise<LoanChargeRetrieve> {
    let path = `loans/${loanId}/charges/${chargeId}`;
    let loan_retrieveCharge_config = null;
    let response;
    response = await this.fineract_obj.get(path, loan_retrieveCharge_config);
    return response.data;
  }
  async loan_list_guarantors(loanId: string): Promise<[LoanListGuarantorsResponse]> {
    let path = `loans/${loanId}/guarantors`;
    let loan_list_guarantors_config = null;
    let response;
    response = await this.fineract_obj.get(path, loan_list_guarantors_config);
    return response.data;
  }
  async loan_retrieve_guarantor(loanId: string, guarantorId: string): Promise<LoanListGuarantorsResponse> {
    let path = `loans/${loanId}/guarantors/${guarantorId}`;
    let loan_retrieve_guarantor_config = null;
    let response;
    response = await this.fineract_obj.get(path, loan_retrieve_guarantor_config);
    return response.data;
  }
  async loan_list_collaterals(loanId: string): Promise<[LoanListCollaterals]> {
    let path = `loans/${loanId}/collaterals`;
    let loan_list_collaterals_config = null;
    let response;
    response = await this.fineract_obj.get(path, loan_list_collaterals_config);
    return response.data;
  }
  async loan_retrieve_collateral(loanId: string, guarantorId: string): Promise<LoanListCollaterals> {
    let path = `loans/${loanId}/collaterals/${guarantorId}`;
    let loan_retrieve_collateral_config = null;
    let response;
    response = await this.fineract_obj.get(path, loan_retrieve_collateral_config);
    return response.data;
  }
  async retrieve_loan_rescheduleRequest(requestId: string): Promise<LoanRetrieveRescheduleRequest> {
    let path = `rescheduleloans/${requestId}`;
    let loan_retrieve_rescheduleRequest = null;
    let response;
    response = await this.fineract_obj.get(path, loan_retrieve_rescheduleRequest);
    return response.data;
  }
  async retrieve_preview_newLoanRepaymentSchedule(requestId: string): Promise<LoanRepaymentSchedulePreviewRetrieve> {
    let path = `rescheduleloans/${requestId}?command=previewLoanReschedule`;
    let retrieve_previewLoanReschedule = null;
    let response;
    response = await this.fineract_obj.get(path, retrieve_previewLoanReschedule);
    return response.data;
  }
  async delete_loan_application(loanId: string): Promise<LoanApplicationDeleteResponse> {
    let path = `loans/${loanId}`;
    let loan_delete_config = null;
    let response;
    response = await this.fineract_obj.delete(path, loan_delete_config);
    return response.data;
  }
  async delete_loan_charge(loanId: string, chargeId: string): Promise<LoanApplicationDeleteResponse> {
    let path = `loans/${loanId}/charges/${chargeId}`;
    let loanCharge_delete_config = null;
    let response;
    response = await this.fineract_obj.delete(path, loanCharge_delete_config);
    return response.data;
  }
  async delete_loan_guarantor(loanId: string, guarantorId: string): Promise<LoanGuarantorDeleteResponse> {
    let path = `loans/${loanId}/guarantors/${guarantorId}`;
    let loanGuarantor_delete_config = null;
    let response;
    response = await this.fineract_obj.delete(path, loanGuarantor_delete_config);
    return response.data;
  }
  async delete_loan_collateral(loanId: string, collateralId: string): Promise<LoanCollateralDeleteResponse> {
    let path = `loans/${loanId}/collaterals/${collateralId}`;
    let loanCollateral_delete_config = null;
    let response;
    response = await this.fineract_obj.delete(path, loanCollateral_delete_config);
    return response.data;
  }
  async update_loan_charge(loanId: string, chargeId: string, loanCharge_update_config: LoanChargeUpdate): Promise<LoanChargeUpdateResponse> {
    let path = `loans/${loanId}/charges/${chargeId}`;
    let response;
    response = await this.fineract_obj.put(path, loanCharge_update_config);
    return response.data;
  }
  async update_loan_guarantor(loanId: string, guarantorId: string, loanGuarantor_update_config: LoanUpdateGuarantor): Promise<LoanUpdateGuarantorResponse> {
    let path = `loans/${loanId}/guarantors/${guarantorId}`;
    let response;
    response = await this.fineract_obj.put(path, loanGuarantor_update_config);
    return response.data;
  }
  async update_loan_collateral(loanId: string, collateralId: string, loanCollateral_update_config: LoanUpdateCollateral): Promise<LoanUpdateCollateralResponse> {
    let path = `loans/${loanId}/collaterals/${collateralId}`;
    let response;
    response = await this.fineract_obj.put(path, loanCollateral_update_config);
    return response.data;
  }
  async fetch_loan_details_byloanId(loanId: number, search_query_obj: any): Promise<[any]> {
    let path = `loans/${loanId}`;
    let response = await this.fineract_obj.get(path, search_query_obj);
    return response.data;
  }
}

