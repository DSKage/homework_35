$.ajax({
    method: 'GET',
    url: 'https://restcountries.com/v3.1/all',
}).done(function (response) {
    for (let i = 0; i < response.length; i++) {
        let country = response[i];
        $('.table').append($('<div>').addClass('code').text(country.cca2))
        $('.table').append($('<div>').addClass('flag').append($('<img>').addClass('flag__img').attr('src', country.flags.png)))
        $('.table').append($('<div>').addClass('name').text(country.name.common))
        $('.table').append($('<div>').addClass('capital').text(country.capital))
        $('.table').append($('<div>').addClass('population').text(country.population))
        console.log(country);
    };
});
