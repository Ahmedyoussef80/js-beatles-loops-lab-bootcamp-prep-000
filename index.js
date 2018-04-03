function theBeatlesPlay(musicians, instruments) {
  var array = [];
  var string;
  for (let i=0; i < musicians.length; i++) {
    new_string = musicians[i] + " plays " + instruments[i];
    new_array.push(new_string);
  }
  return new_array;
}