DROP DATABASE IF EXISTS study_buddies;
CREATE DATABASE study_buddies;

\c study_buddies;

DROP TABLE IF EXISTS groups;

CREATE TABLE groups (
    study_group_id SERIAL PRIMARY KEY,
    name TEXT NOT NULL UNIQUE,
    main_focus TEXT,
    date_formed TIMESTAMP,
    contact_email TEXT
);


DROP TABLE IF EXISTS events;

CREATE TABLE events (
    eventid SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    virtual_meeting_link TEXT,
    start_time TEXT,
    end_time TEXT,
    number_of_attendees INT,
    study_group_id INT REFERENCES groups(study_group_id)
);