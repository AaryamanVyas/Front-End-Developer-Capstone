// Simulated API to mimic real-world data fetching and submission

export const fetchAPI = (date) => {
    // Simulate available times based on the date
    const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    // Just for demo, return times except for a specific date to simulate unavailability
    const unavailableDate = '2024-12-25'; // Example date when some times are blocked
    if (date === unavailableDate) {
      return availableTimes.filter(time => time !== "19:00" && time !== "20:00");
    }
    return availableTimes;
};
  
export const submitAPI = (formData) => {
    // Simulate submission success or failure randomly
    const success = Math.random() > 0.2; // 80% chance of success
    return success;
};
  