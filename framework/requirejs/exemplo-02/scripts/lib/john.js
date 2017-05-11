define('John', ['Human'], function (Human) {

    var John = function () {
        Human.call(this, 'Adriano');
        this._age = 28;
    };

    John.prototype = Object.create(Human.prototype);

    var _super_ = Human.prototype;

    // herança do método Human
    John.prototype.walk = function () {
            return _super_.walk.call(this) + ' rapidamente';
    };

    return John;

});