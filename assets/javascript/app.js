// Initialize Variables

/*Trivia Bank */

const questions = {
    rpgs: [{
        question: "When was the first Fallout game released?",
        answers: {
            a: "1989",
            b: "1994",
            c: "1997",
            d: "2001"
        },
        correctAnswer: "c"
    },
    {
        question: "What company created the Elder Scrolls game series?",
        answers: {
            a: "Interplay Studios",
            b: "Obsidian Entertainment",
            c: "BioWare",
            d: "Bethesda Game Studios"
        },
        correctAnswer: "d"
    },
    {
        question: "What is the setting of Pillars of Eternity II?",
        answers: {
            a: "The Deadfire Archipelago",
            b: "The Aedyr Empire",
            c: "Dyrwood",
            d: "Old Valia"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the title held by the protagonist in The Elder Scrolls V: Skyrim?",
        answers: {
            a: "Dragonborn",
            b: "The Champion of Cyrodiil",
            c: "The Nerevarine",
            d: "The Hero of Kvatch"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the name of your player character in Assassin's Creed?",
        answers: {
            a: "Ezio Auditore da Firenze",
            b: "Altaïr Ibn-LaʼAhad",
            c: "Aveline de Grandpré",
            d: "Alexios"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the basic plot summary for Fallout: New Vegas?",
        answers: {
            a: "You happily live in a Vault, until one day your father leaves and throws the Vault into a state of panic. You follow his trail, hoping to find answers about the past.",
            b: "You take refuge in a Vault from the nuclear onslaught outside, but you're cryogenically frozen in a sick experiment run by Vault-Tec. You wake up to find your infant son missing and your spouse dead. You set out on a quest to find them.",
            c: "You leave your Vault to find a replacement water purification chip before your people run out of clean drinking water. Along the way, you uncover a sinister plan to assimilate all human life into a 'grand plan'.",
            d: "You are a courier, on your way to make an important delivery, when you are shot in the head. You're dug up and nursed back to health, and begin your quest for vengeance and answers."
        },
        correctAnswer: "d"
    },
    {
        question: "Who are the two warring factions in The Elder Scrolls V: Skyrim?",
        answers: {
            a: "The Stormcloaks and the Aldmeris Dominion",
            b: "The Empire and the Aldmeris Dominion",
            c: "The Empire and the Stormcloaks",
            d: "The Empire, the Stormcloaks, and the Aldmeris Dominion"
        },
        correctAnswer: "c"
    },
    {
        question: "In 2003, what company accquired the rights to the Fallout franchise?",
        answers: {
            a: "Black Isle Studios",
            b: "Obsidian Entertainment",
            c: "Bethesda Game Studios",
            d: "BioWare"
        },
        correctAnswer: "c"
    },
    {
        question: "What game was developed by BioWare?",
        answers: {
            a: "Pillars of Eternity",
            b: "Assassin's Creed",
            c: "Dragon's Dogma: Darkness Arisen",
            d: "Mass Effect"
        },
        correctAnswer: "d"
    },
    {
        question: "In what year was the last game in the S.T.A.L.K.E.R. trilogy released?",
        answers: {
            a: "2007",
            b: "2009",
            c: "2012",
            d: "2015"
        },
        correctAnswer: "b"
    },
]}