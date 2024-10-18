// // print the armstrong number in arrow function
let arm = (num) => {
    check = num
    final = num
    sum = 0
    pow = 0
    while (num != 0) {
        num % 10
        // 5 5 1
        num = Math.floor(num / 10)
        // 15 1 0
        pow++
    }
    while (check != 0) {
        store = check % 10
        sum = sum + (store ** pow)
        check = Math.floor(check / 10)
    }
    // console.log(sum)
    if (sum === final) {
        console.log("armstrong number " + final + " : " + sum)
    }
    else {
        console.log("not armstrong number " + final + " : " + sum)
    }

}
// arm(1234)
arm(1634)
arm(153)
// write the LCM in a named function
function fun(a, b) {
    let min = a > b ? b : a
    let max = a > b ? a : b
    console.log(min, max)

    if (max % min == 0) {
        console.log(max, "is the lcm")
    }
    else {
        check = max
        while (true) {
            check++ //50 51 .....149 150
            if (check % min == 0 && check % max == 0) {
                console.log(check, "is the LCM")
                break;
            }
        }
    }
}
fun(3, 15)
fun(50, 15)
fun(110, 50)
fun(24, 32)
// find the length of the number in a function
// let num1 = 123456
function fun(num) {
    length = 0
    while (num!= 0) {
        num % 10
        num = Math.floor(num / 10)
        length++
    }
    console.log("Number length is : ", length)
}
fun(219649146)
fun(6305755426)
fun(2024)
// take a number,check for prime number .if prime number exist then print true or false
let num = +prompt("Enter number")
let str = ""
while (num != 0) {
    last = num % 10
    //  check prime or not
    flag = 0
    for (i = 2; i < last; i++) {
        if (last % i == 0) {
            flag++

        }
    }
    if (flag == 0) {
        str += i
        break

    }
    num = Math.floor(num / 10)

}
if (str.length > 0) {
    console.log("prime")
}
else {
    console.log("not prime")

}



