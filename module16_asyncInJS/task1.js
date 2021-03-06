/* Task 1. Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код, который будет преобразовывать XML в JS-объект и выводить его в консоль. */

// Создание экземпляра класса DOMParser. Он позволит нам парсить XML
const parser = new DOMParser();

// XML, который мы будем парсить
const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

/* Этап 2. Получение данных. Парсинг XML*/
const xmlDOM = parser.parseFromString(xmlString, "text/xml");
const listNode = xmlDOM.querySelector("list");
const studentNode = listNode.querySelector("student");
const listVal = [];

listNode.querySelectorAll('student').forEach((el) => {
 let nameFirst = el.querySelector("name").querySelector("first").textContent
 let nameSecond = el.querySelector("name").querySelector("second").textContent
 let nameVal = nameFirst + " " + nameSecond;
 let ageVal = +el.querySelector("age").textContent;
 let profVal = el.querySelector("prof").textContent;
 let langVal = el.querySelector("name").getAttribute('lang');
 let obj = {name: nameVal, age: ageVal, prof: profVal, lang: langVal}; 
 
 listVal.push(obj); 
});

const result = {
  list: listVal
};

console.log(result);