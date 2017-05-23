var rp = require("request-promise");
var qs = require('querystring');

class EShop {
    constructor() { }

    listAmericas() {
        var url = "https://www.nintendo.com/json/content/get/filter/game";
        var params = {
            limit: 40,
            system: 'switch',
            sort: 'title',
            direction: 'asc',
            availability: ['now', 'prepurchase'],
            shop: 'ncom'
        }

        return rp({
            uri: url + '?' + qs.stringify(params),
            method: "GET",
            json: true
        });
    }

    listEurope() {
        var url = 'http://search.nintendo-europe.com/en/select'
        var default_params = {
            fl: 'product_code_txt,title,date_from,nsuid_txt,image_url_sq_s',
            fq: 'type:GAME AND (system_type:"nintendoswitch_gamecard" OR system_type:"nintendoswitch_downloadsoftware" OR system_type:"nintendoswitch_digitaldistribution") AND product_code_txt:*',
            q: '*',
            rows: 9999,
            sort: 'sorting_title asc',
            start: 0,
            wt: 'json'
        }
        return rp({
            uri: url + '?' + qs.stringify(default_params),
            method: "GET",
            json: true
        });
    }

}

module.exports = EShop