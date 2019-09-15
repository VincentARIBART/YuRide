import '../scss/main.scss';


import { TweenLite, TimelineLite } from 'gsap';


import win from './utils/Window.js';
import io from './utils/Io.js';
import scroll from './utils/Scroll.js';
import fallback from './utils/Fallback.js';

const loadHandler = () => {
    if (document.readyState !== 'complete') return;
    scroll.init();
    win.setNoTransitionElts([...document.getElementsByClassName('element-without-transition-on-resize')]);
    win.init();
    io.init();
    fallback.init();

    // here
    

}
// if (document.readyState === 'complete') {
//    loadHandler();
// } else {
//    $(window).on('load', loadHandler);
// }
$( "li" ).click(function() {
    $( this ).toggleClass( "disable" );
    $( this ).siblings( "li" ).addClass( "disable" );
});