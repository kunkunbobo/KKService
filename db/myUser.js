/**
 * Created by yzw on 2017/3/22.
 */
import mysql from './mysql'
import db from './mysql'
import myUserSql from './sql/db_myUser'
import Q from 'q';
import CryptoJS from "crypto-js";

//var CryptoJS = require("crypto-js");

//var MD5 =  require("crypto-js/md5");
var dbClient = new db();

export  default class User{

    login(name:String,password:String){

        let deferred = Q.defer();

        dbClient.executeSqlOne(myUserSql.selectUserInfoByUserName,{name}).then((userInfo)=>{

            if(userInfo){
                dbClient.executeSqlOne(myUserSql.getToken,{name,password}).then((data)=>{

                    console.log("登录 查询数据库 = ",data)
                    if(data){
                        deferred.resolve(data);
                    }
                    else{
                        deferred.reject("密码错误");
                    }

                }).catch((error=>{
                    deferred.reject(error);
                }))
            }
            else{
                deferred.reject('不存在该用户');
            }
        }).catch((error)=>  deferred.reject(error))


        return deferred.promise;
    }

    register(name:String,password:String){

        let deferred = Q.defer();
        dbClient.executeSqlOne(myUserSql.selectUserInfoByUserName,{name}).then((userInfo)=>{

            if(userInfo){//已经存在相同名字用户
                deferred.reject('此用户名已经被占用');
            }
            else{//不存在相同名字用户，开始注册

                dbClient.executeSqlOne(myUserSql.insert,{name,password}).then((data)=>{

                    dbClient.executeSqlOne(myUserSql.getLastUserID).then((ID)=>{

                        let id = JSON.parse(ID).id;
                        let str = ID + new Date().valueOf();

                        let token = CryptoJS.MD5(str).toString(CryptoJS.enc.Hex);
                        console.log("注册写入 token =" ,token)
                        dbClient.executeSqlOne(myUserSql.updateToken,{token,id}).then(()=>{
                            console.log("写入token成功 token = ",token)
                            deferred.resolve({token:token});

                        }).catch((error)=>{

                            console.log("写入token失败 token = ",error)
                            deferred.reject(error)
                        })


                    }).catch((error)=>{
                        deferred.reject(error)
                    })
                }).catch((error=>{
                    deferred.reject(error);
                }))
            }


        }).catch((error)=>{

            deferred.reject(error);
        });


        return deferred.promise;
    }

}