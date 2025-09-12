const getUserLocation = async () => {
  try {
    if (!navigator.geolocation) {
      throw new Error("Geolocation is not supported by this browser.");
    }

    const position = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });

    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    return { latitude, longitude };
  } catch (error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        throw new Error("User denied the request for Geolocation.");
      case error.POSITION_UNAVAILABLE:
        throw new Error("Location information is unavailable.");
      case error.TIMEOUT:
        throw new Error("The request to get user location timed out.");
      case error.UNKNOWN_ERROR:
        throw new Error("An unknown error occurred.");
      default:
        throw error; // Rethrow unexpected errors
    }
  }
};

module.exports = getUserLocation; // Using ES module syntax; use module.exports if using CommonJS
