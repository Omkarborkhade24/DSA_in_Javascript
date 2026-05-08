// ==========================================
// 1. THE NODE: A Single Character
// ==========================================
class TrieNode {
    constructor() {
        // Instead of left/right pointers, we use a Hash Map (Object)
        // This allows a node to have up to 26 children (one for each letter)
        this.children = {}; 
        
        // We need to know if this character completes a valid word.
        // For example, in "APPLE", the 'E' node will have isEndOfWord = true, 
        // but the 'P' nodes will have isEndOfWord = false.
        this.isEndOfWord = false; 
    }
}

// ==========================================
// 2. THE STRUCTURE: The Prefix Tree
// ==========================================
class Trie {
    constructor() {
        // The root is always an empty node
        this.root = new TrieNode();
    }

    // --- INSERTING A WORD ---
    insert(word) {
        let currentNode = this.root;

        // Loop through every character in the word
        for (let i = 0; i < word.length; i++) {
            let char = word[i];

            // If the character doesn't exist as a child yet, create it!
            if (!currentNode.children[char]) {
                currentNode.children[char] = new TrieNode();
            }

            // Move our pointer down to that child node
            currentNode = currentNode.children[char];
        }

        // Once we finish looping through the word, mark the very last node as a valid ending
        currentNode.isEndOfWord = true;
    }

    // --- SEARCHING FOR EXACT WORDS ---
    // Returns true ONLY if the exact, full word was inserted
    search(word) {
        let currentNode = this.root;

        for (let i = 0; i < word.length; i++) {
            let char = word[i];

            // If at any point the next letter isn't there, the word doesn't exist
            if (!currentNode.children[char]) {
                return false;
            }
            
            // Move down the tree
            currentNode = currentNode.children[char];
        }

        // We found all the letters, but is it a complete word? 
        // (e.g., if we inserted "APPLE", searching for "APP" should return false here)
        return currentNode.isEndOfWord;
    }

    // --- AUTOCOMPLETE BASE (Searching for Prefixes) ---
    // Returns true if ANY word starts with these letters
    startsWith(prefix) {
        let currentNode = this.root;

        for (let i = 0; i < prefix.length; i++) {
            let char = prefix[i];

            if (!currentNode.children[char]) {
                return false; // Prefix doesn't exist at all
            }
            
            currentNode = currentNode.children[char];
        }

        // If we made it through the whole loop, the prefix exists!
        // We don't care if isEndOfWord is true or false.
        return true; 
    }
}

// ==========================================
// 3. USAGE: Building our Autocomplete Engine
// ==========================================

const dictionary = new Trie();

// 1. Train the dictionary
dictionary.insert("apple");
dictionary.insert("app");
dictionary.insert("application");
dictionary.insert("bat");
dictionary.insert("batch");

console.log("--- Exact Word Search ---");
console.log('Does "apple" exist?', dictionary.search("apple")); // true
console.log('Does "app" exist?', dictionary.search("app"));     // true (Because we explicitly inserted it)
console.log('Does "appl" exist?', dictionary.search("appl"));   // false (It's a prefix, but not an exact word we inserted)
console.log('Does "batman" exist?', dictionary.search("batman"));// false

console.log("\n--- Prefix Search (Autocomplete Trigger) ---");
console.log('Do words start with "app"?', dictionary.startsWith("app"));   // true
console.log('Do words start with "bat"?', dictionary.startsWith("bat"));   // true
console.log('Do words start with "cat"?', dictionary.startsWith("cat"));   // false
