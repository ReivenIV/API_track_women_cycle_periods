-- MySQL dump 10.13  Distrib 8.0.35, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: track_cycle_periods_db
-- ------------------------------------------------------
-- Server version	8.0.35-0ubuntu0.22.04.1

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
-- Table structure for table `emotions_reference`
--

DROP TABLE IF EXISTS `emotions_reference`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `emotions_reference` (
  `id` int NOT NULL AUTO_INCREMENT,
  `emotion_name` varchar(45) NOT NULL,
  `emotion_group` int NOT NULL,
  `color` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=145 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `emotions_reference`
--

LOCK TABLES `emotions_reference` WRITE;
/*!40000 ALTER TABLE `emotions_reference` DISABLE KEYS */;
INSERT INTO `emotions_reference` VALUES (1,'Enraged',1,NULL),(2,'Terrified',1,NULL),(3,'Panicked',1,NULL),(4,'Shocked',1,NULL),(5,'Impassioned',1,NULL),(6,'Hyper',1,NULL),(7,'Livid',1,NULL),(8,'Irate',1,NULL),(9,'Overwhelmed',1,NULL),(10,'Stressed',1,NULL),(11,'Annoyed',1,NULL),(12,'Pressured',1,NULL),(13,'Furious',1,NULL),(14,'Frightened',1,NULL),(15,'Anxious',1,NULL),(16,'Apprehensive',1,NULL),(17,'Irritated',1,NULL),(18,'Restless',1,NULL),(19,'Jealous',1,NULL),(20,'Scared',1,NULL),(21,'Angry',1,NULL),(22,'Jittery',1,NULL),(23,'Fomo',1,NULL),(24,'Confused',1,NULL),(25,'Envious',1,NULL),(26,'Repulsed',1,NULL),(27,'Frustrated',1,NULL),(28,'Embarrassed',1,NULL),(29,'Concerned',1,NULL),(30,'Tense',1,NULL),(31,'Contempt',1,NULL),(32,'Troubled',1,NULL),(33,'Worried',1,NULL),(34,'Nervous',1,NULL),(35,'Peeved',1,NULL),(36,'Uneasy',1,NULL),(37,'ecstatic',2,NULL),(38,'elated',2,NULL),(39,'thrilled',2,NULL),(40,'exhilarated',2,NULL),(41,'awe',2,NULL),(42,'surprised',2,NULL),(43,'empowered',2,NULL),(44,'inspired',2,NULL),(45,'amazed',2,NULL),(46,'successful',2,NULL),(47,'determined',2,NULL),(48,'excited',2,NULL),(49,'proud',2,NULL),(50,'productive',2,NULL),(51,'joyful',2,NULL),(52,'enthusiastic',2,NULL),(53,'eager',2,NULL),(54,'energized',2,NULL),(55,'optimistic',2,NULL),(56,'motivated',2,NULL),(57,'happy',2,NULL),(58,'upbeat',2,NULL),(59,'curious',2,NULL),(60,'cheerful',2,NULL),(61,'challenged',2,NULL),(62,'engaged',2,NULL),(63,'confident',2,NULL),(64,'alive',2,NULL),(65,'focused',2,NULL),(66,'pleasant',2,NULL),(67,'accomplished',2,NULL),(68,'hopeful',2,NULL),(69,'wishful',2,NULL),(70,'delighted',2,NULL),(71,'playful',2,NULL),(72,'pleased',2,NULL),(73,'Miserable',3,NULL),(74,'Despair',3,NULL),(75,'Glum',3,NULL),(76,'Burned out',3,NULL),(77,'Exhausted',3,NULL),(78,'Helpless',3,NULL),(79,'Depressed',3,NULL),(80,'Hopeless',3,NULL),(81,'Alienated',3,NULL),(82,'Nostalgic',3,NULL),(83,'Lonely',3,NULL),(84,'Apathetic',3,NULL),(85,'Guilty',3,NULL),(86,'Numb',3,NULL),(87,'Excluded',3,NULL),(88,'Spent',3,NULL),(89,'Discouraged',3,NULL),(90,'Disengaged',3,NULL),(91,'Pessimistic',3,NULL),(92,'Vulnerable',3,NULL),(93,'Disconnected',3,NULL),(94,'Forlorn',3,NULL),(95,'Sad',3,NULL),(96,'Fatigued',3,NULL),(97,'Humiliated',3,NULL),(98,'Ashamed',3,NULL),(99,'Lost',3,NULL),(100,'Disappointed',3,NULL),(101,'Meh',3,NULL),(102,'Tired',3,NULL),(103,'Disgusted',3,NULL),(104,'Trapped',3,NULL),(105,'Insecure',3,NULL),(106,'Disheartened',3,NULL),(107,'Down',3,NULL),(108,'Bored',3,NULL),(109,'Serene',4,NULL),(110,'Satisfied',4,NULL),(111,'Relieved',4,NULL),(112,'Thankful',4,NULL),(113,'Tranquil',4,NULL),(114,'Carefree',4,NULL),(115,'Blessed',4,NULL),(116,'Secure',4,NULL),(117,'Safe',4,NULL),(118,'Balanced',4,NULL),(119,'Peaceful',4,NULL),(120,'Mellow',4,NULL),(121,'Moved',4,NULL),(122,'Accepted',4,NULL),(123,'Content',4,NULL),(124,'Empathetic',4,NULL),(125,'Comfortable',4,NULL),(126,'Sympathetic',4,NULL),(127,'Grateful',4,NULL),(128,'Valued',4,NULL),(129,'Included',4,NULL),(130,'Compassionate',4,NULL),(131,'Chill',4,NULL),(132,'Relaxed',4,NULL),(133,'Connected',4,NULL),(134,'Loved',4,NULL),(135,'Supported',4,NULL),(136,'Appreciated',4,NULL),(137,'Thoughtful',4,NULL),(138,'Good, Okay',4,NULL),(139,'Blissful',4,NULL),(140,'Fulfilled',4,NULL),(141,'Respected',4,NULL),(142,'Understood',4,NULL),(143,'At ease',4,NULL),(144,'Calm',4,NULL);
/*!40000 ALTER TABLE `emotions_reference` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-16  9:44:08
