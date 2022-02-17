/*
 Navicat Premium Data Transfer

 Source Server         : zy_db
 Source Server Type    : MySQL
 Source Server Version : 80027
 Source Host           : localhost:3306
 Source Schema         : garbage_sorting

 Target Server Type    : MySQL
 Target Server Version : 80027
 File Encoding         : 65001

 Date: 02/01/2022 10:36:53
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for admin_info
-- ----------------------------
DROP TABLE IF EXISTS `admin_info`;
CREATE TABLE `admin_info`  (
  `admin_id` int NOT NULL AUTO_INCREMENT,
  `admin_account` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `admin_pwd` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `admin_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  PRIMARY KEY (`admin_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of admin_info
-- ----------------------------
INSERT INTO `admin_info` VALUES (1, '2020b31056', '123456', '张三');

-- ----------------------------
-- Table structure for build_detail
-- ----------------------------
DROP TABLE IF EXISTS `build_detail`;
CREATE TABLE `build_detail`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `build_id` int NULL DEFAULT NULL,
  `recover_weight` double NULL DEFAULT NULL,
  `unrecover_weight` double NULL DEFAULT NULL,
  `recover_img` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `unrecover_img` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `sort_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of build_detail
-- ----------------------------
INSERT INTO `build_detail` VALUES (1, 1, 23.2, 30.1, '/build_detail/id_1_recover.jpg', '/build_detail/id_1_unrecover.jpg', '2021-12-26 14:35:38');
INSERT INTO `build_detail` VALUES (2, 2, 22.2, 32.1, '/build_detail/id_2_recover.jpg', '/build_detail/id_2_unrecover.jpg', '2021-12-26 14:35:45');
INSERT INTO `build_detail` VALUES (3, 3, 23.1, 33.3, '/build_detail/id_3_recover.jpg', '/build_detail/id_3_unrecover.jpg', '2021-12-26 14:35:47');
INSERT INTO `build_detail` VALUES (4, 4, 24.4, 34.3, '/build_detail/id_4_recover.jpg', '/build_detail/id_4_unrecover.jpg', '2021-12-26 14:35:50');
INSERT INTO `build_detail` VALUES (5, 5, 25.5, 35.5, '/build_detail/id_5_recover.jpg', '/build_detail/id_5_unrecover.jpg', '2021-12-26 14:35:58');

-- ----------------------------
-- Table structure for build_info
-- ----------------------------
DROP TABLE IF EXISTS `build_info`;
CREATE TABLE `build_info`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `build_id` int NOT NULL,
  `header_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `header_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `header_pwd` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `header_number` varchar(11) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `sort_condition` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `sort_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of build_info
-- ----------------------------
INSERT INTO `build_info` VALUES (1, 1, '2020001', '朱宇a', '123456', '18357905141', '优', '2021-12-31 18:32:45');
INSERT INTO `build_info` VALUES (2, 2, '2020002', '李四', '123456', '13873831666', '良', '2021-12-24 15:20:47');
INSERT INTO `build_info` VALUES (3, 3, '2020003', '赵六', '123456', '18357905177', '及格', '2021-12-24 14:13:48');
INSERT INTO `build_info` VALUES (4, 5, '2020004', '王五', '123456', '13373831763', '优', '2021-12-24 15:21:10');
INSERT INTO `build_info` VALUES (5, 5, '2020005', '七七', '123456', '19373831769', '不及格', '2021-12-24 14:42:11');
INSERT INTO `build_info` VALUES (8, 2, '2020006', '驻藏', '123456', '18357905141', NULL, '2021-12-24 15:32:42');

-- ----------------------------
-- Table structure for cleaner_info
-- ----------------------------
DROP TABLE IF EXISTS `cleaner_info`;
CREATE TABLE `cleaner_info`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `cleaner_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `cleaner_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `cleaner_pwd` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `cleaner_number` varchar(11) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `cleaner_workplace` int NULL DEFAULT NULL COMMENT '0为垃圾站',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of cleaner_info
-- ----------------------------
INSERT INTO `cleaner_info` VALUES (1, '202001', '张三a', '123456', '18357905141', 0);
INSERT INTO `cleaner_info` VALUES (2, '202002', '李四b', '1234567', '18357905140', 1);
INSERT INTO `cleaner_info` VALUES (3, '202003', '王五', '123456', '18357905141', 0);
INSERT INTO `cleaner_info` VALUES (4, '202004', '赵六', '123456', '18357905141', 2);
INSERT INTO `cleaner_info` VALUES (5, '202005', '小七', '123456', '18357905141', 3);
INSERT INTO `cleaner_info` VALUES (6, '202006', '峇峇', '123456', '18357905141', 4);

-- ----------------------------
-- Table structure for gift_info
-- ----------------------------
DROP TABLE IF EXISTS `gift_info`;
CREATE TABLE `gift_info`  (
  `gift_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `gift_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `gift_image` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `gift_price` int NULL DEFAULT NULL,
  `exchange_area` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `stu_account_limit` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `pickup_method` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `provide_unit` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `gift_number` int NULL DEFAULT NULL,
  `gift_note` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  PRIMARY KEY (`gift_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of gift_info
-- ----------------------------
INSERT INTO `gift_info` VALUES ('P10018211116807049', '家用弹盖垃圾桶厕所厨房卫生间卧室客厅北欧风撞色带盖创意压圈篓', '/gift_image/P10018211116807049.jpg', 100, '杭州市', '不限', '自行领取', '浙江水利水电学院', 199, '图片仅供参考，实际兑换礼品请以实物或您获取的服务为准');
INSERT INTO `gift_info` VALUES ('P10020210706809206', 'Tanner省空间系列袜子收纳盒（15格）|粉色', '/gift_image/P10020210706809206.jpg', 200, '杭州市', '不限', '自行领取', '浙江水利水电学院', 100, '图片仅供参考，实际兑换礼品请以实物或您获取的服务为准');
INSERT INTO `gift_info` VALUES ('P10020210706809615', '医用外科口罩一次性医疗口罩三层正规正品儿童单独包装成人防病毒', '/gift_image/P10020210706809615.jpg', 300, '杭州市', '不限', '自行领取', '浙江水利水电学院', 109, '图片仅供参考，实际兑换礼品请以实物或您获取的服务为准');
INSERT INTO `gift_info` VALUES ('P10020211116620892', '云南三七护龈美白牙膏', '/gift_image/P10020211116620892.jpg', 350, '杭州市', '不限', '自行领取', '浙江水利水电学院', 90, '图片仅供参考，实际兑换礼品请以实物或您获取的服务为准');
INSERT INTO `gift_info` VALUES ('P10020211116620893', 'domol德国进口衣物消毒除菌液洗衣液温和去污无刺激婴儿内衣杀菌', '/gift_image/P10020211116620893.jpg', 500, '杭州市', '不限', '自行领取', '浙江水利水电学院', 76, '图片仅供参考，实际兑换礼品请以实物或您获取的服务为准');
INSERT INTO `gift_info` VALUES ('P10020211116806048', '黑人双重薄荷牙膏家庭装家用225g*1支装去牙渍清新口气成人防蛀', '/gift_image/P10020211116806048.jpg', 600, '杭州市', '不限', '自行领取', '浙江水利水电学院', 567, '图片仅供参考，实际兑换礼品请以实物或您获取的服务为准');
INSERT INTO `gift_info` VALUES ('P10020211116807049', '妙洁海绵百洁布2片装', '/gift_image/P10020211116807049.jpg', 660, '杭州市', '不限', '自行领取', '浙江水利水电学院', 123, '图片仅供参考，实际兑换礼品请以实物或您获取的服务为准');
INSERT INTO `gift_info` VALUES ('P10020211220360978', '妙洁竹净去油污抹布3片装', '/gift_image/P10020211220360978.jpg', 230, '杭州市', '不限', '自行领取', '浙江水利水电学院', 231, '图片仅供参考，实际兑换礼品请以实物或您获取的服务为准');
INSERT INTO `gift_info` VALUES ('P10020211220803737', '妙洁中号保鲜袋200只', '/gift_image/P10020211220803737.jpg', 120, '杭州市', '不限', '自行领取', '浙江水利水电学院', 300, '图片仅供参考，实际兑换礼品请以实物或您获取的服务为准');
INSERT INTO `gift_info` VALUES ('P10020211226620892', '洁丽雅毛巾3条 新疆纯棉洗脸洗澡家用成人男女士全棉柔软吸水面巾', '/gift_image/P10020211226620892.jpg', 300, '杭州市', '不限', '自行领取', '浙江水利水电学院', 100, '图片仅供参考，实际兑换礼品请以实物或您获取的服务为准');
INSERT INTO `gift_info` VALUES ('P1234567890', '小米来了来了', '/gift_image/P1234567890.jpg', 12300, '杭州市', '不限', '自行领取', '浙江水利水电学院', 5, '图片仅供参考，实际兑换礼品请以实物或您获取的服务为准');

-- ----------------------------
-- Table structure for stu_info
-- ----------------------------
DROP TABLE IF EXISTS `stu_info`;
CREATE TABLE `stu_info`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `stu_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `stu_pwd` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `stu_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `stu_class` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `stu_build` int NULL DEFAULT NULL,
  `stu_floor` int NULL DEFAULT NULL,
  `stu_room` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 51 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of stu_info
-- ----------------------------
INSERT INTO `stu_info` VALUES (1, '2018b31003', '123456', '冯某某啊', '应用18-2', 1, 1, '4141');
INSERT INTO `stu_info` VALUES (2, '2018b31004', '123456', '朱某某', '应用18-1', 7, 4, '414');
INSERT INTO `stu_info` VALUES (3, '2019b31001', '123456', '朱某朱', '物联网19-1', 8, 5, '520');
INSERT INTO `stu_info` VALUES (4, '2019b31002', '123456', '陈某某', '物联网19-1', 8, 5, '520');
INSERT INTO `stu_info` VALUES (5, '2020b31054', '123456', '谢雪峰', '软工s20-2', 9, 6, '615');
INSERT INTO `stu_info` VALUES (6, '2020b31055', '123456', '陈泽', '软工s20-2', 9, 6, '615');
INSERT INTO `stu_info` VALUES (7, '2020b31056', '123456', '朱宇', '软工s20-2', 9, 6, '615');
INSERT INTO `stu_info` VALUES (8, '2020b31058', '123456', '何升强', '软工s20-2', 9, 6, '615');
INSERT INTO `stu_info` VALUES (9, '2020b31059', '123456', '张文豪', '软工s20-2', 9, 6, '615');
INSERT INTO `stu_info` VALUES (10, '2020b31060', '123456', '陈金锋', '软工s20-2', 9, 6, '615');
INSERT INTO `stu_info` VALUES (42, '2020b31016', '123456', '陈金锋', '软工s20-2', 9, 6, '615');
INSERT INTO `stu_info` VALUES (43, '2018b31011', '123456', '冯某某啊', '应用18-2', 1, 1, '4141');
INSERT INTO `stu_info` VALUES (44, '2018b31012', '123456', '朱某某', '应用18-1', 7, 4, '414');
INSERT INTO `stu_info` VALUES (45, '2019b31011', '123456', '朱某朱', '物联网19-1', 8, 5, '520');
INSERT INTO `stu_info` VALUES (46, '2019b31012', '123456', '陈某某', '物联网19-1', 8, 5, '520');
INSERT INTO `stu_info` VALUES (47, '2020b31011', '123456', '谢雪峰', '软工s20-2', 9, 6, '615');
INSERT INTO `stu_info` VALUES (48, '2020b31012', '123456', '陈泽', '软工s20-2', 9, 6, '615');
INSERT INTO `stu_info` VALUES (49, '2020b31014', '123456', '何升强', '软工s20-2', 9, 6, '615');
INSERT INTO `stu_info` VALUES (50, '2020b31015', '123456', '张文豪', '软工s20-2', 9, 6, '615');
INSERT INTO `stu_info` VALUES (51, '2020b31013', '123456', '朱宇', '软工s20-2', 9, 6, '615');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `age` int NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('zhangsan', 18);
INSERT INTO `user` VALUES ('朱宇', 22);

SET FOREIGN_KEY_CHECKS = 1;
