/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function(intervals) {
    let intervalsObj = intervals.map((interval, idx)=>({
        start: interval[0],
        end: interval[1],
        index: idx
    }))

    intervalsObj.sort((a,b)=>a.start-b.start)

    function helper(target){
        let left = 0
        let right = intervalsObj.length-1

        while(left<=right){
            let mid = Math.floor((left+right)/2)
            if(target<=intervalsObj[mid].start){
                right = mid-1
            }else{
                left = mid+1
            }
        }

        return left<intervalsObj.length? intervalsObj[left].index:-1
    }

    let res= []
    for(let interval of intervals){
        res.push(helper(interval[1]))
    }


    return res
};