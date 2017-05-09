define(["jquery"], function ($) {
    var Person = {
        firstName: 'Adriano',
        lastName: 'Costa',
        bithDate: new Date('1987-11-20'),
        gender: 'male',
        getAge: function () {
            var today = new Date();
            var diff = today.getTime() - this.birthDate.getTime();
            var year = 1000 * 60 * 60 * 24 * 365.25;
            return Math.floor(diff / year);
        },
        toString: function () {
            return this.firstName + ' ' +
                    this.lastName + ' is a ' +
                    this.getAge() + ' year-old ' + this.gender;
        }
    };
    var bob = Object.create(Person);
    console.log(bob.firstName);
    bob.firstName = 'Bob';
    bob.lastName = 'Sabatelli';
    bob.birthDate = new Date('1969-06-07');
    console.log(bob.toString());
});