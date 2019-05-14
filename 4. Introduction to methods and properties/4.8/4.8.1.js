function addClass (obj, cls) {
   var words = obj.className;
    if (words.indexOf(cls)) {
        if (indexOf = false) {
            words.push(cls);
            obj.className = words.join('');
        }

    }

        }

var obj = {
    className: 'open menu'
}

addClass(obj, 'new');
addClass(obj, 'open');
addClass(obj, 'me');

console.log( obj.className )