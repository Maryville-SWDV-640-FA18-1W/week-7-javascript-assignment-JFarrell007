$(document).ready(function(){
    var template = $("#template").html();
    Mustache.parse(template);

    var rendered = Mustache.render(template, {
        drink1: {
            category: "White Wine"
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
                name: "Dewey and Finn's 2018 Canine White Classic",
                location: "Georgia",
                price: "10"
            }
        ],
        drink2: {
            category: "Red Wine"
        },
        red: [
            {
                name: "Vetana 2013 Pinot Noir",
                location: "California, Monterey County, Arroyo Seco",
                price: "12"
            },
            {
                name: "Frei Brothers Reserve 2016 Merlot",
                location: "California, Dry Creek Valley",
                price: "13"
            },
            {
                name: "Rascal 2017 Pinot Noir",
                location: "Willamette Vally, Oregon",
                price: "8"
            },
            {
                name: "Luna Nuda 2016 Red Blend",
                location: "Italy, Alto Adige",
                price: "10"
            },
            {
                name: "Amuse Bouche 2012 Red Bordeax Blend",
                location: "California, Napa Valley",
                price: "53"
            },
            {
                name: "Dewey and Finn's 2018 Canine Red Classic",
                location: "Georgia",
                price: "11"
            }
        ],  
        drink3: {
            category: "Beer on tap"
        },
        beer: [
            {
                name: "Blue Moon 5.4%",
                location: "Golden, CO",
                price: "6"
            },
            {
                name: "Monday Night Fu Man Brew 5.2%",
                location: "Atlanta, GA",
                price: "7"
            },
            {
                name: "BELL'S Amber 5.8%",
                location: "Kalamazoo, MI",
                price: "8"
            },
            {
                name: "Spaten Oktoberfest 5.9%",
                location: "Germany",
                price: "8"
            },
            {
                name: "Kentucky Bourbon Barrel 8.2%",
                location: "Lexington, KY",
                price: "8"
            },
            {
                name: "Dewey and Finn's Big Dog Ale",
                location: "Georgia",
                price: "7"
            }
        ],              
    })
    $("#target").html(rendered);
});