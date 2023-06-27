# 0x01. ES6 Promises
<hr>
![](https://drive.google.com/file/d/1zW_m-pY94BJOPKIys8fqSZsozxiwEoAB/view?usp=drive_link)
## LEARNING OBJECTIVES
At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

- Promises (how, why, and what)
- How to use the then, resolve, catch methods
- How to use every method of the Promise object
- Throw / Try
- The await operator
- How to use an async function

## REQUIREMENTS
- All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All your files should end with a new line
- A README.md file, at the root of the folder of the project, is mandatory
- Your code should use the js extension
- Your code will be tested using Jest and the command npm run test
- Your code will be verified against lint using ESLint
- All of your functions must be exported


## SETUP
**Install NodeJS 12.11.x**
(in your home directory):

	curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
	sudo bash nodesource_setup.sh
	sudo apt install nodejs -y


	$ nodejs -v
	v12.11.1
	$ npm -v
	6.11.3

**Install Jest, Babel, and ESLint**
in your project directory:

	- Install Jest using: npm install --save-dev jest
	- Install Babel using: npm install --save-dev babel-jest @babel/core @babel/preset-env @babel/cli
	- Install ESLint using: npm install --save-dev eslint




## FILES
<strong>utils.js</strong>
Use when you get to tasks requiring uploadPhoto and createUser.

		export function uploadPhoto() {
		  return Promise.resolve({
		    status: 200,
		    body: 'photo-profile-1',
		  });
		}


		export function createUser() {
		  return Promise.resolve({
		    firstName: 'Guillaume',
		    lastName: 'Salva',
		  });
		}


**Response Data Format**
uploadPhoto returns a response with the format

		{
		  status: 200,
		  body: 'photo-profile-1',
		}

createUser returns a response with the format

		{
		  firstName: 'Guillaume',
		  lastName: 'Salva',
		}
