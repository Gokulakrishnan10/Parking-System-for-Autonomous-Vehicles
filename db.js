const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
const dbname = 'parkingSystem';
const url = 'mongodb://localhost:27017/parkingSystem';
const mongoOptions = {useNewUrlParser : true};


const state ={
    db : null
};


const connect = (cb) =>{
    if(state.db){
        cb();
    }else{
        MongoClient.connect(url,mongoOptions,(err, client) => {
            if(err){
                console.log("Could not connect to database");
                cb(err);
            }else{
                state.db = client.db(dbname);
                cb();
            }
        });
    }
}
const getDB = () =>{
    return state.db;
}
const getPrimaryKey = (_id) =>{
    return ObjectId(_id);
}

module.exports = {connect,getDB,getPrimaryKey};