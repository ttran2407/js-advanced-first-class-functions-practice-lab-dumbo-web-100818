// Code your solution in this file!
 function logDriverNames(drivers){
   for (driver of drivers){
     console.log(driver.name)
   }
 }


function logDriversByHometown(array, value){
  for (driver of array){
    if (driver.hometown === value) {
      console.log(driver.name)
    }
  }
}

function sortNumber(array){
  return array.sort(function(a,b){return a-b})
}

function driversByRevenue(drivers){
  return drivers.slice().sort(function(driver1,driver2){return driver1.revenue - driver2.revenue})
}

function driversByName(drivers){
    return drivers.slice().sort(
      function(driver1, driver2){
        let name1 = driver1.name.toLowerCase()
        let name2 = driver2.name.toLowerCase()
        if (name1 < name2){
          return -1
        }
        if (name1 > name2){
          return 1
        }
          return 0
      }
    )
}
const totalRevenue = function (drivers) {
  return drivers.reduce(function (total, currentDriver) {
    return currentDriver.revenue + total;
  }, 0);
};

const averageRevenue = function (drivers) {
  return totalRevenue(drivers) / drivers.length;
};
