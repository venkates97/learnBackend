const { log } = require("console");
const fs = require("fs");

const path = require("path");

const logDir = path.join(__dirname,"../logs");

if(!fs.existsSync(logDir)){
    fs.mkdirSync(logDir),{recursive:true};
}


const logger = (request,response,next) => {

  
    const date= new Date();
    

    const logData = "Reacived time"+" "+new Date().toISOString()    
    +"\n"+request.ip+"\n"+
    request.method+ "\n"+"\n"+request.url+"\n-----------------------\n";


    fs.appendFile(`./logs/request_logs_${date.getDate()}-${date.getMonth()}-${date.getFullYear()}.log`,logData, (err) =>{
        if (err){
            console.log("Error while write in log book")
            return response.status(500).send({"meaasge": "Error while write in log book" })
        }
    })


    
    next();
}

module.exports = logger;
