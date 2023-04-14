/* Make the navbar always visible when not visible*/
const element = document.getElementById('navbar');
const stickyOffset = element.offsetTop;

window.addEventListener('scroll', function() {
    if (window.scrollY >= stickyOffset) {
        element.classList.add("sticky")
    }
    else {
        element.classList.remove("sticky");
    }

    // function isElementInViewPort(element){
    //     let rect = element.getBoundingClientRect();
    //     console.log("The bounding Rect of element is ", rect)
    //     // get the height of the window
    //     let viewPortBottom = window.innerHeight || document.documentElement.clientHeight;
    //     // get the width of the window
    //     let viewPortRight = window.innerWidth || document.documentElement.clientWidth;
    //
    //     let isTopInViewPort = rect.top >= 0,
    //         isLeftInViewPort = rect.left >= 0,
    //         isBottomInViewPort = rect.bottom <= viewPortBottom,
    //         isRightInViewPort = rect.right <= viewPortRight;
    //
    //     // check if element is completely visible inside the viewport
    //     return (isTopInViewPort && isLeftInViewPort && isBottomInViewPort && isRightInViewPort);
    // }
    //
    // if (position.top < window.innerHeight && position.bottom < 0) {
    //     console.log("The navbar is not visible");
    //     element.style.top = '0px';
    //     element.style.position = 'fixed';
    // }
    //
    // if (position.bottom < window.innerHeight && position.bottom >= 0) {
    //     console.log("The navbar is visible");
    //     element.style.position = 'initial';
    // }

});
