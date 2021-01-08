# data

## list of todos
Each todo item can be stored as an object w/an ID and a string containing the actual todo. These items will all be stored in a list that can be globally accessed from throughout the app. Unique IDs can be generated using NanoID. After a todo item is added using the todo adder, a new object is created w/the text that was inputted and a newly generated ID. This object will be added to the list. When deleting a todo, the program will search for the object with the corresponding ID and delete this object from the list.

# components

## search feature

### search bar
The search bar contains a text field that the user can type in.
Each time the text field is changed, the search bar passes its value to another function that stores the current search query. This function should then go through the list and filter for only those todo objects whose todo strings contain the search query, generating a list of search results.

### search results
Another component will display the search results by iterating through the generated list.

## todo object

### todo item
The todo item is the actual text of the todo.

### delete button
When the delete button is clicked, it passes the ID of the current todo item to a delete function that removes it from the global list of todos.

## todo adder

### text field
User can input text for a new todo in the text field.

### add button
When the add button is clicked, it calls an add function that generates a new ID for the inputted text and passes the todo as an object to the global list of todos.

# organization??

- *list of todos*
- *add/delete functions*
- **search feature**
    - *list of search results*
    - *search result generator function*
    - **search bar**
    - **search results**
- **todo list**
    - **individual todo object**
        - **todo item**
        - **delete button**
- **todo adder**
    - **text field**
    - **add button**