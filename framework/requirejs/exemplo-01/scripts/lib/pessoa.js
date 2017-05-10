define('Pessoa', [], function () {

    // Constructor
    var Pessoa = function () {
        this._name;
    };

    Pessoa.prototype.setName = function (value) {
        this._name = value;
    };

    Pessoa.prototype.getName = function () {
        return this._name;
    };

    return Pessoa;

});