var OP = {};

OP.moduleArray = (function(){
    var steps = 0;

    var increaseSteps = function(){
        steps++;
    }
    
    return {
        getTotalSteps: function(){
            return(steps);
        },
        walk: function(){
            increaseSteps();
        },
    };
})();

OP.moduleArray.walk();
OP.moduleArray.walk();
OP.moduleArray.walk();
OP.moduleArray.walk();
console.log(OP.moduleArray.getTotalSteps());
