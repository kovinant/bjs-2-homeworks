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

    return { max, min, avg: Number(avg) };
}

function summElementsWorker(...arr) {
    if (arr.length === 0) {
        return 0;
    }
    return arr.reduce((acc, curr) => acc + curr, 0);
}

function differenceMaxMinWorker(...arr) {
    if (arr.length === 0) {
        return 0;
    }
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    return max - min;
}

function differenceEvenOddWorker(...arr) {
    if (arr.length === 0) {
        return 0;
    }
    let sumEvenElement = 0;
    let sumOddElement = 0;
    for (let elem of arr) {
        if (elem % 2 === 0) {
            sumEvenElement += elem;
        } else {
            sumOddElement += elem;
        }
    }
    return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
    if (arr.length === 0) {
        return 0;
    }
    let sumEvenElement = 0;
    let countEvenElement = 0;
    for (let elem of arr) {
        if (elem % 2 === 0) {
            sumEvenElement += elem;
            countEvenElement++;
        }
    }
    if (countEvenElement === 0) {
        return 0;
    }
    return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
    let maxWorkerResult = -Infinity;

    for (let arr of arrOfArr) {
        const result = func(...arr);

        if (result > maxWorkerResult) {
            maxWorkerResult = result;
        }
    }

    return maxWorkerResult;
}
