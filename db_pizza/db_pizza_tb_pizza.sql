-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: db_pizza
-- ------------------------------------------------------
-- Server version	8.0.34

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
-- Table structure for table `tb_pizza`
--

DROP TABLE IF EXISTS `tb_pizza`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_pizza` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `images_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_9x0a8typmdgco8kj51rs8afxy` (`images_id`),
  CONSTRAINT `FKffrso2oauxqf3kepe4smspojj` FOREIGN KEY (`images_id`) REFERENCES `tb_images` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_pizza`
--

LOCK TABLES `tb_pizza` WRITE;
/*!40000 ALTER TABLE `tb_pizza` DISABLE KEYS */;
INSERT INTO `tb_pizza` VALUES (1,'Calabresa com cebola','30,00','Mussarela','ae56ce1e-99ee-4921-83c0-545ae2667312'),(2,'Calabresa com cebola','30,00','Calabreza','b576ce68-462d-4b6b-90ae-83b83cc2ea0c'),(4,'Milho verde com catupiry','44,99','Milho verde','b2ac002e-b053-4d43-b2aa-8b283ec6549a'),(6,'Mussarela, tomate e queijo ralado','54,99','Napolitano','d62d44de-e202-4245-b9a4-145afb27dc85'),(8,'Carne seca e mussarela','98,99','Carne seca','edac61e5-2d0f-4cda-89eb-2cadbbb4c0f8'),(9,'Mussarela, ovo, tomate e cebola','99,99','Portuguesa','a295f122-a44c-4945-b256-473586cbc680');
/*!40000 ALTER TABLE `tb_pizza` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-10  8:36:28
