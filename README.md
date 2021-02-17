# Currency Exchanger

#### Convert Dollars to other forms of currency.

#### By (Zack Rutledge © 2021)

## Technologies Used

** Bootstrap 4.6.0
* CSS
* eslint 6.3.0
* HTML
* JavaScript ES6
* Jest 24.9.0
* jQuery 3.5.1
* Node Package Manager 6.14.9
* Postman 8.0.4
* webpack 4.39.3

## Description

This project will take in a value in dollars and covert it into other forms of currency.

## Setup/Installation Requirements

* Clone Repo from https://github.com/Dethik/Currency_Exchanger
* CD to the repository
* Delete .git if needing a clean commit history
* Initilize git
* Add remote repository to new git
* Make first commit only adding .gitignore to commit
* Open new repo to begin npm initilization
* Go to https://www.exchangerate-api.com/ to obtain an API key.
* Make a .env file and add API_KEY = (API KEY HERE) without the parenthesis
* Run ```npm install```
* Verify install works by running ```npm run build```

* * *
## Known Bugs

* _No known bugs_

## License

[MIT](LICENSE.txt)

## Contact Information

Email: Thorgrim88@gmail.com

## Test Specs
```js
getRateEuro();
test: will recieve response.conversion_rates.Euro
expect: (getRateEuro(10)).toEqual("You have 7 Euros")
```