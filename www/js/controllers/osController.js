angular
    .module("app.controllers")
    .controller("osController", ["$scope", "osService", "$ionicPopup",
        function($scope, osService, $ionicPopup){
            $scope.os = {};

            var _pushToArray = function(response){
                if(response.length > 0){
                    response.forEach(function(element) {
                        $scope.osTypes.push(element);
                    }, this);
                }
            }

            var _error = function(err){
                console.log(err);
            }

            osService.getOSTypes(_pushToArray, _error);

            $scope.osTypes = [
                { OrderServiceTypeId: 1, Name: "Buraco na rua fake" },
                { OrderServiceTypeId: 2, Name: "Bueiro entupido fake" }
            ];

            $scope.Enviar = function(form){
                if(form.$valid){
                    osService.createOS($scope.os,
                        function(response){
                            $ionicPopup.alert({
                                title: 'Enviado',
                                template: 'Ocorrência enviada com sucesso!'
                            });
                            $scope.os = {};
                            form.$setPristine(true);
                        },
                        function(error){
                            _error(error);
                        }
                    );
                }
            }
        }]);