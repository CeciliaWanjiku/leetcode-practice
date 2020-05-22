//165. Compare Version Numbers
var compareVersion = function (version1, version2) {
    let nums1 = version1.split("."), nums2 = version2.split(".")
    let len1 = nums1.length, len2 = nums2.length
    
    let v1, v2
    
    for(let i = 0; i< Math.max(len1, len2); i++){    
       if(i< len1){
          v1 =  parseInt(nums1[i])
       }else {
           v1 = 0
       }
        if(i< len2){
          v2 =  parseInt(nums2[i])
       }else {
           v2 = 0
       }
        
        if(v1 !== v2){
            if(v1 > v2){
                return 1
            }
            return -1
        }
        
    }
    return 0
    
};