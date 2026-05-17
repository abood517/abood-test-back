// Rule-based AI assistant replies. Matches keywords in the user's question.
// For a real AI, swap this with a call to an external LLM API.

const KNOWLEDGE = [
  { keywords: ['flexbox', 'flex', 'justify-content', 'align-items'],
    answer: "Flexbox is a CSS layout system that arranges items in rows or columns. Apply display:flex to a container, then use justify-content for horizontal alignment and align-items for vertical alignment. It's perfect for centering, navbars, and responsive layouts." },

  { keywords: ['grid', 'css grid', 'grid-template'],
    answer: "CSS Grid is a 2D layout system. Apply display:grid to a container, then define columns with grid-template-columns (e.g. 'repeat(3, 1fr)') and rows with grid-template-rows. Use gap to space items apart." },

  { keywords: ['html', 'tag', 'semantic'],
    answer: "HTML structures your page. Common tags: <h1>-<h6> for headings, <p> for paragraphs, <div> for blocks, <span> for inline groups, <a> for links, <img> for images. Use semantic tags like <header>, <main>, <article>, <footer> when possible." },

  { keywords: ['javascript', 'js', 'function', 'arrow'],
    answer: "JavaScript controls page behavior. Declare variables with let or const. Functions can be classic (function name(){}) or arrow (const name = () => {}). Use document.querySelector to find elements and addEventListener to react to clicks." },

  { keywords: ['async', 'await', 'promise', 'fetch'],
    answer: "async/await lets you write asynchronous code that reads like synchronous. Mark a function async, then use await before any Promise (like fetch). Example: const res = await fetch(url); const data = await res.json();" },

  { keywords: ['dom', 'document'],
    answer: "The DOM (Document Object Model) is the tree of HTML elements. Use document.getElementById(), document.querySelector(), or document.querySelectorAll() to find elements. Modify them with .textContent, .innerHTML, .classList.add/remove, or .style.property." },

  { keywords: ['css', 'style', 'selector'],
    answer: "CSS styles your page. Selectors target elements: tag (h1), class (.box), id (#main). Apply properties inside curly braces: .box { color: red; padding: 20px; }. Use external files via <link rel='stylesheet'> or inline with style=." },

  { keywords: ['array', 'map', 'filter', 'reduce', 'foreach'],
    answer: "Arrays have powerful methods. .map() transforms each item, .filter() keeps items matching a condition, .reduce() combines items into one value, .forEach() runs code per item. Example: [1,2,3].map(n => n*2) returns [2,4,6]." },

  { keywords: ['responsive', 'media query', 'mobile'],
    answer: "Make pages responsive with @media queries. Example: @media (max-width: 768px) { .menu { display: none; } } changes styles below a width. Combine with flexbox/grid and relative units (%, rem, vw) for fluid layouts." },

  { keywords: ['challenge', 'how do i', 'help'],
    answer: "Check the challenge's instruction carefully — the regex pattern matches specific code. Click 'Show Hint' if stuck. Common gotcha: make sure quotes and tag names match exactly (case-insensitive). Start simple, then add complexity." },

  { keywords: ['xp', 'level', 'coin', 'reward'],
    answer: "You earn XP and coins for each first-time correct answer. Every 100 XP levels you up. Different challenges award different amounts based on difficulty: easy ~20 XP, medium ~35 XP, hard ~60 XP." },
];

const FALLBACK =
  "I'm a focused coding assistant. Try asking about: HTML, CSS, JavaScript, flexbox, grid, async/await, the DOM, arrays, or how to approach the current challenge.";

function answer(question) {
  if (!question || typeof question !== 'string') return FALLBACK;
  const q = question.toLowerCase();
  for (const entry of KNOWLEDGE) {
    if (entry.keywords.some(k => q.includes(k))) return entry.answer;
  }
  return FALLBACK;
}

module.exports = { answer };
