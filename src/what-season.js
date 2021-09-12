
export default function getSeason( date ) {

  if (!date) {return 'Unable to determine the time of year!';}
  // if (isNaN(date)) {throw new Error('Invalid date!');}
  if (Object.prototype.toString.call(date) !== '[object Date]' || typeof date !== 'object' ||
    !(date instanceof Date) || Object.keys(date).length > 0) {
      
    throw new Error('Invalid date!');
  }




  

  let months = ['Jan', 'Feb', 'Mar', 'Apl', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  let res = date.getMonth();
  // console.log(date.getMonth());
  // console.log('s');
  
  if ((res >= 0 && res < 2) || res == 11 ) return 'winter';
  if (res >= 2 && res < 5 ) return 'spring';
  if (res >= 5 && res < 8 ) return 'summer';
  if (res >= 8 && res < 11 ) return 'autumn';
  return res;
}


// console.log(getSeason('foo'));

let d = new Date(1950, 2, 21);
// console.log(Object.prototype.toString.call(d));
// console.log(typeof d);
// console.log(Object.prototype.toString.call(d));
// console.log(d instanceof Date);

// console.log(new Date(1950, 2, 21));

const fakeDate = {
  toString() {
      return Date.prototype.toString.call(new Date());
  },
  [Symbol.toStringTag]: 'Date'
};

Object.setPrototypeOf(fakeDate, Object.getPrototypeOf(new Date()));

// console.log(fakeDate);

// console.log(typeof fakeDate);
// console.log(Object.prototype.toString.call(fakeDate));
// console.log(fakeDate instanceof Date);

// console.log(Object.keys(fakeDate));

// console.log(Object.keys(fakeDate));
// console.log(Object.keys(d));
// console.log(Object.keys(Date));


