-- DROP DATABASES & PROCEDURES
DROP PROCEDURE IF EXISTS InsertUser;
DROP PROCEDURE IF EXISTS InsertForm;
DROP PROCEDURE IF EXISTS InsertFormResponse;
DROP DATABASE IF EXISTS xyforms;

-- CREATE & USE DATABASE
CREATE DATABASE xyforms;
USE xyforms;

-- CREATE TABLE QUERIES
CREATE TABLE user (
    user_id VARCHAR(15) PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    joined_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE form (
    form_id VARCHAR(15) PRIMARY KEY,
    user_id VARCHAR(15) NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    questions JSON NOT NULL,
    is_published BOOLEAN DEFAULT FALSE,
    is_locked BOOLEAN DEFAULT FALSE,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES user(user_id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE formresponse (
    response_id VARCHAR(15) PRIMARY KEY,
    form_id VARCHAR(15) NOT NULL,
    response JSON NOT NULL,
    responded_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (form_id) REFERENCES form(form_id) ON DELETE CASCADE ON UPDATE CASCADE
);

-- STORED PROCEDURES

-- Stored procedure for inserting data into the 'user' table
DELIMITER //

CREATE PROCEDURE InsertUser(
    IN p_user_id VARCHAR(15),
    IN p_first_name VARCHAR(50),
    IN p_last_name VARCHAR(50),
    IN p_email VARCHAR(50),
    IN p_password VARCHAR(255)
)
BEGIN
    INSERT INTO user (user_id, first_name, last_name, email, password, joined_at)
    VALUES (p_user_id, p_first_name, p_last_name, p_email, p_password, CURRENT_TIMESTAMP);
END //

DELIMITER ;


-- Stored procedure for inserting data into the 'form' table
DELIMITER //

CREATE PROCEDURE InsertForm(
    IN p_form_id VARCHAR(15),
    IN p_user_id VARCHAR(15),
    IN p_title VARCHAR(255),
    IN p_description TEXT,
    IN p_questions JSON,
    IN p_is_published BOOLEAN,
    IN p_is_locked BOOLEAN
)
BEGIN
    INSERT INTO form (form_id, user_id, title, description, questions, is_published, is_locked, created_at)
    VALUES (p_form_id, p_user_id, p_title, p_description, p_questions, p_is_published, p_is_locked, CURRENT_TIMESTAMP);
END //

DELIMITER ;


-- Stored procedure for inserting data into the 'formresponse' table
DELIMITER //

CREATE PROCEDURE InsertFormResponse(
    IN p_response_id VARCHAR(15),
    IN p_form_id VARCHAR(15),
    IN p_response JSON
)
BEGIN
    INSERT INTO formresponse (response_id, form_id, response, responded_at)
    VALUES (p_response_id, p_form_id, p_response, CURRENT_TIMESTAMP);
END //

DELIMITER ;

-- INSERTING SAMPLE DATA

-- Inserting sample data into the 'user' table
CALL InsertUser('user011', 'John', 'Doe', 'john.doe@email.com', 'hashedpassword456');
CALL InsertUser('user012', 'Emily', 'Smith', 'emily.smith@email.com', 'hashedpassword789');
CALL InsertUser('user013', 'Michael', 'Johnson', 'michael.johnson@email.com', 'hashedpassword012');


-- Inserting sample data into the 'form' table
CALL InsertForm(
    'form010',
    'user011',
    'Feedback Form 3',
    'This is another feedback form',
    '{"questions": ["Feedback Question X", "Feedback Question Y"]}',
    true,
    false
);

CALL InsertForm(
    'form011',
    'user012',
    'Survey 6',
    'This is a survey about preferences',
    '{"questions": ["Preference Question 1", "Preference Question 2"]}',
    false,
    true
);

CALL InsertForm(
    'form012',
    'user013',
    'Quiz 3',
    'This is a quiz about general knowledge',
    '{"questions": ["Question A", "Question B"]}',
    true,
    false
);


-- Inserting sample data into the 'formresponse' table
CALL InsertFormResponse('response010', 'form010', '{"answers": ["Feedback Answer 1", "Feedback Answer 2"]}');
CALL InsertFormResponse('response011', 'form011', '{"answers": ["Preference Answer X", "Preference Answer Y"]}');
CALL InsertFormResponse('response012', 'form012', '{"answers": ["Quiz Answer 1", "Quiz Answer 2"]}');

-- GET USER FORMS STORED PROCEDURE
DELIMITER //

CREATE PROCEDURE GetUserForms(IN p_user_id VARCHAR(15))
BEGIN
    SELECT form.form_id, form.title, form.created_at, form.is_published, form.is_locked
    FROM form
    JOIN user ON form.user_id = user.user_id
    WHERE user.user_id = p_user_id;
END //

DELIMITER ;