// https://www.freecodecamp.org/espanol/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register

function checkCashRegister(price, cash, cid) {
  let rest = cash - price;
  let totalCid = cid.reduce((acc, item) => (acc += item[1] * 100), 0) / 100;

  if (rest > totalCid) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (rest == totalCid) {
    return { status: "CLOSED", change: [...cid] };
  } else {
    return change(rest, cid);
  }
}

//console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
//console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))

function change(rest, cid) {
  rest *= 100;
  let acc = [];
  let bills = {
    "ONE HUNDRED": 10000,
    TWENTY: 2000,
    TEN: 1000,
    FIVE: 500,
    ONE: 100,
    QUARTER: 25,
    DIME: 10,
    NICKEL: 5,
    PENNY: 1,
  };

  for (let item of cid.reverse()) {
    //console.log(rest)
    let sub = 0;
    if (rest >= bills[item[0]]) {
      sub = Math.floor(rest / bills[item[0]]) * bills[item[0]];
      if (sub <= item[1] * 100) {
        rest -= sub;
        acc.push([item[0], sub / 100]);
      } else {
        sub = item[1] * 100;
        rest -= sub;
        acc.push([item[0], sub / 100]);
      }

      //console.log(acc)
      //console.log(rest)
    }
  }
  if (rest > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }
  return { status: "OPEN", change: acc };
}

console.log(
  change(96.74, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);
