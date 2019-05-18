$( document ).ready(function() {
    var rpg = {
        luke: {
            name: "Luke Skywalker",
            image: "",
            health: 100,
            totalHealth: 100,
            attack: 10,
            counterAttack: 5
        },
        yoda: {
            name: "Yoda",
            image: "",
            health: 120,
            totalHealth: 120,
            attack: 12,
            counterAttack: 6
        },
        sidious: {
            name: "Darth Sidious",
            image: "",
            health: 80,
            totalHealth: 80,
            attack: 8,
            counterAttack: 4
        },
        vader: {
            name: "Darth Vader",
            image: "",
            health: 140,
            totalHealth: 140,
            attack: 14,
            counterAttack: 7
        },
        makeCard: function(character, place) {
            var card = $("<div>");
            card.addClass("card " + character);
            $('#' + place).append(card);

            var cardTitle = $("<div>");
            cardTitle.addClass("card-header ct" + character);
            $('.' + character).append(cardTitle);

            var title = $("<h4>");
            title.addClass("card-title top" + character);
            title.text(rpg[character]['name'])
            $('.ct' + character).append(title);
            console.log(rpg[character]['name'])

            var cardBody = $("<div>");
            cardBody.addClass("card-body cb" + character);
            $('.' + character).append(cardBody);

            var pic = $("<img>");
            pic.addClass("card-img-top img" + character);
            pic.attr("src", "...");
            $('.cb' + character).append(pic);

            var hp = $("<h6>");
            hp.addClass("card-title bottom" + character);
            hp.text(rpg[character]['health'] + " / " + rpg[character]['totalHealth'])
            $('.cb' + character).append(hp);
        },
        deleteCard: function(character){
            $("." + character).remove()
        }
    }
    rpg.makeCard('luke', 'enemy')
    rpg.makeCard('yoda', 'enemySelector')
    rpg.deleteCard('luke')

});



















