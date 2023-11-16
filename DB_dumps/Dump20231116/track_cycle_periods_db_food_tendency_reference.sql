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
-- Table structure for table `food_tendency_reference`
--

DROP TABLE IF EXISTS `food_tendency_reference`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `food_tendency_reference` (
  `id` int NOT NULL AUTO_INCREMENT,
  `food_tendency_name` varchar(100) NOT NULL,
  `explanation` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `food_tendency_reference`
--

LOCK TABLES `food_tendency_reference` WRITE;
/*!40000 ALTER TABLE `food_tendency_reference` DISABLE KEYS */;
INSERT INTO `food_tendency_reference` VALUES (1,'Sweet Tooth','Users who have a preference for sweet foods and desserts.'),(2,'Dessert Connoisseur','Those with a refined taste for desserts and sweets, often seeking unique and gourmet options.'),(3,'Savory Snacker','Those who enjoy salty or savory snacks like chips, popcorn, or pretzels.'),(4,'Late-Night Snacker','Users who tend to eat snacks or meals late at night.'),(5,'Health Conscious','People who prioritize healthy and nutritious foods in their diet.'),(6,'Fast Food Lover','Users who frequently consume fast food or takeout meals.'),(7,'Home Cook','Those who prefer homemade meals and cooking from scratch.'),(8,'Vegetarian Days','Users who have certain days of the week when they follow a vegetarian diet.'),(9,'Vegetable Enthusiast','Users who love vegetables and make them a central part of their meals.'),(10,'Raw Food Enthusiast','Those who consume mainly uncooked and unprocessed foods for health and nutritional benefits.'),(11,'Gluten-Free Advocate','People who strictly avoid gluten-containing grains for health or dietary reasons.'),(12,'Raw Vegan','People who follow a diet of uncooked and unprocessed plant-based foods.'),(13,'Flexitarian','Users who primarily follow a vegetarian diet but occasionally eat meat or fish.'),(14,'Lacto-Ovo Vegetarian','Users who exclude meat and seafood but still consume dairy products and eggs.'),(15,'Flexi-Vegan','People who primarily follow a vegan diet but occasionally incorporate dairy or eggs.'),(16,'Carnivore','People who predominantly consume meat in their diet.'),(17,'Mindful Carnivore','Users who consume meat but do so mindfully, focusing on quality and ethical sourcing.'),(18,'Mindful Meat Eater','Users who consume meat but do so with mindfulness and moderation.'),(19,'Balanced Diet','Users who aim for a balanced intake of proteins, carbohydrates, and fats.'),(20,'Occasional Indulgence','Those who generally eat healthily but occasionally enjoy indulgent or high-calorie treats.'),(21,'Intermittent Fasting','Users who follow an eating pattern that alternates between periods of fasting and eating.'),(22,'Grazing Eater','People who prefer to eat smaller, frequent meals throughout the day rather than traditional three main meals.'),(23,'Low-Carb','Users who limit their carbohydrate intake as part of their dietary preference.'),(24,'Portion Control','Those who consciously manage the size of their food portions to control calorie intake.'),(25,'Mindful Eater','People who practice mindful eating, focusing on savoring each bite and paying attention to hunger and fullness cues.'),(26,'Comfort Food Seeker','Users who turn to familiar and comforting foods during times of stress or emotional need.'),(27,'Food Explorer','Those who enjoy trying new and exotic foods from various cuisines.'),(28,'Gourmet Enthusiast','People who have a passion for high-quality, gourmet dining experiences.'),(29,'Organic and Locavore','Users who prioritize organic and locally sourced foods.'),(30,'Protein-Packed','Those who aim to incorporate a significant amount of protein into their diet, often for muscle building or fitness goals.'),(31,'Dairy-Free Lifestyle','Users who exclude dairy products from their diet, often due to lactose intolerance or dietary preferences.'),(32,'Spicy Food Lover','Those who enjoy spicy foods and seek out dishes with heat and flavor.'),(33,'Whole Food Devotee','People who prioritize whole and unprocessed foods in their diet.'),(34,'Traditionalist','People who stick to traditional and culturally specific diets and recipes.'),(35,'Allergen-Free Eater','Users with food allergies who carefully avoid specific allergens in their diet.'),(36,'Fruitarian','Users who primarily eat fruits and fruit-based foods.'),(37,'Locavorian','Those who focus on consuming locally sourced and produced foods.'),(38,'Sustainable Eater','People who prioritize environmentally sustainable food choices and practices.'),(39,'Low-Fat Diet','Users who limit their fat intake and opt for low-fat food options.'),(40,'One-Pot Wonder','Those who prefer cooking and enjoying dishes that can be made in a single pot or pan.'),(41,'Food Waster','People who tend to waste food and don\'t finish their meals.'),(42,'Cheat Day Fanatic','Those who strictly adhere to their diet most days but have designated \"cheat days\" for indulgence.'),(43,'Carb-Loader','People who enjoy diets rich in carbohydrates, such as pasta, bread, and rice.'),(44,'Local and Seasonal Eater','Users who prioritize foods that are both locally sourced and in season to support regional agriculture.'),(45,'Sugar-Free Lifestyle','Those who avoid added sugars and sugary products in their diet.'),(46,'Eco-Friendly Eater','People who make food choices that have a minimal impact on the environment.'),(47,'No-Cook Enthusiast','Users who prefer meals that require no cooking or minimal preparation.'),(48,'Macrobiotic Diet','Those who follow a diet emphasizing balance and natural foods, often associated with Asian cuisine.'),(49,'Farm-to-Table Advocate','Users who prioritize food that comes directly from local farms and producers.'),(50,'Low-Sodium Diet','Those who restrict their sodium intake for health reasons.');
/*!40000 ALTER TABLE `food_tendency_reference` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-16  9:44:12
