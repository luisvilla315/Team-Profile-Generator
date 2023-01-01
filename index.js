// include page generation  //

const generateHTML = require('./src/generateHTML');

// include Staff profiles //

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 

// include node packages //

const fs = require('fs'); 
const inquirer = require('inquirer');
  
const teamArray = []; 

//prompts for manager//

const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Enter manager name', 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter a manager name");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter a manager ID",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Please enter a manager ID")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter an email address",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter an email!')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter a manager office number",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ('Please enter an office number')
                    return false; 
                } else {
                    return true;
                }
            }
        }
    ])
    .then(managerInput => {
        const  { name, id, email, officeNumber } = managerInput; 
        const manager = new Manager (name, id, email, officeNumber);

        teamArray.push(manager); 
        console.log(manager); 
    })
};

//prompts for employees //

const addEmployee = () => {
    console.log('employee added to the team');

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: 'choose employee role',
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: 'enter employee name', 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter a name");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'enter an employee ID',
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ('Please enter an employee ID')
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter an employee email',
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter an email!')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter a github username',
            when: (input) => input.role === 'Engineer',
            validate: nameInput => {
                if (nameInput ) {
                    return true;
                } else {
                    console.log ('Please enter a github username')
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'enter a school name',
            when: (input) => input.role === 'Intern',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ('Please enter a school name')
                }
            }
        },

    // asks user if they would like to continue//

        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more members to your team?',
            default: false
        }
    ])
    .then(employeeData => {

    // employee types //

        let { name, id, email, role, github, school, confirmAddEmployee } = employeeData; 
        let employee; 

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);

            console.log(employee);

        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);

            console.log(employee);
        }

        teamArray.push(employee); 

        if (confirmAddEmployee) {
            return addEmployee(teamArray); 
        } else {
            return teamArray;
        }
    })

};

// generate HTML file //

const writeFile = data => {
    fs.writeFile('./dist/test.html', data, err => {

        // console logs an erorr message //

        if (err) {
            console.log(err);
            return;

        // logs message if successful //

        } else {
            console.log("Your team profile has been successfully created! Please check out the index.html")
        }
    })
}; 

addManager()
  .then(addEmployee)
  .then(teamArray => {
    return generateHTML(teamArray);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });