\c study_buddies;

SELECT * FROM groups;
SELECT * FROM events;

INSERT INTO groups (study_group_id, name, main_focus, date_formed, contact_email) VALUES
(1, 'Staten Island Dev Meet', 'Basic Javascript', 'June 01 2022','sifakeemail@fakeemail.com'),
(2, 'Coding for Everyone', 'Fundamental Javascript', 'June 30 2022','codingevrone@fakeemail.com'),
(3, 'SI Female Coders', 'Understanding Arrays & Objects', 'July 01 2022','sifemcode@fakeemail.com'),
(4, 'Pursuit Alumni', 'Advanced Javascript', 'July 30 2022','pursalum@fakeemail.com'),
(5, 'All About That Code', 'All About App UI/UX', 'August 01 2022','allabocode@fakeemail.com'),
(6, 'Javascript Meetup', 'Intro to Backends', 'August 28 2022','jsmeetup@fakeemail.com'),
(7, 'NYC Female Devs', 'Intro to Frontends', 'September 01 2022','nycfemdev@fakeemail.com'),
(8, 'Five Boro Devs', 'Database Fundamentals', 'September 30 2022','fiveborodevs@fakeemail.com'),
(9, 'PERN Stack Lovers', 'PERN Stack for Beginners', 'October 01 2022','pernlovers@email.com');

INSERT INTO events (eventid, name, virtual_meeting_link, start_time, end_time, number_of_attendees, study_group_id) VALUES
(1, 'All you need to know', 'https://www.zoom.us/fakelink1','10:00 AM', '2:00 PM', 20, 1),
(2, 'Javascript Codealongs', 'https://www.zoom.us/fakelink2','11:00 AM', '4:00 PM', 20, 2),
(3, 'MVP And Where To Begin', 'https://www.zoom.us/fakelink3', '9:00 AM', '3:00 PM', 35, 3);