const { StatusCodes } = require("http-status-codes");
const {
  BadRequestError,
  InternalServerError,
} = require("../Error");
const getUserLocation = require('../utils/getLocation')
const findClosestRestaurants = require("../services/restaurantService");

const getRestaurants = async (req, res) => {
  const { lat, lng, radius, price, cuisine, open_now, limit, page } = req.query;

  if (!lat || !lng) {
   const location = getUserLocation()
   console.log(location)
   lat = location.latitude
   lng = location.longitude
    return res.status(error.statusCode).json({ error: error.message });
  }

  const opts = {
    lat: Number(lat),
    lng: Number(lng),
    radius: radius ? Number(radius) : 10,
    price: price ? Number(price) : undefined,
    cuisine: cuisine ? String(cuisine) : undefined,
    open_now: open_now === "true",
    limit: limit ? Number(limit) : 20,
    page: page ? Number(page) : 1,
  };

  try {
    const results = await findClosestRestaurants(opts);
    res.status(StatusCodes.OK).json(results);
  } catch (err) {
    console.error(err);
    const error = new InternalServerError("Internal server error");
    res.status(error.statusCode).json({ error: error.message });
  }
};

module.exports = getRestaurants;
