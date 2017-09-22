angular
    .module("app.controllers")
    .controller("historicController", ["$scope", "osService", "$ionicModal",
        function($scope, osService, $ionicModal){
            
            var _pushToArray = function(response){
                if(response.length > 0){
                    response.forEach(function(element) {
                        var date = element.CreatedDate.split("T")[0].split("-").reverse().join("/");
                        element.CreatedDate = date;
                        $scope.orders.push(element);
                    }, this);
                }
            }

            var _error = function(err){
                console.log(err);
            }

            osService.getOSs(_pushToArray, _error);

            $scope.orders = [
                { 
                    OrderServiceId: 1,
                    TypeId: 1,
                    Description: "Buraco no asfalto próximo ao número 123",
                    Address: {
                        Street: "Rua A",
                        Number: 123,
                        Complement: null,
                        District: "Centro",
                        City: "Petrópolis",
                        State: "RJ"
                    },
                    CreatedDate: "12/02/2017"
                },
                {
                    OrderServiceId: 2,
                    TypeId: 3,
                    Description: "Paralelepípedos soltos pela rua próximo ao número 123",
                    Address: {
                        Street: "Rua B",
                        Number: 321,
                        Complement: "A",
                        District: "Centro",
                        City: "Petrópolis",
                        State: "RJ"
                    },
                    CreatedDate: "12/04/2017"
                }
            ];

            $scope.showOS = function(order){
                $scope.os = order;
            }

            //Modal
            $ionicModal.fromTemplateUrl('my-modal.html', {
                scope: $scope,
                animation: 'slide-in-up'
              }).then(function(modal) {
                $scope.modal = modal;
              });
              $scope.openModal = function() {
                $scope.modal.show();
              };
              $scope.closeModal = function() {
                $scope.modal.hide();
              };
              // Cleanup the modal when we're done with it!
              $scope.$on('$destroy', function() {
                $scope.modal.remove();
              });
              // Execute action on hide modal
              $scope.$on('modal.hidden', function() {
                // Execute action
              });
              // Execute action on remove modal
              $scope.$on('modal.removed', function() {
                // Execute action
              });
        }
    ]);