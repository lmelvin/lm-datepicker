(function () {
    angular.module('lm-datepicker', []).directive('datepicker', datepicker);

    function datepicker() {
        return {
            require: 'ngModel',
            restrict: 'A',
            scope: {
                options: "=?",
                parser: "=?"
            },
            link: function (scope, element, attrs, ngModel) {

                // if options are not defined, init options object
                if (typeof (scope.options) == "undefined") {
                    scope.options = {};
                }

                scope.options.onChangeDateTime = function (value, $input) {
                    ngModel.$setViewValue(value);
                }

                var $datepicker;

                ngModel.$render = function () {
                    scope.options.value = ngModel.$modelValue;
                    $datepicker = $(element).datetimepicker(scope.options);
                }

                //format text from the user (view to model)
                if (scope.parser && angular.isFunction(scope.parser)) {
                    ngModel.$parsers.push(scope.parser);
                } else {
                    ngModel.$parsers.push(defaultParser);
                }

                function defaultParser(value) {
                    var m = moment.utc(value);
                    if (!m.isValid()) return null;
                    return m.format();
                }
            }
        }
    }
})();