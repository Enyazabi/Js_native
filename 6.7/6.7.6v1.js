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
        let t = this;

        ask("Your password?", this.password,
            function() {
                t.loginDone(true);
            },

            function() {
                t.loginDone(false);
            }
        );
    }
};

let vasya = user;
user = null;
vasya.checkPassword();