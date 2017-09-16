# lm-datepicker

This is a simple AngularJS 1.x directive for [xdan/datetimepicker](https://github.com/xdan/datetimepicker)

### Installation
``bower install lm-datepicker``

## Usage

**Module**
```javascript
angular.module('app', ['lm-datepicker']);
```

**Directive**
The `datepicker` directive can only be used as an attribute

```html 
<ANY 
    datepicker 
    [options="object"]
    [parser="function"]
    ...
</ANY>
```

**Attributes**

| Param            | Type       | Details  |
| -------------    |------------| -----    |
| options          | object     | This is an options object for jquery.datetimepicker. Please see [https://github.com/xdan/datetimepicker](https://github.com/xdan/datetimepicker) for full list of options. |
| parser           | function   | A parser function to be included in the ng-model pipline.|