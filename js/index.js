document.getElementById("btn-up").addEventListener("click", function() {
    scrollToTop();
});

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};
