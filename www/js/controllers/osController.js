angular
    .module("app.controllers")
    .controller("osController", ["$scope", "osFactory", "osService", "$ionicPopup",
        function($scope, osFactory, osService, $ionicPopup){
            $scope.os = {};
            $scope.osTypes = [];    

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

            $scope.loadOSTypes = function(){
                osFactory.getOSTypes(_pushToArray, _error);
            }

            $scope.enviar = function(form){
                if(form.$valid){
                    osFactory.createOS($scope.os,
                        function(response){
                            $ionicPopup.alert({
                                title: 'Enviado',
                                template: 'Ocorrência enviada com sucesso!'
                            });
                            $scope.os = {};
                            form.$setPristine(true);
                        },
                        function(error){
                            $ionicPopup.alert({
                                title: 'Erro',
                                template: 'Erro ao salvar, tente novamente mais tarde!'
                            });
                        }
                    );
                }
            }

            $scope.loadOSTypes();
        }]);