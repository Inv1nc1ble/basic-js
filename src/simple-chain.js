

const chainMaker = {


  arr: [],

  getLength() {
    this.arr.length
  },

  addLink( value ) {
    
    this.arr.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (!this.arr[position - 1 ]) {
      this.arr = [];
      throw new Error(`You can't remove incorrect link!`);
    }

    this.arr.splice(position - 1, 1);
    return this;

  },
  reverseChain() {
    this.arr.reverse();
    return this;

  },
  finishChain() {
    let fin = this.arr.join('~~');
    this.arr = [];
    return fin;
  }
};

export default chainMaker;
