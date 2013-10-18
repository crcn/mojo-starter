## Directory Layout


```
  .cortado.js            - test config for cortado
  public/                - all public HTTP files
    index.html           - index file
    css/                 - CSS files
    img/                 - images
    scripts/             - useful js / shell scripts
      server.js          - static HTML server
    vendor/              - third-party libraries
    test/                - test files
    js/                  - application
      views/             - mojo views & templates
      commands/          - global mediator commands
```


## Requirements

- [Node.js](http://nodejs.org)

## Installation

```bash
git clone git@github.com:classdojo/mojo-starter.git && cd mojo-starter && npm install;
```

## Running

```bash
npm run server
```

## Testing

```bash
npm test
```