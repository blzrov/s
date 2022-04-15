import { title } from 'process';
import { createElement } from 'react';

/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    let body = document.querySelector('body');
    let button = document.createElement('button');
    button.textContent = 'Удали меня';
    button.addEventListener('click', function () {
        button.remove();
    });
    body.append(button);
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    let body = document.querySelector('body');
    let ul = document.createElement('ul');
    function createLi(str) {
        let li = document.createElement('li');
        li.textContent = str;
        li.addEventListener('mouseover', function () {
            li.setAttribute('title', li.textContent);
        });
        return li;
    }

    for (let i = 0; i < arr.length; i++) {
        ul.append(createLi(arr[i]));
    }
    body.append(ul);
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    let body = document.querySelector('body');
    let a = document.createElement('a');
    a.textContent = 'tensor';
    a.href = 'https://tensor.ru/';
    a.addEventListener('click', f);

    function f(evt) {
        evt.preventDefault();
        a.textContent = 'tensor https://tensor.ru/';
        a.removeEventListener('click', f);
    }

    body.append(a);
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    let body = document.querySelector('body');
    let ul = document.createElement('ul');
    let li = document.createElement('li');
    li.textContent = 'Пункт';
    f(li);
    ul.append(li);
    let button = document.createElement('button');
    button.textContent = 'Добавить пункт';
    body.append(ul);
    body.append(button);
    function f(lis) {
        lis.addEventListener('click', function () {
            lis.textContent += '!';
        });
    }
    button.addEventListener('click', function () {
        let newLi = document.createElement('li');
        newLi.textContent = 'Пункт';
        f(newLi);
        ul.append(newLi);
    });
}
