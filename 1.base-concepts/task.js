"use strict";

function solveEquation(a, b, c) {
  let roots = [];
  const discriminant = b ** 2 - 4 * a * c;

  if (discriminant > 0) {
    const sqrtDiscriminant = Math.sqrt(discriminant);
    roots.push((-b + sqrtDiscriminant) / (2 * a));
    roots.push((-b - sqrtDiscriminant) / (2 * a));
  } else if (discriminant === 0) {
    roots.push(-b / (2 * a));
  }
  // Если дискриминант меньше нуля, корней нет, возвращаем пустой массив

  return roots;
}

// Функция для вывода результата
function printRoots(roots) {
  if (roots.length === 0) {
    console.log('Уравнение не имеет вещественных корней.');
  } else if (roots.length === 1) {
    console.log(`Уравнение имеет один корень: x = ${roots[0]}`);
  } else {
    console.log(`Уравнение имеет два корня: x1 = ${roots[0]}, x2 = ${roots[1]}`);
  }
}

// Запрос коэффициентов у пользователя и решение уравнения
function main() {
  const a = prompt("Введите коэффициент a:");
  const b = prompt("Введите коэффициент b:");
  const c = prompt("Введите коэффициент c:");

  if (a === 0) {
    console.log("Это не квадратное уравнение.");
  } else {
    const roots = solveEquation(Number(a), Number(b), Number(c));
    printRoots(roots);
  }
}

main();
