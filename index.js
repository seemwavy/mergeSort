const resultBox = document.getElementById('result');
const inputBox = document.getElementById('input');
const button = document.getElementById('sort');
function sort() {
  const array = inputBox.value.split(',').map(Number);
  const sorted = mergeSort(array);
  resultBox.innerHTML = sorted.join(', ');
}
button.addEventListener('click', sort);
function mergeSort(array) {
    if (array.length < 2) {
      return array;
    }
  
    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle, array.length);
  
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);
  
    return merge(sortedLeft, sortedRight);
  }
  
  function merge(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }
  