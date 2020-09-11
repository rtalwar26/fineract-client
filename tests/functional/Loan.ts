import FineractAPI, { FineractAPIConfig } from "../../FineractAPI";
import { before, after } from "intern/lib/interfaces/bdd";
import Loan from "../../Loan";
const { describe, it } = intern.getInterface('bdd');
const { assert } = intern.getPlugin('chai');
const test_loan_config={ offset:1,limit:2,orderBy:"LoanId",sortBy:"Descending",officeId: 112,underHierarchy:"random",
    accountNo:"10090100678976",externalId:"Ex0987",sqlSearch:"test_sql"};
//const test_response_data={ "totalFliteredRecords":1,"pageItems":[{"id": 1,"accountNo": "000000001",}]};
const test_loan_id="1";
const test_loan_retrieve_config={associations:["all"]}

let config: FineractAPIConfig;


describe('Loan Tests', () => {

    before(() => {
        require('dotenv').config();

        config = {
            client_base_url: process.env.CBS_BASE_URL as string,
            client_username: process.env.CBS_USER as string,
            client_password: process.env.CBS_PASSWORD as string,
            client_tenant_id: process.env.CBS_TENANT as string
        };    
    
    });

    it(`Loan :Lists loan success message`, () => {
        return (async () => {
           
            let loan_obj=new Loan(new FineractAPI(config));            
            let response=await loan_obj.list_loan();            
            assert.ok(response);           
            return response;
        })();
    });
    it(`Loan :Retrieve loan success message`, () => {
        return (async () => {
            let loan_obj=new Loan(new FineractAPI(config));
            let response=await loan_obj.retrieve_loan(test_loan_id);
            assert.ok(response);
            return response;
        })();
    });


    after(() => {
        // Do Tear down

    })
});