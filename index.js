/**
 * Created by yzw on 2017/3/21.
 */

import express from 'express';
import middle from './middleware';
import config from './config/config';
import services from './service';
import bodyParser from 'body-parser';


var app = express();
app.set("env",config.env)

//bodyparser
//app.use(bodyParser.urlencoded({extended: true, limit: '10mb'}));
app.use(bodyParser.json());


app.use(middle.device_express);

services.forEach((service)=>{
    service(app);
});

// app.get('/', function(req, res){
//     res.send('Hello World123');
// });

app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.listen(config[config.env].port);



// app.set('title', 'My Site');
//
// app.enable('title');
//
// if(app.disabled('title')){
//     console.log("====被禁用")
// }
// else{
//     console.log("====未被禁用")
// }
//
// console.log(app.get('env'));