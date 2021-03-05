import FineractAPI from "./FineractAPI";
// export interface ClientDatatables {
//     registeredTableName: string,
//     data: object
// }
export interface ClientInfoFamily {
    age: string,
    dateFormat: string,
    dateOfBirth: string,
    firstName: string,
    genderId: number, // codevalue is given for genderId female=15,male=14 
    isDependent: boolean,
    locale: string,
    mobileNumber: string,
    relationshipId: number //code value is given for  relationshipId

}
export interface ClientInfo {
    officeId?: number,
    firstname: string,
    lastname: string,
    externalId?: string,
    dateFormat?: string,
    locale?: string,
    active?: boolean,
    activationDate?: string,
    address?: object,
    submittedOnDate?: string,
    savingsProductId?: number,
    familyMembers?: ClientInfoFamily,
    //datatables: Array<ClientDatatables>,
    clientClassificationId?: number,
    clientTypeId?: number,
    dateOfBirth?: string,
    genderId?: number,
    legalFormId?: number,
    mobileNo: string,
    accountNo?: string,
    staffId?: number,
    groupId?: number
}
export interface ClientCreateResponse {
    rollbackTransaction?: boolean,
    commandId?: number,
    resourceId?: number,
    officeId?: number,
    clientId?: number

}
export interface ClientStatus {
    id: number,
    code: string,
    value: string
}
export interface ClientListInfo {
    id: number,
    accountNo: string,
    status: ClientStatus,
    active: boolean,
    activationDate: Array<number>,
    fullname: string,
    displayName: string,
    officeId: number,
    officeName: string,
    mobileNo: string

}
export interface DataTableCreate {
    datatableName: string,
    apptableName: string,
    columns: [DataTableColumns],
    multiRow?: boolean
}
export interface DataTableColumns {
    name: string,
    type: string,
    code?: string,
    length?: number,
    mandatory?: boolean

}
export interface DataTableCreateResponse {
    resourceIdentifier: string
}
export interface ClientListResponse {
    totalFilteredRecords: number,
    pageItems: [ClientListInfo],

}
export interface ClientLoginResponse {
    success: boolean,
    entityId: number  // <--- this is the client id in the fineract system
}
export interface ClientCreateEntryDataTable {
    email?: string,
    pre_approved_credit?: number,
    clientId?: number,
    locale: string,
    dateFormat: string,
    accountNo?: string,
    bankName?: string,
    bankIFSCCode?: string,
    bankAccountName?: string,
    PANnumber?: string,
    Aadhaar?: string,
    paysack_company_id?: string,
    employerName?: string,
    monthlySalary?: number,
    address1?: string,
    address2?: string,
    city?: string,
    state?: string,
    country?: string,
    pincode?: string
}
export default class Clients {
    fineract_obj: FineractAPI
    constructor(fineract_obj: FineractAPI) {
        this.fineract_obj = fineract_obj;
    }
    async list_clients(): Promise<ClientListResponse> {
        let client_config = {}
        let path = 'clients';
        let response;
        response = await this.fineract_obj.get(path, client_config);
        return response.data;
    }
    async create_clients(client_create_config: ClientInfo): Promise<ClientCreateResponse> {

        let path = 'clients';
        let response = await this.fineract_obj.post(path, client_create_config);
        return response.data;
    }

    async search_client_by_mobile_no(mobile_no: string): Promise<[any]> {

        let search_query_obj = {
            exactMatch: "false",
            query: mobile_no,
            resource: "clients,clientIdentifiers",
        }
        let path = 'search';
        let response = await this.fineract_obj.get(path, search_query_obj);
        return response.data;
    }

    async create_datatable(datatable_create_config: DataTableCreate): Promise<DataTableCreateResponse> {

        let path = 'datatables';
        let response = await this.fineract_obj.post(path, datatable_create_config);
        return response.data;

    }

    async clients_retrieve(clientId: number): Promise<any> {
        let path = `clients/${clientId}`;
        let response = await this.fineract_obj.get(path, clientId);
        return response.data;
    }

    async clients_accounts_retrieve(clientId: number): Promise<any> {
        let path = `clients/${clientId}/accounts`;
        let response = await this.fineract_obj.get(path, clientId);
        return response.data;
    }

    async create_datatable_entry(datatable_name: string, create_entrydatatable_config: ClientCreateEntryDataTable, clientId: string): Promise<any> {

        let path = `datatables/${datatable_name}/${clientId}`;
        let response = await this.fineract_obj.post(path, create_entrydatatable_config);
        return response.data;

    }

    async get_datatable_details(datatable_name: string, clientId: number, search_query_obj: any): Promise<any> {

        let path = `datatables/${datatable_name}/${clientId}`;
        let response = await this.fineract_obj.get(path, search_query_obj);
        return response.data;

    }

    async update_datatable_details(datatable_name: string, clientId: number, update_datatable_config: ClientCreateEntryDataTable): Promise<any> {

        let path = `datatables/${datatable_name}/${clientId}?` + 'genericResultSet=true';
        let response = await this.fineract_obj.put(path, update_datatable_config);
        return response.data;

    }
    async update_client(clientId: number, update_client_config: ClientInfo): Promise<ClientCreateResponse> {

        let path = `clients/${clientId}`;
        let response = await this.fineract_obj.put(path, update_client_config);
        return response.data;

    }

}