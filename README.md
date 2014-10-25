
## Starter Kit

Video tutorial: http://www.youtube.com/embed/FSq_yUbHkfQ

Before you begin, **make sure you have [NodeJS](http://nodejs.org/) installed**. If you're looking for a pre-bundled version of mojo, you can download this file: https://raw.githubusercontent.com/mojo-js/mojo.js/master/dist/mojo.js.

Simply double-click the `server` file to start running your  application, then open up `http://localhost:8085` in your browser.

If you're comfortable with terminal, you can also run `npm install; npm start` in the application directory. 

## File Structure

```
app/js - app source code
  commands/ - global comments (mojo-mediator)
  models/ - your app models (mojo-models)
  routes/ - your routes (mojo-router)
  templates/ - template stuff (modifiers, plugins - paperclip)
  views/ - your views (mojo-views)
  entry.js - main entry point into ypur appliation
  includes.js - browser-specific files to include (jquery, es5 shims, analytics, etc.)
  index.js - your application class
build/ - where your app is built to
server - runs the dev server
package.json - app description & dev commands
```

## Commands

Below are a list of available commands you can run for this starter kit.

#### npm install

Installs all dependencies for the starter kit

#### npm start

starts the development server on port `8085`

#### npm run build

bundles your application into one script

#### npm run hotswap

runs the [hotswap server](https://github.com/browsertap/ditto.js) on port `8090`. This script automatically reloads
your browser if any file changes locally.
