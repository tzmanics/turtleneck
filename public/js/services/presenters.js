angular.module('presenterService', [])

.factory('Presenters', ['$http',function($http) {
  return {
    get : function() {
      return $http.get('/api/presenters');
    },
    create : function(presenterData) {
      return $http.post('/api/presenters', presenterData);
    },
    delete : function(id) {
      return $http.delete('/api/presenters/' + id);
    }
  }
}]);