# {%= name %}

> {%= description %}

## Getting Started
Before anything taking its part, you should install [node](http://nodejs.org) and "cortex".

#### Install Node

Visit [http://nodejs.org](http://nodejs.org), download and install the proper version of nodejs.

#### Install Cortex

    # maybe you should use `sudo`
    npm install -g cortex

## Using {%= name %} In Your Project

First, update your package.json
    
    dependencies: {
        '{%= name %}': '<version-you-want>'
    }
    
Then, use `require` method in your module
    
    var {%= name %} = require('{%= name %}');
    
Finally, start cortex server
    
    ctx server
    
Then cortex will care all the rest.
