# jQuery Virtual DOM
This is an example module showing how you can use virtual DOM 
in a jQuery environment. This is only created as an example so
you will most likely need to create your own version of the
`index.js` using whatever dependency loader / bundler your
project uses. I've created an [example](https://jamesnimlos.github.io/jquery-vhtml/)
that uses the module along with webpack as the bundler and the
source code can be seen in [`/demo`](demo).

### Why?
If at all possible, you should _NOT_ be using this technique. I
created this because I have worked with plenty of Handlebars or
other template based UIs that are still using `$.html` to render
the internals of it's applications. This is hard on the browser
and either the user or developer.

### Benefits of Virtual DOM

#### Performance
In most web apps, the most CPU intensive action is manipulating
the DOM. By using a virtual dom reconciliation (diff => patch),
the DOM only needs to make the specific changes requested instead
of removing and then re-adding all elements on the page.

#### User Experience
Probably the more important benefit is that when using a template
framework and declarative UIs (e.g. Handlebars), the user flow
is interrupted every time anything on the page gets rendered. The
way to solve this is by only having the initial render in the
templating language but then this defeats the purpose of declarative
UIs since the logic needs to be separated into initial and
interactive rendering. In my example, it is actually re-rendering 
the entire form with every `keyup`, however it is imperceptible due
to the reconciliation of the virtual-dom. This is very similar to
how 

#### Developer Experience
The surge of declarative UI utilities should make you aware that
they are a major benefit during development. The centralized 
rendering of the view contains all logic necessary in one place
instead of scattered around to ensure good user experience. The
declarative pattern allows the UI to be rendered in full from any
state.

### Run the demo locally
1. install dependencies at root
```sh
cd jquery-vhtml
yarn || npm install
```
2. install dependencies inside demo
```sh
cd demo
yarn || npm install
```
3. start the bundle and watch for changes
```sh
npm run build
```
4. start a static server in this location
```sh
npm install -g http-server
http-server ./
```
5. view the demo page at [http://localhost:8080](http://localhost:8080)

### TODO
- [ ] make the [logic for replacing the internals](https://www.google.com/url?q=https%3A%2F%2Fgithub.com%2FJamesNimlos%2Fjquery-vhtml%2Fblob%2Fmaster%2Findex.js%23L23-L28&sa=D&sntz=1&usg=AFQjCNFk-kQHh1to4mrUk1aofR3jiufzUA)
more robust.
- [ ] make an exportable dist
- [ ] make an example using requirejs