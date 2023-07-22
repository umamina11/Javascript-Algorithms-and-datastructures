//Cash Register
/**Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)
See below for an example of a cash-in-drawer array:

[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]
 */

function checkCashRegister(price, cash, cid) {
    //console.table(cid)
    if (price == cash) return null;
    let cidInPennies = cid.map(coin => [coin[0], Math.round(coin[1] * 100)]).reverse();
    //console.table(cidInPennies);
    let totalCid = 0;
    cidInPennies.forEach((curr) => {
        totalCid += curr[1]
    })
    let change = Math.round((cash - price) * 100);

    // If change is exact return CLOSED
    if (totalCid === change) return { status: "CLOSED", change: cid }

    let response = {};

    // coin values in pennies
    const coinValues = {
        "PENNY": 1,
        "NICKEL": 5,
        "DIME": 10,
        "QUARTER": 25,
        "ONE": 100,
        "FIVE": 500,
        "TEN": 1000,
        "TWENTY": 2000,
        "ONE HUNDRED": 10000
    }

    //console.log(cidInPennies)
    let newCid = [];
    let coinValue = 0;

    //calculate how much change to give per coin
    cidInPennies.forEach((coin) => {
        coinValue = coinValues[coin[0]] //denominator value in pennies eg. "HUNDRED" = 10000
        if (change >= coinValue && coin[1] > 0) {
            let changeToGive = 0;
            changeToGive = change >= coin[1] ? coin[1] : Math.floor(change / coinValue) * coinValue;

            change -= changeToGive;
            newCid.push([coin[0], changeToGive / 100])
        }
        console.log(newCid)
    })

    if (change == 0 && totalCid > 0) {
        response.status = "OPEN";
        response.change = newCid;
        console.log(response);
        return response;
    }

    else {
        response.status = "INSUFFICIENT_FUNDS";
        response.change = [];
        console.log(response);
        return response;
    }

}

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])