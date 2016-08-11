app.service('beerService', function(){
    var beers = [];

    var Beer = function(name, style, abv, image){
        this.name = name;
        this.style = style;
        this.abv = abv;
        this.image = image;
        this.ratings = [];
        this.average = 0;
    };

    var addBeer = function(newBeer) {
        var newBeer = new Beer(newBeer.name, newBeer.style, newBeer.abv, newBeer.image, newBeer.rating);
        // console.log(newBeer);
        beers.push(newBeer);
    };

    var removeBeer = function(index){
        beers.splice(index,1);
    };

    var addRating = function(rating, index){
        console.log(rating, index);
        beers[index].ratings.push(rating);


        averageRating(index);
    };

    var averageRating = function(index){
        var total = 0;
        var beerRatings = beers[index].ratings;
        for(var i = 0; i < beerRatings.length; i++) {
            total += beerRatings[i];
        }

        var averageRating = total / beerRatings.length;
        beers[index].average = averageRating;
    };

    return{beers: beers, addBeer: addBeer, removeBeer: removeBeer, addRating: addRating}
});

