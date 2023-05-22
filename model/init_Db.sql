CREATE TABLE `users`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `firstname` VARCHAR(255) NOT NULL,
    `lastname` VARCHAR(255) NOT NULL
);
ALTER TABLE
    `users` ADD PRIMARY KEY(`id`);
CREATE TABLE `retreat`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `location` VARCHAR(255) NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `price` INT NOT NULL
);
ALTER TABLE
    `retreat` ADD PRIMARY KEY(`id`);
ALTER TABLE
    `retreat` ADD CONSTRAINT `retreat_location_foreign` FOREIGN KEY(`location`) REFERENCES `users`(`firstname`);