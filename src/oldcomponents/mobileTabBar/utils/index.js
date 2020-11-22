import { animateScroll as scroll } from 'react-scroll';

export const goToTop = (e) => {
    if(e.target.href === window.location.href) {
        scroll.scrollToTop();
    }
}