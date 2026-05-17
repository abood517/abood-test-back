// 100 Frontend Challenges (English-only content)
// Each challenge: title, description, difficulty, xp, coins, instruction, starter, pattern, hint

const FRONTEND_CHALLENGES = [
  // ==================== HTML BASICS (1-15) ====================
  { title: 'Hello Heading', description: 'Display "Hello World" using an h1 heading.', difficulty: 'easy', xp: 15, coins: 5,
    instruction: 'Create an <h1> element with the text: Hello World',
    starter: '', pattern: '<h1[^>]*>\\s*Hello\\s+World\\s*</h1>',
    hint: 'Use <h1>Hello World</h1>' },

  { title: 'Paragraph', description: 'Add a paragraph with any text inside.', difficulty: 'easy', xp: 15, coins: 5,
    instruction: 'Create a <p> element with any non-empty text.',
    starter: '', pattern: '<p[^>]*>\\s*\\S[\\s\\S]*?</p>',
    hint: 'Wrap text in <p>...</p>' },

  { title: 'Heading Hierarchy', description: 'Display both an h1 and an h2 on the page.', difficulty: 'easy', xp: 18, coins: 8,
    instruction: 'Add an <h1> and an <h2>, each with non-empty text.',
    starter: '', pattern: '<h1[^>]*>\\s*\\S[\\s\\S]*?</h1>[\\s\\S]*<h2[^>]*>\\s*\\S[\\s\\S]*?</h2>',
    hint: 'Place <h1>...</h1> then <h2>...</h2>' },

  { title: 'Bold with Strong', description: 'Make text bold using the <strong> tag.', difficulty: 'easy', xp: 15, coins: 5,
    instruction: 'Wrap any text in a <strong> tag.',
    starter: '', pattern: '<strong[^>]*>\\s*\\S[\\s\\S]*?</strong>',
    hint: 'Use <strong>text</strong>' },

  { title: 'Italic with Em', description: 'Emphasize text with the <em> tag.', difficulty: 'easy', xp: 15, coins: 5,
    instruction: 'Wrap any text in an <em> tag.',
    starter: '', pattern: '<em[^>]*>\\s*\\S[\\s\\S]*?</em>',
    hint: 'Use <em>text</em>' },

  { title: 'Unordered List', description: 'Create a bullet list with three items.', difficulty: 'easy', xp: 20, coins: 10,
    instruction: 'Create a <ul> containing exactly 3 <li> items.',
    starter: '<ul>\n  <!-- add items -->\n</ul>',
    pattern: '<ul[^>]*>(\\s*<li[^>]*>[\\s\\S]*?</li>\\s*){3}\\s*</ul>',
    hint: 'Use <ul><li>...</li><li>...</li><li>...</li></ul>' },

  { title: 'Ordered List', description: 'Create a numbered list with three items.', difficulty: 'easy', xp: 20, coins: 10,
    instruction: 'Create an <ol> containing exactly 3 <li> items.',
    starter: '', pattern: '<ol[^>]*>(\\s*<li[^>]*>[\\s\\S]*?</li>\\s*){3}\\s*</ol>',
    hint: 'Use <ol> instead of <ul>' },

  { title: 'Anchor Link', description: 'Link to https://example.com.', difficulty: 'easy', xp: 20, coins: 10,
    instruction: 'Create an <a> with href="https://example.com" and any text.',
    starter: '', pattern: '<a[^>]*href\\s*=\\s*["\\\']https?://example\\.com[^"\\\']*["\\\'][^>]*>[\\s\\S]*?</a>',
    hint: 'Format: <a href="https://example.com">click</a>' },

  { title: 'Image with Alt', description: 'Insert an image with an alt attribute.', difficulty: 'easy', xp: 22, coins: 10,
    instruction: 'Add an <img> with both src and alt attributes.',
    starter: '', pattern: '<img[^>]*\\b(?:src\\s*=\\s*["\\\'][^"\\\']+["\\\'][^>]*alt\\s*=\\s*["\\\'][^"\\\']*["\\\']|alt\\s*=\\s*["\\\'][^"\\\']*["\\\'][^>]*src\\s*=\\s*["\\\'][^"\\\']+["\\\'])',
    hint: 'Format: <img src="..." alt="...">' },

  { title: 'Line Break', description: 'Insert a line break inside a paragraph.', difficulty: 'easy', xp: 15, coins: 5,
    instruction: 'Inside a <p>, use a <br> tag.',
    starter: '', pattern: '<p[^>]*>[\\s\\S]*<br\\s*/?>[\\s\\S]*</p>',
    hint: 'Format: <p>line one<br>line two</p>' },

  { title: 'Horizontal Rule', description: 'Insert a horizontal rule on the page.', difficulty: 'easy', xp: 15, coins: 5,
    instruction: 'Add an <hr> tag.',
    starter: '', pattern: '<hr\\s*/?>',
    hint: 'Just use <hr>' },

  { title: 'A Div Container', description: 'Wrap content in a div.', difficulty: 'easy', xp: 15, coins: 5,
    instruction: 'Create a <div> with non-empty content inside.',
    starter: '', pattern: '<div[^>]*>\\s*\\S[\\s\\S]*?</div>',
    hint: 'Use <div>content</div>' },

  { title: 'Inline Span', description: 'Use a span inside a paragraph.', difficulty: 'easy', xp: 18, coins: 8,
    instruction: 'Place a <span> inside a <p>.',
    starter: '', pattern: '<p[^>]*>[\\s\\S]*<span[^>]*>[\\s\\S]*?</span>[\\s\\S]*</p>',
    hint: 'Format: <p><span>text</span></p>' },

  { title: 'Blockquote', description: 'Add a blockquote with any text.', difficulty: 'easy', xp: 18, coins: 8,
    instruction: 'Create a <blockquote> with non-empty text.',
    starter: '', pattern: '<blockquote[^>]*>\\s*\\S[\\s\\S]*?</blockquote>',
    hint: 'Use <blockquote>...</blockquote>' },

  { title: 'Inline Code Tag', description: 'Display code inline with the <code> tag.', difficulty: 'easy', xp: 18, coins: 8,
    instruction: 'Wrap text in a <code> tag.',
    starter: '', pattern: '<code[^>]*>\\s*\\S[\\s\\S]*?</code>',
    hint: 'Use <code>example</code>' },

  // ==================== FORMS & ATTRIBUTES (16-25) ====================
  { title: 'Text Input', description: 'Add a text input field.', difficulty: 'easy', xp: 20, coins: 10,
    instruction: 'Create an <input> with type="text".',
    starter: '', pattern: '<input[^>]*type\\s*=\\s*["\\\']text["\\\']',
    hint: 'Format: <input type="text">' },

  { title: 'Submit Button', description: 'Create a button with the text Submit.', difficulty: 'easy', xp: 18, coins: 8,
    instruction: 'Create a <button> with the text: Submit',
    starter: '', pattern: '<button[^>]*>\\s*Submit\\s*</button>',
    hint: 'Format: <button>Submit</button>' },

  { title: 'Label and Input', description: 'Pair a label with an input.', difficulty: 'easy', xp: 22, coins: 10,
    instruction: 'Use both <label> and <input>.',
    starter: '', pattern: '<label[^>]*>[\\s\\S]*?</label>[\\s\\S]*<input[^>]*>|<input[^>]*>[\\s\\S]*<label[^>]*>[\\s\\S]*?</label>',
    hint: 'Both <label>...</label> and <input>' },

  { title: 'Checkbox Input', description: 'Create a checkbox.', difficulty: 'easy', xp: 20, coins: 10,
    instruction: 'Create an <input> with type="checkbox".',
    starter: '', pattern: '<input[^>]*type\\s*=\\s*["\\\']checkbox["\\\']',
    hint: 'Use type="checkbox"' },

  { title: 'Email Input', description: 'Create an email-specific input field.', difficulty: 'easy', xp: 22, coins: 10,
    instruction: 'Create an <input> with type="email".',
    starter: '', pattern: '<input[^>]*type\\s*=\\s*["\\\']email["\\\']',
    hint: 'Use type="email"' },

  { title: 'Password Input', description: 'Create a password field.', difficulty: 'easy', xp: 22, coins: 10,
    instruction: 'Create an <input> with type="password".',
    starter: '', pattern: '<input[^>]*type\\s*=\\s*["\\\']password["\\\']',
    hint: 'Use type="password"' },

  { title: 'Select Dropdown', description: 'Create a dropdown menu with 3 options.', difficulty: 'easy', xp: 25, coins: 12,
    instruction: 'Create a <select> with 3 <option> elements.',
    starter: '<select>\n  <!-- 3 options -->\n</select>',
    pattern: '<select[^>]*>(\\s*<option[^>]*>[\\s\\S]*?</option>\\s*){3}\\s*</select>',
    hint: '<select><option>...</option> x3</select>' },

  { title: 'Textarea', description: 'Add a multi-line text input.', difficulty: 'easy', xp: 20, coins: 10,
    instruction: 'Create a <textarea> element.',
    starter: '', pattern: '<textarea[^>]*>[\\s\\S]*?</textarea>',
    hint: 'Use <textarea></textarea>' },

  { title: 'Required Field', description: 'Make an input field required.', difficulty: 'easy', xp: 22, coins: 10,
    instruction: 'Add a required attribute to an <input>.',
    starter: '<input type="text">',
    pattern: '<input[^>]*\\srequired',
    hint: 'Add the word required to the tag' },

  { title: 'Form Element', description: 'Wrap inputs in a form.', difficulty: 'easy', xp: 22, coins: 10,
    instruction: 'Create a <form> containing at least one <input>.',
    starter: '', pattern: '<form[^>]*>[\\s\\S]*<input[^>]*>[\\s\\S]*</form>',
    hint: 'Use <form>...<input>...</form>' },

  // ==================== INLINE CSS (26-40) ====================
  { title: 'Red Text', description: 'Make a paragraph text red using inline CSS.', difficulty: 'easy', xp: 22, coins: 10,
    instruction: 'Create a <p> with style="color: red".',
    starter: '', pattern: '<p[^>]*style\\s*=\\s*["\\\'][^"\\\']*color\\s*:\\s*red',
    hint: 'Use style="color: red"' },

  { title: 'Blue Background', description: 'Set a blue background on a div.', difficulty: 'easy', xp: 22, coins: 10,
    instruction: 'Create a <div> with inline background-color: blue.',
    starter: '', pattern: '<div[^>]*style\\s*=\\s*["\\\'][^"\\\']*background[\\s-]?color\\s*:\\s*blue',
    hint: 'Use style="background-color: blue"' },

  { title: 'Larger Font', description: 'Increase font size with inline CSS.', difficulty: 'easy', xp: 22, coins: 10,
    instruction: 'Apply font-size with a pixel value on a <p>.',
    starter: '', pattern: '<p[^>]*style\\s*=\\s*["\\\'][^"\\\']*font-size\\s*:\\s*\\d+px',
    hint: 'Use style="font-size: 24px"' },

  { title: 'Bold via CSS', description: 'Make text bold using inline CSS.', difficulty: 'easy', xp: 22, coins: 10,
    instruction: 'Use font-weight: bold inline.',
    starter: '', pattern: 'style\\s*=\\s*["\\\'][^"\\\']*font-weight\\s*:\\s*(bold|[6-9]\\d{2})',
    hint: 'Use style="font-weight: bold"' },

  { title: 'Center Text', description: 'Center-align text inside a div.', difficulty: 'easy', xp: 22, coins: 10,
    instruction: 'Apply text-align: center to a <div>.',
    starter: '', pattern: '<div[^>]*style\\s*=\\s*["\\\'][^"\\\']*text-align\\s*:\\s*center',
    hint: 'Use style="text-align: center"' },

  { title: 'Hex Color', description: 'Use a hex color code for text.', difficulty: 'easy', xp: 25, coins: 12,
    instruction: 'Use a hex color like #ff0000.',
    starter: '', pattern: 'style\\s*=\\s*["\\\'][^"\\\']*color\\s*:\\s*#[0-9a-fA-F]{3,6}',
    hint: 'Use style="color: #ff0000"' },

  { title: 'RGB Color', description: 'Use rgb() to set a color.', difficulty: 'easy', xp: 25, coins: 12,
    instruction: 'Use color in rgb() format inline.',
    starter: '', pattern: 'style\\s*=\\s*["\\\'][^"\\\']*color\\s*:\\s*rgb\\s*\\(',
    hint: 'Use style="color: rgb(255, 0, 0)"' },

  { title: 'Padding', description: 'Add padding to a div.', difficulty: 'easy', xp: 22, coins: 10,
    instruction: 'Apply style="padding: ..." to a <div>.',
    starter: '', pattern: '<div[^>]*style\\s*=\\s*["\\\'][^"\\\']*padding\\s*:\\s*\\d',
    hint: 'Use style="padding: 20px"' },

  { title: 'Margin', description: 'Add margin to a div.', difficulty: 'easy', xp: 22, coins: 10,
    instruction: 'Apply style="margin: ..." to a <div>.',
    starter: '', pattern: '<div[^>]*style\\s*=\\s*["\\\'][^"\\\']*margin\\s*:\\s*\\d',
    hint: 'Use style="margin: 20px"' },

  { title: 'Border', description: 'Add a border to a div.', difficulty: 'easy', xp: 25, coins: 12,
    instruction: 'Apply a border on a <div>.',
    starter: '', pattern: '<div[^>]*style\\s*=\\s*["\\\'][^"\\\']*border\\s*:\\s*\\d',
    hint: 'Use style="border: 2px solid black"' },

  { title: 'Rounded Corners', description: 'Round the corners of a div.', difficulty: 'easy', xp: 25, coins: 12,
    instruction: 'Use border-radius with a positive value.',
    starter: '', pattern: 'style\\s*=\\s*["\\\'][^"\\\']*border-radius\\s*:\\s*\\d',
    hint: 'Use style="border-radius: 10px"' },

  { title: 'Element Width', description: 'Set a fixed width on a div.', difficulty: 'easy', xp: 22, coins: 10,
    instruction: 'Apply width on a <div>.',
    starter: '', pattern: '<div[^>]*style\\s*=\\s*["\\\'][^"\\\']*\\bwidth\\s*:\\s*\\d',
    hint: 'Use style="width: 200px"' },

  { title: 'Element Height', description: 'Set a fixed height on a div.', difficulty: 'easy', xp: 22, coins: 10,
    instruction: 'Apply height on a <div>.',
    starter: '', pattern: '<div[^>]*style\\s*=\\s*["\\\'][^"\\\']*\\bheight\\s*:\\s*\\d',
    hint: 'Use style="height: 100px"' },

  { title: 'Hide an Element', description: 'Hide an element using display: none.', difficulty: 'easy', xp: 22, coins: 10,
    instruction: 'Apply display: none inline.',
    starter: '', pattern: 'style\\s*=\\s*["\\\'][^"\\\']*display\\s*:\\s*none',
    hint: 'Use style="display: none"' },

  { title: 'Underline Text', description: 'Underline text with inline CSS.', difficulty: 'easy', xp: 22, coins: 10,
    instruction: 'Use text-decoration: underline.',
    starter: '', pattern: 'style\\s*=\\s*["\\\'][^"\\\']*text-decoration\\s*:\\s*underline',
    hint: 'Use style="text-decoration: underline"' },

  // ==================== CSS BLOCKS & SELECTORS (41-50) ====================
  { title: 'Style Block Basics', description: 'Use a <style> block to style an h1.', difficulty: 'medium', xp: 35, coins: 20,
    instruction: 'Inside a <style> block, set h1 with a color property.',
    starter: '<style>\n  /* your css */\n</style>\n<h1>Title</h1>',
    pattern: '<style[^>]*>[\\s\\S]*h1\\s*\\{[\\s\\S]*color\\s*:[\\s\\S]*\\}[\\s\\S]*</style>',
    hint: 'Add h1 { color: red; } inside <style>' },

  { title: 'Class Selector', description: 'Style elements using a class selector.', difficulty: 'medium', xp: 35, coins: 20,
    instruction: 'Define a CSS class .box inside <style>.',
    starter: '<style>\n  /* define .box */\n</style>',
    pattern: '<style[^>]*>[\\s\\S]*\\.box\\s*\\{[\\s\\S]*\\}[\\s\\S]*</style>',
    hint: 'Use .box { ... }' },

  { title: 'ID Selector', description: 'Style an element using an ID selector.', difficulty: 'medium', xp: 35, coins: 20,
    instruction: 'Use #main { ... } inside a <style> block.',
    starter: '<style>\n  /* style #main */\n</style>',
    pattern: '<style[^>]*>[\\s\\S]*#main\\s*\\{[\\s\\S]*\\}[\\s\\S]*</style>',
    hint: 'Use #main { ... }' },

  { title: 'Hover State', description: 'Change a color on hover.', difficulty: 'medium', xp: 38, coins: 22,
    instruction: 'Use a :hover pseudo-class inside a style block.',
    starter: '<style>\n  /* button hover */\n</style>',
    pattern: '<style[^>]*>[\\s\\S]*:hover\\s*\\{[\\s\\S]*\\}[\\s\\S]*</style>',
    hint: 'Use button:hover { color: red; }' },

  { title: 'Descendant Selector', description: 'Style p inside .container.', difficulty: 'medium', xp: 38, coins: 22,
    instruction: 'Use .container p { ... } inside <style>.',
    starter: '<style>\n  /* .container p */\n</style>',
    pattern: '<style[^>]*>[\\s\\S]*\\.container\\s+p\\s*\\{[\\s\\S]*\\}[\\s\\S]*</style>',
    hint: 'Use .container p { color: blue; }' },

  { title: 'First Child', description: 'Style the first child element.', difficulty: 'medium', xp: 40, coins: 22,
    instruction: 'Use :first-child inside <style>.',
    starter: '<style>\n  /* first child rule */\n</style>',
    pattern: '<style[^>]*>[\\s\\S]*:first-child\\s*\\{[\\s\\S]*\\}[\\s\\S]*</style>',
    hint: 'Use li:first-child { ... }' },

  { title: 'Last Child', description: 'Style the last child element.', difficulty: 'medium', xp: 40, coins: 22,
    instruction: 'Use :last-child inside <style>.',
    starter: '<style>\n  /* last child rule */\n</style>',
    pattern: '<style[^>]*>[\\s\\S]*:last-child\\s*\\{[\\s\\S]*\\}[\\s\\S]*</style>',
    hint: 'Use li:last-child { ... }' },

  { title: 'Nth Child', description: 'Style every other item in a list.', difficulty: 'medium', xp: 42, coins: 24,
    instruction: 'Use :nth-child() inside <style>.',
    starter: '<style>\n  /* :nth-child rule */\n</style>',
    pattern: '<style[^>]*>[\\s\\S]*:nth-child\\s*\\([\\s\\S]*\\)\\s*\\{[\\s\\S]*\\}[\\s\\S]*</style>',
    hint: 'Use li:nth-child(2n) { ... }' },

  { title: 'Pseudo Element Before', description: 'Add content using ::before.', difficulty: 'medium', xp: 45, coins: 25,
    instruction: 'Use ::before with a content property.',
    starter: '<style>\n  /* ::before */\n</style>',
    pattern: '<style[^>]*>[\\s\\S]*::before\\s*\\{[\\s\\S]*content\\s*:[\\s\\S]*\\}[\\s\\S]*</style>',
    hint: 'Use .x::before { content: ""; }' },

  { title: 'Universal Selector', description: 'Apply a rule to all elements.', difficulty: 'medium', xp: 35, coins: 20,
    instruction: 'Use the * selector inside <style>.',
    starter: '<style>\n  /* universal */\n</style>',
    pattern: '<style[^>]*>[\\s\\S]*\\*\\s*\\{[\\s\\S]*\\}[\\s\\S]*</style>',
    hint: 'Use * { margin: 0; }' },

  // ==================== FLEXBOX & GRID (51-60) ====================
  { title: 'Flex Container', description: 'Create a flexbox container.', difficulty: 'medium', xp: 40, coins: 22,
    instruction: 'Apply display: flex on a <div>.',
    starter: '', pattern: 'display\\s*:\\s*flex',
    hint: 'Use display: flex' },

  { title: 'Justify Center', description: 'Center items horizontally with flex.', difficulty: 'medium', xp: 40, coins: 22,
    instruction: 'Use justify-content: center.',
    starter: '', pattern: 'justify-content\\s*:\\s*center',
    hint: 'justify-content: center' },

  { title: 'Align Center', description: 'Center items vertically with flex.', difficulty: 'medium', xp: 40, coins: 22,
    instruction: 'Use align-items: center.',
    starter: '', pattern: 'align-items\\s*:\\s*center',
    hint: 'align-items: center' },

  { title: 'Column Layout', description: 'Stack flex items vertically.', difficulty: 'medium', xp: 38, coins: 22,
    instruction: 'Use flex-direction: column.',
    starter: '', pattern: 'flex-direction\\s*:\\s*column',
    hint: 'flex-direction: column' },

  { title: 'Gap Between Items', description: 'Add spacing between flex/grid items.', difficulty: 'medium', xp: 38, coins: 22,
    instruction: 'Use the gap property with a positive value.',
    starter: '', pattern: '\\bgap\\s*:\\s*\\d',
    hint: 'gap: 16px;' },

  { title: 'Grid Container', description: 'Create a CSS grid container.', difficulty: 'medium', xp: 42, coins: 24,
    instruction: 'Apply display: grid on an element.',
    starter: '', pattern: 'display\\s*:\\s*grid',
    hint: 'display: grid' },

  { title: 'Three Equal Columns', description: 'Build a three-column grid layout.', difficulty: 'medium', xp: 45, coins: 25,
    instruction: 'Use grid-template-columns with three tracks (1fr 1fr 1fr or repeat(3, 1fr)).',
    starter: '', pattern: 'grid-template-columns\\s*:\\s*(1fr\\s+1fr\\s+1fr|repeat\\s*\\(\\s*3)',
    hint: 'grid-template-columns: 1fr 1fr 1fr' },

  { title: 'Two-Column Flex', description: 'Create a two-column layout with flexbox.', difficulty: 'medium', xp: 45, coins: 25,
    instruction: 'Make a flex container with at least 2 child divs.',
    starter: '', pattern: '<(div|section)[^>]*style\\s*=\\s*["\\\'][^"\\\']*display\\s*:\\s*flex[^"\\\']*["\\\'][^>]*>\\s*<div[^>]*>[\\s\\S]*?</div>\\s*<div[^>]*>[\\s\\S]*?</div>',
    hint: 'Outer flex div with 2 child divs' },

  { title: 'Flex Wrap', description: 'Allow items to wrap on smaller screens.', difficulty: 'medium', xp: 40, coins: 22,
    instruction: 'Use flex-wrap: wrap.',
    starter: '', pattern: 'flex-wrap\\s*:\\s*wrap',
    hint: 'flex-wrap: wrap' },

  { title: 'Space Between', description: 'Distribute flex items with space-between.', difficulty: 'medium', xp: 40, coins: 22,
    instruction: 'Use justify-content: space-between.',
    starter: '', pattern: 'justify-content\\s*:\\s*space-between',
    hint: 'justify-content: space-between' },

  // ==================== EFFECTS, POSITION, RESPONSIVE (61-70) ====================
  { title: 'Position Absolute', description: 'Position an element absolutely.', difficulty: 'medium', xp: 40, coins: 22,
    instruction: 'Use position: absolute on an element.',
    starter: '', pattern: 'position\\s*:\\s*absolute',
    hint: 'position: absolute' },

  { title: 'Position Fixed', description: 'Pin an element to the viewport.', difficulty: 'medium', xp: 40, coins: 22,
    instruction: 'Use position: fixed.',
    starter: '', pattern: 'position\\s*:\\s*fixed',
    hint: 'position: fixed' },

  { title: 'Sticky Navigation', description: 'Make a nav stick to the top.', difficulty: 'medium', xp: 42, coins: 24,
    instruction: 'Use position: sticky together with top: 0.',
    starter: '', pattern: 'position\\s*:\\s*sticky[\\s\\S]*top\\s*:\\s*0|top\\s*:\\s*0[\\s\\S]*position\\s*:\\s*sticky',
    hint: 'position: sticky; top: 0;' },

  { title: 'Z-Index Stacking', description: 'Layer elements with z-index.', difficulty: 'medium', xp: 38, coins: 22,
    instruction: 'Apply z-index with a positive number.',
    starter: '', pattern: 'z-index\\s*:\\s*\\d',
    hint: 'z-index: 10' },

  { title: 'Box Shadow', description: 'Add a shadow to an element.', difficulty: 'medium', xp: 40, coins: 22,
    instruction: 'Use box-shadow with any values.',
    starter: '', pattern: 'box-shadow\\s*:\\s*\\S',
    hint: 'box-shadow: 0 2px 8px rgba(0,0,0,0.2)' },

  { title: 'Linear Gradient', description: 'Apply a linear gradient background.', difficulty: 'medium', xp: 42, coins: 24,
    instruction: 'Use linear-gradient() as a background.',
    starter: '', pattern: 'background[\\s-]?(image|color)?\\s*:\\s*linear-gradient',
    hint: 'background: linear-gradient(135deg, red, blue)' },

  { title: 'Transform Rotate', description: 'Rotate an element by some degrees.', difficulty: 'medium', xp: 40, coins: 22,
    instruction: 'Use transform: rotate(...deg).',
    starter: '', pattern: 'transform\\s*:\\s*rotate\\s*\\(\\s*-?\\d',
    hint: 'transform: rotate(45deg)' },

  { title: 'Transform Scale', description: 'Make an element larger using scale.', difficulty: 'medium', xp: 38, coins: 22,
    instruction: 'Use transform: scale(...).',
    starter: '', pattern: 'transform\\s*:\\s*scale\\s*\\(',
    hint: 'transform: scale(1.5)' },

  { title: 'CSS Transition', description: 'Add a smooth transition.', difficulty: 'medium', xp: 40, coins: 22,
    instruction: 'Use the transition property.',
    starter: '', pattern: 'transition\\s*:\\s*\\S',
    hint: 'transition: all 0.3s ease' },

  { title: 'Media Query', description: 'Add a media query for small screens.', difficulty: 'medium', xp: 45, coins: 25,
    instruction: 'Add @media (max-width: ...px) { ... } inside <style>.',
    starter: '<style>\n  /* media query */\n</style>',
    pattern: '<style[^>]*>[\\s\\S]*@media\\s*\\(\\s*max-width\\s*:[\\s\\S]*?\\)\\s*\\{[\\s\\S]*\\}[\\s\\S]*</style>',
    hint: 'Use @media (max-width: 768px) { ... }' },

  // ==================== JAVASCRIPT BASICS (71-85) ====================
  { title: 'Console Log Hello', description: 'Log "Hello" to the console.', difficulty: 'medium', xp: 30, coins: 15,
    instruction: 'Use console.log() with the string Hello.',
    starter: '', pattern: 'console\\.log\\s*\\(\\s*["\\\']Hello["\\\']',
    hint: 'console.log("Hello")' },

  { title: 'Variable with let', description: 'Declare a variable using let.', difficulty: 'medium', xp: 28, coins: 15,
    instruction: 'Use let to declare any variable with a value.',
    starter: '', pattern: '\\blet\\s+\\w+\\s*=',
    hint: 'let x = 5' },

  { title: 'Constant with const', description: 'Declare a constant using const.', difficulty: 'medium', xp: 28, coins: 15,
    instruction: 'Use const to declare any constant.',
    starter: '', pattern: '\\bconst\\s+\\w+\\s*=',
    hint: 'const PI = 3.14' },

  { title: 'Function Declaration', description: 'Define a function called greet.', difficulty: 'medium', xp: 32, coins: 18,
    instruction: 'Declare a function named greet.',
    starter: '', pattern: 'function\\s+greet\\s*\\(',
    hint: 'function greet() { ... }' },

  { title: 'Arrow Function', description: 'Write an arrow function.', difficulty: 'medium', xp: 35, coins: 20,
    instruction: 'Assign an arrow function to a variable.',
    starter: '', pattern: '(let|const|var)\\s+\\w+\\s*=\\s*\\(?[\\w,\\s]*\\)?\\s*=>',
    hint: 'const fn = () => { ... }' },

  { title: 'If Condition', description: 'Use an if statement.', difficulty: 'medium', xp: 30, coins: 15,
    instruction: 'Write an if statement with any condition.',
    starter: '', pattern: '\\bif\\s*\\([\\s\\S]+?\\)\\s*\\{',
    hint: 'if (x > 0) { ... }' },

  { title: 'If/Else', description: 'Add an else branch to an if.', difficulty: 'medium', xp: 32, coins: 18,
    instruction: 'Write an if/else block.',
    starter: '', pattern: '\\bif\\s*\\([\\s\\S]+?\\)\\s*\\{[\\s\\S]*?\\}\\s*else\\s*\\{',
    hint: 'if (...) {...} else {...}' },

  { title: 'For Loop', description: 'Write a for loop.', difficulty: 'medium', xp: 35, coins: 20,
    instruction: 'Use a for loop with an index.',
    starter: '', pattern: '\\bfor\\s*\\(\\s*(let|var|const)?\\s*\\w+',
    hint: 'for (let i = 0; i < 10; i++) {...}' },

  { title: 'While Loop', description: 'Write a while loop.', difficulty: 'medium', xp: 35, coins: 20,
    instruction: 'Use a while loop.',
    starter: '', pattern: '\\bwhile\\s*\\(',
    hint: 'while (x < 10) {...}' },

  { title: 'Array Literal', description: 'Create an array with three numbers.', difficulty: 'medium', xp: 30, coins: 15,
    instruction: 'Create an array with at least 3 elements.',
    starter: '', pattern: '\\[\\s*[^\\]]+,[^\\]]+,[^\\]]+\\]',
    hint: '[1, 2, 3]' },

  { title: 'Array Push', description: 'Add an item to an array.', difficulty: 'medium', xp: 32, coins: 18,
    instruction: 'Use the .push() method.',
    starter: '', pattern: '\\.\\s*push\\s*\\(',
    hint: 'arr.push(item)' },

  { title: 'Array Length', description: 'Get the length of an array.', difficulty: 'medium', xp: 30, coins: 15,
    instruction: 'Read the .length property.',
    starter: '', pattern: '\\w+\\.length',
    hint: 'arr.length' },

  { title: 'Template Literal', description: 'Use template literals to embed a variable.', difficulty: 'medium', xp: 32, coins: 18,
    instruction: 'Use a backtick string with ${...} interpolation.',
    starter: '', pattern: '`[^`]*\\$\\{[^}]+\\}[^`]*`',
    hint: '`Hello ${name}`' },

  { title: 'Object Literal', description: 'Create an object with a name property.', difficulty: 'medium', xp: 32, coins: 18,
    instruction: 'Create an object literal with a name field.',
    starter: '', pattern: '\\{\\s*[\\s\\S]*name\\s*:\\s*["\\\'][^"\\\']+["\\\']',
    hint: '{ name: "Alice" }' },

  { title: 'Object Property Access', description: 'Read a property using dot notation.', difficulty: 'medium', xp: 30, coins: 15,
    instruction: 'Use dot notation to read a property on the user object.',
    starter: 'const user = { name: "Ada" };', pattern: '\\buser\\.name\\b',
    hint: 'user.name' },

  // ==================== JS DOM (86-90) ====================
  { title: 'Click Event Listener', description: 'Add a click listener.', difficulty: 'medium', xp: 40, coins: 22,
    instruction: 'Use addEventListener with the "click" event.',
    starter: '', pattern: 'addEventListener\\s*\\(\\s*["\\\']click["\\\']',
    hint: 'btn.addEventListener("click", fn)' },

  { title: 'getElementById', description: 'Select an element by its id.', difficulty: 'medium', xp: 35, coins: 20,
    instruction: 'Use document.getElementById().',
    starter: '', pattern: 'document\\.getElementById\\s*\\(\\s*["\\\']\\w+["\\\']',
    hint: 'document.getElementById("myId")' },

  { title: 'querySelector', description: 'Select an element using a CSS selector.', difficulty: 'medium', xp: 35, coins: 20,
    instruction: 'Use document.querySelector().',
    starter: '', pattern: 'document\\.querySelector\\s*\\(',
    hint: 'document.querySelector(".class")' },

  { title: 'Set innerHTML', description: "Change an element's HTML content.", difficulty: 'medium', xp: 35, coins: 20,
    instruction: 'Assign to the innerHTML property.',
    starter: '', pattern: '\\.innerHTML\\s*=',
    hint: 'el.innerHTML = "..."' },

  { title: 'Add CSS Class', description: 'Add a class to an element.', difficulty: 'medium', xp: 35, coins: 20,
    instruction: 'Use classList.add().',
    starter: '', pattern: '\\.classList\\.add\\s*\\(',
    hint: 'el.classList.add("active")' },

  // ==================== JS ADVANCED (91-100) ====================
  { title: 'Reverse a String', description: 'Write a function that reverses a string.', difficulty: 'hard', xp: 60, coins: 35,
    instruction: 'Define function reverse(s) that returns s reversed. Use split/reverse/join or a loop.',
    starter: 'function reverse(s) {\n  // your code\n}',
    pattern: 'function\\s+reverse\\s*\\([\\s\\S]*?\\)[\\s\\S]*?(\\.split\\s*\\([\\s\\S]*?\\.reverse\\s*\\([\\s\\S]*?\\.join|for\\s*\\([\\s\\S]*?\\.length[\\s\\S]*?--)',
    hint: 'return s.split("").reverse().join("")' },

  { title: 'Sum with Reduce', description: 'Sum all numbers in an array using reduce.', difficulty: 'hard', xp: 60, coins: 35,
    instruction: 'Use the .reduce() method to compute a sum.',
    starter: 'const nums = [1, 2, 3, 4];\n// use reduce',
    pattern: '\\.reduce\\s*\\(\\s*\\(?[\\w,\\s]+\\)?\\s*=>[\\s\\S]*\\+',
    hint: 'nums.reduce((a, b) => a + b, 0)' },

  { title: 'Filter Even Numbers', description: 'Filter an array to only include even numbers.', difficulty: 'hard', xp: 55, coins: 32,
    instruction: 'Use .filter() with a modulo check.',
    starter: 'const nums = [1, 2, 3, 4, 5];\n// use filter',
    pattern: '\\.filter\\s*\\([\\s\\S]*?%\\s*2\\s*===?\\s*0',
    hint: 'nums.filter(n => n % 2 === 0)' },

  { title: 'Map Doubling', description: 'Double every number with .map().', difficulty: 'hard', xp: 55, coins: 32,
    instruction: 'Use .map() to multiply each element by 2.',
    starter: 'const nums = [1, 2, 3];',
    pattern: '\\.map\\s*\\([\\s\\S]*?\\*\\s*2',
    hint: 'nums.map(n => n * 2)' },

  { title: 'Find Max', description: 'Find the maximum value in an array.', difficulty: 'hard', xp: 55, coins: 32,
    instruction: 'Use Math.max with the spread operator (or a loop).',
    starter: 'const nums = [3, 1, 9, 4];',
    pattern: 'Math\\.max\\s*\\(\\s*\\.\\.\\.\\s*\\w+|for\\s*\\([\\s\\S]*?>\\s*max',
    hint: 'Math.max(...nums)' },

  { title: 'Promise Resolve', description: 'Create a resolved Promise.', difficulty: 'hard', xp: 60, coins: 35,
    instruction: 'Use Promise.resolve() with any value.',
    starter: '', pattern: 'Promise\\.resolve\\s*\\(',
    hint: 'Promise.resolve(42)' },

  { title: 'Async Function', description: 'Declare an async function.', difficulty: 'hard', xp: 60, coins: 35,
    instruction: 'Use the async keyword to declare a function.',
    starter: '', pattern: 'async\\s+function\\s+\\w+|async\\s*\\(?[\\w,\\s]*\\)?\\s*=>',
    hint: 'async function load() {...}' },

  { title: 'Fetch API', description: 'Call the fetch API.', difficulty: 'hard', xp: 65, coins: 38,
    instruction: 'Use fetch() with any HTTP URL.',
    starter: '', pattern: '\\bfetch\\s*\\(\\s*["\\\']https?://',
    hint: 'fetch("https://api.example.com/data")' },

  { title: 'localStorage Save', description: 'Save a value to localStorage.', difficulty: 'hard', xp: 55, coins: 32,
    instruction: 'Use localStorage.setItem.',
    starter: '', pattern: 'localStorage\\.setItem\\s*\\(',
    hint: 'localStorage.setItem("key", "value")' },

  { title: 'Recursive Factorial', description: 'Write a recursive factorial function.', difficulty: 'hard', xp: 75, coins: 45,
    instruction: 'Define function factorial(n) that returns n! using recursion.',
    starter: 'function factorial(n) {\n  // recurse\n}',
    pattern: 'function\\s+factorial\\s*\\(\\s*n\\s*\\)[\\s\\S]*factorial\\s*\\(\\s*n\\s*-\\s*1',
    hint: 'return n <= 1 ? 1 : n * factorial(n - 1)' },
];

// Pull in the other 3 section files
const { BACKEND_CHALLENGES } = require('./challenges-backend');
const { CYBERSEC_CHALLENGES } = require('./challenges-cybersecurity');
const { EHR_CHALLENGES } = require('./challenges-ehr');

// Convert per-section arrays to flat DB rows with the section field set.
function mapSection(arr, section) {
  return arr.map((c, idx) => ({
    section,
    title: c.title,
    description: c.description,
    difficulty: c.difficulty,
    xp_reward: c.xp,
    coins_reward: c.coins,
    challenge_type: 'code_match',
    challenge_data: JSON.stringify({
      instruction: c.instruction,
      starter_code: c.starter,
      expected_pattern: c.pattern,
      hint: c.hint
    }),
    order_num: idx + 1
  }));
}

function buildSeedRows() {
  return [
    ...mapSection(FRONTEND_CHALLENGES,  'frontend'),
    ...mapSection(BACKEND_CHALLENGES,   'backend'),
    ...mapSection(CYBERSEC_CHALLENGES,  'cybersecurity'),
    ...mapSection(EHR_CHALLENGES,       'ehr'),
  ];
}

module.exports = {
  FRONTEND_CHALLENGES,
  BACKEND_CHALLENGES,
  CYBERSEC_CHALLENGES,
  EHR_CHALLENGES,
  buildSeedRows
};
