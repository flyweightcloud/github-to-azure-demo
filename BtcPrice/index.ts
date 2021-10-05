import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { get } from '@flyweight.cloud/request'

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');

    const btcPriceResp = await get('https://api.coindesk.com/v1/bpi/currentprice.json')
    context.log(btcPriceResp.body)
    context.log(btcPriceResp.json)

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: btcPriceResp.json,
        headers: {'Content-Type': 'application/json'}
    };

};

export default httpTrigger;