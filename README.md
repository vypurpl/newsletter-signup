#Newsletter Sign Up

## About
This repository is a simple application built using react and express which integrates with [airtable](https://airtable.com/). 

## Prerequisites
There are a few prerequisites to run this code
* An Airtable.com account 
  * An [airtable api key](https://support.airtable.com/hc/en-us/articles/219046777-How-do-I-get-my-API-key-). This value must be specified as an environment variable named **AIRTABLE_API_KEY**
  * A base that contains fields named **email** and **creation_date**. The base ID must be specified in an environment variable named **AIRTABLE_BASE**

## Quickstart
After creating the airtable account and base, you can run the application in a docker container with the following command:
`docker run --name newsletter-signup -e "AIRTABLE_BASE=<your base ID>" -e "AIRTABLE_API_KEY=<your API key>" --rm -p 3000:3000 vypurpl/newsletter-signup:1.0.0 `

### Credits
This application uses the Bootstrap Sandstone theme from [bootswatch](https://bootswatch.com).  