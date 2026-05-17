// 100 Backend challenges: Node.js, SQL, Python, Excel formulas, algorithms

const BACKEND_CHALLENGES = [
  // ===== Node.js & JavaScript basics (1-15) =====
  { title: 'Require Module', description: 'Import the built-in fs module in Node.', difficulty: 'easy', xp: 15, coins: 5,
    instruction: "Use require to load the 'fs' module.", starter: '',
    pattern: "require\\s*\\(\\s*['\"]fs['\"]", hint: "const fs = require('fs')" },

  { title: 'Module Exports', description: 'Export a function as a module.', difficulty: 'easy', xp: 18, coins: 8,
    instruction: 'Assign a function to module.exports.', starter: '',
    pattern: 'module\\.exports\\s*=', hint: 'module.exports = fn' },

  { title: 'Console Log Server', description: 'Print "Server running" to the console.', difficulty: 'easy', xp: 15, coins: 5,
    instruction: 'Use console.log with the exact text: Server running', starter: '',
    pattern: "console\\.log\\s*\\(\\s*['\"]Server\\s+running['\"]", hint: "console.log('Server running')" },

  { title: 'Process Environment', description: 'Read an environment variable.', difficulty: 'easy', xp: 18, coins: 8,
    instruction: 'Read process.env.PORT.', starter: '',
    pattern: 'process\\.env\\.PORT', hint: 'process.env.PORT' },

  { title: 'JSON Stringify', description: 'Convert an object to JSON.', difficulty: 'easy', xp: 18, coins: 8,
    instruction: 'Use JSON.stringify on any object.', starter: '',
    pattern: 'JSON\\.stringify\\s*\\(', hint: 'JSON.stringify(obj)' },

  { title: 'JSON Parse', description: 'Parse a JSON string into an object.', difficulty: 'easy', xp: 18, coins: 8,
    instruction: 'Use JSON.parse on a string.', starter: '',
    pattern: 'JSON\\.parse\\s*\\(', hint: 'JSON.parse(str)' },

  { title: 'Read File Async', description: 'Read a file asynchronously.', difficulty: 'medium', xp: 32, coins: 18,
    instruction: 'Use fs.readFile with any path.', starter: '',
    pattern: 'fs\\.readFile\\s*\\(', hint: "fs.readFile('file.txt', cb)" },

  { title: 'Write File', description: 'Write content to a file.', difficulty: 'medium', xp: 32, coins: 18,
    instruction: 'Use fs.writeFile.', starter: '',
    pattern: 'fs\\.writeFile\\s*\\(', hint: "fs.writeFile('out.txt', data, cb)" },

  { title: 'Path Join', description: 'Join two path segments.', difficulty: 'easy', xp: 20, coins: 10,
    instruction: 'Use path.join with two arguments.', starter: '',
    pattern: 'path\\.join\\s*\\(', hint: "path.join(__dirname, 'file.txt')" },

  { title: 'Set Timeout', description: 'Schedule a callback after 1000ms.', difficulty: 'easy', xp: 20, coins: 10,
    instruction: 'Call setTimeout with 1000 as the delay.', starter: '',
    pattern: 'setTimeout\\s*\\([\\s\\S]*?,\\s*1000', hint: 'setTimeout(fn, 1000)' },

  { title: 'Set Interval', description: 'Run a callback every second.', difficulty: 'easy', xp: 22, coins: 10,
    instruction: 'Call setInterval with 1000 as the delay.', starter: '',
    pattern: 'setInterval\\s*\\([\\s\\S]*?,\\s*1000', hint: 'setInterval(fn, 1000)' },

  { title: 'Try/Catch', description: 'Catch a runtime error.', difficulty: 'medium', xp: 30, coins: 15,
    instruction: 'Wrap code in a try/catch block.', starter: '',
    pattern: '\\btry\\s*\\{[\\s\\S]*?\\}\\s*catch\\s*\\(', hint: 'try { ... } catch (err) { ... }' },

  { title: 'Throw Error', description: 'Throw a new Error.', difficulty: 'medium', xp: 30, coins: 15,
    instruction: 'Use throw new Error with any message.', starter: '',
    pattern: 'throw\\s+new\\s+Error\\s*\\(', hint: "throw new Error('msg')" },

  { title: 'Map a Set', description: 'Create a Map data structure.', difficulty: 'medium', xp: 28, coins: 15,
    instruction: 'Construct a new Map().', starter: '',
    pattern: 'new\\s+Map\\s*\\(', hint: 'const m = new Map()' },

  { title: 'Unique Set', description: 'Create a Set to remove duplicates.', difficulty: 'medium', xp: 28, coins: 15,
    instruction: 'Construct a new Set().', starter: '',
    pattern: 'new\\s+Set\\s*\\(', hint: 'new Set([1,2,2,3]) → {1,2,3}' },

  // ===== Express / HTTP (16-30) =====
  { title: 'Express Import', description: 'Require the express package.', difficulty: 'easy', xp: 18, coins: 8,
    instruction: "Use require to load express.", starter: '',
    pattern: "require\\s*\\(\\s*['\"]express['\"]", hint: "const express = require('express')" },

  { title: 'Create App', description: 'Create an Express app instance.', difficulty: 'easy', xp: 20, coins: 10,
    instruction: 'Call express() and store it in app.', starter: '',
    pattern: 'app\\s*=\\s*express\\s*\\(', hint: 'const app = express()' },

  { title: 'GET Route', description: 'Define a GET endpoint at /hello.', difficulty: 'medium', xp: 32, coins: 18,
    instruction: 'Use app.get with the path /hello.', starter: '',
    pattern: "app\\.get\\s*\\(\\s*['\"]/hello['\"]", hint: "app.get('/hello', (req, res) => ...)" },

  { title: 'POST Route', description: 'Define a POST endpoint at /submit.', difficulty: 'medium', xp: 32, coins: 18,
    instruction: 'Use app.post with the path /submit.', starter: '',
    pattern: "app\\.post\\s*\\(\\s*['\"]/submit['\"]", hint: "app.post('/submit', handler)" },

  { title: 'Send JSON Response', description: 'Reply with a JSON object.', difficulty: 'medium', xp: 32, coins: 18,
    instruction: 'Use res.json() to send any object.', starter: '',
    pattern: 'res\\.json\\s*\\(', hint: 'res.json({ ok: true })' },

  { title: 'Send Status', description: 'Send HTTP status 404.', difficulty: 'medium', xp: 30, coins: 15,
    instruction: 'Chain res.status(404).', starter: '',
    pattern: 'res\\.status\\s*\\(\\s*404', hint: 'res.status(404).json(...)' },

  { title: 'Listen on Port', description: 'Start server on port 3000.', difficulty: 'easy', xp: 22, coins: 10,
    instruction: 'Call app.listen with 3000.', starter: '',
    pattern: 'app\\.listen\\s*\\(\\s*3000', hint: 'app.listen(3000)' },

  { title: 'Use Middleware', description: 'Register a middleware function.', difficulty: 'medium', xp: 35, coins: 20,
    instruction: 'Call app.use with any function.', starter: '',
    pattern: 'app\\.use\\s*\\(', hint: 'app.use(express.json())' },

  { title: 'Request Body', description: 'Access the request body.', difficulty: 'medium', xp: 30, coins: 15,
    instruction: 'Read req.body.', starter: '',
    pattern: '\\breq\\.body\\b', hint: 'const { name } = req.body' },

  { title: 'Request Query', description: 'Read a URL query parameter.', difficulty: 'medium', xp: 30, coins: 15,
    instruction: 'Read req.query.', starter: '',
    pattern: '\\breq\\.query\\b', hint: 'req.query.search' },

  { title: 'Route Params', description: 'Read a URL path parameter.', difficulty: 'medium', xp: 32, coins: 18,
    instruction: 'Read req.params.', starter: '',
    pattern: '\\breq\\.params\\b', hint: "app.get('/user/:id', req => req.params.id)" },

  { title: 'CORS Middleware', description: 'Enable CORS in Express.', difficulty: 'medium', xp: 30, coins: 15,
    instruction: "Use cors() inside app.use().", starter: '',
    pattern: 'app\\.use\\s*\\(\\s*cors\\s*\\(', hint: 'app.use(cors())' },

  { title: 'Static Files', description: 'Serve a static directory.', difficulty: 'medium', xp: 32, coins: 18,
    instruction: 'Use express.static() inside app.use().', starter: '',
    pattern: 'express\\.static\\s*\\(', hint: "app.use(express.static('public'))" },

  { title: 'Redirect', description: 'Redirect to /home.', difficulty: 'medium', xp: 30, coins: 15,
    instruction: 'Call res.redirect with /home.', starter: '',
    pattern: "res\\.redirect\\s*\\(\\s*['\"]/home['\"]", hint: "res.redirect('/home')" },

  { title: 'Bearer Token Header', description: 'Read Authorization header.', difficulty: 'medium', xp: 35, coins: 20,
    instruction: 'Read req.headers.authorization.', starter: '',
    pattern: 'req\\.headers\\.authorization', hint: 'const token = req.headers.authorization' },

  // ===== SQL queries (31-50) =====
  { title: 'Select All', description: 'Get all rows from users table.', difficulty: 'easy', xp: 22, coins: 10,
    instruction: 'Write: SELECT * FROM users', starter: '',
    pattern: 'SELECT\\s+\\*\\s+FROM\\s+users', hint: 'SELECT * FROM users' },

  { title: 'Select Columns', description: 'Get specific columns from a table.', difficulty: 'easy', xp: 24, coins: 12,
    instruction: 'SELECT name, email FROM users', starter: '',
    pattern: 'SELECT\\s+name\\s*,\\s*email\\s+FROM\\s+users', hint: 'SELECT name, email FROM users' },

  { title: 'Where Clause', description: 'Filter rows by age.', difficulty: 'easy', xp: 25, coins: 12,
    instruction: "SELECT * FROM users WHERE age > 18", starter: '',
    pattern: 'SELECT\\s+\\*\\s+FROM\\s+users\\s+WHERE\\s+age\\s*>\\s*18', hint: 'WHERE age > 18' },

  { title: 'Insert Row', description: 'Insert a new user.', difficulty: 'medium', xp: 32, coins: 18,
    instruction: "INSERT INTO users (name) VALUES ('Ali')", starter: '',
    pattern: "INSERT\\s+INTO\\s+users[\\s\\S]*VALUES\\s*\\(", hint: "INSERT INTO users (name) VALUES ('Ali')" },

  { title: 'Update Row', description: "Update a user's name.", difficulty: 'medium', xp: 32, coins: 18,
    instruction: "UPDATE users SET name = '...' WHERE id = 1", starter: '',
    pattern: "UPDATE\\s+users\\s+SET[\\s\\S]*WHERE", hint: 'UPDATE table SET col = ... WHERE id = ...' },

  { title: 'Delete Row', description: 'Remove a user by id.', difficulty: 'medium', xp: 32, coins: 18,
    instruction: 'DELETE FROM users WHERE id = 5', starter: '',
    pattern: 'DELETE\\s+FROM\\s+users\\s+WHERE\\s+id\\s*=\\s*5', hint: 'DELETE FROM users WHERE id = 5' },

  { title: 'Count Rows', description: 'Count total users.', difficulty: 'easy', xp: 25, coins: 12,
    instruction: 'SELECT COUNT(*) FROM users', starter: '',
    pattern: 'SELECT\\s+COUNT\\s*\\(\\s*\\*\\s*\\)\\s+FROM\\s+users', hint: 'COUNT(*)' },

  { title: 'Order By', description: 'Sort users by name ascending.', difficulty: 'medium', xp: 28, coins: 15,
    instruction: 'SELECT * FROM users ORDER BY name', starter: '',
    pattern: 'SELECT\\s+\\*\\s+FROM\\s+users\\s+ORDER\\s+BY\\s+name', hint: 'ORDER BY name ASC' },

  { title: 'Limit Results', description: 'Get only 10 rows.', difficulty: 'medium', xp: 28, coins: 15,
    instruction: 'SELECT * FROM users LIMIT 10', starter: '',
    pattern: 'SELECT[\\s\\S]+LIMIT\\s+10', hint: 'LIMIT 10' },

  { title: 'Inner Join', description: 'Join users with orders.', difficulty: 'hard', xp: 50, coins: 28,
    instruction: 'Use INNER JOIN to connect users and orders.', starter: '',
    pattern: 'SELECT[\\s\\S]+FROM\\s+users[\\s\\S]+INNER\\s+JOIN\\s+orders[\\s\\S]+ON', hint: 'FROM users INNER JOIN orders ON users.id = orders.user_id' },

  { title: 'Left Join', description: 'Get all users with their orders (if any).', difficulty: 'hard', xp: 50, coins: 28,
    instruction: 'Use LEFT JOIN.', starter: '',
    pattern: 'LEFT\\s+JOIN', hint: 'FROM users LEFT JOIN orders ON ...' },

  { title: 'Group By', description: 'Count orders per user.', difficulty: 'hard', xp: 50, coins: 28,
    instruction: 'Use GROUP BY user_id.', starter: '',
    pattern: 'GROUP\\s+BY\\s+user_id', hint: 'GROUP BY user_id' },

  { title: 'Like Operator', description: 'Find names starting with A.', difficulty: 'medium', xp: 32, coins: 18,
    instruction: "SELECT * FROM users WHERE name LIKE 'A%'", starter: '',
    pattern: "WHERE\\s+name\\s+LIKE\\s+['\"]A%['\"]", hint: "LIKE 'A%'" },

  { title: 'Distinct', description: 'Get unique cities.', difficulty: 'medium', xp: 30, coins: 15,
    instruction: 'SELECT DISTINCT city FROM users', starter: '',
    pattern: 'SELECT\\s+DISTINCT\\s+city\\s+FROM\\s+users', hint: 'SELECT DISTINCT col FROM table' },

  { title: 'Create Table', description: 'Create a products table.', difficulty: 'hard', xp: 45, coins: 25,
    instruction: 'CREATE TABLE products with id (INTEGER PRIMARY KEY) and name.', starter: '',
    pattern: 'CREATE\\s+TABLE\\s+products[\\s\\S]+id[\\s\\S]+PRIMARY\\s+KEY[\\s\\S]+name', hint: 'CREATE TABLE products (id INTEGER PRIMARY KEY, name TEXT)' },

  { title: 'Alter Add Column', description: 'Add an email column.', difficulty: 'hard', xp: 48, coins: 26,
    instruction: 'ALTER TABLE users ADD COLUMN email TEXT', starter: '',
    pattern: 'ALTER\\s+TABLE\\s+users\\s+ADD\\s+COLUMN\\s+email', hint: 'ALTER TABLE t ADD COLUMN name TYPE' },

  { title: 'Drop Table', description: 'Delete an entire table.', difficulty: 'medium', xp: 32, coins: 18,
    instruction: 'DROP TABLE old_data', starter: '',
    pattern: 'DROP\\s+TABLE\\s+old_data', hint: 'DROP TABLE name' },

  { title: 'Average', description: 'Get average age.', difficulty: 'medium', xp: 32, coins: 18,
    instruction: 'SELECT AVG(age) FROM users', starter: '',
    pattern: 'SELECT\\s+AVG\\s*\\(\\s*age\\s*\\)\\s+FROM\\s+users', hint: 'AVG(column)' },

  { title: 'Sum Total', description: 'Sum all order amounts.', difficulty: 'medium', xp: 32, coins: 18,
    instruction: 'SELECT SUM(amount) FROM orders', starter: '',
    pattern: 'SELECT\\s+SUM\\s*\\(\\s*amount\\s*\\)\\s+FROM\\s+orders', hint: 'SUM(column)' },

  { title: 'Max Value', description: 'Find the highest score.', difficulty: 'medium', xp: 30, coins: 15,
    instruction: 'SELECT MAX(score) FROM games', starter: '',
    pattern: 'SELECT\\s+MAX\\s*\\(\\s*score\\s*\\)\\s+FROM\\s+games', hint: 'MAX(column)' },

  // ===== Python basics (51-65) =====
  { title: 'Python Print', description: 'Print "Hello" in Python.', difficulty: 'easy', xp: 18, coins: 8,
    instruction: "Use Python's print() with the string Hello.", starter: '',
    pattern: "print\\s*\\(\\s*['\"]Hello['\"]\\s*\\)", hint: "print('Hello')" },

  { title: 'Python Variable', description: 'Assign a string to a variable.', difficulty: 'easy', xp: 18, coins: 8,
    instruction: "Assign 'World' to a variable named name.", starter: '',
    pattern: "name\\s*=\\s*['\"]World['\"]", hint: "name = 'World'" },

  { title: 'Python Function', description: 'Define a Python function.', difficulty: 'medium', xp: 28, coins: 15,
    instruction: 'Define a function named greet.', starter: '',
    pattern: 'def\\s+greet\\s*\\(', hint: 'def greet(): pass' },

  { title: 'Python If', description: 'Write an if statement.', difficulty: 'easy', xp: 22, coins: 10,
    instruction: 'Use an if statement with any condition (ends with a colon).', starter: '',
    pattern: '\\bif\\s+[\\s\\S]+?:', hint: 'if x > 0:' },

  { title: 'Python For Loop', description: 'Loop over a range.', difficulty: 'medium', xp: 28, coins: 15,
    instruction: 'Use for ... in range(...).', starter: '',
    pattern: 'for\\s+\\w+\\s+in\\s+range\\s*\\(', hint: 'for i in range(10):' },

  { title: 'Python List', description: 'Create a list of numbers.', difficulty: 'easy', xp: 20, coins: 10,
    instruction: 'Create a Python list with at least 3 numbers.', starter: '',
    pattern: '\\[\\s*\\d+\\s*,\\s*\\d+\\s*,\\s*\\d+', hint: '[1, 2, 3]' },

  { title: 'Python Dict', description: 'Create a dictionary.', difficulty: 'medium', xp: 28, coins: 15,
    instruction: "Create a dict with a 'name' key.", starter: '',
    pattern: "\\{\\s*['\"]name['\"]\\s*:", hint: "{'name': 'Ali'}" },

  { title: 'Python F-String', description: 'Use an f-string.', difficulty: 'medium', xp: 28, coins: 15,
    instruction: 'Write an f-string with {name} inside.', starter: '',
    pattern: "f['\"][^'\"]*\\{[^}]+\\}[^'\"]*['\"]", hint: "f'Hello {name}'" },

  { title: 'Python Import', description: 'Import the json module.', difficulty: 'easy', xp: 20, coins: 10,
    instruction: 'Use: import json', starter: '',
    pattern: '\\bimport\\s+json\\b', hint: 'import json' },

  { title: 'Python Len', description: 'Get the length of a list.', difficulty: 'easy', xp: 18, coins: 8,
    instruction: 'Use len() on any list or string.', starter: '',
    pattern: '\\blen\\s*\\(', hint: 'len(my_list)' },

  { title: 'Python Class', description: 'Define a class named Animal.', difficulty: 'hard', xp: 45, coins: 25,
    instruction: 'Use the class keyword with the name Animal.', starter: '',
    pattern: 'class\\s+Animal\\s*[(:]', hint: 'class Animal: pass' },

  { title: 'Python Try', description: 'Wrap code in try/except.', difficulty: 'medium', xp: 32, coins: 18,
    instruction: 'Use try and except keywords.', starter: '',
    pattern: 'try\\s*:[\\s\\S]+except', hint: 'try:\\n  ...\\nexcept:\\n  ...' },

  { title: 'Python Lambda', description: 'Write a one-line lambda.', difficulty: 'hard', xp: 42, coins: 24,
    instruction: 'Use the lambda keyword.', starter: '',
    pattern: 'lambda\\s+\\w+\\s*:', hint: 'lambda x: x * 2' },

  { title: 'Python List Comp', description: 'Use a list comprehension.', difficulty: 'hard', xp: 45, coins: 25,
    instruction: 'Use [... for ... in ...] syntax.', starter: '',
    pattern: '\\[[^\\]]*\\bfor\\s+\\w+\\s+in\\b', hint: '[x*2 for x in nums]' },

  { title: 'Python Open File', description: 'Open a file for reading.', difficulty: 'medium', xp: 35, coins: 20,
    instruction: 'Use open() with mode \"r\".', starter: '',
    pattern: "open\\s*\\([\\s\\S]*?,\\s*['\"]r['\"]", hint: "open('file.txt', 'r')" },

  // ===== Excel formulas (66-80) =====
  { title: 'Excel SUM', description: 'Sum a range of cells.', difficulty: 'easy', xp: 18, coins: 8,
    instruction: 'Write the formula =SUM(A1:A10)', starter: '',
    pattern: '=\\s*SUM\\s*\\(\\s*A1\\s*:\\s*A10\\s*\\)', hint: '=SUM(A1:A10)' },

  { title: 'Excel AVERAGE', description: 'Average a range.', difficulty: 'easy', xp: 18, coins: 8,
    instruction: '=AVERAGE(B1:B20)', starter: '',
    pattern: '=\\s*AVERAGE\\s*\\(\\s*B1\\s*:\\s*B20\\s*\\)', hint: '=AVERAGE(B1:B20)' },

  { title: 'Excel COUNT', description: 'Count numeric cells.', difficulty: 'easy', xp: 18, coins: 8,
    instruction: '=COUNT(A1:A50)', starter: '',
    pattern: '=\\s*COUNT\\s*\\(\\s*A1\\s*:\\s*A50\\s*\\)', hint: '=COUNT(range)' },

  { title: 'Excel IF', description: 'Conditional logic.', difficulty: 'medium', xp: 28, coins: 15,
    instruction: '=IF(A1>10, "High", "Low")', starter: '',
    pattern: '=\\s*IF\\s*\\(\\s*A1\\s*>\\s*10\\s*,\\s*["\\\']High["\\\']', hint: '=IF(condition, true, false)' },

  { title: 'Excel VLOOKUP', description: 'Lookup a value vertically.', difficulty: 'hard', xp: 48, coins: 26,
    instruction: '=VLOOKUP(A2, B:D, 3, FALSE)', starter: '',
    pattern: '=\\s*VLOOKUP\\s*\\(\\s*A2\\s*,', hint: '=VLOOKUP(lookup, table, col, exact)' },

  { title: 'Excel HLOOKUP', description: 'Lookup a value horizontally.', difficulty: 'hard', xp: 48, coins: 26,
    instruction: '=HLOOKUP(A1, 1:3, 2, FALSE)', starter: '',
    pattern: '=\\s*HLOOKUP\\s*\\(', hint: '=HLOOKUP(...)' },

  { title: 'Excel CONCATENATE', description: 'Join two strings.', difficulty: 'medium', xp: 28, coins: 15,
    instruction: '=CONCATENATE(A1, B1) or =A1&B1', starter: '',
    pattern: '=\\s*(CONCATENATE\\s*\\(|\\w+\\s*&\\s*\\w+)', hint: '=A1&" "&B1' },

  { title: 'Excel LEFT', description: 'Extract first 3 characters.', difficulty: 'medium', xp: 28, coins: 15,
    instruction: '=LEFT(A1, 3)', starter: '',
    pattern: '=\\s*LEFT\\s*\\(\\s*A1\\s*,\\s*3', hint: '=LEFT(A1, 3)' },

  { title: 'Excel RIGHT', description: 'Extract last 4 characters.', difficulty: 'medium', xp: 28, coins: 15,
    instruction: '=RIGHT(A1, 4)', starter: '',
    pattern: '=\\s*RIGHT\\s*\\(\\s*A1\\s*,\\s*4', hint: '=RIGHT(A1, 4)' },

  { title: 'Excel LEN', description: 'Get the length of a string.', difficulty: 'easy', xp: 20, coins: 10,
    instruction: '=LEN(A1)', starter: '',
    pattern: '=\\s*LEN\\s*\\(\\s*A1\\s*\\)', hint: '=LEN(A1)' },

  { title: 'Excel UPPER', description: 'Convert text to uppercase.', difficulty: 'easy', xp: 20, coins: 10,
    instruction: '=UPPER(A1)', starter: '',
    pattern: '=\\s*UPPER\\s*\\(\\s*A1\\s*\\)', hint: '=UPPER(A1)' },

  { title: 'Excel ROUND', description: 'Round to 2 decimal places.', difficulty: 'medium', xp: 25, coins: 12,
    instruction: '=ROUND(A1, 2)', starter: '',
    pattern: '=\\s*ROUND\\s*\\(\\s*A1\\s*,\\s*2', hint: '=ROUND(A1, 2)' },

  { title: 'Excel MAX', description: 'Find max in range.', difficulty: 'easy', xp: 22, coins: 10,
    instruction: '=MAX(A1:A100)', starter: '',
    pattern: '=\\s*MAX\\s*\\(\\s*A1\\s*:\\s*A100\\s*\\)', hint: '=MAX(range)' },

  { title: 'Excel MIN', description: 'Find min in range.', difficulty: 'easy', xp: 22, coins: 10,
    instruction: '=MIN(A1:A100)', starter: '',
    pattern: '=\\s*MIN\\s*\\(\\s*A1\\s*:\\s*A100\\s*\\)', hint: '=MIN(range)' },

  { title: 'Excel COUNTIF', description: 'Count cells matching criteria.', difficulty: 'hard', xp: 42, coins: 22,
    instruction: '=COUNTIF(A:A, ">10")', starter: '',
    pattern: '=\\s*COUNTIF\\s*\\(', hint: '=COUNTIF(range, criteria)' },

  // ===== Algorithms (81-100) =====
  { title: 'Binary Search', description: 'Reference binary search.', difficulty: 'hard', xp: 60, coins: 32,
    instruction: 'Use a while loop with mid calculation to search.', starter: 'function binarySearch(arr, target) {\n  // your code\n}',
    pattern: 'function\\s+binarySearch[\\s\\S]+while[\\s\\S]+mid', hint: 'mid = Math.floor((lo + hi) / 2)' },

  { title: 'Bubble Sort', description: 'Implement bubble sort.', difficulty: 'hard', xp: 55, coins: 30,
    instruction: 'Use a nested for loop and swap.', starter: 'function bubbleSort(arr) {\n  // your code\n}',
    pattern: 'function\\s+bubbleSort[\\s\\S]+for\\s*\\([\\s\\S]+for\\s*\\(', hint: 'nested for loops, swap adjacent if out of order' },

  { title: 'Fibonacci', description: 'Get the nth Fibonacci number.', difficulty: 'hard', xp: 55, coins: 30,
    instruction: 'Define function fib(n) that returns fib of n.', starter: 'function fib(n) {\n  // your code\n}',
    pattern: 'function\\s+fib[\\s\\S]+(fib\\s*\\(\\s*n\\s*-|return\\s+a)', hint: 'either recurse or iterate with two variables' },

  { title: 'Reverse Array', description: 'Reverse an array in place.', difficulty: 'medium', xp: 35, coins: 18,
    instruction: 'Use the .reverse() method.', starter: '',
    pattern: '\\.reverse\\s*\\(\\s*\\)', hint: 'arr.reverse()' },

  { title: 'Array Sort', description: 'Sort numbers ascending.', difficulty: 'medium', xp: 35, coins: 18,
    instruction: 'Use .sort() with a numeric comparator.', starter: '',
    pattern: '\\.sort\\s*\\(\\s*\\(?\\w+\\s*,\\s*\\w+\\)?\\s*=>\\s*\\w+\\s*-\\s*\\w+', hint: 'arr.sort((a, b) => a - b)' },

  { title: 'String Includes', description: 'Check if a string contains another.', difficulty: 'medium', xp: 25, coins: 12,
    instruction: 'Use the .includes() method on a string.', starter: '',
    pattern: '\\.\\s*includes\\s*\\(', hint: "'hello'.includes('lo')" },

  { title: 'Split String', description: 'Split a string by space.', difficulty: 'easy', xp: 25, coins: 12,
    instruction: "Call .split(' ') on a string.", starter: '',
    pattern: "\\.split\\s*\\(\\s*['\"][ ]['\"]", hint: "'a b c'.split(' ')" },

  { title: 'Join Array', description: 'Join an array with commas.', difficulty: 'easy', xp: 25, coins: 12,
    instruction: "Call .join(',') on an array.", starter: '',
    pattern: "\\.join\\s*\\(\\s*['\"],['\"]", hint: "['a','b'].join(',')" },

  { title: 'Math Floor', description: 'Round down a number.', difficulty: 'easy', xp: 22, coins: 10,
    instruction: 'Use Math.floor().', starter: '',
    pattern: 'Math\\.floor\\s*\\(', hint: 'Math.floor(3.7)' },

  { title: 'Math Random', description: 'Generate a random number.', difficulty: 'easy', xp: 22, coins: 10,
    instruction: 'Use Math.random().', starter: '',
    pattern: 'Math\\.random\\s*\\(\\s*\\)', hint: 'Math.random()' },

  { title: 'Recursive Sum', description: 'Sum 1..n recursively.', difficulty: 'hard', xp: 55, coins: 30,
    instruction: 'Define function sumTo(n) that recurses.', starter: 'function sumTo(n) {\n  // recurse\n}',
    pattern: 'function\\s+sumTo[\\s\\S]+sumTo\\s*\\(\\s*n\\s*-\\s*1', hint: 'return n + sumTo(n - 1)' },

  { title: 'Object Keys', description: 'Get an object\'s keys.', difficulty: 'medium', xp: 28, coins: 15,
    instruction: 'Use Object.keys().', starter: '',
    pattern: 'Object\\.keys\\s*\\(', hint: 'Object.keys(obj)' },

  { title: 'Object Values', description: "Get an object's values.", difficulty: 'medium', xp: 28, coins: 15,
    instruction: 'Use Object.values().', starter: '',
    pattern: 'Object\\.values\\s*\\(', hint: 'Object.values(obj)' },

  { title: 'Object Entries', description: 'Get key/value pairs.', difficulty: 'medium', xp: 30, coins: 15,
    instruction: 'Use Object.entries().', starter: '',
    pattern: 'Object\\.entries\\s*\\(', hint: 'Object.entries(obj)' },

  { title: 'JSON to String', description: 'Serialize with 2-space indent.', difficulty: 'medium', xp: 32, coins: 18,
    instruction: 'Call JSON.stringify with a second and third arg.', starter: '',
    pattern: 'JSON\\.stringify\\s*\\([\\s\\S]+?,[\\s\\S]+?,\\s*2', hint: 'JSON.stringify(obj, null, 2)' },

  { title: 'Date Now', description: 'Get current timestamp.', difficulty: 'easy', xp: 22, coins: 10,
    instruction: 'Use Date.now().', starter: '',
    pattern: 'Date\\.now\\s*\\(\\s*\\)', hint: 'Date.now()' },

  { title: 'New Date', description: 'Create a Date object.', difficulty: 'easy', xp: 22, coins: 10,
    instruction: 'Use new Date().', starter: '',
    pattern: 'new\\s+Date\\s*\\(', hint: 'new Date()' },

  { title: 'parseInt', description: 'Convert string to integer.', difficulty: 'easy', xp: 22, coins: 10,
    instruction: 'Use parseInt with any string.', starter: '',
    pattern: 'parseInt\\s*\\(', hint: "parseInt('42')" },

  { title: 'parseFloat', description: 'Convert string to float.', difficulty: 'easy', xp: 22, coins: 10,
    instruction: 'Use parseFloat with any string.', starter: '',
    pattern: 'parseFloat\\s*\\(', hint: "parseFloat('3.14')" },

  { title: 'Bcrypt Hash', description: 'Hash a password with bcrypt.', difficulty: 'hard', xp: 50, coins: 28,
    instruction: 'Call bcrypt.hash with a password and salt rounds.', starter: '',
    pattern: 'bcrypt\\.hash\\s*\\(', hint: 'await bcrypt.hash(password, 10)' },
];

module.exports = { BACKEND_CHALLENGES };
