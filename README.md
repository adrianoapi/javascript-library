# javascript-library

Estou disponibilizando aos poucos um conteúdo abrangente de JavaScript, com o intuito de facilitar e agilizar o desenvolvimento de aplicações e afins que utilizam a tecnologia. Afinal, são inúmeras os frameworks e classes que são geradas e adotadas no mercado para esta tecnologia, é algo muito recorrente, o que torna um pouco maçante a pesquisa de um e outro.
Para isso estou tentando juntar e organizar da melhor maneira possível os exemplos e suas melhores práticas de utilização.

## Framework

* `jQuery` Framework JS.
* `angularJS` Framework JS.
* `requireJS` Framework JS para gerenciamento de dependências.
* `underscoreJS` Framework JS.
* `backboneJS` Fornece o padrão MVC para o código javascript, que funciona em harmonia com a orientação à objetos.

Exemplo de backboneJS:

```javascript
var HelloView = Backbone.View.extend({
                    el: $('body'),
                    initialize: function () {
                        this.render();
                    },
                    render: function () {
                        $(this.el).append("<h1>Hello World!</h1>");
                    }
                });
```