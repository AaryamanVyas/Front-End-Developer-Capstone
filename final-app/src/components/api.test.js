import { fetchAPI } from "./api";
import { updateTimes } from "./Main";

jest.mock('./api'); // Mock the API module

test("updateTimes updates available times based on the date", () => {
    const mockedTimes = ["17:00", "18:00", "21:00", "22:00"];
    const action = { type: "UPDATE_TIMES", payload: "2024-12-25" };
    
    // Mock fetchAPI to return updated times for the provided date
    fetchAPI.mockReturnValue(mockedTimes);
    
    const initialState = [];
    const result = updateTimes(initialState, action);
    expect(result).toEqual(mockedTimes);
});

test("updateTimes returns the same state for invalid action type", () => {
    const initialState = ["17:00", "18:00", "19:00"];
    const action = { type: "INVALID_ACTION", payload: "2024-12-25" };
    
    const result = updateTimes(initialState, action);
    expect(result).toEqual(initialState);
});
