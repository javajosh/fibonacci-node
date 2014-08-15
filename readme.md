Fibonacci in Node
===========================

This is a simple project who's sole purpose is to explore building basic node command-line applications, and sharing them on github (and possibly npm). It serves as a review of the following technologies:

1. node (particularly basic REPL and command line operation)
2. npm (intermediate package.json)
3. git - particularly branching, revising commits, amending history, and remotes
4. github - using it as a remote, and github pages.
5. markdown!
 
### Usage
```
node index.js <fibonnaci>
```

Note that the recursive code is slow and resource intensive, and perceptible delay begins around 30, and becomes actively slow around 40 on my machine. The `linear` branch is incredibly faster.

### Building
```
npm lint && npm test
```


Notes
===========================
The built in node REPL (accessed by just running `node`) is quite handy for interactively exploring API. The documentation is good, but there's no substitute for just trying things and seeing if they work (used this to learn about `assert`).

### Markdown
For Markdown, I found a lot of resources, especially the ["Markdown Preview" plugin for Sublime Text](https://github.com/revolunet/sublimetext-markdown-preview). That actually comes with a cheatsheet, but I also like [this Markdown cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet), too. I really like markdown! There's a bit of a learning curve though, but with the right BTD loop (read: preview tool), it's easy enough to make mistakes and correct them (e.g. getting the link syntax right, and weird spacing rules for bulleted lists.)

Note that, as the size of this `readme.md` increases in size, preview becomes slower, and actually crashed Sublime. The workaround is a restart, but clearly this software needs some love.

### Git
The go to resource for Git seems to be the [SCM Book][]. It's a bit long, though, and not very interactive. One of these days I'd like to write a better git tutorial! Here are some other git links I've collected over time:

 - [Github Flow][]
 - [Git Tower][]
 - [SCM Book][]
 - [SCM Book Branching][]
 - [Atlassian Branching][]
 - [Git magic][]
 - [Codeschool Git][]
 - [SO merge advice][]

 Ran into my first git problem on this project! I had thought I was working on `master` for a bunch of changes, but was on `linear` the whole time. I decided to just merge linear into master (which nuked the recursive fib) and then manually revert the function to it's recursive counterpart, using `gitk` to grab the content of the old `index.js`. I have *no doubt* there is a better, faster way to do this, but just *having* a way to do it is okay by me.

[Github Flow]: http://scottchacon.com/2011/08/31/github-flow.html
[Git Tower]: http://www.git-tower.com/
[SCM Book]: http://git-scm.com/book/en/Git-Basics-Undoing-Things
[SCM Book Branching]: http://www.git-scm.com/book/en/Git-Branching-Basic-Branching-and-Merging
[Atlassian Branching]: https://www.atlassian.com/git/tutorial/git-branches#!branch
[Git magic]: http://www-cs-students.stanford.edu/~blynn/gitmagic/ch04.html
[Codeschool Git]: https://www.codeschool.com/courses/git-real
[SO merge advice]: http://stackoverflow.com/questions/161813/how-do-i-fix-merge-conflicts-in-git

### npm
I had a bit of an "aha!" moment about `npm` and it's relationship to `require()`. Basically, npm is a tool who's primary responsibility is to get the bits on your machine. In the simplest case, you can add a module to your project in `node-modules`. Then, to use those newly downloaded bits, you `require('module')`, which looks in node-modules. Everything else is a variation on this basic pattern: "global" installs download the bits into a different location; using `npm install` installs modules from the meta-data in `package.json`. This explains why there seems to a bit of a controversy about whether or not to put `node_modules` into source control: there are pros and cons, particularly if a) you're modifying your dependancies locally, or b) have a deployment process that *shouldn't* depend on the public internet. Another important variation is when npm is used to install *command-line tools* rather than (or in addition to) simple libraries. 

The `npm init` command is a nice touch that saves a dev from copy-pasting `package.json` from the interwebs or another project. Also, by contrast to, say, maven's `pom.xml` file, `package.json` is a real joy to read. I really like it.

### JSHint
JavaScript compiling. The most important tool, right now, to me, is a linter. In the absence of a compiler, linting is the best tool we have for making sure the code conforms to some sort of standard. There are lots of tools floating around, the three I know about being [jslint][JSHint], [jshint][JSHint], and [StackOverflow JSHint vs JSLint][]. I liked the sound of jshint, and the [JSHint install][] included links to editor plugins, in particular [Sublime-JSHint][], and that's really useful. Once you install it (I chose to install it globally) you just run `jshint <file>` and you're done. As a nice flourish, you can add a `scripts.test` section so that you can just run `npm test` to run your tests - it's like a build-file lite. [Google Closure][] deserves a mention here, but that was very heavy-weight and perhaps I'll export it on a branch in the future.

[JSHint]: http://www.jshint.com/
[JSHint install]: http://www.jshint.com/install/
[JSLint]: http://jslint.com/
[StackOverflow JSHint vs JSLint]: http://stackoverflow.com/questions/6803305/should-i-use-jslint-or-jshint-javascript-validation/10763615#10763615
[Sublime-JSHint]: https://github.com/victorporof/Sublime-JSHint
[Google Closure]: https://developers.google.com/closure/compiler/


### Testing
Testing in the JavaScript world is, frankly, a confusing mess. There's mocha, jasmine, qunit, tap, jest, and perhaps another 40 projects that I haven't heard of. I've used several testing libraries in Java and Groovy, most recently got in pretty deep with [Spock][], although Junit is a perennial favorite. For this project, I decided to just roll my own test script using asserts. I have my eye open for a testing library. (Note: I wrote a trivial test in [Facebook Jest][] on branch `jest`.)

[Facebook Jest]: https://github.com/facebook/jest
[Spock]: https://code.google.com/p/spock/

### Github
Okay, so now that I have a reasonable project


Future plans
===========================

It might seem silly to have "future plans" for a trivial program like this, but I do!

1. ~~Find and use a robust command line parsing library~~ (Used [Minimist](https://www.npmjs.org/package/minimist) on branch `minimist`)
2. ~~Figure out why node REPL has assert but it's not available in node proper, even with require('assert').~~ (This was dumb: require assert worked fine when I tried it a second time! See [node docs on assert](http://nodejs.org/api/assert.html))
3. ~~Add asserts!~~ (Gratuitous and arguably a lot worse than the non assert version!)
4. ~~Play with branches to implement, say, a linear, looping implementation on a `linear` branch.~~ (Done)
5. ~~Improve the build process with, for example, jslint and the Google closure tools. (Research what the best practices are. For that I would need to find some great node command line tools.)~~
6. ~~Add a test suite (perhaps multiples, using branches.)~~ (Added a simple script called test.js)
7. Publish this to the npm registry, and use it in another program.
8. Unpublish from the npm registry, because crap like this is noise.
9. Push to github.
10. Figure out how to simulate multiple users to explore git conflicts.
11. Figure out how to publish a site on github pages (and how that works, in general.)
12. ~~Research and install some local markdown editing and preview tools (browser or subl based)~~
13. How does npm install global CLI tools? Or does it?

