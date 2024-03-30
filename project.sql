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

 Date: 30/03/2024 22:49:44
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
  `createtime` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `duration` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `state` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT '0',
  `userId` int(8) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 17 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of record
-- ----------------------------
INSERT INTO `record` VALUES (11, '小王', '111', '111', NULL, NULL, '1', 14);
INSERT INTO `record` VALUES (16, 'qwq', 'C202', '001', NULL, NULL, '1', 14);
INSERT INTO `record` VALUES (15, 'xiao', '111', '111', NULL, NULL, '2', 18);
INSERT INTO `record` VALUES (14, '小乌', '111', '111', NULL, NULL, '2', 15);

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
  `max` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `column` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `row` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `tag` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 10 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of room
-- ----------------------------
INSERT INTO `room` VALUES (2, '001', 40, 'C202', '大教室', NULL, NULL, NULL, NULL);
INSERT INTO `room` VALUES (3, '1121', 12, 'C101', '小教室', NULL, NULL, NULL, NULL);
INSERT INTO `room` VALUES (4, '1121', 31, 'C102', '大教室', NULL, NULL, NULL, NULL);
INSERT INTO `room` VALUES (7, '111', 111, '111', '1111', '12', '12', '12', NULL);
INSERT INTO `room` VALUES (8, '111', 111, '111', '1111', '12', '12', '12', NULL);
INSERT INTO `room` VALUES (9, '111', 111, '111', '1111', '12', '12', '12', NULL);

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
  `association` varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `class` varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `role` int(11) DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 19 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (13, 'admin', '$2b$10$HtCCjxnHWIGddgfaME6loOlSW0j864L5w78TkkHREDdbgKChjSd4S', '小王', 'https://b0.bdstatic.com/a367e9334848fe281131e135610ccaa4.jpg@h_1280', '213123', '实B202', '程序员，擅长Express，react', 99999, NULL, '12313', '计算机学院', '2', 1);
INSERT INTO `user` VALUES (14, 'admin2', '$2b$10$2u5G4IA5rjyMcFSg0uBmX.2oN.zHXaApOzpUD5RMokz8Hq.hZPa5K', NULL, NULL, '13701123412', NULL, NULL, NULL, NULL, 'w189688@163.com', '计算机学院', '2', 0);
INSERT INTO `user` VALUES (18, 'admin3', '$2b$10$mXP0lk7jJFOh9C2RkaEpuOnkO1owltijRuxHz8c6v7VCqzS8q73z6', NULL, NULL, '13701123412', NULL, NULL, NULL, NULL, 'w189688@163.com', NULL, NULL, 0);

SET FOREIGN_KEY_CHECKS = 1;
