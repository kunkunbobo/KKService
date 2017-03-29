/**
 * Created by yzw on 2017/3/28.
 */

export const JsonHelper = {

    buildSuccessResult(msg, data:Object = null) {
        let message = msg;
        if(typeof  msg == object){
            message = JSON.stringify(msg);
        }
        return {code:200,success:true,msg:message,data:data};
    },

    buildSuccessResult(data:Object = null) {
        return {code:200,success:true,data:data};
    },

    buildErrorResult(msg, code) {
        return {code:code,success:false,msg:msg};
    },
}

