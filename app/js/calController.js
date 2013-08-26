/**
 * Created by JetBrains WebStorm.
 * User: shaikhgousep
 * Date: 26/8/13
 * Time: 12:42 PM
 * To change this template use File | Settings | File Templates.
 */
CALC.controller('calcController',function($scope,buttonModel){
  var operand1=null,
    operand2=null,
    operator=null,
    operators=['+','-','*','/','sqrt','1/x'],
    type1=[1,2,3,4,5,6,7,8,9,0,'.'],
    type2=['+','-','*','/','='],
    type3=['sqrt','1/x'];
    $scope.result='';
    $scope.buttonArray=[];
    $scope.init=function(){
           initButton(type1, 1);
           initButton(type2,2);
           initButton(type3,3);
    }

    function initButton(arr,type){
        angular.forEach (arr,function(value){
             var bt=new buttonModel();
                 bt.init(value,type);
                 $scope.buttonArray.push(bt);

               })
        return arr;
    }
   var numberClicked=function(value){
        $scope.result+=value;
    }
   var operatorClicked=function(k){

     var result=$scope.result;
        if($.inArray(result[result.length-1],operators)>-1){

            var temp=result.split('');
                temp[result.length-1]=k;
                result=temp.join('');
                operator=k;
            $scope.result=result;
            return;
        }
      if(operand1&&operand2){
         // alert("in perform");
         performOperation();
         // return;
      }
      else if(!operand1&&!operand2&&result!==null){
          operand1=result.substring(0,result.length);
      }
      else if(operand1&&!operand2&&result!==null){
            if(operand1.length+1<result.length){
               operand2=result.substring(operand1.length+1,result.length);

              performOperation();
            }
          //alert(2);
      }
        if(k!='=')
        $scope.result+=k;
         operator=k;
   }

  var  performOperation=function(){

        var result=$scope.result;
         var op1=parseFloat(operand1);
         var op2=parseFloat(operand2);
         var tempRes=parseFloat(result);
        console.log(op1);
      console.log(op2);
      console.log(operator);
        if(operator){
            switch(operator.toString())
            {
                case '+':
                    $scope.result=(op1+op2).toString();
                          break;
                case '-': $scope.result=(op1-op2).toString();
                             break;
                case '/': $scope.result=(op1/op2).toString();
                             break;
                case '*':$scope.result=(op1*op2).toString();
                                  break;
                case 'sqrt': if(tempRes){
                            $scope.result=Math.sqrt(tempRes).toString();
                            }
                      else{
                        $scope.result==0;
                          }
                        break;
                case '1/x': if(tempRes){
                               $scope.result=(1/tempRes).toString();
                                }
                        else{
                              $scope.result==0;
                          }
                break;
            }
        }

        operand1=$scope.result.substring(0,$scope.result.length);
        operand2=null;
    }
   var singleOperation=function(k){
       
        if(k=="1/x"){

            operator='1/x';
            performOperation();
        }
        if(k=="sqrt"){
                    operator='sqrt';

                    performOperation();
          }


    }
 $scope.buttonClick=function(model){
      switch(model.type){
          case 1: numberClicked(model.value);
                  break;
          case 2:operatorClicked(model.value);
                 break;
          case 3: singleOperation(model.value);
                  break;
      }
  }

})