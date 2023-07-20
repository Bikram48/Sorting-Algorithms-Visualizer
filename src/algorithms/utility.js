export const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
