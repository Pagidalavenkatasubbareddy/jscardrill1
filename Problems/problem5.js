//==== Problem #5 ====
// The car lot manager needs to find out how many cars are older than the year 2000. 
//Using the array you just obtained from the previous problem, find out how many cars were made before the year 2000 and return the array of older cars and log its length.


function problem5(inventory,carYear){
  const oldcar = [];
  for(let i = 0; i < carYear.length; i++)
  {
    if(carYear[i] < 2000)
    {
        let allcar = carYear[i];
        oldcar.push(allcar)
    }
  }
  return oldcar;
}

module.exports=problem5;


