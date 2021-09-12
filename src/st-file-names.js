import { NotImplementedError } from '../extensions/index.js';


export default function renameFiles(names) {

    
  let arr = [];

  names.forEach(elem => {

    if (!arr.includes(elem)) {
      arr.push(elem);
    }
    else {
      for (let i = 1; i < Infinity; i++) {
        let v = `${elem}(${i})`;

        if (!arr.includes(v)) {
          arr.push(v);
          break;
        }
      }
    }
  });


    return arr;

}


