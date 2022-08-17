function receivesAFunction (callback){
    return callback();
}
receivesAFunction (function() { return 'Moringa school' });

function returnsANamedFunction() {
   return returnsANamedFunction;
}
returnsANamedFunction( function() {return 'nothing'});

let returnsAnAnonymousFunction = function(){
    
   return function(){'Hello'};
}
returnsAnAnonymousFunction();
