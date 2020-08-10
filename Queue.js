//Creating a queue: enqueue(element), dequeue, front, isEmpty. size
function Queue(){
  let items = [];
 
  this.enqueue = function(element){
    items.push(element);
  }
 
  this.dequeue = function(){
    Return items.shift();
  }
  
  this.front = function(){
    return items[0];
  }
 
  this.isEmpty = function(){
    return items.length == [];
  }
 
  this.size = function(){
    return items.length;
  }
 
  this.print = function(){
    console.log(items.toString())
  }
 
}
 
let queue = new Queue();
queue.enqueue(3);
queue.dequeue();
queue.enqueue(4);
console.log(queue.size()) //1
console.log(queue.front()); //4
console.log(queue.isEmpty()) //false
========================================================================================================================================
  //Creating a queue: enqueue(element), dequeue, front, isEmpty. size
class Queue 
{ 
    // Array is used to implement a Queue 
    constructor() 
    { 
        this.items = []; 
    } 
                  
    // Functions to be implemented 
    enqueue(element){
      this.items.push(element);
    } 
    dequeue(){
      if(this.isEmpty()){
        return false
      }
      return this.items.shift()
    } 
    front(){
      if(this.isEmpty()){
        return false
      }
      return this.items[0]
    } 
    isEmpty(){
      if(this.items.length ==0){return true}
      return false;
    } 
    printQueue(){
      let str = '';
      for(let item of this.items){
        str += item;
      }
      console.log(str);
    }
    size(){
      return this.items.length;
    } 
} 
let queue = new Queue();
queue.enqueue(3);
queue.dequeue();
queue.enqueue(4);
console.log(queue.front()); //4
console.log(queue.isEmpty()) //false
console.log(queue.size())
queue.printQueue()
=========================================================================================================================================
//The Queue class using ECMAScript 6 syntax
//Creating a queue: enqueue(element), dequeue, front, isEmpty. size
let Queue2 = (function(){
  const items = new WeakMap();
  class Queue2(){
    constructor(){
      items.set(this, []);
    }
    enqueue(element){
      let q = items.get(this);
      q.push(element);
      }
    dequeue(){
      let q = items.get(this);
      r = q.shift();
      return r;
    }
   }
  return Queue2;
  }
  )();
  ======================================================================================================================================
  //The circular queue - Hot Potato
  function hotPotato(nameList, num){
  let queue = new Queue();
  for(let i=0; i<nameList.length; i++){
    queue.enqueue(nameList[i]);
  };
 
  let eliminated = '';
  while(queue.size() > 1){
     for(let i=0; i<num; i++){
       queue.enqueue(queue.dequeue());
  }
  eliminated = queue.dequeue();
 
  console.log(eliminated + ` was eliminated from the game.`);
  }
  return queue.dequeue()
}
 
let names = ['John','Jack', 'Camilia', 'Ingrid', 'Carl'];
let winner = hotPotato(names, 7);
console.log(winner)
