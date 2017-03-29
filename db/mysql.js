/**
 * Created by yzw on 2017/3/22.
 */

import mysql from 'mysql';
import config from '../config/config'
import Q from 'q';

var $config = config[config.env];

var dbConfig = $config.db;


function buildSqlObjectValues(sqlObject, values) {
    let newSqlObject = Object.assign({}, sqlObject);

    if (!values) {
        return newSqlObject;
    }

    if (values instanceof Array) {
        return Object.assign({}, newSqlObject, {values: values});
    }

    newSqlObject.values = [];

    let matches = sqlObject.sql.match(/@[A-Z0-9\_]*/img);

    if (matches && matches.length > 0) {
        for (let i = 0; i < matches.length; i++) {
            newSqlObject.sql = newSqlObject.sql.replace(matches[i], '?');
            newSqlObject.values.push(values[matches[i].substring(1)]);
        }
    }

    return newSqlObject;
}

export default class db{

    executeSqlOne(sql:String, data:Object){
        let connection = new mysql.createConnection(dbConfig[sql.db]);
        connection.connect();

        let deferred = Q.defer();
//console.log("buildSqlObjectValues(sql,data) = ",buildSqlObjectValues(sql,data))

        connection.query(buildSqlObjectValues(sql,data), function(err, rows, fields) {

             connection.end()
                if (err){

                    deferred.reject(err);
                    }
                else {

                    if(rows.length>0){
                        deferred.resolve(JSON.stringify(rows[0]));
                    }
                    else{
                        deferred.resolve(null);
                    }

                }
        });
         return deferred.promise;
    }
}
