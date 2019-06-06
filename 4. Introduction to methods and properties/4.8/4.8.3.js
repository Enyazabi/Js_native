let obj = {
    className: 'open menu'
};

function removeClass (obj, cls) {
    (obj.className.indexOf(cls) !== -1)
        ?
        obj.className = obj.className.slice(
            obj.className.indexOf(cls) + cls.length,
            obj.className.length)
        :
        obj.className
}

removeClass(obj, 'open');
console.log(obj.className);
