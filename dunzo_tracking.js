let {webhook} = require('./yelo-wh')
const {dunzoConfig} = require('./config')
const uuid = require('uuid').v4
const axios = require("axios");

exports.dunzoCreateOrder = async function dunzoCreateOrder(req, res){
   try {
         let dunzoPayload = {
        "request_id": uuid(),
        "pickup_details":{
           "lat":webhook.job_pickup_latitude,
           "lng":webhook.job_pickup_longitude,
           "address":{
              "apartment_address":"200 Block 4",
              "street_address_1":"Suncity Apartments",
              "street_address_2":"Bellandur",
              "landmark":"Iblur lake",
              "city":"Bangalore",
              "state":"Karnataka",
              "pincode":"560103",
              "country":"India"
           }
        },
        "drop_details":{
           "lat":webhook.job_latitude,
           "lng":webhook.job_longitude,
           "address":{
              "apartment_address":"204 Block 4",
              "street_address_1":"Suncity Apartments",
              "street_address _2":"Bellandur",
              "landmark":"Iblur lake",
              "city":"Bangalore",
              "state":"Karnataka",
              "pincode":"560103",
              "country":"India"
           }
        },
        "sender_details":{
           "name":"Puneet",
           "phone_number":"9999999999"
        },
        "receiver_details":{
           "name":"Vijendra",
           "phone_number":"9999999998"
        },
        "otp_required":true,
        "package_content":[
           "Documents | Books",
           "Clothes | Accessories",
           "Electronic Items"
        ],
        "package_approx_value":250,
        "special_instructions":"Fragile items. Handle with great care!!",
        "payment_method":"COD",
        "payment_data":{
           "amount":990.0,
           "collect_delivery_charge":true
        }
     }
    let response = await axios({ url : dunzoConfig.url, method : dunzoConfig.method, headers : dunzoConfig.headers,  data : dunzoPayload});
    res.end(JSON.stringify(response.data))
    console.log(response.data);
    } catch (error) {
        console.log(error)
    }
}





