# iconns-ws
This is a simple webservice for the plugin [Iconns](https://github.com/matheusAle/iconns-xd-plugin) of Adobe XD. Your function is search icons in web.

## Endpoints
### Search \[/search?q=icon+name\]
The response is a json array of objects
```json
{
  "download_url": "/* url for download the icon optimized in SVG format. */",
  "preview_url": "/* url for request a preview file for this icon. */"
}
```
### Downlaod [/<download_url>]
For dowload a icon you should be meke a request for this webservice host with the value in `download_url`.
The response is a text body with svg file content.
## About the optmize SVG
The dependencie [SVGO](https://github.com/svg/svgo) is used for optimize the file and convert all nodes in paths. This is requered becouse the Adobe XD not suport imports of SVG file in artboard through plugins.

### Known Issues
 - For complex ions the result cannot be exactly the expected.
 
## Where the Icons Come From
Currently, the webservice research only in [IconFinder Plataform](https://www.iconfinder.com/).
*Only free icons is researched and returner.*

## How to Start
The master branch webservice is deployed on [Heroku Plataform](https://heroku.com/) in a free Dino. You can use: https://iconns-ws.herokuapp.com/
### Run local
You need pass the envs var: `ICON_FINDER_CLIENT_ID` and `ICON_FINDER_CLIENT_SECRET`. For consume the Iconfinder api.
### To start
 - `npm start`: run with directally in node engine
 - `npm start:dev`: run with global instalation of nodemon
 - `npm test`: run the mocha tests with `--watch` flag
  
 
 # PRs are welcomes!!
