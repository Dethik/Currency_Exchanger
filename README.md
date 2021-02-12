# Currency Exchanger

#### Convert Dollars to other forms of currency.

#### By (Zack Rutledge © 2021)

## Technologies Used

* HTML
* CSS
* Bootstrap
* Markdown
* JavaScript
* Jquery

## Description

This project will take in a value in dollars and covert it into other forms of currency.

## Setup/Installation Requirements

### Without Github template clone:

* Clone Repo
* CD to the repository
* Delete .git if needing a clean commit history
* Initilize git
* Add remote repository to new git
* Make first commit only adding .gitignore to commit
* Open new repo to begin npm initilization
* Go to https://www.exchangerate-api.com/ to obtain an API key.
* Make a .env file and add API_KEY = (API KEY HERE) without the parenthesis

### Npm Initilization

* Verify package.json has correct npm packages for needs
* Modify title on line 18 of webpack.config.js
* Modify title on line 2 of package.json
* Modify description on line 19 of package.json
* Modify title on line 2 if package-lock.json
* Run ```npm init -y```
* Run ```npm install```
* Verify install works by running ```npm run test``` and ```npm run build```

* * *
## Known Bugs

* _No known bugs_

## License

[MIT](LICENSE.txt)

## Contact Information

Email: Thorgrim88@gmail.com

## Test Specs

CurrExchanger();
test: will call on the API
expect: (response).toEqual(100)

getRateEuro();
test: will recieve response.conversion_rates.Euro
expect: (Euro).toEqual(Euro)