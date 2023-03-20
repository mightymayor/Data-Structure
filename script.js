function sumDistinct(set1, set2) {
  let distinctElements = [];

  for (let i = 0; i < set1.length; i++) {
    if (!set2.includes(set1[i]) && !distinctElements.includes(set1[i])) {
      distinctElements.push(set1[i]);
    }
  }

  for (let i = 0; i < set2.length; i++) {
    if (!set1.includes(set2[i]) && !distinctElements.includes(set2[i])) {
      distinctElements.push(set2[i]);
    }
  }

  let sum = 0;
  for (let i = 0; i < distinctElements.length; i++) {
    sum += distinctElements[i];
  }

  return sum;
}

const set1 = [3, 1, 7, 9], set2 = [2, 4, 1, 9, 3];
console.log(sumDistinct(set1, set2)); // Output: 13