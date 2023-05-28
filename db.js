var mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();


const connection = mysql.createConnection({
    connectionLimit: 10,
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_DATABASE,
    port : process.env.DB_PORT
});

// var connectionPool = null;
// function getConnection(){
//    // console.log("get connection");
//    if (!connectionPool){
//       console.log("init connectionPool");
//       connectionPool = mysql.createPool({
//          host     : 'localhost',
//          user     : 'root',
//          password : 'root1234',
//          database: 'projetWeb'
//       })      
//    }
//    return connectionPool;
// }
// getConnection();

// open the MySQL connection
connection.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
  });
  
module.exports = connection;


// ----------------------------------------------------
// ---------- SELECT / Query data

// exports.queryData = function(request,callback){
//    // console.log("query")
//    getConnection().query(request,function(err,result){
//     try{
//         if(err) console.log(err);
//         if (typeof callback === 'function') {
//             callback(result);
//         }
//     }
//     catch {

//     }
//     });
// }

// exports.queryAll = function(req,res){
//     this.queryData(`SELECT idArticle FROM articles`, function(result){
//     console.log(result);
//     res.json(result);
//     }
//     );
// }

// exports.queryAllOrdered = function(table,order,callback){
//     this.queryData(`SELECT * FROM articles ORDER BY ${order}`, callback);
// }

// exports.queryValue = function(table,property,key,callback){
//     this.queryData(`SELECT * FROM ${table} WHERE ${property}=${key}`, callback);
// }





//connection.end();
