const customer = require('./customers.json');
const fs = require('fs');

fs.readFile("./customers.json", "utf-8", (err, jsonString) => {
    if (err) {
        console.log("Error : ", err)
    } else {
        try {
            data = JSON.parse(jsonString);                    
            console.log("data => ", data);
        } catch (err) {
            console.log("Error parsing JSON ", err)
        }
    }    
});
