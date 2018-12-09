$(document).ready(function(){
    var template = $("#template").html();
    Mustache.parse(template);

    var rendered = Mustache.render(template, {
        food1: {
            category: "Appetizers"
        },
        app: [
            {
                name1: "Guacamole + Chips 10",
                description1: "Smashed avacado, ico de gallo, fresh lime, cilantro",
                name2: "Hot Wings 13",
                description2: "Some like em hot while others are wimps.  Choose your heat!",
                name3: "Swedish Chanterelle Muchroom Pate 16",
                description3: "Golden chanterelle mushroom and ground pork.  Tastes like is sounds."            
            },
            {
                name1: "Bacon Wrapped Dates Stuffed with Blue Cheese 14",
                description1: "Dates stuffed with blue cheese, wrapped in bacon.  Baked to a fine crisp.",
                name2: "Crab and Lobster Stuffed Mushrooms 14",
                description2: "One of our favorites.",
                name3: "Blue Cheese Walnut Toasts 11",
                description3: "Are great appetizers or with salad."
            }
        ],
        food2: {
            category: "Soups + Salads"
        },
        soup: [
            {
                name1: "Caesar Salad 9",
                description1: "Fresh romaine, croutons,parmesan, creamy caesar dressing.",
                name2: "Field of Dreams Salad 9",
                description2: "Fresh from the field with champagne shallot vinaigrette.",
                name3: "Classic Cobb Salad 12",
                description3: "Diced grilled chicken, tomatores,bacon,avocado,hard-boiled eggs, blue cheese crumbles, green onions and coutons on a bed of crips romaine and iceberg with Bleu Cheese dressing."
            },
            {
                name1: "Dewey and Finn's packed potato soup 5",
                description1: "Home made with a creamy blend of cheese, bacon, potatoes and one secret spice.",
                name2: "Split Pea Soup with Ham 6",
                description2: "Go on.  You have been craving this.",
                name3: "Soup of the Day 5",
                description3: "It doesn't have to be cold outside to enjoy a bowl of soup"
            }
        ], 
        food3: {
            category: "Steaks and Ribs"
        },
        steak: [
            {
                name1: "Filet Mignon 31",
                description1: "Our most tender and juicy steak. Center cut fresh filet mignon topped with garlic butter",
                name2: "16 oz Ribeye 27",
                description2: "Blackened with or without Peppercorn Sauce.",
                name3: "12 oz Sirloin 22",
                description3: "Grilled to order and seasoned to perfection."            
            },
            {
                name1: "Baby Back Ribs 19",
                description1: "Hand-rubbed with herbs and spices. Slow roasted to perfection. So tender they fall off the bone.",
                name2: "Slow Roasted Prime Rib",
                description2: "Did we say slow roasted.  Yes.  Hand carved to order.",
                name3: "New York Strip 19",
                description3: "It doesn't have to be cold outside to enjoy a bowl of soup."
            }
        ],
        food4: {
            category: "Chicken + Fish"
        },        
        chicken: [
            {
                name1: "Parmesan crusted Chicken 15",
                description1: "Fresh grilled chicken topped with Parmesan and garlic cheese.",
                name2: "Grilled Chicken 11",
                description2: "Fresh off the grill and seasoned to perfection.",
                name3: "Southern Fried Chicken 12",
                description3: "Get you some of this."            
            },
            {
                name1: "Finn's Awesome Salmon 19",
                description1: "Fresh Atlantic salmon cooked to order.  Finn's favorite.",
                name2: "Grilled Shrimp 18",
                description2: "Grilled Jumbo shrimp served over rice and garlic butter.",
                name3: "Dewey's Fresh Fish Basket. 14",
                description3: "Deep fried to perfection and served with slaw and fries."
            }
        ],                         
    })
    $("#targetfood").html(rendered);
});