

export default function encodeLine( str ) {

  let prevValue = '';
  let prevCount = 1;
  let res = '';
  
  for (let i = 0; i <= str.length ; i++) {
      
      if (str[i] !== prevValue) {
        

        if (prevCount == 1) {
          res+=prevValue;
        } else {
          res+=`${prevCount}${prevValue}`
        }

        prevValue = str[i];
        prevCount = 1;
      }

      else {
        prevCount++;
      }

  }
  return res;

}
