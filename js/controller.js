angular.module('RouteControllers', [])

    .controller('HomeController', function ($scope) {
        angular.element(document).ready(function() {
            $('#mobile').on("mouseenter", function () {
                $(this).find('.slide-up').stop().animate({height: "90%"})
            });
            $('#mobile').on("mouseleave", function () {
                $(this).find('.slide-up').stop().animate({height: "15%"}, 1000, function () {

                })
            });
            $('.text-slider').slick({
                vertical: true,
                autoplay: true,
                autoplaySpeed: 3000,
                speed: 700,
                dots: false,
                prevArrow: false,
                nextArrow: false
            })
        });
        $scope.title = "Welcome to PrimaryIT!";
        $scope.image = [{src: 'media/img/atom.png'}];
    })

    .controller('ContactController', function ($scope) {
        $scope.contactContent = {};

        $scope.submitForm = function () {
            if ($scope.contactForm.$valid) {
                $scope.contactContent.firstname = $scope.contact.firstname;
                $scope.contactContent.lastname = $scope.contact.lastname;
                $scope.contactContent.email = $scope.contact.email;
            }

            console.log($scope.contact.firstname + " " + $scope.contact.lastname);
        }
    });