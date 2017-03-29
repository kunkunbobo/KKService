/**
 * Created by yzw on 2017/3/22.
 */
import multiline from 'multiline';

export default {
    "getUserInfo": {
        db: "read",
        sql: multiline(function () {
            /*
             select
             id
             name,
             token
             from myUser
             where token = @token
             */
        })
    },
    "getToken": {
        db: "read",
        sql: multiline(function () {
            /*
             select token
             from myUser
             where name = @name and password = @password
             */
        })
    },
    "insert": {
        db: "write",
        sql: multiline(function () {
            /*
             INSERT INTO `myUser`(`name`,`password,`type`)
             VALUES (@name,@password,@type)
             */
        })
    },
    "updateToken":{
        db:"write",
        sql:multiline(function () {
            /*
             UPDATE myUser
             SET `token` = @token
             WHERE id = @id
             */
        })
    },
    "getLastUserID":{
        db: "read",
        sql: multiline(function () {
            /*
             select max(id) as id from myUser
             */
        })
    },
    "selectUserInfoByUserName":{
        db: "read",
        sql: multiline(function () {
            /*
             select *
             from myUser
             where name = @name
             */
        })
    }
};
