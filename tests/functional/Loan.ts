
import FineractAPI, { FineractAPIConfig } from "../../FineractAPI";
import { before, after } from "intern/lib/interfaces/bdd";
const { describe, it } = intern.getInterface('bdd');
const { assert } = intern.getPlugin('chai');
const test_path ="test_loans";
const test_loan_config={random:"value"};
const test_response_data={ "totalFliteredRecords":1,"pageItems":[{"id": 1,"accountNo": "000000001",}]};

let config: FineractAPIConfig;
describe('Loan Tests', () => {

    before(() => {
        

       
    });

    it(`Loan :Lists loan success message`, () => {
        return (async () => {
            let response = await (new FineractAPI(config)).get('list_loan', { path: test_path, query:test_loan_config });
            assert.ok(response.data);
            assert.deepEqual(response.data,test_response_data);
            return response.data;
        })();
    });
    after(() => {
        // Do Tear down

    })
});