const pool = require("../db/db");
const { filterAndSortRestaurants } = require("../utils/filters");

const findClosestRestaurants = async (opts) => {
  const { limit = 20, page = 1 } = opts;
  const offset = (page - 1) * limit;

  const results = await pool.query("SELECT * FROM restaurants");
  const restaurants = results.rows.map((restaurant) => ({
    id: restaurant.id,
    name: restaurant.name,
    latitude: Number(restaurant.latitude),
    longitude: Number(restaurant.longitude),
    price_level: Number(restaurant.price_level),
    cuisine: restaurant.cuisine,
    opens_at: restaurant.opens_at,
    closes_at: restaurant.closes_at,
  }));

  const filtered = filterAndSortRestaurants(restaurants, opts);
  return filtered.slice(offset, offset + limit).map((data) => ({ ...data }));
};

module.exports = findClosestRestaurants;
