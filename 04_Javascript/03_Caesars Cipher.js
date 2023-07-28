function rot13(str) {
    //A_Z 65-90
    let a = str.replace(/\B\W+(?=\W*$)|\W+\s\b/g, '').split(" ");
    let b = a.map(item => item.toUpperCase());
    console.log("a: " + a);
    console.log("b: " + b);
    let c = b.map(item => {
      let d = item.split("");
      console.log("d: " + d);
      let e = d.map(letter => {
        let f = letter.charCodeAt(0);
        if (!(f <= 90 && f >= 65)) {
          return String.fromCharCode(f);
        } else {
          let g = f + 13;
          if (g <= 90 && g >= 65) {
            return String.fromCharCode(g);
          } else {
            let h = g - 91;
            let i = h + 65;
            return String.fromCharCode(i);
          }
        }
      });
  
      console.log("e: " + e.join(""));
      return e.join("");
    });
    console.log(c.join(" "));
  
    return c.join(" ");
  }
  
  rot13("SERR YBIR?");