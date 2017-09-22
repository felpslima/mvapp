angular
    .module("app.services")
    .factory("osService", ["$http", "ngApiSettings",
        function($http, ngApiSettings){
            var apiBase = ngApiSettings.apiUrlBase;
            var factory = {};

            var _createOS = function(os, success, error){
                $http({
                    method: "POST",
                    url: apiBase + "orderservice/create",
                    data: os,
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).success(function(response){
                    return success(response);
                }).error(function(err){
                    return error(err);
                });
            }

            var _getOSs = function(success, error){
                $http.get(apiBase + "orderservice/getall")
                    .success(function(response){
                        return success(response);
                    }).error(function(err){
                        return error(err);
                    });
            }

            var _getById = function(id, success, error){
                $http.get(apiBase + "orderservice/getbyid?id=" + id)
                    .success(function(response){
                        return seccess(response);
                    }).error(function(err){
                        return error(err);
                    });
            }

            var _getOSTypes = function(success, error){
                $http.get(apiBase + "orderservicetype/getall")
                    .success(function(response){
                        return success(response);
                    }).error(function(err){
                        return error(err);
                    });
            }

            factory.createOS = _createOS;
            factory.getOSs = _getOSs;
            factory.getById = _getById;
            factory.getOSTypes = _getOSTypes;

            return factory;
        }]);