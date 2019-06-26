"use strict";

function ask(question, answer, ok, fail) {
    let result = prompt(question, '');
    if (result.toLowerCase() === answer.toLowerCase()) ok();
    else fail();
}

let user = {
    login: 'Василий',
    password: '12345',

    loginOk: function() {
        alert( this.login + ' welcome!' );
    },

    loginFail: function() {
        alert( this.login + ': error' );
    },

    checkPassword: function() {
        ask("Your password?", this.password, this.loginOk.bind(this), this.loginFail.bind(this));
    }
};

user.checkPassword();
let vasya = user;
user = null;
vasya.checkPassword();