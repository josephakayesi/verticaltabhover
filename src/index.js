const section = document.querySelector(".section"),
    sectionContainer = section.querySelector(".section_container"),
    sectionCol = section.querySelectorAll(".section_col"),
    sectionCaptions = section.querySelectorAll(".section_col_caption");

const isDesktop = window.matchMedia("(min-width: 768px)").matches;

const init = () => {
    if (isDesktop) addEventListeners();
};

const addEventListeners = () => {
    sectionCol[0].classList.add("active");

    sectionCol.forEach((col, index) => {
        col.addEventListener("mouseenter", (e) => {
            sectionCol.forEach((el) => el.classList.remove("active"));

            col.classList.add("active");

            if (index === col.length - 1) {
                col.classList.add("active");
            }
        });
    });
};

init();
