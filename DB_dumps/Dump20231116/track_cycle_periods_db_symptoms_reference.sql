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
-- Table structure for table `symptoms_reference`
--

DROP TABLE IF EXISTS `symptoms_reference`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `symptoms_reference` (
  `id` int NOT NULL AUTO_INCREMENT,
  `symptom_name` varchar(255) NOT NULL,
  `symptom_category` varchar(255) NOT NULL,
  `explanation` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `symptoms_reference`
--

LOCK TABLES `symptoms_reference` WRITE;
/*!40000 ALTER TABLE `symptoms_reference` DISABLE KEYS */;
INSERT INTO `symptoms_reference` VALUES (1,'Menstrual Cramps (Dysmenorrhea)','Pain and Discomfort','These are sharp, throbbing, or dull pains in the lower abdomen that occur before and during menstruation.'),(2,'Menstrual Flow Changes','Bleeding Changes','Women may experience variations in the amount, color, and consistency of menstrual blood over their cycles.'),(3,'Breast Tenderness','Breast Changes','Many women experience breast tenderness or swelling in the days leading up to their period.'),(4,'Bloating','Digestive Symptoms','Some women may feel bloated, with a sensation of fullness or abdominal swelling, before and during menstruation.'),(5,'Headaches','Pain and Discomfort','Hormonal fluctuations can trigger headaches or migraines in some women around the time of their periods.'),(6,'Mood Swings','Emotional Changes','Hormonal changes can affect mood, leading to irritability, mood swings, or increased emotional sensitivity.'),(7,'Fatigue','Fatigue and Energy Levels','Feeling more tired than usual is common, especially in the days leading up to menstruation.'),(8,'Nausea','Digestive Symptoms','Some women may experience mild nausea or even vomiting during their periods.'),(9,'Backaches','Pain and Discomfort','Lower back pain can accompany menstrual cramps or occur on its own.'),(10,'Food Cravings','Appetite and Food Cravings','Many women have food cravings, often for sweet or salty foods, in the days before their period.'),(11,'Acne Breakouts','Skin Changes','Hormonal fluctuations can lead to acne or worsen existing acne.'),(12,'Digestive Issues','Digestive Symptoms','Some women may experience diarrhea or constipation during their periods.'),(13,'Breast Swelling and Sensitivity','Breast Changes','Breasts can become swollen, tender, or painful.'),(14,'Increased Body Temperature','Temperature Changes','Some women may experience a slight increase in body temperature during menstruation.'),(15,'Joint and Muscle Pain','Pain and Discomfort','Joint and muscle pain can occur as a result of hormonal changes.'),(16,'Clotting','Bleeding Changes','Some women may pass small to large blood clots during their menstrual period, especially during heavy flow days.'),(17,'Breast Discharge','Breast Changes','In some cases, a clear or milky discharge from the breasts may occur, which is typically related to hormonal changes.'),(18,'Vaginal Discharge Changes','Vaginal Changes','Hormonal fluctuations can lead to changes in vaginal discharge, such as increased thickness or volume.'),(19,'Pelvic Pain','Pain and Discomfort','In addition to menstrual cramps, some women may experience pelvic pain or discomfort during their period.'),(20,'Increased Sensitivity to Pain','Pain Sensitivity','Some women may find that they have a lower pain threshold during their menstrual period, making them more sensitive to other types of pain.'),(21,'Urinary Symptoms','Urinary Changes','Menstruation can sometimes lead to increased frequency of urination or a sensation of bladder pressure.'),(22,'Constipation or Diarrhea','Digestive Symptoms','Changes in hormone levels can affect the gastrointestinal system, leading to bowel irregularities.'),(23,'Skin Changes','Skin Changes','Hormonal fluctuations may result in changes in skin texture or the appearance of acne or skin blemishes.'),(24,'Insomnia or Sleep Disturbances','Sleep Disturbances','Hormonal changes and discomfort from menstrual symptoms can disrupt sleep patterns.'),(25,'Anxiety or Mood Disorders','Emotional Changes','Some women with preexisting anxiety or mood disorders may experience worsening symptoms during their menstrual cycle.'),(26,'Changes in Libido','Libido Changes','Hormonal shifts can affect sexual desire and arousal, causing some women to experience changes in libido during their periods.'),(27,'Hot Flashes','Temperature Changes','Although less common, some women may experience hot flashes, similar to those associated with menopause, during their menstrual cycle.'),(28,'Joint Looseness','Joint Changes','Some women may experience increased joint flexibility or looseness, known as hypermobility, during their menstrual cycle due to hormonal changes.'),(29,'Increased Appetite','Appetite and Food Cravings','Hormonal fluctuations can sometimes lead to an increase in appetite and cravings for specific foods.'),(30,'Dizziness','Dizziness and Lightheadedness','A drop in blood pressure or changes in blood flow can occasionally result in feelings of lightheadedness or dizziness during menstruation.'),(31,'Anemia Symptoms','Blood and Anemia','Heavy menstrual bleeding can lead to iron deficiency anemia in some cases, which may cause symptoms like fatigue, weakness, and pale skin.'),(32,'Breathing Changes','Respiratory Changes','Some women may notice changes in their breathing patterns, potentially leading to shortness of breath or chest discomfort.'),(33,'Skin Sensitivity','Skin Changes','Skin may become more sensitive to touch or pressure during menstruation.'),(34,'Changes in Body Odor','Body Odor Changes','Hormonal changes can influence body odor, and some women may notice differences in their scent during their periods.'),(35,'Hair and Nail Changes','Hair and Nail Changes','Hair and nails may grow faster or slower during the menstrual cycle, and some women may experience changes in hair texture or oiliness.'),(36,'Vivid Dreams','Emotional Changes','Some women report experiencing more vivid or unusual dreams during their menstrual period.'),(37,'Sensitivity to Light and Sound','Sensory Changes','Some individuals may become more sensitive to light or sound during their periods.'),(38,'Increased Salivation','Digestive Symptoms','A small number of women may notice increased salivation or changes in taste perception during menstruation.');
/*!40000 ALTER TABLE `symptoms_reference` ENABLE KEYS */;
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
