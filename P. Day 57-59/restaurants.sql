SELECT restaurants.id, restaurants.name, addresses.*, types.name AS type_name FROM restaurants 
INNER JOIN addresses ON restaurants.address_id = addresses.id
INNER JOIN types ON restaurants.type_id = types.id
WHERE addresses.city = 'Munich'