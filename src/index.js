module.exports = function check(str, bracketsConfig) {
        let result = true
        let tempArr = []
        let counter = 0

        if(str.length % 2 === 1){
            return false
        }
      
        for(let i = 0; i < str.length; i++) {
          for(let k =0; k < bracketsConfig.length; k++) {
            if(str[i] === bracketsConfig[k][0]) {
              if(str[i] === bracketsConfig[k][0] && str[i + 1] === bracketsConfig[k][0] && bracketsConfig[k][0] === bracketsConfig[k][1]) {
                i++
                break
              } else {
                if(tempArr.includes(str[i]) && bracketsConfig[k][0] === bracketsConfig[k][1]){
                    counter--
                    tempArr.pop()
                    if( tempArr.length === 1 ) {
                        return false
                    }
                  } else {
                    tempArr.push(bracketsConfig[k][1])
                    counter++
                  }
              }
            } else {
              if(str[i] === bracketsConfig[k][1]) {
                if(str[i] === tempArr[counter -1]){
                  counter--
                  tempArr.pop()
                } else {
                  return false
                }
              }
              
            }
          }
        }
      
    return result
   
}
