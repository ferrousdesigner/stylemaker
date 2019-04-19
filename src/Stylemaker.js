const StyleMaker = (css, id, mute) => {
    if(css) {
        if(mute === '--verbose' || mute === '-v') console.log('Initialising Style Maker', css);
        let head = document.head || document.getElementsByTagName('head')[0];
        let style = document.createElement('style');
        if(id) style.id = id
    
        style.type = 'text/css';
        if (style.styleSheet){
        // This is required for IE8 and below.
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
         }
        head.appendChild(style);
        if(mute === '--verbose' || mute === '-v') console.log('Style Added');
    } else {
        console.log('Please call StylerMaker with a valid cssText argument');
    }
   
}
export default StyleMaker;