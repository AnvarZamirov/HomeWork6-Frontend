
let employees = [
    { name: "Анвар", age: 30, gender: "мужской", phone: { home: "123-45-67", mobile: "89012345678" } },
    { name: "Аяна", age: 25, gender: "женский", phone: { home: "234-56-78", mobile: "89023456789" } },
    { name: "Ильгиз", age: 28, gender: "мужской", phone: { home: "345-67-89", mobile: "89034567890" } },
    { name: "Алтя", age: 22, gender: "женский", phone: { home: "456-78-90", mobile: "89045678901" } },
    { name: "Аалам", age: 35, gender: "мужской", phone: { home: "567-89-01", mobile: "89056789012" } }
];

employees.push({
    name: "Айдар",
    age: 27,
    gender: "муржской",
    phone: { home: "678-90-12", mobile: "89067890123" }
});

let olderThan25 = employees.filter(emp => emp.age > 25);

let employeeNames = employees.map(emp => emp.name);

employees.forEach(emp => {
    console.log(`Имя: ${emp.name}, Возраст: ${emp.age}, Пол: ${emp.gender}, Домашний: ${emp.phone.home}, Сотовый: ${emp.phone.mobile}`);
});
