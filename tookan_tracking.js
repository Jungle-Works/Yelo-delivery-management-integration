let {webhook} = require('./yelo-wh')
const {tookanConfig} = require('./config')
const uuid = require('uuid').v4
const axios = require("axios");

exports.tookanCreateOrder = async function tookanCreateOrder(req, res){
   try {
        let opts = req.body
        const regEx = new RegExp("'", "g");

        opts.job_pickup_datetime = opts.job_pickup_datetime.slice(0 , -3)
        opts.job_pickup_datetime = opts.job_pickup_datetime.replace(regEx , "-")

        opts.job_delivery_datetime = opts.job_delivery_datetime.slice(0 , -3)
        opts.job_delivery_datetime = opts.job_delivery_datetime.replace(regEx , "-")

        let tookanPayload =  {
            "api_key": tookanConfig.api_key,
            "order_id": opts.job_id,
            "team_id":"",
            "auto_assignment":"0",
            "job_description":opts.job_description,
            "job_pickup_phone": opts.job_pickup_phone,
            "job_pickup_name": opts.job_pickup_name,
            "job_pickup_email": opts.job_pickup_email,
            "job_pickup_address":opts.job_pickup_address,
            "job_pickup_latitude":"30.7188978",
            "job_pickup_longitude":"76.810296",
            "job_pickup_datetime":opts.job_pickup_datetime,
            "customer_email":opts.customer_email,
            "customer_username": opts.customer_username,
            "customer_phone": opts.customer_phone,
            "customer_address":"frigate bay 2",
            "latitude":"30.7188978",
            "longitude":"76.810298",
            "job_delivery_datetime": opts.job_delivery_datetime,
            "has_pickup":"1",
            "has_delivery":"1",
            "layout_type":"0",
            "tracking_link":1,
            "timezone":"-330",
            "custom_field_template":"Template_1",
            "meta_data": [{"label":"Price","data":"100"},{"label":"Quantity","data":"100"}],
            "pickup_custom_field_template":"Template_2",
            "pickup_meta_data": [{"label":"Price","data":"100"},{"label":"Quantity","data":"100"}],
            "fleet_id":"",
            "p_ref_images": ["http://tookanapp.com/wp-content/uploads/2015/11/logo_dark.png","http://tookanapp.com/wp-content/uploads/2015/11/logo_dark.png"],
            "ref_images": ["http://tookanapp.com/wp-content/uploads/2015/11/logo_dark.png","http://tookanapp.com/wp-content/uploads/2015/11/logo_dark.png"],
            "notify":1,
            "tags":"",
            "geofence":0,
            "ride_type":0
    }
    let response = await axios({ url : tookanConfig.url, method : tookanConfig.method,  data : tookanPayload });
    res.end(JSON.stringify(response.data))
    console.log(response.data);
    } catch (error) {
        console.log(error)
    }
}





