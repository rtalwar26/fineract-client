"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios = require('axios');
class FineractAPI {
    defaultHeaders(isDev = false) {
        return {
            'Fineract-Platform-TenantId': this._config.client_tenant_id,
            'Accept-Encoding': "gzip, deflate"
        };
    }
    constructor(config) {
        this._config = config;
    }
    post(path, body) {
        return new Promise((resolve, reject) => {
            axios({
                method: "post",
                url: `${this._config.client_base_url}/${path}`,
                headers: this.defaultHeaders(),
                data: body,
                responseType: 'json',
                auth: {
                    username: this._config.client_username,
                    password: this._config.client_password
                }
            }, function (error, response, b) {
                error ? reject(error) : resolve(response);
            }).auth(this._config.client_username, this._config.client_password, false);
        });
    }
    get(path, query) {
        return new Promise((resolve, reject) => {
            let url = `${this._config.client_base_url}/${path}`;
            let headers = this.defaultHeaders();
            axios({
                method: 'get',
                url,
                headers: this.defaultHeaders(),
                responseType: 'json',
                auth: {
                    username: this._config.client_username,
                    password: this._config.client_password
                }
            }).then(resolve).catch(reject);
        });
    }
}
exports.default = FineractAPI;
