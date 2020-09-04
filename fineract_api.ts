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
    post(path: string, body: any): Promise<any> {
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
            }
            ).auth(this._config.client_username, this._config.client_password, false);
        });
    }
    get(path: string, query: any): Promise<any> {
        return new Promise((resolve, reject) => {
            let url = `${this._config.client_base_url}/${path}`;
            let headers = this.defaultHeaders();

            axios({
                method: 'get',
                url,
                headers: headers,
                responseType: 'json',
                auth: {
                    username: this._config.client_username,
                    password: this._config.client_password
                }
            }).then(resolve).catch(reject)
        });
    }



}