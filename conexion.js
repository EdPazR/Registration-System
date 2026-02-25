var mySQL = require("mysql");

var conexion = mySQL.createConnection({
host: "localhost",
database: "Administracion",
user: "Paz",
password: "Badbunny123*"
});

/*conexion.connect(function(err){
    if (err){
        throw err;
}
else{
    console.log("to gud");   
}
});

conexion.end();*/
conexion.query("SELECT * FROM students", function(error, resultadoConsulta){
    if(error){
        throw error;
    }
    else{
        console.log(resultadoConsulta);
    }
});

conexion.end();
