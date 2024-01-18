CREATE DATABASE library;

CREATE TABLE books(
    id SERIAL PRIMARY KEY,
    title TEXT,
    author TEXT
);

INSERT INTO books (title, author) VALUES
    ('Foundation', 'Isaac Asimov'),
    ('Digital Fortress', 'Dan Brown'),
    ('World War Z', 'Max Brooks');

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username TEXT,
    password TEXT
); 

INSERT INTO users (username, password) VALUES
    ('Joe', 'joe123'),
    ('Ryan', 'ryan123'),
    ('Cameron', 'cameron123');
