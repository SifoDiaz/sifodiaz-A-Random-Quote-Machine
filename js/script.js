const QUOTEBANK = [
  {
    quote: "If you spend too much time thinking about a thing, you’ll never get it done.",
    author: "Bruce Lee"
  }, {
    quote: "They are in front of us, they are behind us, they are flanking us from both sides, and we are surrounded. This simplifies the problem! No matter where we aim we will hit the bastards! They can’t get away from us now!",
    author: "Lewis “Chesty” Puller"
  }, {
    quote: "A wise man can learn more from a foolish question than a fool can learn from a wise answer.",
    author: "Bruce Lee"
  }, {
    quote: "Your soul may belong to Jesus, but your ass belongs to the Marines.",
    author: "Eugene B. Sledge"
  }, {
    quote: "I’m not in this world to live up to your expectations and you’re not in this world to live up to mine.",
    author: "Bruce Lee"
  }, {
    quote: "Come on you son’s of bitches!  Do you want to live forever?",
    author: "Dan Daly"
  }, {
    quote: "Do not pray for an easy life, pray for the strength to endure a difficult one.",
    author: "Bruce Lee"
  }, {
    quote: "Never fear your enemy, but always respect them.",
    author: "John Basilone"
  }, {
    quote: "Absorb what is useful, discard what is useless and add what is specifically your own.",
    author: "Bruce Lee"
  }, {
    quote: "Marines. No Better Friend, No Worse Enemy.",
    author: "James “Mad Dog” Mattis"
  }, {
    quote: "Mistakes are always forgivable, if one has the courage to admit them.",
    author: "Bruce Lee"
  }, {
    quote: "I come in peace. I didn’t bring artillery. But I am pleading with you, with tears in my eyes: If you fuck with me, I’ll kill you all.",
    author: "James “Mad Dog” Mattis"
  }, {
    quote: "To hell with circumstances; I create opportunities.",
    author: "Bruce Lee"
  }, {
    quote: "Be polite, be professional, but plan to kill everybody you meet.",
    author: "James “Mad Dog” Mattis"
  }, {
    quote: "I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times.",
    author: "Bruce Lee"
  }, {
    quote: "Appear weak when you are strong, and strong when you are weak.",
    author: "Sun Tzu"
  }, {
    quote: "The more we value things, the less we value ourselves.",
    author: "Bruce Lee"
  }, {
    quote: "The supreme art of war is to subdue the enemy without fighting.",
    author: "Sun Tzu"
  }, {
    quote: "Real living is living for others.",
    author: "Bruce Lee"
  }, {
    quote: "Let your plans be dark and impenetrable as night, and when you move, fall like a thunderbolt.",
    author: "Sun Tzu"
  }, {
    quote: "If you love life, don’t waste time, for time is what life is made up of.",
    author: "Bruce Lee"
  }, {
    quote: "All warfare is based on deception. Hence, when we are able to attack, we must seem unable; when using our forces, we must appear inactive; when we are near, we must make the enemy believe we are far away; when far away, we must make him believe we are near.",
    author: "Sun Tzu"
  }, {
    quote: "Showing off is the fool’s idea of glory.",
    author: "Bruce Lee"
  }, {
    quote: "To know your Enemy, you must become your Enemy.",
    author: "Sun Tzu"
  }, {
    quote: "Life’s battles don’t always go to the stronger or faster man. But sooner or later the man who wins, is the man who thinks he can.",
    author: "Bruce Lee"
  }, {
    quote: "Be extremely subtle even to the point of formlessness. Be extremely mysterious even to the point of soundlessness. Thereby you can be the director of the opponent's fate.",
    author: "Sun Tzu"
  }, {
    quote: "The successful warrior is the average man, with laser-like focus.",
    author: "Bruce Lee"
  }, {
    quote: "In my experience, Marines are gung ho no matter what. They will all fight to the death. Everyone of them just wants to get out there and kill. They are bad-ass, hard-charging mothers.",
    author: "Chris Kyle"
  }, {
    quote: "Knowing is not enough, we must apply. Willing is not enough, we must do.",
    author: "Bruce Lee"
  }, {
    quote: "We make war that we may live in peace.",
    author: "Aristotle"
  }, {
    quote: "In the middle of chaos lies opportunity.",
    author: "Bruce Lee"
  }, {
    quote: "our work is to discover your work and then with all your heart to give yourself to it.",
    author: "Buddha"
  }, {
    quote: "For it is easy to criticize and break down the spirit of others, but to know yourself takes a lifetime.",
    author: "Bruce Lee"
  }, {
    quote: "Some Warriors look fierce, but are mild. Some seem timid, but are vicious. Look beyond appearances; position yourself for the advantage.",
    author: "Deng Ming-Dao"
  }, {
    quote: "Be happy, but never satisfied.",
    author: "Bruce Lee"
  }, {
    quote: "One finds life through conquering the fear of death within one's mind. Empty the mind of all forms of attachment, make a go-for-broke charge and conquer the opponent with one decisive slash.",
    author: "Togo Shigekata"
  }, {
    quote: "Always be yourself, express yourself, have faith in yourself, do not go out and look for a successful personality and duplicate it.",
    author: "Bruce Lee"
  }, {
    quote: "The key to immortality is first living a life worth remembering.",
    author: "Bruce Lee"
  }, {
    quote: "You must be shapeless, formless, like water. When you pour water in a cup, it becomes the cup. When you pour water in a bottle, it becomes the bottle. When you pour water in a teapot, it becomes the teapot. Water can drip and it can crash. Become like water my friend.",
    author: "Bruce Lee"
  }
];
window.onload = init;
function init() {
  generateQuote()
}

function generateQuote() {
  let quoteSize = QUOTEBANK.length;
  let randomIndex = Math.floor(Math.random() * quoteSize);
  let randomQuoteData = QUOTEBANK[randomIndex];

  let twitterLink = "https://twitter.com/intent/tweet?text="


  let quoteInApiFormat = randomQuoteData.quote.replace(/ /g, "%20");
  twitterLink += quoteInApiFormat

  let authorInApiFormat = randomQuoteData.author.replace(/ /g, "%20");
  twitterLink += " - " + authorInApiFormat

  document.getElementById("tweet-quote").href = twitterLink;
  document.getElementById("text").innerText = randomQuoteData.quote;
  document.getElementById("author").innerText = randomQuoteData.author;
}
