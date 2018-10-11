"use strict";
{
    angular.module("app",[])
        .controller('toDoController', function(){ 
            const $ctrl = this;
            
            $ctrl.tasks = [
                {toDo:'Pickup Kids', complete:"false"},
                {toDo:'Go to the store', complete:"true"},
                {toDo:'Get Gas', complete:"false"},
                {toDo:'Wash the car', complete:"false"},
            ];
            
            $ctrl.addTask= function(todo){
                $ctrl.tasks.push({toDo:$ctrl.add, complete:"true"});
                console.log($ctrl.tasks);
            }

            $ctrl.remove = function(index) {
            $ctrl.list.splice(index,1);
            };
            $ctrl.complete = function(){
                $ctrl.complete = !$ctrl.complete
                console.log($ctrl.complete)
                    }
        })
}

