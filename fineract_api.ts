const request = require('request');
const req = request.defaults();

export interface FineractAPIConfig {
    client_base_url:string,    
    client_username: string,
    client_password: string,
    client_tenant_id: string
}

export default class FineractAPI {
    private _config: FineractAPIConfig


    private defaultHeaders(isDev: boolean = false): Object {
        return {
            'Content-Type': 'application/json',
            'Accept': 'application/json, text/plain, */*',
            'Fineract-Platform-TenantId':this._config.client_tenant_id
           
        }
    }
   
    constructor(config: FineractAPIConfig) {
        this._config = config;


    }
    post(path: string, body: any): Promise<any> {
        return new Promise((resolve, reject) => {


            req.post({
                uri: `${this._config.client_base_url}/${path}`,                
                headers: this.defaultHeaders(),
                body: JSON.stringify(body),
                json:true
            }, function (error, response, b) {
                error ? reject(error) : resolve(response);
            }
            ).auth(this._config.client_username, this._config.client_password, false);
        });
    }
    get(path: string, query: any): Promise<any> {
        return new Promise((resolve, reject) => {


            req.get({
                uri: `${this._config.client_base_url}/${path}`,                
                headers: this.defaultHeaders(),
                qs: query,
                json:true
            }, function (error, response, b) {
                error ? reject(error) : resolve(response);
            }
            ).auth(this._config.client_username, this._config.client_password, false);;
        });
    }



}