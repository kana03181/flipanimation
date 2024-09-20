const cards = document.querySelectorAll(".c-card");
const cardImages = document.querySelectorAll(".c-card__img");
const cardNames = document.querySelectorAll(".c-card__name");
const cardTexts = document.querySelectorAll(".c-card__text");
const buttons = document.querySelectorAll(".c-button");

// FLIPアニメーションを適用する関数
const flip =(el, prev, next) =>{

  el.animate([
    {
      translate:`${prev.x - next.x}px ${prev.y - next.y}px`,
      width:`${prev.width}px`,
      height:`${prev.height}px`
    },
    {
      translate: "0 0",
      width:`${next.width}px`,
      height:`${next.height}px`
    },
  ],{
    duration:300,
    easing: "cubic-bezier(0.33, 1, 0.68, 1)"
  }
);
};

buttons.forEach((button, index) => {
  button.addEventListener("click", () =>{

    const card = cards[index];
    const cardImage = cardImages[index];
    const cardName = cardNames[index];
    const cardText = cardTexts[index];

    console.log(card);

    //スタイルを取得

    const prevCard = card.getBoundingClientRect();
    const prevImage = cardImage.getBoundingClientRect();
    const prevName = cardName.getBoundingClientRect();

    //スタイルを変更
    card.classList.toggle("active");

    //スタイルを取得
    const nextCard = card.getBoundingClientRect();
    const nextImage = cardImage.getBoundingClientRect();
    const nextName = cardName.getBoundingClientRect();

    //アニメーションを適用
    flip(card, prevCard, nextCard);
    flip(cardImage, prevImage, nextImage);
    flip(cardName, prevName, nextName);

    //非表示だった要素の透明度を変更
    cardText.animate([{opacity:0}, {opacity:1}], {duration:200});
  });

});
