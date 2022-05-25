/* Ваша задача — создать JS-объект, который при преобразовании
в JSON будет возвращать в качестве результата такую же JSON-строку,
как в образце. Получившуюся строку вывести в консоль.*/

const init = `{"name":"Anton","age":36,"skills":["Javascript","HTML","CSS"],"salary":80000}`

const obj = {
 "name":"Anton",
 "age":36,
 "skills":["Javascript","HTML","CSS"],
 "salary":80000
}

const result = JSON.stringify(obj);

console.log(init, ' - initial JSON');
console.log(result, ' - converted JSON from Object');