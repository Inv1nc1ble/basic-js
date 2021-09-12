
export default class DepthCalculator {

  

  calculateDepth = ( arr ) => {
    if (!arr.find(i => {
      return Array.isArray(i)
    })) {
      return 1;
    }

    let maxValues = [];
    
    arr.forEach(element => {

      if(Array.isArray(element)) {
        maxValues.push(this.calculateDepth(element))
      }

    })
    

    return Math.max(...maxValues) + 1
  }
}