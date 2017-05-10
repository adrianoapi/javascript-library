var listaController = angular.module('listaControllerApp', []);
listaController.controller('listagem', ['$scope', function ($scope) {
        $scope.itens = [
            {nome: 'Fusca', marca: 'Volkswagen', comprado: true},
            {nome: 'F40', marca: 'Ferrari', comprado: false},
            {nome: 'GT', marca: 'Porsche', comprado: false}
        ];
    }]);