function getArrayParams(...arr) {
    let min = arr[0];
    let max = arr[0];
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
        sum += arr[i];
    }

    const avg = (sum / arr.length).toFixed(2);

    return { min, max, avg: Number(avg) };
}

const result1 = getArrayParams(-99, 99, 10);
const result2 = getArrayParams(1, 2, 3, -100, 10);
const result3 = getArrayParams(5);

const resultContainer1 = document.createElement('div');
resultContainer1.textContent = Min: ${result1.min}, Max: ${result1.max}, Avg: ${result1.avg};
document.body.appendChild(resultContainer1);

const resultContainer2 = document.createElement('div');
resultContainer2.textContent = Min: ${result2.min}, Max: ${result2.max}, Avg: ${result2.avg};
document.body.appendChild(resultContainer2);

const resultContainer3 = document.createElement('div');
resultContainer3.textContent = Min: ${result3.min}, Max: ${result3.max}, Avg: ${result3.avg};
document.body.appendChild(resultContainer3);
