"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require('request');
const req = request.defaults();
class FineractAPI {
    defaultHeaders(isDev = false) {
        return {
            'Content-Type': 'application/json',
            'Accept': 'application/json, text/plain, */*',
            'Fineract-Platform-TenantId': this._config.client_tenant_id
        };
    }
    constructor(config) {
        this._config = config;
    }
    post(path, body) {
        return new Promise((resolve, reject) => {
            req.post({
                uri: `${this._config.client_base_url}/${path}`,
                headers: this.defaultHeaders(),
                body: JSON.stringify(body),
                json: true
            }, function (error, response, b) {
                error ? reject(error) : resolve(response);
            }).auth(this._config.client_username, this._config.client_password, false);
        });
    }
    get(path, query) {
        return new Promise((resolve, reject) => {
            req.get({
                uri: `${this._config.client_base_url}/${path}`,
                headers: this.defaultHeaders(),
                qs: query,
                json: true
            }, function (error, response, b) {
                error ? reject(error) : resolve(response);
            }).auth(this._config.client_username, this._config.client_password, false);
            ;
        });
    }
}
exports.default = FineractAPI;
