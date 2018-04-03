function theBeatlesPlay(musicians, instruments) {
  var array = [];
  var string;
  for (let i=0; i < musicians.length; i++) {
    string = musicians[i] + " plays " + instruments[i];
    array.push(string);
  }
 return array;
}
 
function johnLennonFacts(facts) { 
  let i = 0;
  while (i < facts.length) {
    console.log(facts[i]+="!!!");
    i++;
  }
  return facts;}
  
  function 