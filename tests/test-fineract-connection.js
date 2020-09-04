"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
const config = {
    client_base_url: process.env.CBS_BASE_URL,
    client_username: process.env.CBS_USER,
    client_password: process.env.CBS_PASSWORD,
    client_tenant_id: "default"
};
(async () => {
    let response = await (new __1.FineractAPI(config)).get('clients', { externalId: '8971466188' });
    return response.body;
})().then(data => console.log({ data }));
