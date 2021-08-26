"use strick"
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$("#nav li");
const contents = $$(".content div");
tabs.forEach((tab, index) => {
    const content = contents[index]
    tab.onclick = () => {
        $("#nav .active").classList.remove("active");
        $(".content .active").classList.remove("active");
        tab.classList.add('active');
        content.classList.add('active');
    }
})





