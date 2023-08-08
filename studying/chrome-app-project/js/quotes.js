const historicalQuotes = [
  {
    quote:
      "Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution.",
    author: "Albert Einstein",
  },
  {
    quote:
      "I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin, but by the content of their character.",
    author: "Martin Luther King, Jr.",
  },
  {
    quote:
      "We make a living by what we get, but we make a life by what we give.",
    author: "Winston Churchill",
  },
  {
    quote:
      "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.",
    author: "Marie Curie",
  },
  {
    quote: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi",
  },
  {
    quote:
      "Education is the most powerful weapon which you can use to change the world.",
    author: "Nelson Mandela",
  },
  {
    quote:
      "I have learned over the years that when one's mind is made up, this diminishes fear; knowing what must be done does away with fear.",
    author: "Rosa Parks",
  },
  {
    quote: "I am a slow walker, but I never walk back.",
    author: "Abraham Lincoln",
  },
  {
    quote:
      "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.",
    author: "Charles Darwin",
  },
  {
    quote:
      "The only thing worse than being blind is having sight but no vision.",
    author: "Helen Keller",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote =
  historicalQuotes[Math.floor(Math.random() * historicalQuotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
