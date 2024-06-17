CREATE TABLE hd (
    hd_id INT AUTO_INCREMENT PRIMARY KEY,
    hd_logo_id VARCHAR(255) NOT NULL,
    hd_logo_text VARCHAR(255) NOT NULL,
    hd_logo_imgurl VARCHAR(255) NOT NULL,
    hd_logo_href VARCHAR(255) NOT NULL,
    hd_menu VARCHAR(100) NOT NULL,
    hd_submenu VARCHAR(100),
    hd_iconmenu VARCHAR(100),
    hd_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE hdGnbS (
    id INT AUTO_INCREMENT PRIMARY KEY,
    text VARCHAR(255),
    href VARCHAR(255)
);

CREATE TABLE hdGnbSubS (
    id INT AUTO_INCREMENT PRIMARY KEY,
    hdGnbS_id INT,
    text VARCHAR(255),
    href VARCHAR(255),
    FOREIGN KEY (hdGnbS_id) REFERENCES hdGnbS(id)
);