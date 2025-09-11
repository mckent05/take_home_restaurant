const {
  haversineDistanceKm,
  isOpenNow,
  filterAndSortRestaurants,
} = require("../utils/filters");

describe("haversineDistanceKm", () => {
  it("computes expected distance between Yaba and Ikorodu (approx 20 km)", () => {
    const ikoroduGarage = { lat: 6.6212, lon: 3.5027 };
    const Yaba = { lat: 6.5097, lon: 3.371 };
    const distance = haversineDistanceKm(
      Yaba.lat,
      Yaba.lon,
      ikoroduGarage.lat,
      ikoroduGarage.lon
    );
    expect(distance).toBeGreaterThan(19);
    expect(distance).toBeLessThan(20);
  });
});

describe("isOpenNow", () => {
  it("handles normal hours", () => {
    const currentTime = new Date();
    currentTime.setHours(13, 0, 0, 0);
    expect(isOpenNow("09:00", "17:00", currentTime)).toBe(true);
    expect(isOpenNow("14:00", "23:00", currentTime)).toBe(false);
  });

  it("handles overnight hours (closes next day)", () => {
    const currentTime = new Date();
    currentTime.setHours(2, 30, 0, 0);
    expect(isOpenNow("18:00", "04:00", currentTime)).toBe(true);
  });
});

describe("filterAndSortRestaurants", () => {
  it("filters by cuisine, price and radius", () => {
    const currentLocation = { lat: 6.5244, lng: 3.3792 };
    const restaurants = [
      {
        id: 1,
        name: "Alcota",
        latitude: 6.5244,
        longitude: 3.3792,
        price_level: 1,
        cuisine: "Nigerian",
        opens_at: "08:00",
        closes_at: "22:00",
      },
      {
        id: 2,
        name: "Brita",
        latitude: 6.525,
        longitude: 3.3795,
        price_level: 3,
        cuisine: "Italian",
        opens_at: "11:00",
        closes_at: "23:00",
      },
      {
        id: 3,
        name: "Calcius",
        latitude: 6.53,
        longitude: 3.385,
        price_level: 1,
        cuisine: "Fast Food",
        opens_at: "07:00",
        closes_at: "20:00",
      },
    ];

    const results = filterAndSortRestaurants(restaurants, {
      ...currentLocation,
      radius: 2,
      cuisine: "italian",
    });
    expect(results.length).toBe(1);
    expect(results[0].name).toBe("Brita");
  });
});
