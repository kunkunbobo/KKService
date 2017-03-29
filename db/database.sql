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