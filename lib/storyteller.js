"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Die = function () {
    function Die(agent, cause) {
        _classCallCheck(this, Die);

        this._agent = agent;
        this._cause = cause;
    }

    _createClass(Die, [{
        key: "toString",
        value: function toString() {
            return this._agent + " was killed by " + this._cause;
        }
    }]);

    return Die;
}();

var Go = function () {
    function Go(agent, from, to) {
        _classCallCheck(this, Go);

        this._agent = agent;
        this._from = from;
        this._to = to;
    }

    _createClass(Go, [{
        key: "toString",
        value: function toString() {
            return this._agent + " went from " + this._from + " to " + this._to;
        }
    }]);

    return Go;
}();

var Find = function () {
    function Find(agent, item) {
        _classCallCheck(this, Find);

        this._agent = agent;
        this._item = item;
    }

    _createClass(Find, [{
        key: "toString",
        value: function toString() {
            return this._agent + " found a " + this._item;
        }
    }]);

    return Find;
}();

var Lose = function () {
    function Lose(agent, item) {
        _classCallCheck(this, Lose);

        this._agent = agent;
        this._item = item;
    }

    _createClass(Lose, [{
        key: "toString",
        value: function toString() {
            return this._agent + " lost a " + this._item;
        }
    }]);

    return Lose;
}();

var Buy = function () {
    function Buy(agent, item) {
        _classCallCheck(this, Buy);

        this._agent = agent;
        this._item = item;
    }

    _createClass(Buy, [{
        key: "toString",
        value: function toString() {
            return this._agent + " bought a " + this._item;
        }
    }]);

    return Buy;
}();

var Sell = function () {
    function Sell(agent, item) {
        _classCallCheck(this, Sell);

        this._agent = agent;
        this._item = item;
    }

    _createClass(Sell, [{
        key: "toString",
        value: function toString() {
            return this._agent + " sold a " + this._item;
        }
    }]);

    return Sell;
}();

var Steal = function () {
    function Steal(agent, item, source) {
        _classCallCheck(this, Steal);

        this._agent = agent;
        this._item = item;
        this._source = source;
    }

    _createClass(Steal, [{
        key: "toString",
        value: function toString() {
            return this._agent + " stole a " + this._item + " from " + this._source;
        }
    }]);

    return Steal;
}();

var Meet = function () {
    function Meet(agent, other) {
        _classCallCheck(this, Meet);

        this._agent = agent;
        this._other = other;
    }

    _createClass(Meet, [{
        key: "toString",
        value: function toString() {
            return this._agent + " met " + this._other;
        }
    }]);

    return Meet;
}();

function inciting() {
    return "An inciting incidence occurs.";
}

function obstacle() {
    return "An obstacle presents itself.";
}

function success() {
    return "The obstacle is overcome.";
}

function failure() {
    return "The obstacle is not overcome.";
}

function resolution() {
    return "The inciting event is resolved.";
}

function generate() {
    console.log(inciting());
    console.log(obstacle());
    console.log(success());
    console.log(failure());
    console.log(resolution());
}

generate();
//# sourceMappingURL=storyteller.js.map