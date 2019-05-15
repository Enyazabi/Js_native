function addClass (obj, cls) {
   var words = obj.className;

   for (var i = 0; i < words.length; i++) {
       if (words[i] === cls) return;
   }

        words.push(cls);
        obj.className = words.join('');
    }


var obj = {
    className: 'open menu'
}

addClass(obj, 'new');
addClass(obj, 'open');
addClass(obj, 'me');

console.log( obj.className )