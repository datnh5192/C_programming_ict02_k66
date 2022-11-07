document.getElementById("name").innerHTML = "Median of two sort arrays"
document.getElementById("problem").innerHTML = "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays."


function myFunction() {
    let nums1 = prompt("Enter the first sort array: ", "1,2,3,7").split(",")
    let nums2 = prompt("Enter the second sort array: ", "5,6,9,11").split(",")
    if (nums1 === null || nums2 === null) {
        alert("You have not enter any thing!")
    }
    let your_input = "Your input: [" + nums1.toString() + "], [" + nums2.toString() + "]"

    var findMedianSortedArrays = function (nums1, nums2) {
        let mergedArray = [];
        let left = 0, right = 0, counter = 0;

        while (nums1.length > left && nums2.length > right) {
            if (parseInt(nums1[left]) > parseInt(nums2[right])) {
                mergedArray.push(nums2[right]);
                right++;
            } else if (parseInt(nums1[left]) <= parseInt(nums2[right])) {
                mergedArray.push(nums1[left]);
                left++;
            }
        }

        for (let i = left; i < nums1.length; i++) {
            mergedArray.push(nums1[i]);
        }
        for (let j = right; j < nums2.length; j++) {
            mergedArray.push(nums2[j]);
        }
        if (mergedArray.length % 2 !== 0) {
            let index = Math.floor(mergedArray.length / 2);
            return mergedArray[index].toFixed(5);
        } else {
            let index = Math.floor((mergedArray.length - 1) / 2);
            return ((parseInt(mergedArray[index]) + parseInt(mergedArray[index + 1])) / 2).toFixed(5);
        }
    };

    console.log(findMedianSortedArrays(nums1, nums2))
    document.getElementById("input").innerHTML = your_input
    document.getElementById("demo").innerHTML = "Out put: " + findMedianSortedArrays(nums1, nums2).toString()

}
