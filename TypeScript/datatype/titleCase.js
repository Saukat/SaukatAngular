function titleCase(string) {
    var sentence = string.toLowerCase().split(" "); //[ 'tutorix', 'is', 'one', 'of', 'best', 'e-platforms' ]
    console.log(sentence);
    console.log(sentence.length);
    for (var i = 0; i < sentence.length; i++) {
        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
        console.log(sentence[i]);
    }
    console.log(sentence.join(" "));
    return sentence;
}
titleCase("tutorix is one of best e-platforms");
