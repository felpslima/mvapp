angular
    .module("app.controllers")
    .controller("historicController", ["$scope", "osFactory", "$ionicModal", "$location", "$ionicPopup",
        function($scope, osFactory, $ionicModal, $location, $ionicPopup){
            $scope.orders = [];
            
            var _pushToArray = function(response){
                if(response.length > 0){
                    response.forEach(function(element) {
                        var date = element.CreatedDate.split("T")[0].split("-").reverse().join("/");
                        element.CreatedDate = date;
                        $scope.orders.push(element);
                    }, this);
                }
                $scope.$broadcast('scroll.refreshComplete');
            }

            var _error = function(err){
                console.log(err);
            }

            //LIST
            $scope.getOSs = function(){
                $scope.orders = [];
                osFactory.getOSs(_pushToArray, _error);
            }

            //DETAILS
            $scope.showOS = function(order){
                $scope.os = order;
            }

            //EDIT
            $scope.listOSTypes = function(){
                osFactory.getOSTypes(
                    function(osTypes){
                        $scope.osTypes = osTypes;
                    }, _error);
            }

            //SAVE
            $scope.enviar = function(form){
                if(form.$valid){
                    osFactory.updateOS($scope.os,
                        function(response){
                            $ionicPopup.alert({
                                title: 'Enviado',
                                template: 'Ocorrência enviada com sucesso!'
                            }).then(function(){
                                $scope.os = {};
                                form.$setPristine(true);
                                $location.path("side-menu/historico");
                                $scope.closeEditModal();
                                $scope.closeViewModal();
                            });
                        },
                        function(error){
                            $ionicPopup.alert({
                                title: 'Erro',
                                template: 'Tente novamente mais tarde!'
                            });
                        }
                    );
                }
            }

            // Confirm dialog to delete
            $scope.showConfirm = function() {
                var confirmPopup = $ionicPopup.confirm({
                    title: 'Excluir',
                    template: 'Deseja excluir este registro?',
                    buttons: [
                        { 
                            text: 'Cancelar',
                            onTap: function(e) { return false; }
                        },
                        {
                            text: '<b>Ok</b>',
                            type: 'button-positive',
                            onTap: function(e) { return true; }
                        }
                    ]
                }).then(function(res) {
                    if(res) {
                        osFactory.deleteOS($scope.os.OrderServiceId,
                            function(response){
                                $scope.closeViewModal();
                            },function(error){
                                $ionicPopup.alert({
                                    title: 'Erro',
                                    template: 'Tente novamente mais tarde!'
                                });
                            });
                    } 
                });
            };

            //View Modal
            $ionicModal.fromTemplateUrl('view-modal.html', {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function(modal) {
                $scope.viewModal = modal;
            });
            $scope.openViewModal = function() {
                $scope.viewModal.show();
            };
            $scope.closeViewModal = function() {
                $scope.viewModal.hide();
            };
            // Cleanup the modal when we're done with it!
            $scope.$on('$destroy', function() {
                $scope.viewModal.remove();
            });
            // Execute action on hide modal
            $scope.$on('modal.hidden', function() {
                // Execute action
                $scope.getOSs();
            });
                // Execute action on remove modal
            $scope.$on('modal.removed', function() {
                // Execute action
            });

            //Edit Modal
            $ionicModal.fromTemplateUrl('edit-modal.html', {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function(modal) {
                $scope.editModal = modal;
            });
            $scope.openEditModal = function() {
                $scope.editModal.show();
            };
            $scope.closeEditModal = function() {
                $scope.editModal.hide();
            };
            // Cleanup the modal when we're done with it!
            $scope.$on('$destroy', function() {
                $scope.editModal.remove();
            });
            // Execute action on hide modal
            $scope.$on('modal.hidden', function() {
                // Execute action
            });
            // Execute action on remove modal
            $scope.$on('modal.removed', function() {
                // Execute action
            });

            $scope.getOSs();
        }
    ]);