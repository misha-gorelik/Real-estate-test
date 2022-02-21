// Показать еще карточки
const showMoreCards = document.querySelector('.show-more-cards');
const hiddenCards = document.querySelectorAll('.hidden-card');

showMoreCards.addEventListener('click', function (){
    hiddenCards.forEach(item => {
        item.classList.remove('hidden-card')
    } )
});

// Свернуть / развернуть фильтр
const filterHeaders = document.querySelectorAll('.filter-header');

filterHeaders.forEach(item => {
    item.addEventListener('click', function () {
        item.nextElementSibling.classList.toggle('none');
        item.lastElementChild.classList.toggle('active');
    })
})

// Показать / скрыть дополнительные опции
const showMoreOptions = document.querySelector('.show-more-options');
const hiddenOptions = document.querySelectorAll('[closed]');

showMoreOptions.addEventListener('click', function () {
    if (showMoreOptions.innerText == 'Показать еще'){
        hiddenOptions.forEach(item => {
            item.classList.remove('none');
        })
        showMoreOptions.innerText = 'Скрыть дополнительные опции';
    } else if (showMoreOptions.innerText == 'Скрыть дополнительные опции'){
        hiddenOptions.forEach(item => {
            item.classList.add('none');
        })
        showMoreOptions.innerText = 'Показать еще';}    
})

// Фильтр "близость к метро"
const locationOptions = document.querySelectorAll('.location');
const locationAny = document.querySelector('.location-any');

locationAny.addEventListener('change', function () {
    if (locationAny.checked){
        locationOptions.forEach(item => {
            item.checked = false;
        })
    }
})

locationOptions.forEach(item => {
    item.addEventListener('change', function (){
        if (locationAny.checked){
            locationAny.checked = false;
        }
    })
})