/*
 Navicat Premium Data Transfer

 Source Server         : 123
 Source Server Type    : MySQL
 Source Server Version : 50726
 Source Host           : localhost:3306
 Source Schema         : project

 Target Server Type    : MySQL
 Target Server Version : 50726
 File Encoding         : 65001

 Date: 23/03/2024 22:41:35
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for record
-- ----------------------------
DROP TABLE IF EXISTS `record`;
CREATE TABLE `record`  (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `roomLocation` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `roomNumber` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 12 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of record
-- ----------------------------
INSERT INTO `record` VALUES (7, '小王', '111', '111');
INSERT INTO `record` VALUES (10, '小王', '111', '111');
INSERT INTO `record` VALUES (11, '小王', '111', '111');

-- ----------------------------
-- Table structure for room
-- ----------------------------
DROP TABLE IF EXISTS `room`;
CREATE TABLE `room`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `roomNumber` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `roomSeat` int(8) DEFAULT NULL,
  `roomLocation` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `roomType` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of room
-- ----------------------------
INSERT INTO `room` VALUES (1, '111', 111, '111', '1111');
INSERT INTO `room` VALUES (2, '1121', 3, 'C201', '小教室');
INSERT INTO `room` VALUES (3, '1121', 12, 'C101', '小教室');
INSERT INTO `room` VALUES (4, '1121', 31, 'C102', '大教室');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userAccount` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `userPassword` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `userAvatar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `phone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `userClass` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `introduce` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `integral` int(11) DEFAULT NULL,
  `friend` varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 18 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, 'admin1', '123456', 'admin', 'https://b0.bdstatic.com/a367e9334848fe281131e135610ccaa4.jpg@h_1280', '188999955555', '实B202', 'test admin', 99999, '', NULL);
INSERT INTO `user` VALUES (2, 'wangyixi', '123456', NULL, 'https://b0.bdstatic.com/a367e9334848fe281131e135610ccaa4.jpg@h_1280', '18899996666', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (13, 'admin', '$2b$10$HtCCjxnHWIGddgfaME6loOlSW0j864L5w78TkkHREDdbgKChjSd4S', '小王', 'https://b0.bdstatic.com/a367e9334848fe281131e135610ccaa4.jpg@h_1280', '213123', '实B202', '程序员，擅长Express，react', 99999, NULL, '12313');
INSERT INTO `user` VALUES (14, 'admin2', '$2b$10$2u5G4IA5rjyMcFSg0uBmX.2oN.zHXaApOzpUD5RMokz8Hq.hZPa5K', NULL, NULL, '13701123412', NULL, NULL, NULL, NULL, 'w189688@163.com');
INSERT INTO `user` VALUES (15, 'admin3', '$2b$10$t4yCUNMnTWpfbFoqUhjbVemx3PwYbcQXF23Bw4bGIhz7/PUso/HHS', NULL, NULL, '13701123412', NULL, NULL, NULL, NULL, 'w189688@163.com');
INSERT INTO `user` VALUES (16, 'admin4', '$2b$10$tlfdWgxjMKFqBdW/2dUKu.U0R95Unhn8IArWoSjuoYypy7rmlt2gq', NULL, NULL, '13701123412', NULL, NULL, NULL, NULL, 'w189688@163.com');
INSERT INTO `user` VALUES (17, 'admin5', '$2b$10$oTZgDEqGenEydOIilDXv0.77Aso14AGMVXMGo1ryW27EPUZBLYGse', NULL, NULL, '13701123412', NULL, NULL, NULL, NULL, 'w189688@163.com');

SET FOREIGN_KEY_CHECKS = 1;
