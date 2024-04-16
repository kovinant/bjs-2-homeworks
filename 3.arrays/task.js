function compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    return arr1.every((value, index) => value === arr2[index]);
}

function getUsersAverageAge(users, gender) {
    const filteredUsers = users.filter(user => user.gender === gender);
    
    if (filteredUsers.length === 0) {
        return "No users found for the selected gender.";
    }
    
    const averageAge = filteredUsers.map(user => user.age).reduce((acc, curr) => acc + curr, 0) / filteredUsers.length;
    
    return averageAge.toFixed(1); 
}


document.getElementById('compareArraysForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const array1 = document.getElementById('array1').value.split(',').map(Number);
    const array2 = document.getElementById('array2').value.split(',').map(Number);
    const result = compareArrays(array1, array2);
    document.getElementById('compareArraysResult').textContent = `Arrays are ${result ? '' : 'not '}equal.`;
});


document.getElementById('usersAverageAgeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const gender = document.getElementById('gender').value;
    const result = getUsersAverageAge(people, gender);
    document.getElementById('usersAgeAverage').textContent = `Average age for ${gender}: ${result}`;
});


const people = [
    {firstName: "Александр", secondName: "Карпов", age: 17, gender: "мужской"},
    {firstName: "Егор", secondName: "Морозов", age: 21, gender: "мужской"},
    {firstName: "Мелисса", secondName: "Леонова", age: 40, gender: "женский"},
    {firstName: "Мелания", secondName: "Савельева", age: 37, gender: "женский"},
    {firstName: "Мария", secondName: "Овчинникова", age: 18, gender: "женский"},
    {firstName: "Марьяна", secondName: "Котова", age: 17, gender: "женский"},
    {firstName: "Фёдор", secondName: "Селезнев", age: 50, gender: "мужской"},
    {firstName: "Георгий", secondName: "Петров", age: 35, gender: "мужской"},
    {firstName: "Даниил", secondName: "Андреев", age: 49, gender: "мужской"},
    {firstName: "Дарья", secondName: "Савельева", age: 25, gender: "женский"},
    {firstName: "Михаил", secondName: "Шаров", age: 22, gender: "мужской"},
    {firstName: "Владислав", secondName: "Давыдов", age: 40, gender: "мужской"},
    {firstName: "Илья", secondName: "Казаков", age: 35, gender: "мужской"},
    {firstName: "Евгений", secondName: "Кузьмин", age: 19, gender: "мужской"},
];
