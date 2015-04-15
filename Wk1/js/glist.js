// CATHLEEN CARBONELL FWF 0415

var gList = angular.module('gList',[]);

gList.factory('listEdit', function() {
  var _list = [];
  
  return {
    add: function(item) {
      if ( /^(?!.*\w.*)/i.test(item) || typeof item == 'undefined' )
      return 'Enter an Item';

          /*if($scope == 'undefined' || ' '){
          alert('Hey! Type something in!');
          return 'Enter an Item';
          }*/

      _list.push(item);
      return item + ' is added';
    },
    remove: function(index) {            
      var item = _list.splice(index, 1)[0];
      return item + ' has been deleted';
    },
    count: function() {
        return internalList.length;
    },
    linkList: function(list){
      _list = list;
    }
  };
});

//Controller methods
gList.controller('main', ['$scope', 'listEdit', function($scope, listEdit) {

  $scope.list = ['bread', 'peanut butter'];
  listEdit.linkList( $scope.list );
  
  $scope.addToList = function() {
    $scope.feedback = listEdit.add($scope.gitem);
    $scope.gitem = ' ';

  };

  $scope.remove = function(index) {
    $scope.feedback =  listEdit.remove(index);
  };


}]);