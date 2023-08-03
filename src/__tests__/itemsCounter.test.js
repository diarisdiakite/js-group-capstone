import mainPageItemsCounter from '../__mock__/mainPageItemsCounter.js';

const myMockItems = [{ item_id: 1 }, { item_id: 2 }, { item_id: 3 }];
const myMockItems1 = [{ item_id: 1 }];
const myMockItems2 = [];

describe('mainPageItemsCounter should return the counts of the functions tests', () => {
  test('should return 3', () => {
    expect(mainPageItemsCounter(myMockItems)).toBe(3);
  });
  test('should return 1', () => {
    expect(mainPageItemsCounter(myMockItems1)).toBe(1);
  });
  test('should return 0', () => {
    expect(mainPageItemsCounter(myMockItems2)).toBe(0);
    expect(myMockItems2).toHaveLength(0);
  });
});