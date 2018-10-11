"use strict"
{
    angular.module('app')
        .controller('TodoController', function(){
            const $ctrl = this;
            $ctrl.myName = 'Mike';
            $ctrl.band = [{name: 'Band 1', instrument: 'Trumpet'},
            {name: 'Band 2', instrument: 'Drums'},
            {name: 'Band 3', instrument: 'Guitar'},
            {name: 'Band 4', instrument: 'Bass'}];
        });
}