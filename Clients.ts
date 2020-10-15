import FineractAPI from "./FineractAPI";
export interface ClientDatatables {
    registeredTableName: string,
    data: object
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
    submittedOnDate?: string,
    savingsProductId?: number,
    datatables: Array<ClientDatatables>,
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
    officeId: number,
    clientId: number,
    resourceId: number,
    savingsId: number,
    groupId?: number
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
    pageItems: Array<ClientListInfo>,

}
export default class Clients {
    fineract_obj: FineractAPI
    constructor(fineract_obj: FineractAPI) {
        this.fineract_obj = fineract_obj;
    }
    async list_clients(config?: ClientInfo): Promise<[ClientListResponse]> {
        let path = 'clients';
        let response;
        response = await this.fineract_obj.get(path, config);
        return response.data;
    }
    async create_clients(client_create_config: ClientInfo): Promise<ClientCreateResponse> {
        console.log("inside create_clients in fineract client");
        let path = 'clients';
        let response = await (this.fineract_obj).post(path, client_create_config,);
        console.log("request passed inside finearct", client_create_config);
        return response.data;
    }

}