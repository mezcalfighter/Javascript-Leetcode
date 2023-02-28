var isPalindrome = function(s) {
    //Sanitize the input string
    s = s.toLowerCase().replace(/[\W_]/g,"")
    let left = 0
    let right = s.length -1
    while(left<right){
        if(s[left] === s[right]){
            left++
            right--
        }else{
            return false
        }
    }
    return true
};