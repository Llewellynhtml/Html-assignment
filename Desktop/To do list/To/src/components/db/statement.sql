CREATE TABLE IF NOT EXISTS user (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
);

-- Example insert statement with unique email
INSERT INTO user (username, email, password) 
VALUES ('Lesego', 'lesego@example.com', 'securepassword');

          




            
  
