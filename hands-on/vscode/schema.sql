-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: mathematical-game
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `players`
--

DROP TABLE IF EXISTS `players`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `players` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `score` int NOT NULL,
  `round` int NOT NULL,
  `level` int NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `browser` varchar(255) NOT NULL,
  `operational_system` varchar(255) NOT NULL,
  `ip_address` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `players`
--

LOCK TABLES `players` WRITE;
/*!40000 ALTER TABLE `players` DISABLE KEYS */;
INSERT INTO `players` VALUES (1,'Marden',100,5,4,'2024-01-30 19:08:49','chrome','windows','9989'),(2,'andre',25,5,3,'2024-01-30 19:46:09','Windows','chrome','23332'),(3,'andre',25,5,3,'2024-01-30 20:38:06','unknown','PostmanRuntime','23332'),(4,'Marcos',23,2,1,'2024-01-30 21:19:26','unknown','PostmanRuntime','::1'),(5,'Marden',26,4,2,'2024-01-30 21:58:41','unknown','PostmanRuntime','::1'),(6,'Marden',26,4,2,'2024-01-30 22:05:42','unknown','PostmanRuntime','::1'),(7,'David33',500,4,2,'2024-01-31 21:12:57','Windows 10.0','Chrome','::1'),(8,'David',700,7,7,'2024-01-31 21:16:41','Windows 10.0','Chrome','::1'),(9,'',15,6,0,'2024-01-31 21:28:34','Windows 10.0','Chrome','::1'),(10,'Bia',40,11,2,'2024-01-31 21:32:46','Windows 10.0','Chrome','::1'),(11,'Bia',25,8,1,'2024-01-31 21:35:44','Windows 10.0','Chrome','::1'),(12,'Marden',30,9,1,'2024-02-01 20:36:47','Windows 10.0','Chrome','::1'),(13,'Marden',5,4,0,'2024-02-01 20:51:24','Windows 10.0','Chrome','::1'),(14,'Marden',5,4,0,'2024-02-01 21:28:53','Windows 10.0','Chrome','::1'),(15,'',90,21,4,'2024-02-01 23:06:05','Windows 10.0','Chrome','::1'),(16,'Marden',65,17,3,'2024-02-01 23:07:40','Windows 10.0','Chrome','::1'),(17,'Marden',50,14,2,'2024-02-01 23:14:25','Windows 10.0','Chrome','::1'),(18,'Marden',20,7,1,'2024-02-01 23:42:13','Windows 10.0','Chrome','::1'),(19,'Marden',10,5,0,'2024-02-02 21:35:47','Windows 10.0','Chrome','::1'),(20,'Marden',0,3,0,'2024-02-02 22:02:13','Windows 10.0','Chrome','::1'),(21,'Marden',5,4,0,'2024-02-02 23:30:48','Windows 10.0','Chrome','::1'),(22,'Marden',15,6,0,'2024-02-05 23:55:01','Windows 10.0','Chrome','::1'),(23,'David',70,18,3,'2024-02-06 00:20:09','Windows 10.0','Chrome','::1'),(24,'David',30,9,1,'2024-02-06 00:20:58','Windows 10.0','Chrome','::1'),(25,'David',35,10,1,'2024-02-06 00:41:31','Windows 10.0','Chrome','::1'),(26,'Paulo',40,11,2,'2024-02-06 01:00:58','Windows 10.0','Chrome','::1'),(27,'David',125,29,6,'2024-02-06 18:04:07','Windows 10.0','Chrome','::1'),(28,'Player2775',0,3,0,'2024-02-06 20:27:19','Windows 10.0','Chrome','::1'),(29,'Player2775',0,3,0,'2024-02-06 20:39:55','Windows 10.0','Chrome','::1'),(30,'Player2775',0,3,0,'2024-02-06 20:43:48','Windows 10.0','Chrome','::1'),(31,'Player2775',0,3,0,'2024-02-06 20:44:23','Windows 10.0','Chrome','::1'),(32,'Player2775',35,10,1,'2024-02-06 20:45:00','Windows 10.0','Chrome','::1'),(33,'Player2775',15,6,0,'2024-02-06 20:45:43','Windows 10.0','Chrome','::1'),(34,'Player2775',20,7,1,'2024-02-06 20:46:04','Windows 10.0','Chrome','::1'),(35,'Player2775',0,3,0,'2024-02-06 20:51:01','Windows 10.0','Chrome','::1'),(36,'Player2775',0,3,0,'2024-02-06 20:52:43','Windows 10.0','Chrome','::1'),(37,'Player2775',15,6,0,'2024-02-06 20:53:02','Windows 10.0','Chrome','::1'),(38,'Player2775',10,5,0,'2024-02-06 20:54:00','Windows 10.0','Chrome','::1'),(39,'Player2775',10,5,0,'2024-02-06 20:54:38','Windows 10.0','Chrome','::1'),(40,'Player2775',50,14,2,'2024-02-06 20:57:41','Windows 10.0','Chrome','::1'),(41,'Player2775',45,12,2,'2024-02-06 20:59:04','Windows 10.0','Chrome','::1'),(42,'David',45,12,2,'2024-02-06 21:01:59','Windows 10.0','Chrome','::1'),(43,'David',25,8,1,'2024-02-06 21:02:27','Windows 10.0','Chrome','::1'),(44,'David',100,24,5,'2024-02-06 21:19:51','Windows 10.0','Chrome','::1'),(45,'David',40,11,2,'2024-02-06 21:40:24','Windows 10.0','Chrome','::1'),(46,'Player1476',50,14,2,'2024-02-07 01:18:41','Windows 10.0','Chrome','::1'),(47,'1',120,28,6,'2024-02-07 17:35:41','Windows 10.0','Chrome','::1'),(48,'1',155,36,7,'2024-02-07 17:39:53','Windows 10.0','Chrome','::1'),(49,'Player1051',0,3,0,'2024-02-07 18:34:47','Windows 10.0','Chrome','::1'),(50,'Player1051',0,3,0,'2024-02-07 18:34:56','Windows 10.0','Chrome','::1'),(51,'Player1051',85,20,4,'2024-02-07 21:29:05','Windows 10.0','Chrome','::1');
/*!40000 ALTER TABLE `players` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-07 20:30:55
