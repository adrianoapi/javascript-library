define('Pessoa', [], function () {

    // constructor
    var Pessoa = function (name) {
        this.name = name;
        this._age = 0;
    };

    Pessoa.prototype.setName = function (value) {
        this.name = value;
    };

    Pessoa.prototype.getName = function () {
        return this.name;
    };

    return Pessoa;

});