const story = {
    begin: {
        text: "Do you wanna play game Interdimensional adventure?",
        choices: ["start"],
        consequence: ["start"],
		image: "Interdimensional.jpg"
    },
	
	start: {
        text: "You are character named KRISH. You are on an Interdimensional adventure.",
        choices: ["Blue Portal", "Red Portal"],
        consequence: ["bluePortal", "redPortal"],
		image: "portal.jpg"
    },

    bluePortal: {
        text: "You enter the underwater world. What do you explore?",
        choices: ["Creatures", "Caves", "Dark Side"],
        consequence: ["underwaterCreatures", "underwaterCaves", "underwaterDarkSide"],
        image: "underwater.jpg"
    },

    underwaterCreatures: {
        text: "You encounter strange underwater creatures. What will you do?",
        choices: ["Fight", "Scare"],
        consequence: ["fightCreatures", "scareCreatures"],
        image: "underwater_creatures.jpg"
    },
    
    scareCreatures: {
        text: "You will die by heart attack",
        image: "scare.jpg"
    },

    fightCreatures: {
        text: "You decide to fight the creatures. It's a tough battle!",
        choices: ["Fight till death", "Fight for only sometime"],
        consequence: ["fightTillDeath", "fightForSometime"],
		image: "fight.jpg"
    },

	fightForSometime: {
        text: "If u fight for sometime u will get harmed by creature and left to die",
        image: "fight_for_sometime.jpg"
    },
	
    fightTillDeath: {
        text: "You fight with all your might until the creatures are defeated. What's your next move?",
        choices: ["Explore more into the underwater world", "Go home with the gold you have"],
        consequence: ["exploreUnderwater", "goHomeWithGold"],
		image: "tillDeath.jpg"
    },
    
    goHomeWithGold: {
        text: "You will be ported back to your place with gold",
        image: "go_home_with_gold.jpg"
    },

    exploreUnderwater: {
        text: "You decide to explore more into the underwater world. What will you do?",
        choices: ["Rescue princess", "Go for treasure hunt"],
        consequence: ["rescuePrincess", "treasureHunt"],
        image: "explore_underwater.jpg"
    },
    

    rescuePrincess: {
        text: "You encounter a guarded princess. What's your approach?",
        choices: ["Rescue princess with your ideas without the guardian knowing", "Fight with the guardian"],
        consequence: ["rescueWithoutKnowing", "fightWithGuardian"],
        image: "rescue_princess_encounter.jpg"
    },

    rescueWithoutKnowing: {
        text: "You successfully rescue the princess without the guardian knowing. Well done!",
        image: "rescue_princess_success.jpg"
    },

    fightWithGuardian: {
        text: "You choose to fight the guardian. It's a challenging battle, but you rescue the princess but you are injured in battle.",
        image: "fight_guardian.jpg"
    },

    treasureHunt: {
        text: "You decide to go for a treasure hunt. What will you do?",
        choices: ["Take half the treasure without fighting the underwater creature", "Fight with the creature for the total treasure"],
        consequence: ["takeHalfTreasure", "fightForTotalTreasure"],
        image: "treasure_hunt.jpg"
    },

    takeHalfTreasure: {
        text: "You take half the treasure without fighting the creature. Unfortunately, you're cursed for not being brave enough.",
        image: "cursed.jpg"
    },

    fightForTotalTreasure: {
        text: "You decide to fight with the creature for the total treasure and you won",
        image: "unexpected_outcome.jpg"
    },

    goHomeWithGold: {
        text: "You decide to go home with the gold you have. The adventure ends here.",
        image: "end.jpg"
    },
	
    underwaterCaves: {
        text: "u will be trapped in the caves and die roaming there only",
        image: "cave.jpg"
    },
	
    underwaterDarkSide: {
        text: "You Entered into Dark Side. What will you do?",
        choices: ["Immortality", "Medicine"],
        consequence: ["getImmortality", "getMedicineplantForEarth"],
        image: "dark_side.jpg"
    },
	
    getImmortality: {
        text: "You can choose Immortality over gold or Gold over Immortality. What will you do?",
        choices: ["Gold", "Meditate"],
        consequence: ["getGold", "getImmortalityFromMeditation"],
        image: "get_immortality.jpg"
    },
	
    getGold: {
        text: "You are back at your place with the gold you choose",
        image: "get_gold.jpg"
    },
	
    getImmortalityFromMeditation: {
        text: "You can choose Immortality over women or women over Immortality. What will you do?",
        choices: ["Women", "Ignore"],
        consequence: ["getWomen", "ignore"],
        image: "meditation_immortality.jpg"
    },
	
    getWomen: {
        text: "You will not get Immortality as you choose women you are a weak soul and you will be ported back to your home",
        image: "weak_soul.jpg"
    },
	
    ignore: {
        text: "You will get Immortality as you didn't choose women you are a strong soul and you will be ported back to your home",
        image: "strong_soul.jpg"
    },
	
    getMedicineplantForEarth: {
        text: "U are appreciated by the god for your kind heart and thought to give u both immortality and medicine plant",
        image: "appreciated.jpg"
    },
	
	redPortal: {
		text: "You will go to your dead mom and will have nice time with your mom as a kid",
		image: "mom.jpg"
	}

};

let currentStage = "begin";

function startGame() {
    currentStage = "begin";
    updatePage();
}

function updatePage() {
    const stage = story[currentStage];
    document.getElementById("story").innerText = stage.text;
    document.getElementById("choices").innerHTML = "";
    document.getElementById("image").innerHTML = "";

    if (stage.background) {
        document.body.style.backgroundImage = `url('${stage.background}')`;
    }

    if (stage.image) {
        const img = document.createElement("img");
        img.src = stage.image;
        document.getElementById("image").appendChild(img);
    }

    if (stage.choices) {
        stage.choices.forEach((choice, index) => {
            const button = document.createElement("button");
            button.innerText = choice;
            button.addEventListener("click", () => makeChoice(index));
            document.getElementById("choices").appendChild(button);
        });
    }
}

function makeChoice(index) {
    const stage = story[currentStage];

    if (stage && stage.choices && stage.choices[index] && stage.consequence[index]) {
        currentStage = stage.consequence[index];
        updatePage();
    } else {
        console.error("Invalid choice index:", index, "for stage:", currentStage);
    }
}

startGame();
