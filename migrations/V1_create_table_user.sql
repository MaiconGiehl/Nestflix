CREATE TABLE IF NOT EXISTS users
(
	id INT NOT NULL PRIMARY KEY,
	name VARCHAR (255) NOT NULL,
	active BOOLEAN NOT NULL,
	Created_In TIMESTAMP,
	Updated_In TIMESTAMP
);


INSERT INTO users
(
	id, name, active, created_in, updated_in
)
VALUES
(
	1, 'Maicon', true, NOW()::timestamp, NOW()::timestamp
)