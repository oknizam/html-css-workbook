# 1. Problem with JSON.stringify and JSON.parse

  1. Cannot handle function

    let obj = {
      display : () =>{
        return "hello"
      }
    }

    if do strigify function will get loss

  2. Cannot handle properties with undefined

  3. Cannot preserve date objects
    
    let obj = {
      date : new Date(),
    }

    let newObj = json.stringify(obj);

    newObj.date instanceOf Date // false 

  4. loses map, set, weakMap, weakSet
  5. lose Symbol
    const obj = {
      [Symbol("id")]: 1,
      name: "Nizam"
    };

    JSON.stringify(obj);  

    o/p: {name:"Nizam"}

  6. Perfomence issues deep copies with this is slow
    slow large objects, uses large memory , blocks main thread

# 2. Symbol 
Symbol is premitive data types 

 1. To avoid property name collisions
 2. To create hidden / non-enumerable keys
 3. To define internal object behavior
 4. we can't iterate them
 5. to access Object.getOwnPropertySymbols(user);

# 3. Map vs weakMap and set vs weakSet

  map and set
  -----------
  1. map and set has size feature
  2. store all types of data
  3. iterable
  4. keys are no garbage collected
  5. Don't prevent memory leaks

  weakMpa and weakSet
  -------------------
  1. size is not there
  2. not iterable
  3. only stores objects
  4. keys are garbage collected  , when no refrence
  5. prevent memory leaks
     example: let map = new weakMap();
          let object = {name:"nizam"}
            map.set(object,"value")
            object = null ; // handle garbage collections

# 4. Memory leak
  Memory no longer needed will not be released, causes more memory consumption

  1. Global variables without let, const , never garbage collected
  2. forgetten timers (settimeout, setinterval) refrence alive forever
  3. event listners not removed
  4. closures holding large objects

    function heavy() {
      const bigData = new Array(1000000);
      return () => console.log(bigData.length);
    }
    bigdata = null;

# 5. Garbage collector
It frees memory which is no longer reachable in program

  1. make gloabal variables null
  2. clear timers
  3. careful with closures because they holds data in memory for long time
  4. use let and const 