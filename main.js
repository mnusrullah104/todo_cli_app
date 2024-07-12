import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let todosquestion = await inquirer.prompt([
        {
            name: "firstQuestion",
            type: "input",
            message: "What would you like to add in todos"
        },
        {
            name: "secondQuestion",
            type: "confirm",
            message: "would you like to add more todos",
            default: "true"
        }
    ]);
    todos.push(todosquestion.firstQuestion);
    console.log(todos);
    condition = todosquestion.secondQuestion;
}
