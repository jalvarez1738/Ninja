class Ninja{
    constructor(name, health, strength = 3, speed = 3){
        this.name = name
        this.health = health
        this.strength = strength
        this.speed = speed
    }
    sayName(){
        console.log(`Boom! ${this.name}`)
        return this
    }
    showStats(){
        console.log(`Health: ${this.health}, Strength: ${this.strength}, Speed: ${this.speed}`)
        return this
    }
    drinkSake(){
        this.health += 10
        return this
    }
}

let john = new Ninja("John", 100)
john.drinkSake().drinkSake().showStats