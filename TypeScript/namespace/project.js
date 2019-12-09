var project;
(function (project) {
    var TeamA;
    (function (TeamA) {
        var Class1 = /** @class */ (function () {
            function Class1() {
            }
            Class1.prototype.print = function () {
                console.log("TeamA class");
            };
            return Class1;
        }());
        TeamA.Class1 = Class1;
    })(TeamA = project.TeamA || (project.TeamA = {}));
})(project || (project = {}));
var project;
(function (project) {
    var TeamB;
    (function (TeamB) {
        var Class1 = /** @class */ (function () {
            function Class1() {
            }
            Class1.prototype.print = function () {
                console.log("TeamB Class");
            };
            return Class1;
        }());
        TeamB.Class1 = Class1;
    })(TeamB = project.TeamB || (project.TeamB = {}));
})(project || (project = {}));
///<reference path="TeamA.ts" />
///<reference path="TeamB.ts" />
var teamAObject = new project.TeamA.Class1();
var teamBObject = new project.TeamB.Class1();
teamAObject.print();
teamBObject.print();
