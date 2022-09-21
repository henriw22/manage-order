INSERT INTO users (name, email, phone, password)
VALUES
('Egg Eggerson', 'friedEgg99@hotmail.com', '604789456', 'password'),
('Micheal Schmidt', 'wilkinson.timmothy@hotmail.com', '778456123', 'password'),
('Anderson Stokes', 'reichel_albina@stamm.info', '624123789', 'password');

INSERT INTO orders (user_id, created_at, quantity, location)
VALUES
(1, '2022-08-01 10:00:00', 2, 'Lougheed at 2 PM'),
(2, '2022-08-03 10:00:00', 5, 'Pick Up at 4 PM'),
(3, '2022-08-05 10:00:00', 3, 'Pick Up at 3 PM');
