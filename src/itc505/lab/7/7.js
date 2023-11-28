function generateMadLib() {
    const noun = document.getElementById('noun').value;
    const verb = document.getElementById('verb').value;
    const adjective = document.getElementById('adjective').value;
    const adverb = document.getElementById('adverb').value;
    const place = document.getElementById('place').value;

    const madLibsOutput = document.getElementById('madLibsOutput');
    const resultDiv = document.getElementById('result');

    const intro = `In a realm untouched by time and filled with ${adjective} ${noun}s, `;
    const middle = `a mysterious power coursed through their veins allowing them to ${verb} ${adverb} `;
    const ending = `amidst the ethereal beauty of ${place}. This rare gift bestowed upon them an unparalleled status among creatures.`;

    const paragraphTwo = `Legends spun tales of these ${adjective} ${noun}s that would ${verb} ${adverb} through ${place} in search of ancient wisdom.`;
    const paragraphThree = `Their adaptability in the face of the most ${adjective} challenges was a testament to their resilience.`;

    const paragraphFour = `With each dawn, the ${noun}s would assemble to ${verb} in a mesmerizing display of unity and grace.`;
    const paragraphFive = `It was rumored that witnessing this spectacle would infuse one's soul with ${adjective} emotions for an eternity.`;

    const paragraphSix = `As celestial lights painted the skies, the ${noun}s would whisper secrets of the cosmos, unveiling mysteries of existence.`;
    const paragraphSeven = `Their ${adjective} presence was a living testament to the beauty that thrived in the heart of ${place}.`;

    const story = intro + middle + ending + '\n\n' + paragraphTwo + '\n\n' + paragraphThree + '\n\n' + paragraphFour + '\n\n' + paragraphFive + '\n\n' + paragraphSix + '\n\n' + paragraphSeven;

    madLibsOutput.textContent = story;
    resultDiv.classList.remove('hidden');
}
