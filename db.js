var mysql=require("mysql");

function connect(){
      var connection= mysql.createConnection({
           host:"172.18.4.116",
           user:"root",
           password:"root",
           database:"myapp",
           port:9999
    })
    connection.connect();
    return connection;
}
    
    module.exports={
           connect:connect
    }