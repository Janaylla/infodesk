
export const maskMoney = (e) => {
      let s = "";
      let cp = "";
      s = e.replace(/[^0-9]/g,'');

      for (let i = 0; i < s.length; i++) {
          if (s.substring(0, 1) == "0"){
                  s = s.substring(1);
          }
          else{
              break;
          }
      }
      if (s.length > 2) {
          cp = s.substring(0, s.length - 2) + ',' + s.substring(s.length - 2)
     
      }else if(s.length > 1){
          cp = '00,' + s
      } 
      else {
          cp = '00,0' + s
     }
      return cp
  }
