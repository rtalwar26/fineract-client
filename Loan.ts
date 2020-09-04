import FineractAPI from './FineractAPI';

export interface LoanConfig{
    offset?:Number,
    limit?:Number,
    orderBy?:String,
    sortBy?:String,
    officeId?:Number,
    underHierarchy?:String,
    accountNo?:String,
    externalId?:String,
    sqlSearch?:String
}
export default class Loan{

fineract_obj:FineractAPI
constructor(fineract_obj:FineractAPI)
{
   this.fineract_obj=fineract_obj;
}

async list_loan(config:LoanConfig):Promise<any> {
    let path="loans";
    let response;
    response=await this.fineract_obj.get(path,config);
    return response;
    
    
}


}