// api.test.js
import { fetchAPI } from "./api";

test("initializeTimes returns correct available times", () => {
    // Simulate today's date
    const today = new Date().toISOString().split("T")[0];
    const result = fetchAPI(today);

    // Expected available times
    const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    expect(result).toEqual(expectedTimes);
});

test("updateTimes returns the same state when no action is provided", () => {
    const initialState = ["17:00", "18:00", "19:00"];
    const action = { type: "INVALID_ACTION", payload: "2024-12-25" };

    const updateTimes = (state, action) => {
        if (action.type === "UPDATE_TIMES") {
            return fetchAPI(action.payload);
        }
        return state;
    };

    const result = updateTimes(initialState, action);
    expect(result).toEqual(initialState);
});
