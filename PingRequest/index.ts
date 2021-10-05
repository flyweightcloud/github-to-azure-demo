import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { get } from '@flyweight.cloud/request'

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');

    const btcPriceResp = await get('https://api.coindesk.com/v1/bpi/currentprice.json')

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: btcPriceResp.json
    };

};

export default httpTrigger;