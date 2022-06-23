# labs-cyclomedia-service
A simple web service that shows a fullscreen cyclomedia viewer for a given set of coordinates. This requires access to you or your organization's [Cyclomedia](https://www.cyclomedia.com) API credentials (including username, password, and API key). 

![120broadway](https://user-images.githubusercontent.com/5004319/34017639-82ea6ab4-e0f4-11e7-8f83-0a85aa4df3f6.png)

## How we work

[NYC Planning Labs](https://planninglabs.nyc) takes on a single project at a time, working closely with our customers from concept to delivery in a matter of weeks.  We conduct regular maintenance between larger projects. 

## How you can help

In the spirit of free software, everyone is encouraged to help improve this project.  Here are some ways you can contribute.

- Comment on or clarify [issues](link to issues)
- Report [bugs](link to bugs)
- Suggest new features
- Write or edit documentation
- Write code (no patch is too small)
  - Fix typos
  - Add comments
  - Clean up code
  - Add new features

## Requirements

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)

## Local development

- Clone this repo `git clone https://github.com/NYCPlanning/labs-cyclomedia-service.git`
- Install Dependencies `npm install`
- Run `touch .env`
- Open `.env-template` in a text editor of your choice
- Fill in the correct values for your Cyclomedia credentials
- Rename file to `.env`
- Start the server `npm start`
- Visit `localhost:3000/view/{lat}/{lon}`

## Architecture

This is a simple microservice originally intended to be embedded in https://github.com/NYCPlanning/labs-zola. It merely serves out an HTML page containing the Cyclomedia Javascript Application configured to whatever parameters specified in the route. It uses the [Jade](http://jade-lang.com/) templating syntax. 

### Backend services

- **[Cyclomedia](https://www.cyclomedia.com)** - Provides interactive street imagery

## Testing and checks

- None yet - we should have ESLint setup at some point to clean up the Javascript. Testing would be nice, but this is an unconventional app with low complexity. 
  
## Deployment

App can be deployed through `git` pushing it to a Dokku app. 

## Contact us

You can find us on Twitter at [@nycplanninglabs](https://twitter.com/nycplanninglabs), or comment on issues and we'll follow up as soon as we can. If you'd like to send an email, use [labs_dl@planning.nyc.gov](mailto:labs_dl@planning.nyc.gov)

## Credits
Special thanks to [Andy Rothwell](https://github.com/ajrothwell) at the [City of Philadelphia](https://github.com/CityOfPhiladelphia) for providing advice on their approach to using this API publicly.
