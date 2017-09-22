angular
    .module("app.controllers")
    .controller("historicController", ["$scope", "osService",
        function($scope){
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
        }
    ]);