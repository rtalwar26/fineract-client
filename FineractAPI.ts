const axios = require('axios');


export interface FineractAPIConfig {
    client_base_url: string,
    client_username: string,
    client_password: string,
    client_tenant_id: string
}

export default class FineractAPI {
    private _config: FineractAPIConfig


    private defaultHeaders(isDev: boolean = false): Object {
        return {
            'Fineract-Platform-TenantId': this._config.client_tenant_id,
            'Accept-Encoding': "gzip, deflate"

        }
    }

    constructor(config: FineractAPIConfig) {
        this._config = config;


    }
    async post(path: string, body: any): Promise<any> {


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
    async put(path: string, body: any): Promise<any> {



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
    async get(path: string, query: any): Promise<any> {

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
    async delete(path: string, body: any): Promise<any> {



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