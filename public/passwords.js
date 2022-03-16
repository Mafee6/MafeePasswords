/*
  Mafee Passwords Gist
  Credit: Mafee7
  https://github.com/mafee6
*/

const password = (length) => {
    var o = "";
    for(let i = 0; i < length; i++) {
    let r = Math.floor(Math.random() * 3);
      if(r == 0){
        o += Math.floor(Math.random() * 10);
      } else if(r == 1){
        var l = "abcdefghijklmnopqrstuvwxyz".split("")[Math.floor(Math.random() * 25)]
        if(Math.floor(Math.random() * 2) == 0){
          o += l.toLowerCase();
        } else {
          o += l.toUpperCase();
        }
      } else {
        if(r == 2){
          o +=  "!@#$%^&*()_+/*><.,?".split("")[Math.floor(Math.random() * "!@#$%^&*()_+/*><.,?".length)]
        }
      }
  
    }
  
    return o;
  };