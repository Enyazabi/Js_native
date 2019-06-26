"use strict";

function ask(question, answer, ok, fail) {
    let result = prompt(question, '');
    if (result.toLowerCase() === answer.toLowerCase()) ok();
    else fail();
}

let user = {
    login: 'Василий',
    password: '12345',

    loginDone: function(result) {
        alert( this.login + (result ? ' welcome' : ' error') );
    },

    checkPassword: function() {
        ask("Your password?", this.password, this.loginDone.bind(this,true), this.loginDone.bind(this,false));
            }
    };


let vasya = user;
user = null;
vasya.checkPassword();