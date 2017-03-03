Array.prototype.all = function (p) {
  if (this.length === 0) {
    return true;
  }
  
  return this.filter(p).length === this.length;

};

Array.prototype.none = function (p) {
  if (this.length === 0) {
    return true;
  }
  
  return this.filter(p).length === 0;
};

Array.prototype.any = function (p) {
  if (this.length === 0) {
    return false;
  }
  
  return this.filter(p).length > 0;
};
