angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
   .state('side-menu21.histRico', {
    url: '/historico',
    views: {
      'side-menu21': {
        templateUrl: 'templates/histRico.html',
        controller: 'historicController'
      }
    }
  })

  .state('side-menu21.ordemDeServiO', {
    url: '/ordemServico',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ordemDeServiO.html',
        controller: 'osController'
      }
    }
  })

  .state('side-menu21', {
    url: '/side-menu',
    templateUrl: 'templates/side-menu21.html',
    controller: 'side-menu21Ctrl'
  })

  .state('side-menu21.sobre', {
    url: '/sobre',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sobre.html',
        controller: 'sobreCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu/historico')


});