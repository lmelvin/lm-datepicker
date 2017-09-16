(function () {
    angular.module('app', ['lm-datepicker']).controller('ctrl', ctrl);

    function ctrl() {

        var vm = this;
        vm.date = "2017-09-14T17:19:09.784+00:00";
        vm.options = {
            format: "n/j/Y",
            timepicker: false
        };

        vm.datetime = "2017-08-05T22:27:29.658+00:00";
        vm.datetimeOptions = {
            format: "n-j-Y H:i"
        };
    }
})();