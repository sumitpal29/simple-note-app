class Dep {
  constructor() {
    this.subscribers = [];
  }

  depend() {
    if (target && !this.subscribers.includes(target)) {
      this.subscribers.push(target);
    }
  }

  notify() {
    this.subscribers.forEach(sub => sub());
  }
}

const data = {
  sellingPrice: 12,
  actualPrice: 6,
  quantity: 250
};

let profit, totalProfit, invested;

Object.keys(data).forEach(key => {
  let internalVal = data[key];
  const dep = new Dep();

  Object.defineProperty(data, key, {
    get() {
      dep.depend();
      return internalVal;
    },
    set(newVal) {
      internalVal = newVal;
      dep.notify();
    }
  });
});

const watch = function(fn) {
  target = fn;
  target();
  target = null;
};

console.log(data);

watch(() => {
  profit = data.sellingPrice - data.actualPrice;
  console.log("profit", profit);
});

watch(() => {
  totalProfit = (data.sellingPrice - data.actualPrice) * data.quantity;
  console.log("totalProfit", totalProfit);
});

watch(() => {
  invested = data.sellingPrice * data.quantity;
  console.log("invested", invested);
});

setTimeout(() => {
  data.actualPrice = 8;
  console.log(data.actualPrice);
  setTimeout(() => {
    data.quantity = 228;
  });
}, 3000);
