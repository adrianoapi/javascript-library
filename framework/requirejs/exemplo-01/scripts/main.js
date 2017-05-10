requirejs.config({
    paths: {
        "jquery": "lib/jquery-3.2.1.min",
        "Pessoa": "lib/pessoa"
    }
});

require(["jquery", "Pessoa"], function ($, Pessoa) {
    Pessoa.prototype.setName('Adriano');

    var $form = $("#form"),
            $email = $("#email"),
            nome = Pessoa.prototype.getName();
    console.log(nome);

    $form.on("submit", function (e) {
        e.preventDefault();
        require(["lib/validation-plugin"], function () {
            if ($email.isValidEmail()) {
                $form.get(0).submit();
            } else {
                $email.addClass("error").focus();
            }
        });
    });
    $email.on("keyup", function () {
        $email.removeClass("error");
    });
});