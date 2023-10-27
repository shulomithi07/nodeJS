## What is NPM?
    NPM Stands for node package manager. It is a package manager for node.js applications. It helps you to install, update, remove and publish packages. It's package is worlds largest ecosystem of open source online libraries.

## NPM Install
    NPM is directly installed when node js is installed.

## Update NPM
    Npm updates come faster than of node js itself. Npm can be updated with this command.
`npm install npm@latest -g`

## What is package.json
- Package.json is a way to manage the packages that are installed locally.
- It serves as a documentation that our project depends
- It allows us to specify the packages version in out project.(That we are using this specific version of the package)
- Package.json can be created with the initial step of npm `npm init` command.
    ### npm install
    - If package.json is already present and all the packages are already updated in the json then we can do `npm install`
    - Packages can be installed `npm install packageName`
    - If version is require we can give the specific version in the command  
    - To globally install package we can use -g `npm install -g nodemon`
        
Note : Run this command in the same folder as package.json file.
Test : We can test whether the command npm install worked or not by running the command npm outdated command. If there is no output on the console , then it means all the packages are updated.

- Finding global outdated packages : The syntax for finding outdated packages is `npm outdated -g --depth=0`.
    ### npm uninstall
    - To remove local packages `npm uninstall <package_name>`
    - To remove the entry from package.json we can use `npm uninstall --save <package_name>`
    - If its a dev dependency then `npm uninstall --save-dev <package_name>`
    - Global `npm uninstall -g <package_name>`
