/**
 * Created by JetBrains WebStorm.
 * User: shaikhgousep
 * Date: 26/8/13
 * Time: 12:33 PM
 * To change this template use File | Settings | File Templates.
 */
CALC.factory('buttonModel',function(){
   return function(){
       var self=this;
       self.value='';
       self.type='';
       self.init=function(value,type){
           self.value=value;
           self.type=type;
       }
       self.big=false;
       return self;
   }
})