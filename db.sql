create table users(
    id_user serial primary key,
    name VARCHAR,
	email VARCHAR,
	phone VARCHAR,
	password VARCHAR,
	level VARCHAR,
	gambar VARCHAR,
	created_at TIMESTAMP,
	update_at TIMESTAMP
);

create table recipes(
	id_recipes serial PRIMARY KEY,
	id_users integer references users(id_user) on delete cascade,
	gambar VARCHAR,
	title VARCHAR,
	ingredients VARCHAR,
	video VARCHAR,
	step VARCHAR,
	description VARCHAR,
	created_at TIMESTAMP,
	update_at TIMESTAMP
);

create table comments(
	id_comments serial PRIMARY KEY,
	id_users integer references users(id_user) on delete cascade,
	id_recipes integer references recipes(id_recipes) on delete cascade,
	message VARCHAR,
	created_at TIMESTAMP
);