function haversineDistanceKm(lat1, lon1, lat2, lon2) {
  const toRad = (deg) => (deg * Math.PI) / 180;
  const Radius = 6371; // Earth radius in km

  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const circleDistance =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const haverSine =
    2 * Math.atan2(Math.sqrt(circleDistance), Math.sqrt(1 - circleDistance));
  return Radius * haverSine;
}

function timeStrToMinutes(time) {
  // handle HH:MM[:SS]
  const parts = time.split(":").map((part) => Number(part));
  return parts[0] * 60 + (parts[1] || 0);
}

function isOpenNow(opensAt, closesAt, currentTime = new Date()) {
  const currentTimeMinutes =
    currentTime.getHours() * 60 + currentTime.getMinutes();
  const openM = timeStrToMinutes(opensAt);
  const closeM = timeStrToMinutes(closesAt);

  if (openM < closeM) {
    // if the opening time and closing time are on the same day
    return currentTimeMinutes >= openM && currentTimeMinutes < closeM;
  } else {
    // if the opening time and closing time are on different days (e.g., 18:00 - 04:00)
    return currentTimeMinutes >= openM || currentTimeMinutes < closeM;
  }
}

function filterAndSortRestaurants(restaurants, opts) {
  const { lat, lng, radius = 10, price, cuisine, open_now } = opts;

  const restaurantWithDistance = restaurants.map((r) => {
    const distance_km = haversineDistanceKm(lat, lng, r.latitude, r.longitude);
    return { ...r, distance_km };
  });

  let filteredData = restaurantWithDistance.filter(
    (restaurant) => restaurant.distance_km <= radius
  );

  if (price !== undefined) {
    filteredData = filteredData.filter(
      (restaurant) => restaurant.price_level === price
    );
  }

  if (cuisine) {
    const q = cuisine.toLowerCase();
    filteredData = filteredData.filter((restaurant) =>
      restaurant.cuisine.toLowerCase().includes(q)
    );
  }

  if (open_now) {
    const currentTime = new Date();
    filteredData = filteredData.filter((restaurant) =>
      isOpenNow(restaurant.opens_at, restaurant.closes_at, currentTime)
    );
  }

  filteredData.sort((a, b) => a.distance_km - b.distance_km);
  return filteredData;
}

module.exports = { filterAndSortRestaurants, isOpenNow, haversineDistanceKm };
