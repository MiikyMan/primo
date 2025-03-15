export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  //Reverse collection if it's descending.
  collection_1 =
    collection_1[collection_1.length - 1] < collection_1[0]
      ? reversedCollection(collection_1)
      : collection_1;
  collection_2 =
    collection_2[collection_2.length - 1] < collection_2[0]
      ? reversedCollection(collection_2)
      : collection_2;
  collection_3 =
    collection_3[collection_3.length - 1] < collection_3[0]
      ? reversedCollection(collection_3)
      : collection_3;

  //Merge collection_1, collection_2, collection_3
  let mergedCollection: number[] = [];
  let i = 0,
    j = 0,
    k = 0;

  while (
    i < collection_1.length ||
    j < collection_2.length ||
    k < collection_3.length
  ) {
    let smallest = Number.POSITIVE_INFINITY;
    let index = 0;

    //find the smallest number and index from the three collections
    if (i < collection_1.length && collection_1[i] <= smallest) {
      smallest = collection_1[i];
      index = 1;
    }
    if (j < collection_2.length && collection_2[j] <= smallest) {
      smallest = collection_2[j];
      index = 2;
    }
    if (k < collection_3.length && collection_3[k] <= smallest) {
      smallest = collection_3[k];
      index = 3;
    }

    //then push the smallest number to the mergedCollection
    if (index === 1) {
      mergedCollection.push(collection_1[i]);
      i++;
    } else if (index === 2) {
      mergedCollection.push(collection_2[j]);
      j++;
    } else if (index === 3) {
      mergedCollection.push(collection_3[k]);
      k++;
    }
  }

  return mergedCollection;
}

function reversedCollection(collection: number[]): number[] {
  if (collection.length === 0) {
    return collection;
  }
  let reversedCollection: number[] = [];
  let n = collection.length - 1;
  while (n >= 0) {
    reversedCollection.push(collection[n]);
    n--;
  }
  return reversedCollection;
}

// given
//      collection_1, collection_2 already sorted from min(0) to max
//      collection_3  already sorted from max to min(0)
