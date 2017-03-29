/**
 * Created by yzw on 2017/3/21.
 */


export default function (req, res, next) {

    let deviceInfo = req.header("device");
    if (deviceInfo) {
        console.log("deviceInfo");

        // req.device = helper.requestHelper.transferCookieLikeString(deviceInfo, true);
        // req.device.Tablet = req.device.Tablet == "true" ? 1 : 0;
    }
    next();
}