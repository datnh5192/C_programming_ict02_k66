document.getElementById("name").innerHTML = "Add two numbers";
document.getElementById("problem").innerHTML = "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.";

function myFunction() {
    let list1 = prompt("Enter the first list: ", "2,4,3,1").split(",");
    let list2 = prompt("Enter the second list: ", "5,6,4").split(",");
    if (list1 === undefined || list2 === undefined) {
        alert("you have not enter enough yet!")
    }
    let your_input = "list1= [" + list1.toString() + "], list2= [" + list2.toString() + "]"
    // --------------------------------------------------------------------------------------------------
    var addTwoNumbers = function (l1, l2) {
        while (l1.length < l2.length) {
            l1.push("0")
        }
        while (l1.length > l2.length) {
            l2.push("0")
        }
        let result = [], num = 0
        for (let i = 0; i < l1.length; i++) {
            result[i] = (parseInt(l1[i]) + parseInt(l2[i]) + num) % 10
            num = Math.floor((parseInt(l1[i]) + parseInt(l2[i]) + num) / 10)
        }
        if (num === 1) {
            result.push(1)
        }
        return result
    }

    var reverse_toNum = function (s) {
        let newStr = ""
        for (let i = s.length - 1; i >= 0; i--) {
            newStr += s[i]
        }
        return newStr
    }
    // --------------------------------------------------------------------------------------------------

    let explain = "Because " + reverse_toNum(list1) + "+" + reverse_toNum(list2) + "=" + reverse_toNum(addTwoNumbers(list1, list2));
    let arr = addTwoNumbers(list1, list2)
    document.getElementById("input").innerHTML = your_input;
    document.getElementById("demo").innerHTML = "Out put: " + "[" + arr.toString() + "]";
    document.getElementById("explain").innerHTML = "Explanation: " + explain;

}