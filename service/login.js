/**
 * Created by yzw on 2017/3/22.
 */
import express from 'express';
import User from '../db/myUser';
import {JsonHelper} from '../utility/helper'

let router = express.Router();
let userDB = new User();


router.post('/', (req, res, next)=> {

    let name = req.body.name;
    let password = req.body.password;

    console.log("eq.body = ",req.body)
    let errorMeg = [];
    if (!name) {
        errorMeg.push('用户名不能为空');
    }
    if (!password) {
        errorMeg.push('密码不能为空');
    }
    if(errorMeg.length>0){
        res.send(JsonHelper.buildErrorResult(errorMeg,500));
        console.log("登录失败1：",errorMeg);
    }
    else{
        userDB.login(name,password).then((data)=>{
            console.log("登录成功：",data);
            res.send(JsonHelper.buildSuccessResult(JSON.parse(data)));
        }).catch((error)=>{
            console.log("登录失败2：",errorMeg);
            res.send(JsonHelper.buildErrorResult(error,500));
        });
    }
});

export default function (app) {
    app.use('/login', router);
}
