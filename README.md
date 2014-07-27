# connect-assets with require.js

This is a quick proof-of-concept app that demonstrates how to use [connect-assets](https://github.com/adunkman/connect-assets) with [require.js](http://requirejs.org/).

## Caveats

**You’ll want to rip your hair out doing this.**

- Require.js doesn’t know when your files change on disk.
- connect-assets always serves assets with far-futures headers, becuase it changes the MD5 hash when the files change on disk (even in development).

In this example, unless you change the file `assets/js/main.js.ejs` **every time ANY** of its dependent files change, it will be cached by browsers (and so it will not get the updated URLs to the new copies of your changed assets).

As a result, it will continue to use the old URLs (which have been served with far-futures headers) which will be served from your browser‘s cache.

In other words, it will appear as if your files are not changing in the browser when you edit them on the server. You will have to constantly clear your browser cache.
