USE pokemon_db;

INSERT INTO pokemons (pokemonName, type, image, createdAt, updatedAt)
VALUES("pikachu", "electric", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png", now(),now());
INSERT INTO pokemons (pokemonName, type, image, createdAt, updatedAt)
VALUES("pikachu", "electric", "url", now(),now());
INSERT INTO pokemons (pokemonName, type, image, createdAt, updatedAt)
VALUES("squirtle", "electric", "url", now(),now());




INSERT INTO users (userName, pokemonName,createdAt, updatedAt)
VALUES("user1", "pikachu", now() , now());
INSERT INTO users (userName, pokemonName,createdAt, updatedAt)
VALUES("user2", "pikachu", now() , now());
INSERT INTO users (userName, pokemonName,createdAt, updatedAt)
VALUES("user3", "pikachu", now() , now());
INSERT INTO users (userName, pokemonName,createdAt, updatedAt)
VALUES("user4", "pikachu", now() , now());

SELECT * FROM pokemons;
SELECT * FROM users;
