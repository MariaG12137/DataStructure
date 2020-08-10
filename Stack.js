//Create a stack with the follwing methods: push, pop(), peek, isEmpty, clear, size
function Stack(){
  let items = [];
 
  this.push = function(element){
    items.push(element);
  }
 
  this.pop = function(){
    return items.pop();
  }
 
  this.peek = function(){
    return items[items.length-1];
  }
 
  this.isEmpty = function(){
    return items.length == 0;
  }
 
  this.clear = function(){
    items = [];
  }
 
  this.size = function(){
    return items.length;
  }
  
  this.print = function(){
    console.log(items.toString());
  };
}
==========================================================================================================================

//Create a stack with the follwing methods: push, pop(), peek, isEmpty, clear, size
class Stack{
  constructor(){
    this.items = [];
  }
  push(element){
    this.items.push(element);
  }
  pop(){
    if(this.isEmpty()){
      return false
    }
    return this.items.pop();
  }
  peek(){
    return this.items[this.items.length-1];
  }

  isEmpty(){
    return !this.items.length;
  }
  clear(){
    this.items = [];
  }
  size(){
    return this.items.length;
  }
  print(){
    console.log(this.items.toString())
  }
}
let stack = new Stack();
stack.push(3);
stack.push(4);
console.log(stack.pop()) //4
console.log(stack.isEmpty()) //false
console.log(stack.peek()); //3
console.log(stack.size()); //1
stack.clear();
stack.push(4);
stack.push(4);
stack.print();//4,4
==================================================================================================================

//Convert decimal to binary
function divideBy2(decNumber){
  let stack = new Stack();
  let rem = 0;
  let binaryString = new String();
 
  while (decNumber > 0){
    rem = Math.floor(decNumber%2);
    stack.push(rem);
    decNumber = Math.floor(decNumber/2);
 
    while (!stack.isEmpty()){
      binaryString += (stack.pop().toString());//convert number to string before concatentating
    }
  }
}
=======================================================================================================================
//Conversion to any base
function divideBy2(decNumber){
  let stack = new Stack();
  let rem = 0;
  let binaryString = new String();
 
  while (decNumber > 0){
    rem = Math.floor(decNumber%2);
    stack.push(rem);
    decNumber = Math.floor(decNumber/2);
 
    while (!stack.isEmpty()){
      binaryString += (stack.pop().toString());//convert number to string before concatentating
    }
  }
}


