Angular Assessment
------------------

Using VS Code

API:
	private personUrl = "https://swapi.dev/api/people/";
	private filmsUrl = "https://swapi.dev/api/films/";

call api
use rxjs
render data:
	list comp
	details comp for each line
Apply some CSS styling

add it to the git repository

handle errors

steps:      

- install vs code
- create new project:	ng new <project-name>
- go inside the project folder:	cd <project-name>
- start the vs code: code .
- start using the terminal from the vs code itself
- generate components ng g c <comp-name>
- generate services ng g s <services/service-name>
- create new github repository
- start add the project to git

	`git init`
	`git add --all`
	`git commit -m "Initial Commit"`
	`git remote add origin <remote-url>`
	`git push -u origin HEAD:master`
	`git remote add origin https://github.com/AliElba/ng-render-data-from-api.git`
	`git remote -v`
	`git push origin master`


