1. types 
  1. Varbiables we define have values, values have types primitive (number, string, boolean, Symbol, undefined, null)

2. type interface

  type interface is when compiler autometcially identifies type when value is assigned to variable

  let number = 10; type intreface number

  let name = "nizam"; type interface string


3. static typing and dynaic typing

  1. type check happens at complile time are static typing (typescript)
  2. type check happens at run time are dyncamic typing (javascript)

4. primitive types

  string, number,boolean

5. special types (any, unknown, never, void)

  1. any -> anything is allowed , type checking will not be performed
  2. unknown -> safer version of any

    1. accept anything like any, but validate before use

    let name: unknown = "nizam";

    name.toUpperCase(); // throw type error

    2. We need to check type before using it

      if(typeof name==="string"){
        name.toUpperCase();  // here it works
      }

  3. void

    1. function return nothing

    function hello(): void {
      console.log("hello")
    }

  4. never

    1. function never returns

     function error(): never {
      throw new Error("error")
    }

6. interface

  1. used to define structure and shape of an object

  interface User {
    name: string,
    phone:  number
  }

  const user:User = {
    name:"nizam",
    phone: 123456789
  }

  2. if we don't have phone or name throw an error two fields are mandatory

  3. In case if u want to make optional we use ? operator

   interface User {
    name: string,
    phone?:  number
  }

7. type -> help to create reuseable name for type

  type User = {
    name: string,
    phone:  number
  }

   const user:User = {
    name:"nizam",
    phone: 123456789
  }

  1. type alias supports premitive types and unions

  type Value = string | number;

  const value: Value = "Nizam";

  value = 10; // both are allowed


8. function in typescript

  1. normal interface
  interface Emp {
      salary: number
  }

  2. extend interafce
  interface User extends Emp{
      name:string
  }

  3. using interface for object
  const user:User = {
      name:"nizam",
      salary:10000
  }

  4. function in ts with default parameter
  function getInfo(userId: string = "1"): User{
      return user;
  }

9. union (|) works with both premitive and non premitive

  1. type A = number | string;

      const a:A = 1;

      OR

      const a:A = "nizam";


  2. type A = {
      name: string
    }

    type B = {
      age: string
    }

    type User = A | B;

    const a:User = {
      name:"nizam"
    };

    OR

     const a:User = {
      age:"27"
    };

  3. union is not allowed for interface


10. Intersection (&) 

  1. type A = {
      name: string
    }

    type B = {
      age: string
    }

    type User = A & B;

    const user:User = {
       name:"nizam",
       age:"27"
    }

  2. interface A {
        name: string
    }


    interface B  {
      age: string
    }

    when we are intersectig interface is not allowed

    type User =  A & B;

    const user:User = {
       name:"nizam",
       age:"27"
    }


11. genric functions -> allow to write reusable code

  1. function identity<T>(a:T):T {
        return a;
     }

     const a:string = identity<string>("nizam");

  2. function identity<T,U>(a:T,b:U){
        return {a,b};
    }

    const a = identity<string,number>("nizam",27);


12. enums

  1. allow to create set of named constants

  2. when constatnts shared across app

  3. numeric enums

    enum Status {
        Pending = 1,
        Success = 2,
        Completed = 3
    }

    const value:Status = Status.Pending;



  4. string enums

    enum Status {
        Pending = "pending",
        Success = "success",
        Completed = "completed"
    }

  const value:Status = Status.Pending;


13. utilility types (built in typescript types)

  1. Partial<T>

    Make All propoties optional

    type User = {
      name:string,
      age: string
    }

    type partialUser = Partial<User>;


  2. Required<T>

    make all propoties mandatory


     type User = {
      name:string,
      age?: string
    }

    type mandatoryUser = Required<User>;

  3. Readonly<T>

    make Read only propoties

    type User = {
      name:string,
      age?: string
    }


    const user : Readonly<User> = {
      name:"nizam"
    }

    user.name = "abc" ; throw error


  4. Pick<T,K>

    select specific proporties

    type User = {
      name:string,
      age: string,
      email: string
    }

    type SelectedUser = Pick<User, "name | age">


  5. omit<T,K>

    remove propoties


    type User = {
      name:string,
      age: string,
      email: string
    }

    type WithoutEmail = Pick<User, "email">


14. tuple 

  1. special type of array where order and type of elements are fixed

  const user : [number, string] = [27, "nizam"];
