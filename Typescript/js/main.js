"use strict";
var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (distanceInMeters) {
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return Animal;
}());
var ker = new Animal("Zuca");
ker.move(4);
