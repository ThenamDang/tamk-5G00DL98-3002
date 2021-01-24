fun generateRandomBoolean():Boolean {
    if((0..100).random()<51){return false}else{return true}
}

fun validate(args: Array<String?>): Int? {
    return args[0]?.toIntOrNull()
}

fun createList(size: Int): MutableList<Person>{
    return MutableList(size) {Person()}
}

fun output(listPerson: MutableList<Person>){
    for(a in 0..listPerson.count()-1){println(listPerson[a].computer?.display?.usbc?.speed?: "could not fetch the speed")}
}

class Person {
    val computer : Computer? = if (generateRandomBoolean()) Computer() else null
}


class Computer { 
    val display : Display? = if (generateRandomBoolean()) Display() else null
}

class Display {
    val usbc : UsbC? = if (generateRandomBoolean()) UsbC() else null
}

class UsbC {
    val speed : Int? = if((0..10).random()<6){40}else{20} // or 40 by random
}

/*fun main() {
    val jack = Person()

    println(jack.computer?.display?.usbc?.speed) // save call


    if (jack.computer != null){    // if
        if (jack.computer.display != null){
            if (jack.computer.display.usbc != null){
                println(jack.computer.display.usbc.speed)
            }
        }
    }

    println(jack.computer?.display?.usbc?.speed ?: "could not fetch the speed")

    println(jack.computer!!.display!!.usbc!!.speed) // crash the app if null
}
*/

fun main(args: Array<String?>) {
    val numberOfPersons : Int? = validate(args)
    
    if(numberOfPersons != null) {
        val listOfPersons : MutableList<Person> = createList(numberOfPersons)
        output(listOfPersons)
    } else {
        println("please give integer > 0")
    }
}


