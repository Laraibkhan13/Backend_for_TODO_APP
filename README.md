##Todo List Backend

This backend application, built with Express.js, provides an API for managing a todo list. It includes the following routes:

##Routes

POST /createtodo
Description: Creates a new todo item.
Request Body: Includes title (string), description (string), and completed (boolean, default is false).
Response: Returns the created todo item or an error if validation fails.

GET /alltodo
Description: Retrieves all todo items.
Response: Returns a list of todos.

POST /complete
Description: Updates the status of a specific todo to completed.
Request Body: Includes id (string) of the todo to be updated.
Response: Confirms the update or returns an error if the todo is not found.

Schema Validation
The Zod library is used for schema validation to ensure the integrity of data throughout the application. Each route validates incoming requests to maintain data consistency and prevent errors.