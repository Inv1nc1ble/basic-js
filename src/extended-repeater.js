

export default function repeater( str, {repeatTimes = 1, separator = '+', addition='', additionRepeatTimes=1, additionSeparator='|'} ) {
  let result = '';

  for (let i = 0; i < repeatTimes; i++) {
    result += str;  //добавляем базу

    for (let i = 0; i < additionRepeatTimes; i++) {    
      result += addition;   //adding separator
      
  
      if ((i + 1) < additionRepeatTimes) {
        result +=additionSeparator;
      }
      
    }


    if ((i + 1) < repeatTimes) {
      result += separator;
    }
  }


  return result;
}