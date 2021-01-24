fun sum(a: Int, b: Int, prntMsg: (msg: String) -> Unit){
    prntMsg("Result was ${a + b}")
}

fun isPositive(c: Int, success: (msg:String) -> Unit, error: (msg: String) -> Unit){
    if(c > 0) {
        success ("It was a positive")
    }
    else{
        error("error")
    }
}

fun main() {
    sum(4,5, {msg -> println(msg)})

    isPositive(1, {msg -> println(msg)}){ msg -> println(msg) }
}

fun main(arguments: Array<String>){
    println(arguments.filter{it.length < 5}.map{it.toUpperCase()})
}
