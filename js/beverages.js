$(document).ready(function(){
    var template = $("#template").html();
    Mustache.parse(template);

    var rendered = Mustache.render(template, {
        drink: {
            category: "Wine"
        },
        white: [
            {
                name: "Vetana 2014 Chardonnay",
                location: "California, Arroyo Seco",
                price: "10"
            },
            {
                name: "Custard 2015 Chardonnay",
                location: "California, Sonoma Valley",
                price: "12"
            },
            {
                name: "Hudson Vineyards 2014 Chardonnay",
                location: "California, Napa Valley, Carneros",
                price: "23"
            },
            {
                name: "Luna Nuda 2016 Pinot Grigio",
                location: "Italy, Trentino-Alto Adige, Alto Adige",
                price: "10"
            },
            {
                name: "Vista Point White Zinfandel",
                location: "California",
                price: "8"
            },
            {
                name: "Dewey and Finn's 2018 Canine Classic",
                location: "Georgia",
                price: "10"
            }
        ],
    })
    $("#target").html(rendered);
});