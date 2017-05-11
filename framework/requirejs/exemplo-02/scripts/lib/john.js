define('John', ['Human'], function (Human) {

    var John = function () {
        Human.call(this, 'John');
        this._age = 28;
    };

    John.prototype = Object.create(Human.prototype);

    var _super_ = Human.prototype;

    John.prototype.walk = function () {
        return _super_.walk.call(this) + ' quickly';
    };

    return John;

});