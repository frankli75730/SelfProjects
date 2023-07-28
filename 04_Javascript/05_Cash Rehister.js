function checkCashRegister(price, cash, cid) {

    let total = cid.reduce((acc, item) => acc + item[1], 0);
    let change = cash - price;
    console.log("Total cash is: " + total);
    console.log("Need change: " + change);
    let aaa = cid.slice(0);
    let bbb = [];
    //parseFloat(num.toFixed(2))
    // const aaa = cid.map(([currency, value]) => [
    //   currency,
    //   parseFloat(value.toFixed(2)),
    // ]);
    //float still have accuracy problems during the following calculation
    if (change <= 0) {
      return aaa;
    } else {
  
      do {
        if (total < change) {
          console.log("{status: 'INSUFFICIENT_FUNDS', change: []}");
          //list the unchanged cid
  
          //return ...;
        } else if (total == change) {
          console.log("{status: 'CLOSED', change: [...]}");
          //list the changed cid
  
          //return ...;
        } else {
          console.log("Change now is: " + change);
          switch (true) {
            case change >= 100 && aaa[8][1] > 0:
              console.log("--100");
              change -= 100;
              aaa[8][1] = parseFloat((aaa[8][1] - 100).toFixed(2));
              bbb.push(["ONE HUNDRED", 100]);
            case change >= 20 && aaa[7][1] > 0:
              console.log("--20");
              change -= 20;
              aaa[7][1] = parseFloat((aaa[7][1] - 20).toFixed(2));
              bbb.push(["TWENTY", 20],);
              break;
            case change >= 10 && aaa[6][1] > 0:
              console.log("--10");
              change -= 10;
              aaa[6][1] = parseFloat((aaa[6][1] - 10).toFixed(2));
              bbb.push(["TEN", 10]);
              break;
            case change >= 5 && aaa[5][1] > 0:
              console.log("--5");
              change -= 5;
              aaa[5][1] = parseFloat((aaa[5][1] - 5).toFixed(2));
              bbb.push(["FIVE", 5]);
              break;
            case change >= 1 && aaa[4][1] > 0:
              console.log("--1");
              change -= 1;
              aaa[4][1] = parseFloat((aaa[4][1] - 1).toFixed(2));
              bbb.push(["ONE", 1]);
              break;
            case change >= 0.25 && aaa[3][1] > 0:
              console.log("--0.25");
              change -= 0.25;
              aaa[3][1] = parseFloat((aaa[3][1] - 0.25).toFixed(2));
              bbb.push(["QUARTER", 0.25]);
              break;
            case change >= 0.1 && aaa[2][1] > 0:
              console.log("--0.1");
              change -= 0.1;
              aaa[2][1] = parseFloat((aaa[2][1] - 0.1).toFixed(2));
              bbb.push(["DIME", 0.1]);
              break;
            case change >= 0.05 && aaa[1][1] > 0:
              console.log("--0.05");
              change -= 0.05;
              aaa[1][1] = parseFloat((aaa[1][1] - 0.05).toFixed(2));
              bbb.push(["NICKEL", 0.05]);
              break;
            case change >= 0.01 && aaa[0][1] > 0:
              console.log("--0.01");
              change -= 0.01;
              aaa[0][1] = parseFloat((aaa[0][1] - 0.01).toFixed(2));
              bbb.push(["PENNY", 0.01]);
              break;
            case change > 0 && change < 0.01:
              console.log("----");
              change = 0;
              break;
            // default:
            //   console.log("ilegal");
          }
        }
  
  
      } while (change > 0)
      console.log(aaa);
      console.log(bbb);
  
  
    }
  
  
  }
  
  checkCashRegister(0, 15, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);