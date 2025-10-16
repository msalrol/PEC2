//Sustituye /***/ por las instrucciones adecuadas que cumplan las operaciones 
//y salidas indicadas en los comentarios.

abstract class Animal {
    static population: number = 0;

    color?: string;
    gender?: string;

    constructor(color?: string, gender?: string) { }
    public abstract sound(): void;
}

class Dog extends Animal {

    constructor(color: string) {
        super(color);
        Animal.population++;
    }
    public sound() {
        console.log('WOW')
    }

    public iamadog() {
        console.log('yes, this is a dog');
    }
}

class Cat extends Animal {

    constructor(gender: string) {
        super(gender);
        Animal.population++;
    }
    public sound() {
        console.log('MEOW')
    }

    public iamacat() {
        console.log('yes, this is a cat');
    }
}

let animals: Animal[] = [];
animals.push(new Cat('male'));
animals.push(new Dog('white'));
animals.push(new Cat('female'));
animals.push(new Dog('black'));

for (let animal of animals) {

    animal.sound();
    if (animal instanceof Dog) {
        animal.iamadog();
    } else if (animal instanceof Cat) {
        animal.iamacat()
    }


}
/**  loop prints these lines
MEOW
yes, this is a cat
WOW
yes, this is a dog
MEOW
yes, this is a cat
WOW
yes, this is a dog
*/

console.log(Animal.population); //4