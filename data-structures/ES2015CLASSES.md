# ES2015 classes

### What is a class?

- A blueprint for creating objects with pre-defined properties and methods
- In Javascript, the class syntax does not make it OOP, it is simply syntax. Classes are just 'special functions'
- We could create data structures in JS without classes, but it just makes it easier to understand with them

### Class syntax

```javascript
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

let newStudent = new Student("Joe", "Bloggs");
```

- The method used to create new objects **must** be called constructor
- The class method creates a constant, so it cannot be redefined
- The _new_ keyword instantiates objects from a class - it calls the constructor method
- Inside a constructor, _this_ refers to the individual instance of the class (so the object created from that class)

### Instance methods

- Provide functionality that pertains to a single instance of a class
- Written as named functions within the class

### Class methods

- Defines methods or functionality that is pertinent to classes, but not necessarily to individual instances of a class
- Uses the _static_ keyword to declare
- Cannot be called through a class instance
- Often used to create utility functions for an application
