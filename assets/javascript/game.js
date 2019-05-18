$( document ).ready(function() {
    var rpg = {
        luke: {
            name: "Luke Skywalker",
            image: "",
            health: 100,
            attack: 10,
            counterAttack: 5
        },
        yoda: {
            name: "Yoda",
            image: "",
            health: 120,
            attack: 12,
            counterAttack: 6
        },
        sidious: {
            name: "Darth Sidious",
            image: "",
            health: 80,
            attack: 8,
            counterAttack: 4
        },
        vader: {
            name: "Darth Vader",
            image: "",
            health: 140,
            attack: 14,
            counterAttack: 7
        },
        makeCard: function(charactor) {
            var card = $("<div>");
            card.addClass("card")

            var cardTitle = $("<div>");

            var title = $("<h4>");

            var cardBody = $("<div>");

            var pic = $("<img>");

            var hp = $("<h6>");
        }
    }
});



















