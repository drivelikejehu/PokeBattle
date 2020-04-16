USE pokemon_db;

INSERT INTO pokemons (pokemonName, type, image, createdAt, updatedAt)
VALUES("pikachu", "electric", "url", false,false);
INSERT INTO pokemons (pokemonName, type, image, createdAt, updatedAt)
VALUES("pikachu", "electric", "url", false,false);
INSERT INTO pokemons (pokemonName, type, image, createdAt, updatedAt)
VALUES("squirtle", "water", "url", false,false);



INSERT INTO users (userName, pokemonName,createdAt, updatedAt)
VALUES("user1", "pikachu",false,false);
INSERT INTO users (userName, pokemonName,createdAt, updatedAt)
VALUES("user2", "pikachu",false,false);
INSERT INTO users (userName, pokemonName,createdAt, updatedAt)
VALUES("user3", "pikachu",false,false);
INSERT INTO users (userName, pokemonName,createdAt, updatedAt)
VALUES("user4", "squirtle",false,false);

SELECT * FROM pokemons;
SELECT * FROM users;
