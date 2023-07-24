const button = document.querySelector('.btn') // виділяю кнопку з класом .btn

const newButton = document.createElement('button') // створюю кнопку
newButton.type = 'button' // додаю кнопці атрибут type 
newButton.classList.add('new-btn') // додаю кнопці класс 'new-btn'
newButton.textContent = 'Тепер це нова кнопка(якщо курсор буде поза кнопкою вона пропаде)' // додаю вміст кнопці  

const heading = document.createElement('h2') // створюю заголовок
heading.textContent = 'Я ж говорив, ех ти' // додаю вміст заголовку

const divSelector = document.querySelector('div') // виділяю div

function buttonDelete(event) {
    const btnDelete = event.currentTarget // створюю перемінну із currentTarget який дозволяє реагувати на події (event)
    btnDelete.remove() // видяляю опираючись на події (event)
    divSelector.appendChild(newButton) // додаю раньостворенну кнопку в div 
}

button.addEventListener('click', buttonDelete) // додаю події для кнопки яку виділив вверху, і функцію яка відреагує на цю подію

function buttonDeleteTwo(event) {
    const btnAdd = event.currentTarget // створюю перемінну із currentTarget який дозволяє реагувати на події (event)
    btnAdd.remove() // видяляю опираючись на події (event)
    divSelector.appendChild(heading) // додаю раньостворенний заголовок(h2) в div
}

newButton.addEventListener('mouseout', buttonDeleteTwo) // додаю події для кнопки яку створив вверху, і функцію яка відреагує на цю подію



