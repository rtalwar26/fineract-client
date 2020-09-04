# A simple node/browser client to connect to REST apis of [Apache Fineract server](https://demo.openmf.org/api-docs/apiLive.htm)

## Usage

```javascript
import { FineractAPI } from "fineract-client";

let config = { client_username: "xxx", client_tenant_id: 'default', client_base_url: "https://xxxx.in/fineract-provider/api/v1", client_password: "xxx" };

   let response = await (new FineractAPI(config)).get('clients', args);
    
    let results =  response.body && response.body.pageItems;

    console.log(results);


```

## Run Tests

1. Run `npm install`

2. Create `.env` file in your project's root and place the following contents

```
CBS_BASE_URL=https://xxxx.xxx.xx/fineract-provider/api/v1
CBS_USER=my_cbs_username
CBS_PASSWORD=my_cbs_password
CBS_TENANT=default
```
3. Run `npm test`

```shell
npm test
```