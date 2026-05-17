// 100 Cybersecurity challenges: encoding, ciphers, hashes, security concepts

const CYBERSEC_CHALLENGES = [
  // ===== Encoding (1-20) =====
  { title: 'Base64 Decode Hello', description: 'Decode SGVsbG8= from Base64.', difficulty: 'easy', xp: 20, coins: 10,
    instruction: 'SGVsbG8= decoded is what word?', starter: '',
    pattern: '^\\s*Hello\\s*$', hint: 'Use a Base64 decoder or btoa/atob' },

  { title: 'Base64 Decode World', description: 'Decode V29ybGQ=.', difficulty: 'easy', xp: 20, coins: 10,
    instruction: 'V29ybGQ= decoded is what word?', starter: '',
    pattern: '^\\s*World\\s*$', hint: 'It is a common 5-letter word' },

  { title: 'Base64 Encode Hi', description: 'Encode "Hi" as Base64.', difficulty: 'medium', xp: 28, coins: 15,
    instruction: 'Type the Base64 encoding of: Hi', starter: '',
    pattern: '^\\s*SGk=?\\s*$', hint: 'atob("SGk=") returns Hi' },

  { title: 'Base64 Decode Secret', description: 'Decode c2VjcmV0.', difficulty: 'easy', xp: 22, coins: 10,
    instruction: 'c2VjcmV0 decoded is?', starter: '',
    pattern: '^\\s*secret\\s*$', hint: 'A word meaning hidden' },

  { title: 'JS atob', description: 'Use atob() to decode Base64.', difficulty: 'medium', xp: 30, coins: 15,
    instruction: 'Call atob() with any Base64 string.', starter: '',
    pattern: '\\batob\\s*\\(', hint: "atob('SGVsbG8=')" },

  { title: 'JS btoa', description: 'Use btoa() to encode to Base64.', difficulty: 'medium', xp: 30, coins: 15,
    instruction: 'Call btoa() with any string.', starter: '',
    pattern: '\\bbtoa\\s*\\(', hint: "btoa('Hello')" },

  { title: 'URL Encode Space', description: 'How is a space encoded in a URL?', difficulty: 'easy', xp: 20, coins: 10,
    instruction: 'Type the URL-encoded form of a single space.', starter: '',
    pattern: '^\\s*(%20|\\+)\\s*$', hint: '%20 is the percent-encoded space' },

  { title: 'encodeURIComponent', description: 'Use the JS encoding helper.', difficulty: 'medium', xp: 28, coins: 15,
    instruction: 'Call encodeURIComponent() with any string.', starter: '',
    pattern: 'encodeURIComponent\\s*\\(', hint: "encodeURIComponent('hello world')" },

  { title: 'Hex of A', description: 'What is the hex code for character A?', difficulty: 'medium', xp: 25, coins: 12,
    instruction: 'Type the 2-digit hex code (with or without 0x).', starter: '',
    pattern: '^\\s*(0x)?41\\s*$', hint: 'ASCII A = 65 decimal = 0x41' },

  { title: 'Binary of 5', description: 'What is 5 in binary?', difficulty: 'easy', xp: 22, coins: 10,
    instruction: 'Type 5 as binary digits.', starter: '',
    pattern: '^\\s*0?b?101\\s*$', hint: '4 + 1 = 101' },

  { title: 'Binary of 10', description: 'What is 10 in binary?', difficulty: 'easy', xp: 22, coins: 10,
    instruction: 'Type 10 as binary digits.', starter: '',
    pattern: '^\\s*0?b?1010\\s*$', hint: '8 + 2 = 1010' },

  { title: 'Hex of 255', description: 'What is 255 in hex?', difficulty: 'easy', xp: 22, coins: 10,
    instruction: 'Type 255 as hex (with or without 0x).', starter: '',
    pattern: '^\\s*(0x)?[Ff]{2}\\s*$', hint: '255 = 0xFF' },

  { title: 'ROT13 Decode', description: 'Decode "Uryyb" with ROT13.', difficulty: 'medium', xp: 32, coins: 18,
    instruction: 'What is "Uryyb" decoded with ROT13?', starter: '',
    pattern: '^\\s*Hello\\s*$', hint: 'ROT13 shifts letters by 13 positions' },

  { title: 'Caesar Cipher Decode', description: 'Decode "Khoor" (Caesar +3).', difficulty: 'medium', xp: 32, coins: 18,
    instruction: 'What is "Khoor" with a Caesar shift back by 3?', starter: '',
    pattern: '^\\s*Hello\\s*$', hint: 'K→H, h→e, o→l, o→l, r→o' },

  { title: 'Morse SOS', description: 'What does ... --- ... mean?', difficulty: 'easy', xp: 25, coins: 12,
    instruction: 'Decode the morse signal: ... --- ...', starter: '',
    pattern: '^\\s*SOS\\s*$', hint: 'Three dots, three dashes, three dots = SOS' },

  { title: 'Morse HELLO Length', description: 'How many letters in "....-...-..---" decoded?', difficulty: 'easy', xp: 22, coins: 10,
    instruction: 'How many letters does ".... . .-.. .-.. ---" represent? Type a number.', starter: '',
    pattern: '^\\s*5\\s*$', hint: 'It spells HELLO' },

  { title: 'JS String.charCodeAt', description: 'Get the ASCII code of A.', difficulty: 'medium', xp: 28, coins: 15,
    instruction: "Call 'A'.charCodeAt(0).", starter: '',
    pattern: "['\"]\\w['\"]\\.charCodeAt\\s*\\(", hint: "'A'.charCodeAt(0) === 65" },

  { title: 'fromCharCode', description: 'Convert ASCII 72 to a character.', difficulty: 'medium', xp: 30, coins: 15,
    instruction: 'Use String.fromCharCode(72).', starter: '',
    pattern: 'String\\.fromCharCode\\s*\\(\\s*72', hint: 'String.fromCharCode(72) === "H"' },

  { title: 'Hex Decode 48', description: 'What character is hex 48?', difficulty: 'medium', xp: 25, coins: 12,
    instruction: 'Type the ASCII character for hex 48.', starter: '',
    pattern: '^\\s*H\\s*$', hint: 'Hex 48 = 72 decimal = ASCII H' },

  { title: 'Hex Decode 41', description: 'What character is hex 41?', difficulty: 'medium', xp: 25, coins: 12,
    instruction: 'Type the ASCII character for hex 41.', starter: '',
    pattern: '^\\s*A\\s*$', hint: 'Hex 41 = 65 decimal = ASCII A' },

  // ===== Hashing (21-35) =====
  { title: 'Hash Algorithm SHA', description: 'Name a hash algorithm starting with SHA.', difficulty: 'easy', xp: 22, coins: 10,
    instruction: 'Type any SHA algorithm name (SHA-1, SHA-256, etc).', starter: '',
    pattern: '^\\s*SHA[-_]?(1|224|256|384|512)\\s*$', hint: 'SHA-256 is the most common' },

  { title: 'MD5 Length', description: 'How many hex chars in an MD5 hash?', difficulty: 'medium', xp: 28, coins: 15,
    instruction: 'Type the number.', starter: '',
    pattern: '^\\s*32\\s*$', hint: '128 bits = 32 hex characters' },

  { title: 'SHA-256 Length', description: 'How many hex chars in a SHA-256 hash?', difficulty: 'medium', xp: 30, coins: 15,
    instruction: 'Type the number.', starter: '',
    pattern: '^\\s*64\\s*$', hint: '256 bits = 64 hex characters' },

  { title: 'Hash One-Way', description: 'Are hashes reversible?', difficulty: 'easy', xp: 22, coins: 10,
    instruction: 'Type yes or no.', starter: '',
    pattern: '^\\s*[Nn]o\\s*$', hint: 'Hashes are one-way functions' },

  { title: 'Crypto Hash Node', description: 'Use crypto.createHash in Node.', difficulty: 'hard', xp: 50, coins: 28,
    instruction: 'Call crypto.createHash with any algorithm.', starter: '',
    pattern: 'crypto\\.createHash\\s*\\(', hint: "crypto.createHash('sha256')" },

  { title: 'Bcrypt Hash', description: 'Hash with bcrypt.', difficulty: 'hard', xp: 50, coins: 28,
    instruction: 'Call bcrypt.hash with password and salt rounds.', starter: '',
    pattern: 'bcrypt\\.hash\\s*\\(', hint: 'await bcrypt.hash(pwd, 10)' },

  { title: 'Bcrypt Compare', description: 'Verify a bcrypt hash.', difficulty: 'hard', xp: 48, coins: 26,
    instruction: 'Call bcrypt.compare.', starter: '',
    pattern: 'bcrypt\\.compare\\s*\\(', hint: 'await bcrypt.compare(pwd, hash)' },

  { title: 'Salt Purpose', description: 'A salt prevents what kind of attack?', difficulty: 'medium', xp: 32, coins: 18,
    instruction: 'Type the attack type (single word).', starter: '',
    pattern: '^\\s*rainbow\\s*$', hint: 'Pre-computed hash lookup tables' },

  { title: 'JWT Algorithm', description: 'A common JWT signing algorithm.', difficulty: 'medium', xp: 30, coins: 15,
    instruction: 'Type the algorithm name (e.g. HS256).', starter: '',
    pattern: '^\\s*HS256\\s*$', hint: 'HMAC with SHA-256' },

  { title: 'JWT Parts', description: 'How many parts in a JWT (separated by dots)?', difficulty: 'medium', xp: 28, coins: 15,
    instruction: 'Type a number.', starter: '',
    pattern: '^\\s*3\\s*$', hint: 'header.payload.signature' },

  { title: 'HMAC Use', description: 'HMAC stands for?', difficulty: 'medium', xp: 32, coins: 18,
    instruction: 'Type the expansion (Hash-based ...).', starter: '',
    pattern: 'Hash[\\s-]?based\\s+Message\\s+Authentication', hint: 'Hash-based Message Authentication Code' },

  { title: 'Digital Signature', description: 'A digital signature uses?', difficulty: 'medium', xp: 32, coins: 18,
    instruction: 'Type the key type used to sign (single word: private or public).', starter: '',
    pattern: '^\\s*private\\s*$', hint: 'You sign with the private key, verify with public' },

  { title: 'Verify Signature', description: 'A signature is verified using?', difficulty: 'medium', xp: 32, coins: 18,
    instruction: 'Type which key (private or public).', starter: '',
    pattern: '^\\s*public\\s*$', hint: 'You verify with the public key' },

  { title: 'RSA Key Size', description: 'A common secure RSA key size?', difficulty: 'medium', xp: 30, coins: 15,
    instruction: 'Type the bit length (e.g. 2048).', starter: '',
    pattern: '^\\s*2048\\s*$', hint: '2048 bits is the current minimum recommendation' },

  { title: 'Hash Collision', description: 'Two inputs giving the same hash is called?', difficulty: 'medium', xp: 32, coins: 18,
    instruction: 'Single word.', starter: '',
    pattern: '^\\s*collision\\s*$', hint: 'Hash ___' },

  // ===== Network Security (36-55) =====
  { title: 'HTTPS Port', description: 'Default port for HTTPS?', difficulty: 'easy', xp: 22, coins: 10,
    instruction: 'Type a number.', starter: '',
    pattern: '^\\s*443\\s*$', hint: 'Port 443 is HTTPS' },

  { title: 'HTTP Port', description: 'Default port for HTTP?', difficulty: 'easy', xp: 20, coins: 10,
    instruction: 'Type a number.', starter: '',
    pattern: '^\\s*80\\s*$', hint: 'Port 80 is HTTP' },

  { title: 'SSH Port', description: 'Default port for SSH?', difficulty: 'easy', xp: 22, coins: 10,
    instruction: 'Type a number.', starter: '',
    pattern: '^\\s*22\\s*$', hint: 'Port 22 is SSH' },

  { title: 'FTP Port', description: 'Default port for FTP?', difficulty: 'easy', xp: 22, coins: 10,
    instruction: 'Type a number.', starter: '',
    pattern: '^\\s*21\\s*$', hint: 'Port 21' },

  { title: 'DNS Port', description: 'Default DNS port?', difficulty: 'easy', xp: 22, coins: 10,
    instruction: 'Type a number.', starter: '',
    pattern: '^\\s*53\\s*$', hint: 'Port 53 (UDP/TCP)' },

  { title: 'TLS Handshake', description: 'TLS handshake establishes what type of session?', difficulty: 'medium', xp: 35, coins: 20,
    instruction: 'Single word (e.g. encrypted, plain, public).', starter: '',
    pattern: '^\\s*encrypted\\s*$', hint: 'An encrypted session' },

  { title: 'HTTPS Replaces', description: 'HTTPS uses TLS instead of which older protocol?', difficulty: 'medium', xp: 32, coins: 18,
    instruction: 'Type the older protocol name (3 letters).', starter: '',
    pattern: '^\\s*SSL\\s*$', hint: 'SSL was the predecessor of TLS' },

  { title: 'HSTS Header', description: 'Header that forces HTTPS?', difficulty: 'hard', xp: 45, coins: 25,
    instruction: 'Type the header name (4 letters).', starter: '',
    pattern: '^\\s*HSTS\\s*$', hint: 'HTTP Strict Transport Security' },

  { title: 'CSP Header', description: 'Header that restricts script sources?', difficulty: 'hard', xp: 45, coins: 25,
    instruction: 'Type the header acronym (3 letters).', starter: '',
    pattern: '^\\s*CSP\\s*$', hint: 'Content Security Policy' },

  { title: 'CORS Acronym', description: 'CORS stands for?', difficulty: 'medium', xp: 35, coins: 20,
    instruction: 'Type the full expansion.', starter: '',
    pattern: 'Cross[\\s-]?Origin\\s+Resource\\s+Sharing', hint: 'Cross-Origin Resource Sharing' },

  { title: 'Same Origin Policy', description: 'SOP is enforced by which software?', difficulty: 'medium', xp: 35, coins: 20,
    instruction: 'Type the software type (single word, e.g. browser).', starter: '',
    pattern: '^\\s*browser\\s*$', hint: 'Browsers enforce same-origin' },

  { title: 'X-Frame-Options Value', description: 'Prevent your page from being framed?', difficulty: 'hard', xp: 42, coins: 22,
    instruction: 'Common header value (single word).', starter: '',
    pattern: '^\\s*DENY\\s*$', hint: 'X-Frame-Options: DENY' },

  { title: 'Cookie Flag Secure', description: 'Flag that makes a cookie HTTPS-only?', difficulty: 'medium', xp: 32, coins: 18,
    instruction: 'Type the flag name.', starter: '',
    pattern: '^\\s*[Ss]ecure\\s*$', hint: 'Secure flag' },

  { title: 'Cookie Flag HttpOnly', description: 'Flag that hides cookies from JavaScript?', difficulty: 'medium', xp: 32, coins: 18,
    instruction: 'Type the flag name.', starter: '',
    pattern: '^\\s*HttpOnly\\s*$', hint: 'HttpOnly prevents document.cookie' },

  { title: 'Firewall Layer', description: 'Firewalls operate primarily at which OSI layer (number)?', difficulty: 'medium', xp: 35, coins: 20,
    instruction: 'Type a single digit.', starter: '',
    pattern: '^\\s*[34]\\s*$', hint: 'Network (3) or Transport (4)' },

  { title: 'VPN Acronym', description: 'VPN stands for?', difficulty: 'easy', xp: 25, coins: 12,
    instruction: 'Type the expansion.', starter: '',
    pattern: 'Virtual\\s+Private\\s+Network', hint: 'Virtual Private Network' },

  { title: 'DDoS Acronym', description: 'DDoS stands for?', difficulty: 'medium', xp: 30, coins: 15,
    instruction: 'Type the expansion (Distributed ...).', starter: '',
    pattern: 'Distributed\\s+Denial\\s+of\\s+Service', hint: 'Distributed Denial of Service' },

  { title: 'Man-in-the-Middle', description: 'Acronym for an interception attack?', difficulty: 'medium', xp: 30, coins: 15,
    instruction: 'Type the acronym (4 chars).', starter: '',
    pattern: '^\\s*MITM\\s*$', hint: 'Man-In-The-Middle' },

  { title: 'SQL Injection', description: 'Acronym for injecting SQL into queries?', difficulty: 'medium', xp: 30, coins: 15,
    instruction: 'Type the acronym (4 chars).', starter: '',
    pattern: '^\\s*SQLI?\\s*$', hint: 'SQLi (SQL injection)' },

  { title: 'XSS Acronym', description: 'Cross-site script injection acronym?', difficulty: 'medium', xp: 30, coins: 15,
    instruction: 'Type the 3-letter acronym.', starter: '',
    pattern: '^\\s*XSS\\s*$', hint: 'X-S-S' },

  // ===== Attacks & Prevention (56-80) =====
  { title: 'XSS Prevention', description: 'Main XSS defense?', difficulty: 'medium', xp: 35, coins: 20,
    instruction: 'Single word (escape, encode, allow, sanitize).', starter: '',
    pattern: '^\\s*(escape|encode|sanitize)\\s*$', hint: 'Escape user input before rendering' },

  { title: 'SQLi Prevention', description: 'Best way to prevent SQL injection?', difficulty: 'medium', xp: 38, coins: 22,
    instruction: 'Two words (e.g. prepared statements).', starter: '',
    pattern: 'prepared\\s+statements?|parameteri[sz]ed\\s+quer', hint: 'Prepared statements / parameterized queries' },

  { title: 'CSRF Token', description: 'Defense against CSRF (single word)?', difficulty: 'medium', xp: 35, coins: 20,
    instruction: 'Type the security artifact used.', starter: '',
    pattern: '^\\s*token\\s*$', hint: 'CSRF token sent with form' },

  { title: 'Path Traversal', description: 'Dot-dot-slash attack tries to access?', difficulty: 'medium', xp: 35, coins: 20,
    instruction: 'Single word (parent, child, root, system).', starter: '',
    pattern: '^\\s*(parent|root)\\s*$', hint: '../ goes up to the parent directory' },

  { title: 'OWASP Top', description: 'OWASP publishes a "Top ___" security risks list.', difficulty: 'easy', xp: 25, coins: 12,
    instruction: 'Type the number.', starter: '',
    pattern: '^\\s*10\\s*$', hint: 'OWASP Top 10' },

  { title: 'Password Hash Algorithm', description: 'Best modern password hash algorithm?', difficulty: 'medium', xp: 38, coins: 22,
    instruction: 'Type one: bcrypt, argon2, scrypt, md5.', starter: '',
    pattern: '^\\s*(bcrypt|argon2|scrypt)\\s*$', hint: 'Use bcrypt, argon2 or scrypt — not MD5' },

  { title: 'Password Min Length', description: 'NIST recommends a minimum password length of?', difficulty: 'easy', xp: 25, coins: 12,
    instruction: 'Type a number.', starter: '',
    pattern: '^\\s*8\\s*$', hint: '8 characters minimum' },

  { title: 'Two-Factor', description: 'Acronym for two-factor authentication?', difficulty: 'easy', xp: 22, coins: 10,
    instruction: 'Type the 3-letter acronym.', starter: '',
    pattern: '^\\s*2FA\\s*$', hint: '2FA / MFA' },

  { title: 'Phishing', description: "What's the attack where you trick users into giving credentials?", difficulty: 'easy', xp: 22, coins: 10,
    instruction: 'Single word.', starter: '',
    pattern: '^\\s*phishing\\s*$', hint: 'Sounds like fishing' },

  { title: 'Brute Force', description: 'Trying all passwords is called?', difficulty: 'easy', xp: 22, coins: 10,
    instruction: 'Two words.', starter: '',
    pattern: 'brute\\s+force', hint: 'Brute force' },

  { title: 'Dictionary Attack', description: 'Trying common passwords from a list is called?', difficulty: 'easy', xp: 25, coins: 12,
    instruction: 'Two words.', starter: '',
    pattern: 'dictionary\\s+attack', hint: 'Dictionary attack' },

  { title: 'White Hat', description: 'Ethical hackers are called ___ hat.', difficulty: 'easy', xp: 20, coins: 10,
    instruction: 'Single word.', starter: '',
    pattern: '^\\s*white\\s*$', hint: 'White hat hackers' },

  { title: 'Black Hat', description: 'Malicious hackers are called ___ hat.', difficulty: 'easy', xp: 20, coins: 10,
    instruction: 'Single word.', starter: '',
    pattern: '^\\s*black\\s*$', hint: 'Black hat hackers' },

  { title: 'Penetration Test', description: 'Authorized hacking is called ___ testing.', difficulty: 'easy', xp: 25, coins: 12,
    instruction: 'Single word.', starter: '',
    pattern: '^\\s*penetration\\s*$', hint: 'Pen test / penetration test' },

  { title: 'Vulnerability ID', description: 'Public vuln IDs start with which 3 letters?', difficulty: 'medium', xp: 30, coins: 15,
    instruction: 'Type the 3-letter acronym.', starter: '',
    pattern: '^\\s*CVE\\s*$', hint: 'CVE-YYYY-NNNN' },

  { title: 'Ransomware', description: 'Malware that encrypts files for ransom?', difficulty: 'easy', xp: 25, coins: 12,
    instruction: 'Single word.', starter: '',
    pattern: '^\\s*ransomware\\s*$', hint: 'Combines ransom + software' },

  { title: 'Keylogger', description: 'Tool that records keystrokes?', difficulty: 'easy', xp: 25, coins: 12,
    instruction: 'Single word.', starter: '',
    pattern: '^\\s*keylogger\\s*$', hint: 'Key + logger' },

  { title: 'Zero Day', description: 'A vuln unknown to the vendor is called ___ day.', difficulty: 'medium', xp: 30, coins: 15,
    instruction: 'Single word/number.', starter: '',
    pattern: '^\\s*(zero|0)\\s*$', hint: 'Zero day' },

  { title: 'Trojan', description: 'Malware disguised as legitimate software?', difficulty: 'easy', xp: 25, coins: 12,
    instruction: 'Single word.', starter: '',
    pattern: '^\\s*[Tt]rojan\\s*$', hint: 'Like the Trojan horse' },

  { title: 'Worm', description: 'Self-replicating malware?', difficulty: 'easy', xp: 22, coins: 10,
    instruction: 'Single word.', starter: '',
    pattern: '^\\s*worm\\s*$', hint: '4 letters' },

  { title: 'Sandbox', description: 'Isolated environment for testing untrusted code?', difficulty: 'medium', xp: 28, coins: 15,
    instruction: 'Single word.', starter: '',
    pattern: '^\\s*sandbox\\s*$', hint: 'Sandbox isolation' },

  { title: 'Honeypot', description: 'Decoy system to trap attackers?', difficulty: 'medium', xp: 28, coins: 15,
    instruction: 'Single word.', starter: '',
    pattern: '^\\s*honeypot\\s*$', hint: 'Sticky and sweet trap' },

  { title: 'Privilege Escalation', description: 'Gaining higher access than allowed?', difficulty: 'hard', xp: 45, coins: 25,
    instruction: 'Two words.', starter: '',
    pattern: 'privilege\\s+escalation', hint: 'Privilege escalation' },

  { title: 'Sudo Command', description: 'Linux command to run as root?', difficulty: 'easy', xp: 22, coins: 10,
    instruction: 'Type the 4-letter command.', starter: '',
    pattern: '^\\s*sudo\\s*$', hint: 'Super user do' },

  { title: 'Chmod 755', description: "Numeric permission for rwx for owner, rx for group and other?", difficulty: 'medium', xp: 30, coins: 15,
    instruction: 'Type the 3-digit number.', starter: '',
    pattern: '^\\s*755\\s*$', hint: '7=rwx, 5=r-x' },

  // ===== Crypto & Code (81-100) =====
  { title: 'Symmetric Cipher AES', description: 'Famous symmetric block cipher?', difficulty: 'medium', xp: 30, coins: 15,
    instruction: 'Type the 3-letter acronym.', starter: '',
    pattern: '^\\s*AES\\s*$', hint: 'Advanced Encryption Standard' },

  { title: 'Asymmetric RSA', description: 'Famous asymmetric algorithm?', difficulty: 'medium', xp: 30, coins: 15,
    instruction: 'Type the 3-letter acronym.', starter: '',
    pattern: '^\\s*RSA\\s*$', hint: 'Rivest–Shamir–Adleman' },

  { title: 'Symmetric Same Key', description: 'In symmetric crypto, encryption and decryption use?', difficulty: 'medium', xp: 32, coins: 18,
    instruction: 'Type how many distinct keys are used (1 or 2).', starter: '',
    pattern: '^\\s*1\\s*$', hint: 'Same single shared key' },

  { title: 'Asymmetric Different Keys', description: 'In asymmetric crypto, how many keys per party?', difficulty: 'medium', xp: 32, coins: 18,
    instruction: 'Type a number (1 or 2).', starter: '',
    pattern: '^\\s*2\\s*$', hint: 'Public + private' },

  { title: 'Key Exchange Diffie', description: 'Famous key-exchange protocol named after?', difficulty: 'hard', xp: 45, coins: 25,
    instruction: 'Type 2 surnames (e.g. Diffie-Hellman).', starter: '',
    pattern: 'Diffie[\\s-]?Hellman', hint: 'Diffie-Hellman' },

  { title: 'AES Block Size', description: 'AES block size in bits?', difficulty: 'hard', xp: 42, coins: 22,
    instruction: 'Type a number.', starter: '',
    pattern: '^\\s*128\\s*$', hint: 'AES blocks are 128 bits' },

  { title: 'Nonce Once', description: 'A nonce should be used ___?', difficulty: 'medium', xp: 30, coins: 15,
    instruction: 'Single word.', starter: '',
    pattern: '^\\s*once\\s*$', hint: 'Nonce = Number used ONCE' },

  { title: 'OTP Acronym', description: 'One-time ___ ?', difficulty: 'easy', xp: 22, coins: 10,
    instruction: 'Type what OTP commonly stands for (password).', starter: '',
    pattern: '^\\s*password\\s*$', hint: 'One-Time Password' },

  { title: 'TOTP Time', description: "Default TOTP code time window in seconds?", difficulty: 'hard', xp: 42, coins: 22,
    instruction: 'Type a number.', starter: '',
    pattern: '^\\s*30\\s*$', hint: 'TOTP codes refresh every 30s' },

  { title: 'PGP Acronym', description: 'PGP stands for?', difficulty: 'medium', xp: 30, coins: 15,
    instruction: 'Type the 3-word expansion.', starter: '',
    pattern: 'Pretty\\s+Good\\s+Privacy', hint: 'Pretty Good Privacy' },

  { title: 'Cert Authority', description: 'Acronym for organization issuing SSL certs?', difficulty: 'medium', xp: 28, coins: 15,
    instruction: 'Type the 2-letter acronym.', starter: '',
    pattern: '^\\s*CA\\s*$', hint: 'Certificate Authority' },

  { title: 'Cert Format', description: 'Common SSL certificate file extension?', difficulty: 'medium', xp: 30, coins: 15,
    instruction: 'Type the extension (no dot).', starter: '',
    pattern: '^\\s*(pem|crt|cer)\\s*$', hint: '.pem .crt or .cer' },

  { title: 'IPv4 Octets', description: 'How many octets in an IPv4 address?', difficulty: 'easy', xp: 22, coins: 10,
    instruction: 'Type a number.', starter: '',
    pattern: '^\\s*4\\s*$', hint: '4 octets like 192.168.0.1' },

  { title: 'IPv6 Bits', description: 'How many bits in IPv6?', difficulty: 'medium', xp: 28, coins: 15,
    instruction: 'Type a number.', starter: '',
    pattern: '^\\s*128\\s*$', hint: 'IPv6 = 128 bits' },

  { title: 'Localhost IP', description: 'IPv4 address of localhost?', difficulty: 'easy', xp: 22, coins: 10,
    instruction: 'Type the address.', starter: '',
    pattern: '^\\s*127\\.0\\.0\\.1\\s*$', hint: '127.0.0.1' },

  { title: 'Private IP Range', description: 'A common private subnet starts with which 3 numbers (192...)?', difficulty: 'medium', xp: 30, coins: 15,
    instruction: 'Type the first 3 numbers separated by dots.', starter: '',
    pattern: '^\\s*192\\.168(\\.0)?\\s*$', hint: '192.168.x.x' },

  { title: 'Netcat Tool', description: 'Famous TCP/UDP swiss army tool (2 letters)?', difficulty: 'medium', xp: 32, coins: 18,
    instruction: 'Type the command.', starter: '',
    pattern: '^\\s*nc\\s*$', hint: 'nc / netcat' },

  { title: 'Nmap Tool', description: 'Famous network scanner?', difficulty: 'easy', xp: 25, coins: 12,
    instruction: 'Type the tool name.', starter: '',
    pattern: '^\\s*nmap\\s*$', hint: 'Network mapper' },

  { title: 'Wireshark Tool', description: 'GUI packet analyzer?', difficulty: 'easy', xp: 25, coins: 12,
    instruction: 'Type the tool name.', starter: '',
    pattern: '^\\s*wireshark\\s*$', hint: '9 letters' },

  { title: 'Burp Suite', description: 'Web pentesting proxy by PortSwigger?', difficulty: 'medium', xp: 30, coins: 15,
    instruction: 'Type the tool name (single word burp).', starter: '',
    pattern: '^\\s*burp\\s*$', hint: 'Burp Suite' },
];

module.exports = { CYBERSEC_CHALLENGES };
