"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios = require('axios');
const FormData = require("form-data");
class FineractAPI {
    constructor(config) {
        this._config = config;
    }
    defaultHeaders(isDev = false) {
        return {
            'Fineract-Platform-TenantId': this._config.client_tenant_id,
            'Accept-Encoding': "gzip, deflate"
        };
    }
    async post(path, body) {
        return axios({
            method: "post",
            url: `${this._config.client_base_url}/${path}`,
            headers: this.defaultHeaders(),
            data: body,
            responseType: 'json',
            auth: {
                username: this._config.client_username,
                password: this._config.client_password
            }
        });
    }
    async post_formdata(path, body, name, description) {
        var data = new FormData();
        data.append('name', name);
        data.append('description', description);
        data.append('file', body);
        return axios({
            method: "post",
            url: `${this._config.client_base_url}/${path}`,
            headers: { ...this.defaultHeaders(), 'Content-Type': 'multipart/form-data' },
            data: data,
            responseType: 'json',
            auth: {
                username: this._config.client_username,
                password: this._config.client_password
            }
        });
    }
    async put(path, body) {
        return axios({
            method: "put",
            url: `${this._config.client_base_url}/${path}`,
            headers: this.defaultHeaders(),
            data: body,
            responseType: 'json',
            auth: {
                username: this._config.client_username,
                password: this._config.client_password
            }
        });
    }
    async get(path, query) {
        let url = `${this._config.client_base_url}/${path}`;
        let headers = this.defaultHeaders();
        return axios({
            method: 'get',
            url: `${url}`,
            params: query,
            headers: headers,
            responseType: 'json',
            auth: {
                username: this._config.client_username,
                password: this._config.client_password
            }
        });
    }
    async delete(path, body) {
        return axios({
            method: "delete",
            url: `${this._config.client_base_url}/${path}`,
            headers: this.defaultHeaders(),
            data: body,
            responseType: 'json',
            auth: {
                username: this._config.client_username,
                password: this._config.client_password
            }
        });
    }
}
exports.default = FineractAPI;
