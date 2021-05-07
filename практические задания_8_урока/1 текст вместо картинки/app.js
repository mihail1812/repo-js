'use strict';

let butt = document.querySelectorAll('button');

butt.forEach(function(event){
    event.addEventListener('click', handleClick);
});

/**
 * Функция обрабатывает клик по кнопке в карточке товара и попеременно вызывает
 * функции для показа или скрытия текста о товаре.
 * @param {MouseEvent} clickedButtonEvent 
 */
function handleClick(clickedButtonEvent) {
    
    const cardNode = clickedButtonEvent.target.parentNode;
    let img = cardNode.querySelector('img');
    if (clickedButtonEvent.target.innerText == 'Подробнее'){
        clickedButtonEvent.target.innerText = 'Отмена';
        img.style.display = "none";
        divMarkup(cardNode); //создаем див с текстом
    } else{
        clickedButtonEvent.target.innerText = 'Подробнее';
        img.style.display = "block";
        divDelete(cardNode); //удаляю созданный див
    }
}

function divMarkup(parent){
    let div = `
        <div class = "divText">Lorem ipsum dolor sit amet 
        consectetur adipisicing elit.
        Temporibus veniam deserunt 
        officia quibusdam?</div>`
    let divName = parent.querySelector('.productName');
    divName.insertAdjacentHTML('afterend', div);
}

function divDelete (parent){
    let div = parent.querySelector('.divText');
    div.parentNode.removeChild(div);
}


/*
    // 3. создайте литерал объекта со следующими свойствами:
    const card = {
        wrap: cardNode, // здесь элемент с классом .product
        img: , // здесь картинка внутри .product
        productName: , // здесь .productName, который внутри .product
        button: , // здесь button, который внутри .product
    };

    // 4. получаем текст на кнопке, которая внутри .product
    
    
    if () { // 4.1 проверяем равняется ли этот текст строке "Подробнее"
        // 4.2 если да, то передаем объект card в функцию showMoreText
        showMoreText(card);
    } else if () { // 4.3 проверяем равняется ли текст на кнопке строке "Отмена"
        // 4.4 если да, то передаем объект card в функцию hideMoreText
        hideMoreText(card);
    }
}

/**
 * Функция скрывает текст с описанием товара.
 * @param {Object} card 
 * @param {HTMLDivElement} card.wrap
 * @param {HTMLImageElement} card.img
 * @param {HTMLDivElement} card.productName
 * @param {HTMLButtonElement} card.button
 */
/*
function hideMoreText(card) {
    // 5. картинке внутри .product ставим стиль display: block
    
    // 5.1 внутри .product находим элемент с классом .desc и удаляем его
    
    // 5.2 кнопке, которая внутри .product ставим текст "Подробнее"
    
}

/**
 * Функция показывает текст с описанием товара.
 * @param {Object} card 
 * @param {HTMLDivElement} card.wrap
 * @param {HTMLImageElement} card.img
 * @param {HTMLDivElement} card.productName
 * @param {HTMLButtonElement} card.button 
 */

//function showMoreText(card) {
    // 6. картинке внутри .product ставим display: none
    
    // 6.1 сохраняем произвольный текст в переменную
    
    // 6.2 внутри .product есть .productName, после него вставляем div.desc и текстом из переменной из п. 6.1
    
    // 6.3 внутри .product у кнопки текст ставим "Отмена"
    
//}