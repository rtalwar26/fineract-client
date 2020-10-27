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
    locale: string
    mobileNumber: string
    relationshipId: number //code value is given for  relationshipId

}
export interface ClientInfo {
    officeId: number,
    firstname: string,
    lastname: string,
    externalId?: string,
    dateFormat?: string,
    locale?: string,
    active: boolean,
    activationDate: string,
    address?: object,
    submittedOnDate?: string,
    savingsProductId?: number,
    familyMembers?: ClientInfoFamily,
    //datatables: Array<ClientDatatables>,
    clientClassificationId?: number,
    clientTypeId?: number,
    dateOfBirth?: string,
    genderId?: number,
    legalFormId: number
    mobileNo?: string,
    accountNo?: string,
    staffId?: number,
    groupId?: number
}
export interface ClientCreateResponse {
    rollbackTransaction: boolean,
    commandId: number,
    resourceId: number

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
    officeName: string

}
export interface ClientListResponse {
    totalFilteredRecords: number,
    pageItems: [ClientListInfo],

}
export interface ClientLoginResponse {
    success: boolean,
    entityId: number  // <--- this is the client id in the fineract system
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

}