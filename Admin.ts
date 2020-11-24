import FineractAPI from './FineractAPI';
export interface AdminReportColumnHeaders {

    columnName: string,
    columnType: string,
    isColumnNullable: boolean,
    isColumnPrimaryKey: boolean,
    columnValues: Array<string>
}
export interface AdminReportRow {
    row: Array<string>
}
export interface AdminRunreport {
    columnHeaders: [AdminReportColumnHeaders],
    data: [AdminReportRow]

}
export default class Admin {

    fineract_obj: FineractAPI

    constructor(fineract_obj: FineractAPI) {
        this.fineract_obj = fineract_obj;
    }

    async run_report(report_name: string, adminLoanSummary_query_obj: any): Promise<AdminRunreport> {
        let path = `runreports/${report_name}`;
        let response = await this.fineract_obj.get(path, adminLoanSummary_query_obj);
        return response.data;

    }
}