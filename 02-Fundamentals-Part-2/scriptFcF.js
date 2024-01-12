function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePiece = cutFruitPieces(apples);
    const orangePiece = cutFruitPieces(oranges);

    const juice = `Juice with ${applePiece} piece of apples and ${orangePiece} piece of oranges .`;
    return juice;
}
console.log(fruitProcessor(2,3));