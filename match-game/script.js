document.addEventListener("DOMContentLoaded", () => {
    const pairs = [
        {
            word: "Neurons",
            match: "excitable cells that respond to stimuli by conducting impulses to transmit signals"
        },
        {
            word: "Neroglia",
            match: "supportive cells that provide nutrition, insulation, and help with signal transmission"
        },
        { word: "Soma", match: "the life support containing the nucleus and most organelles" },
        { word: "Dendrites", match: "the main receptor of signals" },
        { word: "Axon", match: "generates and transmits nerve impulses" },
        {
            word: "Mylein Sheath",
            match: "covers long axons to protect and electrically insulate them to increase the speed of nerve impulse transmission"
        },
        {
            word: "Nodes of Ranvier",
            match: "unmyelinated gaps in the myelin sheath that aid in increasing the velocity of nerve signal conduction"
        },
        { word: "Sensory Neurons", match: "transmit info from sensory receptors to CNS" },
        { word: "Cerebrospinal Fluid", match: "central nervous system, brain, and spinal cord" },
        { word: "Motor Neurons", match: "transport info from CNS to rest of the body" }
    ];

    let cards = document.getElementsByClassName("item");

    // Fisher-Yates (or Knuth) Shuffle algorithm
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            // Generate a random index from 0 to i
            const j = Math.floor(Math.random() * (i + 1));
            // Swap elements at indices i and j
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function shuffleAssign() {
        //shuffle list of pairs
        let shuffledPairs = shuffleArray(pairs);
        console.log(shuffledPairs);
        //create a new array for selected pairs of this round
        let cardPairs = [];
        //add the first cards.length/2 pairs w/ word and match to new array
        for (let i = 0; i < cards.length / 2; i++) {
            cardPairs.push(shuffledPairs[i].word);
            cardPairs.push(shuffledPairs[i].match);
        }
        console.log(cardPairs);
        //shuffle that array
        cardPairs = shuffleArray(cardPairs);
        //iterate over array to assign cards
    }
    shuffleAssign();
});
