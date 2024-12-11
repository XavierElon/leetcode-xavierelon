/**
 * @param {number[][]} events
 * @param {number} k
 * @return {number}
 */
var maxValue = function(A, K) {
    A.sort((a,b)=>a[0]===b[0]?a[1]-b[1]:a[0]-b[0])
    A=A.map(([s,e,val],i)=>[s,e,val,i])
    let n=A.length,
		dp=[...Array(K+1)].map(d=>[...Array(n+1)].map(d=>0)),
		Z=[...A].sort((a,b)=>a[1]-b[1])
    for(let k=1;k<=K;k++ ){
        let indexOfZ=0,optimalPrevious=0
        for(let i=1;i<=n;i++){
            let [start,end,val,idx]=A[i-1]
            while(indexOfZ<n&& Z[indexOfZ][1]<start ){
                let originalIdx=Z[indexOfZ][3] //take the original index it used to have
                if(dp[k-1][originalIdx+1]>optimalPrevious)
                    optimalPrevious=dp[k-1][originalIdx+1]
                indexOfZ++
            }
            dp[k][i]=Math.max(val+optimalPrevious,dp[k][i]) //main dp computation
        }
    }
    return Math.max(...dp[K])
};