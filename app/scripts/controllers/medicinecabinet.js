'use strict';

var medicineCabinetController = angular.module('medicineCabinetController', []);

medicineCabinetController.controller('MedicineCabinetCtrl',['$scope', '$http',  
    function($scope, $http) {
        $http.get('scripts/mocks/patients.json').success(function(data) {
            $scope.patients = data.patients;
        });
}]).animation('.drug', function() {
  return {
    enter : function(element, done) {
      element.css('opacity',0);
      jQuery(element).animate({
        opacity: 1
      }, done);

      // optional onDone or onCancel callback
      // function to handle any post-animation
      // cleanup operations
      return function(isCancelled) {
        if(isCancelled) {
          jQuery(element).stop();
        }
      }
    },
    leave : function(element, done) {
      element.css('opacity', 1);
      jQuery(element).animate({
        opacity: 0
      }, done);

      // optional onDone or onCancel callback
      // function to handle any post-animation
      // cleanup operations
      return function(isCancelled) {
        if(isCancelled) {
          jQuery(element).stop();
        }
      }
    },
    move : function(element, done) {
      element.css('opacity', 0);
      jQuery(element).animate({
        opacity: 1
      }, done);

      // optional onDone or onCancel callback
      // function to handle any post-animation
      // cleanup operations
      return function(isCancelled) {
        if(isCancelled) {
          jQuery(element).stop();
        }
      }
    },

    // you can also capture these animation events
    addClass : function(element, className, done) {},
    removeClass : function(element, className, done) {}
  }
});


/*.directive("drugInfo", ['$animate', function($animate){
    return function(scope, element){
        element.on("mousedown", function(event){
            event.preventDefault();
            element.on('click', function() {
                if(element.hasClass('expanded')) {
                    $animate.removeClass(element, 'expanded');
                } else {
                    $animate.addClass(element, 'expanded');
                }
            });
         });
    };
}]);*/