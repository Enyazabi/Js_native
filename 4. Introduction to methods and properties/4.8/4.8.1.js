var obj = {
    className: 'open menu'
};

function addClass (obj, cls) {
   var words = obj.className;

        if (words.indexOf(cls+' ') === -1) {
            words = words+(' ') + (cls);
            obj.className = words;
        }
}

addClass(obj, 'new');
addClass(obj, 'open');
addClass(obj, 'me');

console.log( obj.className );