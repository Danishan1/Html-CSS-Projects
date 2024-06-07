import pool from "../database/pool.js";

// Function to create the users table
export const createUsersTable = () => {
    
  // SQL statement to create the users table
  const createTableSQL = `
    CREATE TABLE IF NOT EXISTS fullstack_project.users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(50) NOT NULL,
      email VARCHAR(100) NOT NULL
    )
  `;

  // Acquire a connection from the pool
  pool.getConnection((err, connection) => {
    if (err) {
      console.error("Error acquiring connection:", err);
      return;
    }

    // Execute the CREATE TABLE statement
    connection.query(createTableSQL, (error, results, fields) => {
      // Release the connection back to the pool
      connection.release();

      if (error) {
        console.error("Error creating users table:", error);
        return;
      }
      console.log("Users table created successfully.");
    });
  });
};
