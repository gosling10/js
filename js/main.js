console.log("hello");
//1 - выбор элементов на страницу
//1.1 - выбор элемента по айди
const title = document.getElementById("myh1")
console.log(title)
//1.2 выбор элемента по селектору
const elem = document.querySelector("nav li:nth-child(3) a");
console.log(elem)
//1.3 выбор нескольких элементов по селектору
const elems = document.querySelectorAll(".text")
console.log(elems)
//2 работ с контентом
//2.1 чтение 
console.log(title.textContent)//контент без тегов
console.log(title.innerHTML)//контент с тегами
console.log(title.innerText)//контент без тегов
console.log(title.outerText)//контент без тегов
console.log(title.outerHTML)//контент с тегами и сам контейнер
//2.2 запись
// title.textContent = 'Новый заголовок <i class="bi bi-steam"></i>'
title.innerHTML = '<i class="bi bi-steam"></i>'
// title.outerHTML = '<i class="bi bi-steam"></i>'
//3 работа с классами
//3.1 добавление класса
const p = document.querySelector("p")// берется первый параграф на странице
p.classList.add("big")
p.classList.add("blue")
// 3.2 удаление классов
p.classList.remove("big")
// 3.3 узнать есть ли у элемента класс какой то 
console.log(p.classList.contains("blue"))
// 4 работа со стилеями(атрибут стайл)
title.style.color = "brown"
title.style.fontSize = "60px"
// 5 работа с атрибутами
// 5.1 переназначить атрибут
const hr = document.querySelector("hr")
hr.setAttribute("width", "50%")
hr.size = "5px"
hr.color = "black"
hr.setAttribute("class", "blue")
//5.2 чтение атрибута 
let link = elem.getAttribute("href")
// link = elem.href
console.log(link)
//5.3 изменить атрибут
elem.setAttribute("href", "https://igroutka.ru/")
//5.4 удалить атрибут
// elem.removeAttribute("href")
//6 создание новых элементов
const img = document.createElement("img")
img.setAttribute("src", "img/kit.jpg")
img.setAttribute("alt", "кит")
img.style.width = "300px"
const block = document.querySelector(".block")
block.append(img) // добавить в конец блока
// block.prepend(img) в начало
// block.after(img) после
// block.before(img) перед
//7 работа с потомками
const links = document.querySelectorAll("a")//выбираем все ссылки на странице
console.log(links)
const nav = document.querySelector("nav")
const navLinks = nav.querySelectorAll("a")
console.log(navLinks)
//8 работа с предками
const logo = document.querySelector(".bi-capsule")
logo.closest("a").style.color = "darkgreen"//берем ближайшего предка
logo.closest("li").classList.add("big")
//9 обработка событий пользователя (клик по кнопке)
const button = document.getElementById("btn")
const picture = document.querySelector(".picture")
button.addEventListener("click", function(){
    picture.classList.add("show")
})