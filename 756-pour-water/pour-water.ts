function pourWater(heights: number[], volume: number, k: number): number[] 
{
  // as we are trying to manipulate the heights array I prefer to use a separate result array.
  let result : number[] = heights;
  let currentVolume : number = volume;

  //Immediate left of the starting index, this will remain constant
  let immediateLeft : number = k-1;
  // Immediate right of the starting index, this too will remain constant
  let immediateRight : number = k+1;

  while(currentVolume > 0)
  {
      // checking for eventual fall left
      let finalRestingIndex = k;

      let currentLeft = immediateLeft;
      //  We will continue to move left until we encounter the left most edge and as long as we moving at the same level of a level below.
      while(currentLeft >= 0 && result[currentLeft] <= result[finalRestingIndex])
      {
         if(result[currentLeft] < result[finalRestingIndex])
         {
            finalRestingIndex = currentLeft;
         }             
         currentLeft--;
      }
     

      if(finalRestingIndex === k)
      {
          let currentRight = immediateRight;
          while(currentRight < heights.length && result[currentRight] <= result[finalRestingIndex])
          {
            if(result[currentRight] < result[finalRestingIndex])
            {
              finalRestingIndex = currentRight;
            }         
          currentRight++;       
          }
      }
      result[finalRestingIndex]++;

      currentVolume--;
  }

  return result;
};