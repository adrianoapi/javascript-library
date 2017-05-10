# javascript-library

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