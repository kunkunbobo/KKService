/**
 * Created by yzw on 2017/3/22.
 */

import  express from 'express'
import User from '../db/myUser';
import {JsonHelper} from '../utility/helper'

let router = express.Router();
let userDB = new User();



router.post('/', (req, res, next)=> {

    let username = req.body.name;
    let password = req.body.password;

    let errorMeg = [];
    if (!username) {
        errorMeg.push('用户名不能为空');
    }
    if (!password) {
        errorMeg.push('密码不能为空');
    }
    if(errorMeg.length>0){
        res.send(JsonHelper.buildErrorResult(errorMeg,500));
    }
    else{

        userDB.register(username,password).then((data)=>{
            console.log("注册成功  = ",data)
            res.send(JsonHelper.buildSuccessResult(data));
        }).catch((error)=>{
            console.log("注册失败 error = ",error)
            let obj = JsonHelper.buildErrorResult(error,500);
            res.send(obj);
        })

    }

});

export default function (app) {
    app.use('/register', router);
}
