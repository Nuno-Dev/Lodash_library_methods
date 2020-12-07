const lodash_library_methods = {
  clamp(n, lb, ub) {
    if (n < lb) {
      return lb;
    } else if (n > ub) {
      return ub;
    } else {
      return n;
    }
  },

  inRange(n, start, end) {
    if (!end) {
      end = start;
      start = 0;
    }
    if (start > end) {
      let a = start;
      start = end;
      end = a;
    }
    if (n < start || n >= end) {
      return false;
    } else {
      return true;
    }
  },

  words(str1) {
    return str1.split(' ');
  },

  pad(str1, lgt) {
    if (str1.length > lgt) {
      return str1;
    }
    str1 = str1.split('');
    let num_spaces = lgt - str1.length;
    if (num_spaces % 2 !== 0) {
      str1.push(' ');
      num_spaces--;
    }
    num_spaces /= 2;
    for (let i = 0; i < num_spaces; i++) {
      str1.push(' ');
      str1.unshift(' ');
    }
    return str1.join('');
  },

  has(obj, key) {
    return Object.keys(obj).includes(key);
  },

  invert(obj) {
    let newObj = {};
    let keys = Object.keys(obj);
    for (i in keys) {
      let originalValue = obj[keys[i]];
      newObj[originalValue] = keys[i];
    }
    return newObj;
  },

  findKey(obj, func) {
    let keys = Object.keys(obj);
    for (i in keys) {
      if (func(obj[keys[i]])) {
        return keys[i];
      }
      return undefined;
    }
  },

  drop(arr, n) {
    arr.shift();
    if (n) {
      for (let i = 1; i < n; i++) {
        arr.shift();
      }
    }
    return arr;
  },

  dropWhile(arr, func) {
    for (i in arr) {
      if (!func(arr[i], i, arr)) {
        return arr.slice(i);
      }
    }
  },

  chunk(arr, size) {
    if (!size) {
      size = 1;
    }
    let num = Math.ceil(arr.length / size);
    res = [];
    for (let i = 0; i < num; i++) {
      res.push(arr.slice(i * size, i * size + size));
    }
    return res;
  },
};
