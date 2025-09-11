CREATE TABLE IF NOT EXISTS users (
id SERIAL PRIMARY KEY,
first_name TEXT NOT NULL,
last_name TEXT NOT NULL,
username TEXT NOT NULL,
password TEXT NOT NULL
created_at TIMESTAMPTZ DEFAULT now()
);



CREATE TABLE IF NOT EXISTS restaurants (
id SERIAL PRIMARY KEY,
name TEXT NOT NULL,
latitude DOUBLE PRECISION NOT NULL,
longitude DOUBLE PRECISION NOT NULL,
price_level SMALLINT NOT NULL,
cuisine TEXT NOT NULL,
opens_at TIME NOT NULL,
closes_at TIME NOT NULL,
created_at TIMESTAMPTZ DEFAULT now()
);

--seed data
INSERT INTO restaurants (name, latitude, longitude, price_level, cuisine, opens_at, closes_at) VALUES
('Free Kitchen', 6.5244, 3.3792, 1, 'Nigerian', '08:00', '22:00'),
('La Pinacho', 6.5250, 3.3795, 3, 'Italian', '11:00', '23:00'),
('Spicy Route', 6.5230, 3.3800, 2, 'Indian', '10:00', '21:00'),
('Morning Eagle Bar', 6.5260, 3.3780, 2, 'Bar', '18:00', '04:00'),
('Sushi Central Repub;ic', 6.5200, 3.3750, 4, 'Japanese', '12:00', '22:00'),
('Affordable Bites', 6.5300, 3.3850, 1, 'Fast Food', '07:00', '20:00');