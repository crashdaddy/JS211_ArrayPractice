
   

    var cars = ['Ford','Chrysler', 'Honda','Audi'];

    console.log(cars.length)

    
    var moreCars = ['Mercedez','Chevrolet','Tesla','Honda'];

    var totalCars = cars.concat(moreCars);

    console.log(totalCars);

    console.log('Index OF Honda: ' + totalCars.indexOf('Honda'));

    console.log('Last Index OF Ford: ' + totalCars.lastIndexOf('Ford'));

    var stringOfCars = totalCars.join();
    console.log(stringOfCars);

    totalCars = stringOfCars.split(",");
    console.log('totalCars: ' + totalCars);

    var carsInReverse = totalCars.reverse();
    console.log(carsInReverse);

    console.log(carsInReverse.sort());
    
    var removedCars = carsInReverse.slice(3,5);
    console.log('Removed Cars: '+ removedCars);

    carsInReverse.push(removedCars);
    console.log(carsInReverse);

    console.log("Pop: " + carsInReverse.pop());

    console.log("shift: " +carsInReverse.shift());

    carsInReverse.unshift("Clunker");
    console.log(carsInReverse);

    
    const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34];

    numbers.forEach(function(value){
        console.log(value+=2);
    });







    


