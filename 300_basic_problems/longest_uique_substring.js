document.getElementById("name").innerHTML = "Longest substring without repeating characters"
document.getElementById("problem").innerHTML = "Given a string s, find the length of the longest substring without repeating characters."

function myFunction() {
    let string = prompt("Enter a string: ", "abcdabcbbdcb")
    if (string === null) {
        alert("You have not enter any thing!")
    }
    let your_input = "Your input: " + string

    var lengthOfLongestSubstring = function (string) {
        result = 0
        start = 0
        end = 1
        while (end < string.length) {
            strCheck = string.slice(start, end)
            if (strCheck.indexOf(string[end]) === -1 && string[end] !== undefined) {
                end++
                result = Math.max(result, end - start)

            } else {
                result = Math.max(result, end - start)
                start = start + strCheck.indexOf(string[end]) + 1
            }
        }
        return result.toString()
    };
    document.getElementById("input").innerHTML = your_input
    document.getElementById("demo").innerHTML = "Out put: " + lengthOfLongestSubstring(string)

}


