function findMax(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return document.write("Gia tri lon nhat trong mang [ " + arr + " ] la " + max);
}

findMax([2, 4, 5, 6, 1, 7, 3, 9, 8]);