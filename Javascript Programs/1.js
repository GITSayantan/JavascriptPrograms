let myArray = [
  {'id':1, 'type':'external'},
  {'id':2},
  {'id':3, 'type':'internal'}
 ]


console.log(myArray.filter(item => item.type === 'external'));