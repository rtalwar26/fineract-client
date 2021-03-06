"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FineractAPI_1 = require("../../FineractAPI");
const bdd_1 = require("intern/lib/interfaces/bdd");
const Loan_1 = require("../../Loan");
const { describe, it } = intern.getInterface('bdd');
const { assert } = intern.getPlugin('chai');
// const test_loan_config={ offset:1,limit:2,orderBy:"LoanId",sortBy:"Descending",officeId: 112,underHierarchy:"random",
//     accountNo:"10090100678976",externalId:"Ex0987",sqlSearch:"test_sql"};
//const test_response_data={ "totalFliteredRecords":1,"pageItems":[{"id": 1,"accountNo": "000000001",}]};
const test_loan_id = "1";
// const test_loan_retrieve_config={associations:["all"]}
let config;
describe('Loan Tests', () => {
    bdd_1.before(() => {
        require('dotenv').config();
        config = {
            client_base_url: process.env.CBS_BASE_URL,
            client_username: process.env.CBS_USER,
            client_password: process.env.CBS_PASSWORD,
            client_tenant_id: process.env.CBS_TENANT
        };
    });
    it(`Loan :Lists loan success message`, () => {
        return (async () => {
            let loan_obj = new Loan_1.default(new FineractAPI_1.default(config));
            let response = await loan_obj.list_loan();
            assert.ok(response);
            return response;
        })();
    });
    it(`Loan :Retrieve loan success message`, () => {
        return (async () => {
            let loan_obj = new Loan_1.default(new FineractAPI_1.default(config));
            let response = await loan_obj.retrieve_loan(test_loan_id);
            assert.ok(response);
            return response;
        })();
    });
    bdd_1.after(() => {
        // Do Tear down
    });
});
