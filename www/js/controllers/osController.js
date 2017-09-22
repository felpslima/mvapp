angular
    .module("app.controllers")
    .controller("osController", ["$scope",
        function($scope){
            $scope.os = {};

            $scope.osTypes = [
                { OrderServiceTypeId: 1, Name: "Buraco na rua" },
                { OrderServiceTypeId: 2, Name: "Bueiro entupido" },
                { OrderServiceTypeId: 3, Name: "Outros" }
            ];

            $scope.Enviar = function(form){
                if(form.$valid){
                    alert("Enviado!");
                    $scope.os = {};
                    form.$setPristine(true);
                }
            }
        }]);