-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Wersja serwera:               10.1.37-MariaDB - mariadb.org binary distribution
-- Serwer OS:                    Win32
-- HeidiSQL Wersja:              9.5.0.5196
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Zrzut struktury bazy danych booksdb
CREATE DATABASE IF NOT EXISTS `booksdb` /*!40100 DEFAULT CHARACTER SET latin2 */;
USE `booksdb`;

-- Zrzut struktury tabela booksdb.authors
CREATE TABLE IF NOT EXISTS `authors` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- Zrzucanie danych dla tabeli booksdb.authors: ~9 rows (około)
/*!40000 ALTER TABLE `authors` DISABLE KEYS */;
INSERT INTO `authors` (`id`, `name`, `created_at`, `updated_at`) VALUES
	(1, 'Gamma Erich, Vlissides John, Johnson Ralph, Helm Richard', NULL, NULL),
	(2, 'Robert C. Martin', NULL, NULL),
	(3, 'John Grisham', NULL, NULL),
	(4, 'William Shakespeare', NULL, NULL),
	(5, 'Wojciech Chmielarz', NULL, NULL),
	(6, 'Fiodor Dostojewski', NULL, NULL),
	(7, 'Andrzej Stasiuk', NULL, NULL),
	(8, 'Ryszard Kapuściński', NULL, NULL),
	(9, 'Mario Vargas Llosa', NULL, NULL);
/*!40000 ALTER TABLE `authors` ENABLE KEYS */;

-- Zrzut struktury tabela booksdb.books
CREATE TABLE IF NOT EXISTS `books` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `isbn` varchar(13) DEFAULT NULL,
  `id_author` int(11) NOT NULL,
  `id_genre` int(11) NOT NULL,
  `id_publisher` int(11) NOT NULL,
  `rate` decimal(2,1) DEFAULT NULL,
  `votes` int(11) DEFAULT NULL,
  `cover` varchar(50) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- Zrzucanie danych dla tabeli booksdb.books: ~9 rows (około)
/*!40000 ALTER TABLE `books` DISABLE KEYS */;
INSERT INTO `books` (`id`, `title`, `isbn`, `id_author`, `id_genre`, `id_publisher`, `rate`, `votes`, `cover`, `created_at`, `updated_at`) VALUES
	(1, 'Wzorce projektowe', NULL, 1, 4, 1, 8.7, 564, NULL, NULL, NULL),
	(2, 'Czysty kod', NULL, 2, 4, 1, 8.4, 779, NULL, NULL, NULL),
	(3, 'Niewinny człowiek', NULL, 3, 1, 4, 6.2, 154, NULL, NULL, NULL),
	(4, 'Sen nocy letniej', NULL, 4, 8, 6, 6.4, 234, NULL, NULL, NULL),
	(5, 'Żmijowisko', NULL, 5, 5, 3, 8.2, 635, NULL, NULL, NULL),
	(6, 'Biesy', NULL, 6, 1, 6, 5.9, 890, NULL, NULL, NULL),
	(7, 'Jadąc do Babadag', NULL, 7, 3, 2, 7.5, 827, NULL, NULL, NULL),
	(8, 'Heban', NULL, 8, 3, 3, 5.0, 556, NULL, NULL, NULL),
	(9, 'Szelmostwa niegrzecznej dziewczynki', NULL, 9, 1, 5, 6.5, 1564, NULL, NULL, NULL);
/*!40000 ALTER TABLE `books` ENABLE KEYS */;

-- Zrzut struktury tabela booksdb.failed_jobs
CREATE TABLE IF NOT EXISTS `failed_jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Zrzucanie danych dla tabeli booksdb.failed_jobs: ~0 rows (około)
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;

-- Zrzut struktury tabela booksdb.genres
CREATE TABLE IF NOT EXISTS `genres` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `deleted` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- Zrzucanie danych dla tabeli booksdb.genres: ~8 rows (około)
/*!40000 ALTER TABLE `genres` DISABLE KEYS */;
INSERT INTO `genres` (`id`, `name`, `deleted`, `created_at`, `updated_at`) VALUES
	(1, 'Literatura piękna', '2020-09-02 09:48:05', NULL, NULL),
	(2, 'Literatura popularnonaukowa', '2020-09-02 09:48:05', NULL, NULL),
	(3, 'Literatura podróżnicza', '2020-09-02 09:48:05', NULL, NULL),
	(4, 'Informatyka', '2020-09-02 09:48:05', NULL, NULL),
	(5, 'Kryminał', '2020-09-02 09:48:05', NULL, NULL),
	(6, 'Pamiętniki', '2020-09-02 09:48:05', NULL, NULL),
	(7, 'Powieść historyczna', '2020-09-02 09:48:05', NULL, NULL),
	(8, 'Poezja', '2020-09-02 09:48:05', NULL, NULL);
/*!40000 ALTER TABLE `genres` ENABLE KEYS */;

-- Zrzut struktury tabela booksdb.migrations
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(191) NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- Zrzucanie danych dla tabeli booksdb.migrations: ~7 rows (około)
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
	(1, '2014_10_12_000000_create_users_table', 1),
	(2, '2014_10_12_100000_create_password_resets_table', 1),
	(3, '2019_08_19_000000_create_failed_jobs_table', 1),
	(4, '2020_08_27_085613_create_authors_table', 1),
	(5, '2020_08_27_085633_create_books_table', 1),
	(6, '2020_08_27_085653_create_genres_table', 1),
	(7, '2020_08_27_085713_create_publishers_table', 1);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;

-- Zrzut struktury tabela booksdb.password_resets
CREATE TABLE IF NOT EXISTS `password_resets` (
  `email` varchar(191) NOT NULL,
  `token` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Zrzucanie danych dla tabeli booksdb.password_resets: ~0 rows (około)
/*!40000 ALTER TABLE `password_resets` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_resets` ENABLE KEYS */;

-- Zrzut struktury tabela booksdb.publishers
CREATE TABLE IF NOT EXISTS `publishers` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- Zrzucanie danych dla tabeli booksdb.publishers: ~6 rows (około)
/*!40000 ALTER TABLE `publishers` DISABLE KEYS */;
INSERT INTO `publishers` (`id`, `name`, `created_at`, `updated_at`) VALUES
	(1, 'Helion', NULL, NULL),
	(2, 'Czarne', NULL, NULL),
	(3, 'Albatros', NULL, NULL),
	(4, 'Wydawnictwo MG', NULL, NULL),
	(5, 'Znak', NULL, NULL),
	(6, 'Czytelnik', NULL, NULL);
/*!40000 ALTER TABLE `publishers` ENABLE KEYS */;

-- Zrzut struktury tabela booksdb.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(191) NOT NULL,
  `email` varchar(191) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(191) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Zrzucanie danych dla tabeli booksdb.users: ~0 rows (około)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
