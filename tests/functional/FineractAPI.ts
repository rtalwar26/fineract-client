
import FineractAPI, { FineractAPIConfig } from "../../FineractAPI";
import { before, after } from "intern/lib/interfaces/bdd";
const { describe, it } = intern.getInterface('bdd');
const { assert } = intern.getPlugin('chai');

let config: FineractAPIConfig;
describe('FineractAPI Tests', () => {

    before(() => {
        require('dotenv').config();

        config = {
            client_base_url: process.env.CBS_BASE_URL as string,
            client_username: process.env.CBS_USER as string,
            client_password: process.env.CBS_PASSWORD as string,
            client_tenant_id: process.env.CBS_TENANT as string
        };
    });

    it(`FineractAPI :Search Clients Success Response`, () => {
        return (async () => {
            let response = await (new FineractAPI(config)).get('search', { exactMatch: "false", query: '8971466188', resource: "clients,clientIdentifiers" });
            assert.ok(response.data[0].entityExternalId === "8971466188");
            return response.data;
        })();
    });
    after(() => {
        // Do Tear down

    })
});