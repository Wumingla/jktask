-- phpMyAdmin SQL Dump
-- version 4.3.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2015-10-09 13:39:24
-- 服务器版本： 5.6.24
-- PHP Version: 5.6.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `newsbaidu`
--

-- --------------------------------------------------------

--
-- 表的结构 `navamuse`
--

CREATE TABLE IF NOT EXISTS `navamuse` (
  `news_id` int(11) NOT NULL,
  `news_type` varchar(20) NOT NULL,
  `news_title` varchar(100) NOT NULL,
  `news_img` varchar(200) NOT NULL,
  `news_content` text NOT NULL,
  `news_from` varchar(20) NOT NULL,
  `news_date` date NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `navamuse`
--

INSERT INTO `navamuse` (`news_id`, `news_type`, `news_title`, `news_img`, `news_content`, `news_from`, `news_date`) VALUES
(2, '焦点图', '', '../img/t5.jpg', '', '', '2015-10-09'),
(3, '滚动信息', '', '', '解放军航母仪仗队', '', '2015-10-09'),
(4, '滚动信息', '', '', '东风5B导弹首曝光', '', '2015-10-09'),
(5, '滚动信息', '', '', '战斗机进驻民航机场', '', '2015-10-09'),
(6, '滚动信息', '', '', '中国印度边界谈判', '', '2015-10-09'),
(7, '新闻', '小s大尺度提问新人 黄晓明baby难招架', '../img/a1.jpg', '', '新浪新闻', '2015-10-09'),
(8, '新闻', '黄晓明将回青岛再办场婚礼', '../img/a2.jpg', '网友表示：能铆足劲儿超越这场婚礼的，是不是只有范冰冰李晨了。', '新浪新闻', '2015-10-09'),
(9, '新闻', '金星称婚礼是为展现权力荣耀', '../img/a3.jpg', '认为，大的仪式就是封圣，往上层爬，同时宣布给世人看，我的权力与荣耀。', '腾讯新闻', '2015-10-09'),
(10, '新闻', '《肿瘤君》冲奥 韩延成80后首位申奥导演', '../img/a4.jpg', '', '腾讯新闻', '2015-10-09'),
(11, '新闻', '5566孙协志承认离婚 呼吁大众相信爱情', '../img/a5.jpg', '', '腾讯新闻', '2015-10-09'),
(12, '新闻', '陈珊妮开启内地巡演 丁丁张周笔畅将助阵', '../img/a6.jpg', '', '腾讯新闻', '2015-10-09'),
(13, '新闻', '传黄子韬加盟《铁道飞虎》 导演未否认', '../img/a7.jpg', '', '搜狐新闻', '2015-10-09'),
(14, '新闻', '配乐大师威廉姆斯获美电影学院终身成就奖', '../img/a8.jpg', '', '搜狐新闻', '2015-10-09'),
(15, '新闻', '《琅琊榜》虐心苏兄如何养成', '../img/a9.jpg', '', '搜狐新闻', '2015-10-09');

-- --------------------------------------------------------

--
-- 表的结构 `navfam`
--

CREATE TABLE IF NOT EXISTS `navfam` (
  `news_id` int(11) NOT NULL,
  `news_type` varchar(20) NOT NULL,
  `news_title` varchar(100) NOT NULL,
  `news_img` varchar(200) NOT NULL,
  `news_content` text NOT NULL,
  `news_from` varchar(20) NOT NULL,
  `news_date` date NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `navfam`
--

INSERT INTO `navfam` (`news_id`, `news_type`, `news_title`, `news_img`, `news_content`, `news_from`, `news_date`) VALUES
(1, '焦点图', '', '../img/t2.jpg', '', '', '2015-10-09'),
(2, '滚动信息', '', '', '习近平 全球人物榜', '', '2015-10-09'),
(5, '滚动信息', '', '', '屠呦呦旧居卖1.5亿', '', '2015-10-09'),
(6, '滚动信息', '', '', '滴滴获专车牌照', '', '2015-10-09'),
(7, '滚动信息', '', '', '杜润生病逝', '', '2015-10-09'),
(8, '新闻', '马云首张油画拍出3300万', '../img/s1.jpg', '摘要《桃花源》是马云与中国艺术家曾梵志携手', '腾讯要闻', '2015-10-09'),
(9, '新闻', '英超新赛季下课首人！保级队宣布欧洲名帅辞职', '../img/s2.jpg', '', '新浪要闻', '2015-10-09'),
(10, '新闻', '意大利启动大众排放造假调查', '../img/s3.jpg', '理由是这家公司涉嫌误导购买柴油车的意大利消费者。', '网易要闻', '2015-10-09'),
(11, '新闻', '龙卷风突袭顺德 致3死近80伤', '../img/s4.jpg', '', '网易要闻', '2015-10-09'),
(12, '新闻', '习主席访美开辟中美人文交流新天地', '../img/s5.jpg', '', '网易要闻', '2015-10-09'),
(13, '新闻', '预计2015年赴泰的中国高端游客约38万人次', '../img/s6.jpg', '', '新浪要闻', '2015-10-09'),
(14, '新闻', '中美在全球治理领域的共识', '../img/s7.jpg', '中美在完善全球经济治理格局方面具有广泛的战略共识。', '专题', '2015-10-09'),
(15, '新闻', 'SpaceX 的新火星计划，就是扔个氢弹', '../img/s8.jpg', '', '凤凰头条', '2015-10-09'),
(16, '新闻', '深圳楼市金九失色：一手住宅成交套数环比下降32%', '../img/s9.jpg', '', '凤凰头条', '2015-10-09');

-- --------------------------------------------------------

--
-- 表的结构 `navimg`
--

CREATE TABLE IF NOT EXISTS `navimg` (
  `news_id` int(11) NOT NULL,
  `news_type` varchar(20) NOT NULL,
  `news_title` varchar(100) NOT NULL,
  `news_img` varchar(200) NOT NULL,
  `news_content` text NOT NULL,
  `news_from` varchar(20) NOT NULL,
  `news_date` date NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `navimg`
--

INSERT INTO `navimg` (`news_id`, `news_type`, `news_title`, `news_img`, `news_content`, `news_from`, `news_date`) VALUES
(1, '焦点图', '', '../img/t4.jpg', '', '', '2015-10-09'),
(2, '滚动信息', '', '', '俄罗斯密集空袭IS', '', '2015-10-09'),
(3, '滚动信息', '', '', '台湾举行抗战阅兵', '', '2015-10-09'),
(4, '滚动信息', '', '', '台抹阅兵战机日国旗', '', '2015-10-09'),
(5, '滚动信息', '', '', '女兵扛4公斤枪训练', '', '2015-10-09'),
(6, '新闻', '陈柏霖 还是那个痴情的大仁哥	', '../img/p1.jpg', '', '', '2015-10-09'),
(7, '新闻', '阿扎尔向新浪公布手机私照	', '../img/p2.jpg', '', '', '2015-10-09'),
(8, '新闻', '吕良伟夫妇外出喝茶 妻子撒娇紧搂丈夫	', '../img/p3.jpg', '', '', '2015-10-09'),
(9, '新闻', '快船深圳训练遭围堵 小乔丹大笑	', '../img/p4.jpg', '', '', '2015-10-09'),
(10, '新闻', '黄晓明兄弟团抢亲被捆 baby男闺蜜扮女装', '../img/p5.jpg', '', '', '2015-10-09');

-- --------------------------------------------------------

--
-- 表的结构 `navlocal`
--

CREATE TABLE IF NOT EXISTS `navlocal` (
  `news_id` int(11) NOT NULL,
  `news_type` varchar(20) NOT NULL,
  `news_title` varchar(100) NOT NULL,
  `news_img` varchar(200) NOT NULL,
  `news_content` text NOT NULL,
  `news_from` varchar(20) NOT NULL,
  `news_date` date NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `navlocal`
--

INSERT INTO `navlocal` (`news_id`, `news_type`, `news_title`, `news_img`, `news_content`, `news_from`, `news_date`) VALUES
(1, '焦点图', '', '../img/t3.jpg', '', '', '2015-10-09'),
(2, '滚动信息', '', '', '杨秀珠未获政治庇护', '', '2015-10-09'),
(3, '滚动信息', '', '', '京都碰瓷系假消息', '', '2015-10-09'),
(4, '滚动信息', '', '', '昆凌产后瘦身内幕', '', '2015-10-09'),
(5, '滚动信息', '', '', '杨子黄圣依秀恩爱', '', '2015-10-09'),
(6, '新闻', '看“象”吞“象”时 一把手如何话事？', '../img/l1.jpg', '', '凤凰头条', '2015-10-09'),
(7, '新闻', '家乐福启动入华20年来最大规模变革', '../img/l2.jpg', '', '凤凰头条', '2015-10-09'),
(8, '新闻', 'uber成立“雾博”，滴滴拿到牌照，然后呢？', '../img/l3.jpg', '', '腾讯新闻', '2015-10-09'),
(9, '新闻', '美团大众点评合并：明争结束 暗斗开始', '../img/l4.jpg', '', '腾讯新闻', '2015-10-09'),
(10, '新闻', '闭环式教育是未来，但互联网首先要回归连接本质', '../img/l5.jpg', '', '腾讯新闻', '2015-10-09'),
(11, '新闻', '合并以后仍值150亿 美团大众看不透的未来或更悲哀', '../img/l6.jpg', '', '网易新闻', '2015-10-09'),
(12, '新闻', '投资者认为“资本寒冬”是啥？不是没钱，是没好项目', '../img/l7.jpg', '', '网易新闻', '2015-10-09'),
(13, '新闻', '美团点评合体中的竞争宿命与垄断审查', '../img/l8.jpg', '', '凤凰新闻', '2015-10-09'),
(14, '新闻', '德国的难民潮与默克尔的“诺贝尔成色” ', '../img/l9.jpg', '', '凤凰新闻', '2015-10-09');

-- --------------------------------------------------------

--
-- 表的结构 `navrec`
--

CREATE TABLE IF NOT EXISTS `navrec` (
  `news_id` int(11) NOT NULL,
  `news_type` varchar(20) NOT NULL,
  `news_title` varchar(100) NOT NULL,
  `news_img` varchar(200) NOT NULL,
  `news_content` text NOT NULL,
  `news_from` varchar(20) NOT NULL,
  `news_date` date NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `navrec`
--

INSERT INTO `navrec` (`news_id`, `news_type`, `news_title`, `news_img`, `news_content`, `news_from`, `news_date`) VALUES
(17, '焦点图', '', '../img/t1.jpg', '', '', '2015-10-09'),
(18, '滚动信息', '', '', '美国反恐英雄遇刺', '', '2015-10-09'),
(19, '滚动信息', '', '', '美舰拟两周内进南海', '', '2015-10-09'),
(20, '滚动信息', '', '', '日本为老人碰瓷道歉', '', '2015-10-09'),
(21, '滚动信息', '', '', '退役军人获养老补助', '', '2015-10-09'),
(22, '新闻', '刘伯明晋升少将 神舟五六七号6航天员均成少将', '../img/r1.jpg', '', '凤凰头条', '2015-10-09'),
(23, '新闻', '湖南岳阳原副市长被公诉 被指"一天一瓶茅台"', '../img/r2.jpg', '', '搜狐要闻', '2015-10-09'),
(24, '新闻', 'IMF总裁拉加德：中国经济并非“前景黯淡”', '../img/r3.jpg', '', '凤凰要闻', '2015-10-09'),
(25, '新闻', '曝巴萨冬窗天价挖罗伊斯 锋线追拉维奇', '../img/r4.jpg', '', '凤凰要闻', '2015-10-09'),
(26, '新闻', '袁隆平：请别再向超级稻泼脏水', '../img/r5.jpg', '', '凤凰要闻', '2015-10-09'),
(27, '新闻', '日方就“碰瓷乌龙”向大妈致歉', '../img/r6.jpg', '', '腾讯头条', '2015-10-09'),
(28, '新闻', '蔡国庆自曝母亲因文革患上精神疾病', '../img/r7.jpg', '', '凤凰要闻', '2015-10-09'),
(29, '新闻', '董子健与张艾嘉忘年吻 眼神孤独感迷人', '../img/r8.jpg', '', '凤凰要闻', '2015-10-09'),
(30, '新闻', '美联储会议纪要:9月暂不加息', '../img/r9.jpg', '', '凤凰要闻', '2015-10-09');

-- --------------------------------------------------------

--
-- 表的结构 `navsociety`
--

CREATE TABLE IF NOT EXISTS `navsociety` (
  `news_id` int(11) NOT NULL,
  `news_type` varchar(20) NOT NULL,
  `news_title` varchar(100) NOT NULL,
  `news_img` varchar(200) NOT NULL,
  `news_content` text NOT NULL,
  `news_from` varchar(20) NOT NULL,
  `news_date` date NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `navsociety`
--

INSERT INTO `navsociety` (`news_id`, `news_type`, `news_title`, `news_img`, `news_content`, `news_from`, `news_date`) VALUES
(1, '焦点图', '', '../img/t6.jpg', '', '', '2015-10-09'),
(2, '滚动信息', '', '', '歼20明年或批量生产', '', '2015-10-09'),
(4, '滚动信息', '', '', '世界军力排行出炉', '', '2015-10-09'),
(5, '滚动信息', '', '', '台湾举行抗战阅兵', '', '2015-10-09'),
(6, '新闻', '中国人屠呦呦获诺贝尔医学奖#中医黑请出动', '../img/m1.jpg', '', '凤凰新闻', '2015-10-09'),
(7, '新闻', '各位O2O土豪，地推不是万能的，还有移动广告呢！', '../img/m2.jpg', '', '凤凰新闻', '2015-10-09'),
(8, '新闻', '英国一男子因入侵摄像头观看户主做爱被判刑', '../img/m3.jpg', '', '腾讯新闻', '2015-10-09'),
(9, '新闻', 'Gartner：可颠覆IT产业的十大战略预测', '../img/m4.jpg', '', '腾讯新闻', '2015-10-09'),
(10, '新闻', '为什么柳岩总在“晒胸”？', '../img/m5.jpg', '一则是她在综艺节目里，用胸口托宠物，风情又颇风趣.', '新浪新闻', '2015-10-09'),
(11, '新闻', '阿里不做，百度不做，为啥这家公司一定能做成？', '../img/m6.jpg', '', '新浪新闻', '2015-10-09'),
(12, '新闻', '英国对中国，单相思久矣	', '../img/m7.jpg', '', '搜狐新闻', '2015-10-09'),
(13, '新闻', '单体酒店陷颓势，酒店行业开启连锁大时代	', '../img/m8.jpg', '', '网易新闻', '2015-10-09');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `navamuse`
--
ALTER TABLE `navamuse`
  ADD PRIMARY KEY (`news_id`);

--
-- Indexes for table `navfam`
--
ALTER TABLE `navfam`
  ADD PRIMARY KEY (`news_id`);

--
-- Indexes for table `navimg`
--
ALTER TABLE `navimg`
  ADD PRIMARY KEY (`news_id`);

--
-- Indexes for table `navlocal`
--
ALTER TABLE `navlocal`
  ADD PRIMARY KEY (`news_id`);

--
-- Indexes for table `navrec`
--
ALTER TABLE `navrec`
  ADD PRIMARY KEY (`news_id`);

--
-- Indexes for table `navsociety`
--
ALTER TABLE `navsociety`
  ADD PRIMARY KEY (`news_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `navamuse`
--
ALTER TABLE `navamuse`
  MODIFY `news_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=16;
--
-- AUTO_INCREMENT for table `navfam`
--
ALTER TABLE `navfam`
  MODIFY `news_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=17;
--
-- AUTO_INCREMENT for table `navimg`
--
ALTER TABLE `navimg`
  MODIFY `news_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `navlocal`
--
ALTER TABLE `navlocal`
  MODIFY `news_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT for table `navrec`
--
ALTER TABLE `navrec`
  MODIFY `news_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=32;
--
-- AUTO_INCREMENT for table `navsociety`
--
ALTER TABLE `navsociety`
  MODIFY `news_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=15;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
