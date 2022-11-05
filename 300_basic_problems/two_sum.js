document.getElementById("name").innerHTML = "Two sum";
document.getElementById("problem").innerHTML = "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.";

function myFunction() {
    let numbers = prompt("Please enter numbers", "7,2,5,3,10,11");
    let target = parseInt(prompt("Please enter target:", "9"));
    if (numbers == null || target == null) {
        alert("You have not enter enough!")
    }
    let nums = numbers.split(",");
    let your_input = "Your input: " + "nums=" + "[" + nums.toString() + "]" + "; " + "target = " + target.toString()


    var twoSum = function (nums, target) {
        var result = {}
        for (var i = 0; i < nums.length; i++) {
            let element = parseInt(nums[i]);
            let comPlement = (target - element);

            if (result[comPlement] !== undefined) {
                return [result[comPlement], i]
            } else {
                result[element] = i
            }
        }
        return [];
    };

    let arr = twoSum(nums, target);
    let explain = "Because " + nums[arr[0]].toString() + " + " + nums[arr[1]].toString() + " = " + target.toString()
    document.getElementById("input").innerHTML = your_input;
    document.getElementById("demo").innerHTML = "Out put: " + twoSum(nums, target).toString();
    document.getElementById("explain").innerHTML = "Explanation: " + explain;
};