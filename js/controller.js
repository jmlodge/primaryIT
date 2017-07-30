angular.module('RouteControllers', [])
    .controller('HomeController', function ($scope) {
       $scope.title = "Welcome to PrimaryIT!";
    })

    .controller('ContactController', function ($scope) {
        $scope.contactContent = {};

        $scope.submitForm = function () {
            if ($scope.contactForm.$valid) {
                $scope.contactContent.firstname = $scope.contact.firstname;
                $scope.contactContent.lastname = $scope.contact.lastname;
                $scope.contactContent.email = $sope.contact.email;
            }

            console.log($scope.contact.firstname + " " + $scope.contact.lastname);
        }
    });