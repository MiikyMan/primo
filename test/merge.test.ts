import { merge } from '../src/index';

describe('merge:', () => {
  test('merges three sorted arrays', () => {
    const collection_1 = [1, 3, 5, 7, 9];
    const collection_2 = [2, 4, 6, 8, 10];
    const collection_3 = [10, 9, 8, 7, 6]; // descending order

    const result = merge(collection_1, collection_2, collection_3);

    expect(result).toEqual([1, 2, 3, 4, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10]);
  });
});
