let {webhook} = require('./yelo-wh')
const {ivoYconfig} = require('./config')
const uuid = require('uuid').v4
const axios = require("axios");

exports.ivoyCreateOrder = async function ivoyCreateOrder(req, res){
   try {
         let ivoyPayload = {
            "data": {
              "bOrder": {
                "device": "api",
                "orderType": {
                  "idOrderType": 1
                },
                "packageType": {
                  "idPackageType": 4
                },
                "paymentMethod": {
                  "idPaymentMethod": 4
                },
                "orderAddresses": [
                  {
                    "isPickup": 1,
                    "isSource": 1,
                    "comment": null,
                    "personApproved": "Persona que va entregar",
                    "phone": "5501010101",
                    "address": {
                      "externalNumber": "151",
                      "internalNumber": null,
                      "latitude": String(webhook.job_pickup_latitude),
                      "longitude": String(webhook.job_pickup_longitude),
                      "neighborhood": "Roma Norte",
                      "street": "Avenida Álvaro Obregón",
                      "zipCode": "06700"
                    }
                  },
                  {
                    "isPickup": 0,
                    "isSource": 0,
                    "comment": null,
                    "personApproved": "Persona que va recibir",
                    "phone": "5501010101",
                    "address": {
                      "externalNumber": "4",
                      "internalNumber": null,
                      "latitude": String(webhook.job_latitude),
                      "longitude": String(webhook.job_longitude),
                      "neighborhood": "San Miguel Chapultepec II Sección",
                      "street": "Alumnos",
                      "zipCode": "11850"
                    }
                  }
                ]
              }
            }
          }
    let response = await axios({ url : ivoYconfig.url, method : ivoYconfig.method, headers : ivoYconfig.headers,  data : ivoyPayload});
    res.end(JSON.stringify(response.data))
    console.log(response.data);
    } catch (error) {
        console.log(error)
    }
}


