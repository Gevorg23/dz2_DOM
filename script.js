"use strict";

// Задача 1
const dropdownItems = document.querySelectorAll('.dropdown-item');
dropdownItems.forEach(item => {
    item.classList.add('super-dropdown');
});

// Задача 2
const button = document.querySelector('.btn');
if (button.classList.contains('btn-secondary')) {
    button.classList.remove('btn-secondary');
} else {
    button.classList.add('btn-secondary');
}

// Задача 3
const menu = document.querySelector('.menu');
if (menu.classList.contains('dropdown-menu')) {
    menu.classList.remove('dropdown-menu');
}

// Задача 4
const dropdown = document.querySelector('.dropdown');
dropdown.insertAdjacentHTML('afterend', '<a href="#">link</a>');

// Задача 5
const dropdownButton = document.getElementById('dropdownMenuButton');
dropdownButton.id = 'superDropdown';

// Задача 6
const elementWithAriaLabelledBy = document.querySelector('[aria-labelledby="dropdownMenuButton"]');
elementWithAriaLabelledBy.dataset.dd = '3';

// Задача 7
const dropdownToggle = document.querySelector('.dropdown-toggle');
dropdownToggle.removeAttribute('type');
