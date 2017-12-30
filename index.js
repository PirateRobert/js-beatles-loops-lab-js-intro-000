function theBeatlesPlay(arrayM,arrayI){
  var newarray = {}
  for (let i = 0;i<arrayM.length; i++){
    var musician = arrayM.slice(i,i+1)
    var instrument = arrayI.slice(i,i+1)
    newarray.push(`${musician} plays ${instrument}`)
  }
  return newarray
}

function johnLennonFacts(array){

}
