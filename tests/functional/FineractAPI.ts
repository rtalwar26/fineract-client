
import { FineractAPI } from "../..";
import { before, after } from "intern/lib/interfaces/bdd";
const { describe, it } = intern.getInterface('bdd');
const { assert } = intern.getPlugin('chai');

let config;
describe('FineractAPI Tests', () => {

    before(() => {
        require('dotenv').config();

        config = {
            client_base_url: process.env.CBS_BASE_URL, //https://cbsdemo.kred.cloud/fineract-provider/api/v1
            client_username: process.env.CBS_USER,
            client_password: process.env.CBS_PASSWORD,
            client_tenant_id: "default"
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