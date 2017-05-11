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
    console.log(human.getAge());


    var john = new John();
    console.log(john.name);
    console.log(john.walk());
    console.log(john.getAge());
    console.log(john.getNumEyes());

});