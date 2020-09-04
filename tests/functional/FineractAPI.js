"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FineractAPI_1 = require("../../FineractAPI");
const bdd_1 = require("intern/lib/interfaces/bdd");
const { describe, it } = intern.getInterface('bdd');
const { assert } = intern.getPlugin('chai');
let config;
describe('FineractAPI Tests', () => {
    bdd_1.before(() => {
        require('dotenv').config();
        config = {
            client_base_url: process.env.CBS_BASE_URL,
            client_username: process.env.CBS_USER,
            client_password: process.env.CBS_PASSWORD,
            client_tenant_id: "default"
        };
    });
    it(`FineractAPI :Search Clients Success Response`, () => {
        return (async () => {
            let response = await (new FineractAPI_1.default(config)).get('search', { exactMatch: "false", query: '8971466188', resource: "clients,clientIdentifiers" });
            assert.ok(response.data[0].entityExternalId === "8971466188");
            return response.data;
        })();
    });
    bdd_1.after(() => {
        // Do Tear down
    });
});
