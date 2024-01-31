// ==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the website. 
//Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.

function problem3(inventory){
    const carmodels =[];
    for(let i=0;i<inventory.length;i++){
        carmodels.push(inventory[i].car_model);
    }
    for(let i =0;i<inventory.length-1;i++){
        for(let j=0;j<carmodels.length-1-i;j++){
            if(carmodels[j] > carmodels [j+1])
            {
                const temp=carmodels[j];
                carmodels[j]=carmodels[j+1];
                carmodels[j+1] =temp;
            } 
        }
    }
    console.log(carmodels);
}
module.exports=problem3;