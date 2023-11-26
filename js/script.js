

/*
# Quote Generator
- `note`: Darken random background color.  Shrink font size.  Test Excel spreadsheet data source.
- `code`: 1t
- `description`: Show random quotes from an array of 'quote' objects
- `detail`: Unit Project 1
- `author`: jcruzaxaeon
- `centralRepo`: githubRepoUrl
- `org`: Team Treehouse
- `orgType`: Code Academy
- `certification`: Fullstack JavaScript Techdegree
- `text`: Team Treehouse Unit Project 1 Quote Generator
--------------------------------------------------------------------------------------------------*/



/*
## Define `quotes` Array (i.e. quote database)
--------------------------------------------------------------------------------------------------*/
const quotes = [

   { /*1*/
   quote: `[... The ability to both] abstain from and enjoy those things which many are too weak to abstain from and cannot enjoy without excess, but to be strong enough to both bear the one and be sober in the other is the mark of a perfect, invincible soul.`,
   source: 'Marcus Aurelius',
   citation: 'Meditations',
   year: '175',
   media: 'Book',
   tag: 'Philosophy'
   },
   { /*2*/
   quote: `We don't react to events; we react to our judgments about them, and the judgments are up to us.`,
   source: 'Ward Farnsworth',
   citation: 'The Practicing Stoic',
   year: '2018',
   media: 'Book',
   tag: 'Philosophy'
   },
   { /*3*/
   quote: `It is not what things are, but what they are for us that matters.`,
   source: 'Schopenhauer',
   citation: 'The Wisdom of Life',
   year: '1851',
   media: 'Book',
   tag: 'Philosophy'
   },
   { /*4*/
   quote: `Stay detached from things that are not up to you.`,
   source: 'Epictetus',
   citation: '',
   year: '',
   media: '',
   tag: 'Philosophy'
   },
   { /*5*/
   quote: `We believe these affairs of ours are great because we are small.`,
   source: 'Seneca',
   citation: '',
   year: '',
   media: '',
   tag: 'Philosophy'
   },
   { /*6*/
   quote: `The world is nothing but change, [and] our life is only perception.`,
   source: 'Marcus Aurelius',
   citation: 'Meditations',
   year: '175',
   media: 'Book',
   tag: 'Philosophy'
   },
   { /*7*/
   quote: `Most of all, the world is a place where parts of wholes are described.`,
   source: 'The Books',
   citation: 'Smells like Content',
   year: '2011',
   media: 'Song',
   tag: 'Philosophy'
   },
   { /*8*/
   quote: `We went ahead [and fabricated] a catalog of unstable elements, modicums, particles,[and matter] with not zero total strangeness [that exist] for brief moments which amount to nothing more than tiny fragments of a finger snap.`,
   source: 'The Books',
   citation: 'Smells like Content',
   year: '2011',
   media: 'Song',
   tag: 'Philosophy'
   },
   { /*9*/
   quote: `Don't let what you cannot do interfere with what you can do.`,
   source: 'John Wodden',
   citation: '',
   year: '',
   media: '',
   tag: 'Motivation'
   },
   { /*10*/
   quote: `There is nothing either good or bad, but thinking makes it so.`,
   source: 'William Shakespeare',
   citation: '',
   year: '',
   media: '',
   tag: 'Literature'
   }   
];


//Initialization
///////////////////////////////////////////////////////////////////////////////////////////////
let rIndex=0; //Random index for `quotes` array
let track=[]; //Track indices used


//FUNCTION - rng() - integer=f(integer,integer)
///////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Returns a random integer between [min,max] (inclusive).
 *
 * @param {int} min=1 RNG’s lower bound.
 * @param {int} max=10 RNG’s upper bound.
 * @returns {int} A random integer between [min,max] (inclusive).
 */
const rng = (min=1,max=10) => Math.floor( Math.random()*(max-min+1)+min );


//FUNCTION - getRandomQuote() - quoteObject=f()
///////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Tracks quotes shown. Returns a random quote object from the `quotes` array without repeating until all quotes have been shown once. Reset tracking array. Repeat.
 *
 * @returns {object} A random quote object from the `quotes` array
 */
function getRandomQuote() {
  rIndex=rng(0,quotes.length-1); //Random index value for quotes[]
  
  //Eliminate repeat-quotes until all quotes have been shown. Repeat.
  while(track.includes(rIndex)){ rIndex=rng(0,quotes.length-1); }
  track.push(rIndex);
  if(track.length===quotes.length) track=[];

  return quotes[rIndex];
}


//FUNCTION - printQuote() - f()
///////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Creates HTML markup for quote, including attribution information. Changes background color for every new quote. Sets automatic update timer/interval. Prints to `quote-box` inner HTML.
 */
function printQuote(){
  const Obj=getRandomQuote();
  let HTML='';

  /*Markup for quote string
    -Added `Year: ` string to the year <span> avoid confusion given that some quotes are from the year 175, a number some people may not recognize as a year.
    -Added `Tag: ` string to the tag <span> to avoid confusion*/
  html=`<p class="quote">${Obj.quote}</p>\
  <p class="source">${Obj.source}`;
  if(Obj.citation) html+=`<span class="citation">${Obj.citation}</span>`;
  if(Obj.media) html+=`<span class="year">${Obj.media}</span>`;
  if(Obj.year) html+=`<span class="year">Year: ${Obj.year}</span>`;
  if(Obj.tag) html+=`<span class="citation">Tag: ${Obj.tag}.</span>`;
  html+='</p>';

  /*Code adopdted from:
  https://stackoverflow.com/questions/197748/how-do-i-change-the-background-color-with-javascript
  and a previous Team Treehouse exercise I completed on refactoring*/
  //Change background color every new quote
  document.body.style.backgroundColor=
  `rgb(${rng(1,100)},${rng(1,100)},${rng(1,100)})`;

  //Print
  document.getElementById('quote-box').innerHTML=html;

  //Reset interval - User may click `Show another quote` button toward end of previous interval
  clearInterval(intervalID);
  intervalID=setInterval(printQuote, 20000);
}


//Main Code Block
///////////////////////////////////////////////////////////////////////////////////////////////

//Adopted from: https://developer.mozilla.org/en-US/docs/Web/API/setInterval
//Change quote every 20 seconds, reset after every printQuote call
let intervalID=setInterval(printQuote, 20000);

/* Unchanged from Team Treehouse starter files
   click event listener for the print quote button
   DO NOT CHANGE THE CODE BELOW!!*/
document.getElementById('load-quote').addEventListener("click", printQuote, false);

/*/////////////////////////////////////////////////////////////////////////////////////////////
changelog - quotes - script.js
03.09A: Initial production
/////////////////////////////////////////////////////////////////////////////////////////////*/