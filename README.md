# A simple node/browser client to connect to REST apis of [Apache Fineract server](https://demo.openmf.org/api-docs/apiLive.htm)

## Usage

```javascript
import { CBSAPI } from "fineract-client";

let config = { client_username: "xxx", client_tenant_id: 'default', client_base_url: "https://xxxx.in/fineract-provider/api/v1", client_password: "xxx" };

   let response = await (new CBSAPI(config)).get('clients', args);
    
    let results =  response.body && response.body.pageItems;

    console.log(results);


```

## Run Tests
```shell
CBS_BASE_URL=https://xxxx.in/fineract-provider/api/v1 CBS_USER=xxx
CBS_PASSWORD=xxxx node tests/test-fineract-connection.js
```