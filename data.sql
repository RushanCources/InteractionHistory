DELETE FROM history_record_entity;
DELETE FROM contact_entity;
DELETE FROM type_record_entity;
DELETE FROM account_entity;

INSERT INTO type_record_entity(id,name) VALUES (1, 'Call');
INSERT INTO type_record_entity(id,name) VALUES (2, 'Email');
INSERT INTO type_record_entity(id,name) VALUES (3, 'Meeting');
INSERT INTO type_record_entity(id,name) VALUES (4, 'Conversation');

INSERT INTO account_entity(id,name) VALUES (1, 'Brit Telecom');
INSERT INTO account_entity(id,name) VALUES (2, 'Rasmus Tel');

INSERT INTO contact_entity(id,email,first_name,last_name,mobile,skype,work,job_title,account_id) VALUES (1, 'vpetrov@jr.com','Vassily', 'Petrov', '+7 (191) 322-22-33)', 'serfsd', '+7 (191) 324-62-38)', 'Manager', 1);
INSERT INTO contact_entity(id,email,first_name,last_name,mobile,skype,work,job_title,account_id) VALUES (2, 'pvasechkin@jr.com', 'Pjotr', 'Vasechkin', '+7 (191) 223-33-22)', 'vaschkin', '+7 (191) 233-55-72)', 'QA Lead', 2);

INSERT INTO history_record_entity(id,date,description,contact_id,type_id) VALUES (1, '2021-07-07T09:49:53.000Z', 'Contract discussion by email', 1, 2);
INSERT INTO history_record_entity(id,date,description,contact_id,type_id) VALUES (2, '2021-07-07T19:37:53.000Z', 'Contract discussion by call', 1, 1);
INSERT INTO history_record_entity(id,date,description,contact_id,type_id) VALUES (3, '2021-07-08T12:28:17.000Z', 'Documents for Nilson', 2, 2);
INSERT INTO history_record_entity(id,date,description,contact_id,type_id) VALUES (4, '2021-07-09T14:13:46.000Z', 'Meeting preparations', 2, 1);
