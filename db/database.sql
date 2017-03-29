/**
 * Created by yzw on 2017/3/20.
 */


-- ----------------------------
--  Table structure for `USER`
-- ----------------------------
CREATE TABLE `ENGINE`.`myUser`(
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `name` varchar(50) NOT NULL,
    `password` varchar(32) NOT NULL,
    `token` VARCHAR(50) NULL,
    `age` int(11) NULL,
     PRIMARY KEY (`ID`)
) DEFAULT CHARSET = utf8;


-- ----------------------------
--  Table structure for `CARINFO`
-- ----------------------------
CREATE TABLE `ENGINE`.`carInfo`(
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `driver` varchar(50) NOT NULL,
    `driverPhone` varchar(32) NOT NULL,
    `driverName` VARCHAR(50) NULL,
    `carType` int(11) NULL,
    `seatNum` int(11) NULL,
    `usedSeatNum` int(11) NULL,
    `longitude` double NULL,
    `latitude` double NULL,
    `carNum` varchar(32)  NULL,
    `updateDate` DATE NULL,
     PRIMARY KEY (`id`)
) DEFAULT CHARSET = utf8;