window.onload = function (){
    let navHeader = document.getElementById("header");
    window.onscroll = function() {


        // @var int scrollPoint
        let scrollPoint = window.scrollY;

        // check if we hit the bottom of the page
        if (scrollPoint > 0) {
            navHeader.classList.add("isScrolled");
        } else {
            navHeader.classList.remove("isScrolled");
        }
    }
}