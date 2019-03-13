module.exports = function check(str, bracketsConfig) {

  var stack = [];

  for(let i = 0;i < str.length;i++)
  {
    let headStackValue = stack[stack.length-1];
    
    if(twoBrackets(headStackValue,str[i],bracketsConfig))
      stack.pop();
    else
    {
      if(isOpenBreckets(str[i],bracketsConfig) )
        stack.push(str[i]);
      else
        return false;       
    }
    
  }


  if(stack.length == 0)
    return true;
  else
    return false
}

const openBracketI = 0;
const closeBracketI = 1;

function isOpenBreckets( bracket , bracketsConfig){
  for(let i=0;i< bracketsConfig.length;i++)
  {
    if(bracket == bracketsConfig[i][openBracketI])
      return true;
  }
  return false;
}


function twoBrackets( openBracket , closeBracket, bracketsConfig){
  for(let i=0;i< bracketsConfig.length;i++)
  {
    if(openBracket == bracketsConfig[i][openBracketI])
      if(closeBracket == bracketsConfig[i][closeBracketI])
        return true;
      else
        return false;
  }
  return false;
}