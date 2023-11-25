-- CreateTable
CREATE TABLE `author` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(64) NOT NULL,
    `address` VARCHAR(255) NOT NULL,
    `age` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `book` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(64) NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `publish_date` DATETIME(3) NOT NULL,
    `author_id` INTEGER NOT NULL,

    INDEX `author_id`(`author_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `book` ADD CONSTRAINT `author_id` FOREIGN KEY (`author_id`) REFERENCES `author`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
