requirejs.config({
    paths: {
        "Human": "lib/human",
        "John": "lib/john"
    }
});

require(['Human', 'John'], function (Human, John) {

    console.log(Human.GET_TYPE()); // biped
    console.log(Human.NUM_LEGS); // 2


    var human = new Human('Peter');
    console.log(human.name); // Peter
    console.log(human.walk()); // Peter is walking
    console.log(human.getAge()); // 0


    var john = new John();
    console.log(john.name); // John
    console.log(john.walk()); // John is walking quickly
    console.log(john.getAge()); // 28
    console.log(john.getNumEyes()); // 2

});