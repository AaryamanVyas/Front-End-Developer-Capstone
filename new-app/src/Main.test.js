// Main.test.js
import { initializeTimes, updateTimes } from './Main';

test('initializeTimes returns the expected initial times', () => {
   const initialTimes = initializeTimes();
   expect(initialTimes).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
});

test('updateTimes returns the same times array when given an action', () => {
   const state = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
   const action = { type: 'UPDATE_TIMES', payload: { date: '2023-01-01' } };
   const newState = updateTimes(state, action);
   expect(newState).toEqual(state);
});
