$( document ).ready(function() {
    var rpg = {
        isCharSelet: true,
        notAttacking: true,
        numOfAttacks: 0,
        defeated: 0,
        player: "",
        defender: "",
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
            card.addClass("card ccard " + character);
            card.attr("value", character);
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
        },
        charSeletor: function(n){
            rpg.player = n
            var names = ["luke", "yoda", "sidious", "vader"]
            for(var i = 0;i<4;i++){
                if (n!==names[i]){
                    rpg.deleteCard(names[i])  
                    rpg.makeCard(names[i], 'enemySelector')
                }
            }
            rpg.isCharSelet=false
            
        },
        enemySelector: function(enemy){
            if(rpg[enemy]['health'] !== 0){
            rpg.defender = enemy
            rpg.deleteCard(enemy)
            rpg.makeCard(enemy, 'enemy')
            rpg.notAttacking = false
        }
        },
        attacking: function(def, att){
            rpg[def]['health'] = rpg[def]['health'] - rpg[att]['attack']
            rpg[att]['attack'] = rpg[att]['attack'] * 2
            rpg[att]['health'] = rpg[att]['health'] - rpg[def]['counterAttack']
            rpg.deleteCard(def)
            rpg.makeCard(def, 'enemy')
            rpg.deleteCard(att)
            rpg.makeCard(att, 'player')
            if (rpg[def]['health'] <= 0){
                rpg[def]['health'] = 0
                rpg.deleteCard(def)
                rpg.makeCard(def, 'enemySelector')
                rpg.defeated++
                rpg.notAttacking = true
                rpg.winLose()
            }
            if (rpg[att]['health'] <= 0){
                rpg[att]['health'] = 0
                rpg.deleteCard(att)
                rpg.makeCard(att, 'enemySelector')
                rpg.winLose()
            }
        },
        reset: function(){
            var names = ["luke", "yoda", "sidious", "vader"]
            rpg[rpg.player]['attack'] = rpg[rpg.player]['attack']/(Math.pow(2, rpg.numOfAttacks))
            console.log(rpg[rpg.player]['attack'])
            rpg.player = ""
            rpg.defender = ""
            rpg.numOfAttacks = 0
            rpg.defeated = 0
            rpg.isCharSelet = true
            rpg.notAttacking = true
            for(var i = 0;i<4;i++){
                rpg[names[i]]['health']=rpg[names[i]]['totalHealth']
                rpg.deleteCard(names[i])  
                rpg.makeCard(names[i], 'player')
            }
        },
        winLose: function(){
            if(rpg[rpg.player]['health'] <= 0){
                alert("You Lose!")
                rpg.reset()
            }
            else if((rpg[rpg.defender]['health'] <= 0)&&(rpg.defeated===3)){
                alert("You Win!")
                rpg.reset()
            }
        }
    }
    rpg.makeCard('luke', 'player')
    rpg.makeCard('yoda', 'player')
    rpg.makeCard('vader', 'player')
    rpg.makeCard('sidious', 'player')

    $('.container').on("click",".ccard", function(){
        if(rpg.isCharSelet){
            var val = $(this).attr('value')
            rpg.charSeletor(val)
            console.log(val)
        }
        else if(rpg.notAttacking){
            var val = $(this).attr('value')
            rpg.enemySelector(val)
            console.log(val)
        }
        console.log("ran")
    })
    $('.container').on("click","button", function(){
        if(!rpg.notAttacking){
            rpg.numOfAttacks++
            console.log(rpg.numOfAttacks)
            rpg.attacking(rpg.defender, rpg.player)
        }
    })

});

