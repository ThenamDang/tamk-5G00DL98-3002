fun generateRandomBoolean():Boolean {
    if((0..100).random()<51){return false}else{return true}
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

fun main() {
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

