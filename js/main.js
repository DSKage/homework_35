$.ajax({
    method: 'GET',
    url: 'https://restcountries.com/v3.1/all',
}).done(function (response) {
    for (let i = 0; i < response.length; i++) {
        let country = response[i];
        $('tbody').append($('<tr>').addClass('row-' + i))
        $('.row-' + i).append($('<td>').addClass('code').text(country.cca2))
            .append($('<td>').addClass('flag').append($('<img>').addClass('flag__img').attr('src', country.flags.png)))
            .append($('<td>').addClass('name').text(country.name.common))
            .append($('<td>').addClass('capital').text(country.capital))
            .append($('<td>').addClass('population').text(country.population))
        console.log(country);
    };
    $(document).ready(function () {
        $(".table").tablesorter();
    });
});

