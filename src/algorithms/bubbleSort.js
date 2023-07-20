export const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export default async function bubbleSort(arr, changeArr) {
  const size = arr.length;

  const array = [...arr];
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        await delay(1000);
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        changeArr(array);
      }
    }
  }
}
