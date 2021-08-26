"use strick"
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$("#nav li");

tabs.forEach((tab) => {
    tab.onclick = () => {
        $(".active").classList.remove("active");
        tab.classList.add('active');

    }
})


