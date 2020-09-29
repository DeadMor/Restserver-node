//------------------------------------------
//PUERTO
//-----------------------------------------

process.env.PORT = process.env.PORT || 3000;

//------------------------------------------
//Entorno
//-----------------------------------------

process.env.NODE_ENV = process.env.NODE_ENV || "dev";

//------------------------------------------
//Vencimiento del token
//-----------------------------------------
//60 segundos
//60 minutos
//24 horas
//30 dias

process.env.CADUCIDAD_TOKEN = "48h";

//------------------------------------------
//SEED de autenticacion
//-----------------------------------------

process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

//------------------------------------------
//Base de datos
//-----------------------------------------

let urlDB;

if (process.env.NODE_ENV === 'dev') {

    urlDB = "mongodb://localhost:27017/cafe";

} else {


    urlDB = process.env.MONGO_URL;
}
process.env.URLDB = urlDB;

//------------------------------------------
//Google Client ID
//-----------------------------------------

process.env.CLIENT_ID = process.env.CLIENT_ID || "1057321742386-qm6a8m2nkjaitg0qf8irimq9gk2m9gvu.apps.googleusercontent.com"