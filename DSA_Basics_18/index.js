// ==========================================
// BACKTRACKING: 2D Maze Solver
// ==========================================

class MazeSolver {
    constructor(grid) {
        this.maze = grid;
        this.rows = grid.length;
        this.cols = grid[0].length;
        // We will store the coordinates of our successful path here
        this.path = []; 
    }

    // This is the recursive Backtracking function
    explore(row, col) {
        // --- 1. BASE CASES (When to stop looking) ---
        
        // Are we out of bounds?
        if (row < 0 || col < 0 || row >= this.rows || col >= this.cols) {
            return false;
        }

        // Did we hit a wall ('1') or a space we already visited ('2')?
        if (this.maze[row][col] === 1 || this.maze[row][col] === 2) {
            return false;
        }

        // Did we reach the exit? (Bottom-Right corner)
        if (row === this.rows - 1 && col === this.cols - 1) {
            this.path.push(`[${row}, ${col}]`);
            this.maze[row][col] = 'E'; // Mark the exit
            return true;
        }

        // --- 2. MAKE A MOVE ---
        
        // Mark the current cell as 'Visited' (so we don't walk in circles)
        this.maze[row][col] = 2;
        this.path.push(`[${row}, ${col}]`);

        // --- 3. EXPLORE ALL OPTIONS (Down, Right, Up, Left) ---
        
        // If ANY of these directions leads to the exit, we pass 'true' all the way back up
        if (
            this.explore(row + 1, col) || // Try going Down
            this.explore(row, col + 1) || // Try going Right
            this.explore(row - 1, col) || // Try going Up
            this.explore(row, col - 1)    // Try going Left
        ) {
            return true; 
        }

        // --- 4. BACKTRACK ---
        
        // If we get to this line of code, it means ALL 4 directions above returned false.
        // We are at a dead end! We must undo our move and step back.
        this.path.pop(); 
        
        // Unmark this cell so it's just an open space again (optional depending on if 
        // you want to completely block off dead ends permanently, but conceptually important)
        this.maze[row][col] = 0; 
        
        return false;
    }

    // A helper method to print the maze nicely in the terminal
    printMaze() {
        console.log("-----------------------");
        for (let row of this.maze) {
            // Replace our numbers with readable symbols
            let visually = row.map(cell => {
                if (cell === 1) return "█"; // Wall
                if (cell === 2) return "·"; // Breadcrumbs (Visited)
                if (cell === 'E') return "★"; // Exit
                return " "; // Open space
            });
            console.log(visually.join(" "));
        }
        console.log("-----------------------");
    }
}

// ==========================================
// USAGE: Building and Solving the Maze
// ==========================================

// 0 = Open Path, 1 = Wall
const myMap = [
    [0, 1, 0, 0, 0],
    [0, 1, 0, 1, 0],
    [0, 0, 0, 1, 0],
    [1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0]
];

console.log("--- Initial Maze (0 is open, 1 is wall) ---");
console.log(myMap);

const solver = new MazeSolver(myMap);

console.log("\n--- Starting Backtracking Algorithm ---");
// Start the algorithm at row 0, column 0
const isSolvable = solver.explore(0, 0);

if (isSolvable) {
    console.log("Success! We found the exit.");
    console.log("Path taken:", solver.path.join(" -> "));
    console.log("\n--- Visual Map of the Route ---");
    solver.printMaze();
} else {
    console.log("This maze is impossible to solve!");
}
