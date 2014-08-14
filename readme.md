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

### Testing
```
npm test
```


Notes
===========================
The built in node REPL (accessed by just running `node`) is quite handy for interactively exploring API. The documentation is good, but there's no substitute for just trying things and seeing if they work (used this to learn about `assert`).

For Markdown, I found a lot of resources, especially the ["Markdown Preview" plugin for Sublime Text](https://github.com/revolunet/sublimetext-markdown-preview). That actually comes with a cheatsheet, but I also like [this Markdown cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet), too. I really like markdown! There's a bit of a learning curve though, but with the right BTD loop (read: preview tool), it's easy enough to make mistakes and correct them (e.g. getting the link syntax right, and weird spacing rules for bulleted lists.)

The go to resource for Git seems to be the [SCM Book][]. It's a bit long, though, and not very interactive. One of these days I'd like to write a better git tutorial! Here are some other git links I've collected over time:

 - [Github Flow][]
 - [Git Tower][]
 - [SCM Book][]
 - [SCM Book Branching][]
 - [Atlassian Branching][]
 - [Git magic][]
 - [Codeschool Git][]
 - [SO merge advice][]

[Github Flow]: http://scottchacon.com/2011/08/31/github-flow.html
[Git Tower]: http://www.git-tower.com/
[SCM Book]: http://git-scm.com/book/en/Git-Basics-Undoing-Things
[SCM Book Branching]: http://www.git-scm.com/book/en/Git-Branching-Basic-Branching-and-Merging
[Atlassian Branching]: https://www.atlassian.com/git/tutorial/git-branches#!branch
[Git magic]: http://www-cs-students.stanford.edu/~blynn/gitmagic/ch04.html
[Codeschool Git]: https://www.codeschool.com/courses/git-real
[SO merge advice]: http://stackoverflow.com/questions/161813/how-do-i-fix-merge-conflicts-in-git

I had a bit of an "aha!" moment about `npm` and it's relationship to `require()`. Basically, npm is a tool who's primary responsibility is to get the bits on your machine. In the simplest case, you can add a module to your project in `node-modules`. Then, to use those newly downloaded bits, you `require('module')`, which looks in node-modules. Everything else is a variation on this basic pattern: "global" installs download the bits into a different location; using `npm install` installs modules from the meta-data in `package.json`. This explains why there seems to a bit of a controversy about whether or not to put `node_modules` into source control: there are pros and cons, particularly if a) you're modifying your dependancies locally, or b) have a deployment process that *shouldn't* depend on the public internet. Another important variation is when npm is used to install *command-line tools* rather than (or in addition to) simple libraries.

JavaScript compiling. The most important tool, right now, is a linter. There are lots of tools floating around, the three I know about being [jslint][JSHint], [jshint][JSHint], and [StackOverflow JSHint vs JSLint][]. I liked the sound of jshint, and the [JSHint install][] included links to editor plugins, and that's great. Once you install it (I chose to install it globally) you just run `jshint <file>` and you're done. 

[JSHint]: http://www.jshint.com/
[JSHint install]: http://www.jshint.com/install/
[JSLint]: http://jslint.com/
[StackOverflow JSHint vs JSLint]: http://stackoverflow.com/questions/6803305/should-i-use-jslint-or-jshint-javascript-validation/10763615#10763615
[Facebook Jest]: https://github.com/facebook/jest


Future plans
===========================

It might seem silly to have "future plans" for a trivial program like this, but I do!

1. ~~Find and use a robust command line parsing library~~ (Used [Minimist](https://www.npmjs.org/package/minimist) on branch `minimist`)
2. ~~Figure out why node REPL has assert but it's not available in node proper, even with require('assert').~~ (This was dumb: require assert worked fine when I tried it a second time! See [node docs on assert](http://nodejs.org/api/assert.html))
3. ~~Add asserts!~~ (Gratuitous and arguably a lot worse than the non assert version!)
4. ~~Play with branches to implement, say, a linear, looping implementation on a `linear` branch.~~ (Done)
5. Improve the build process with, for example, jslint and the Google closure tools. (Research what the best practices are. For that I would need to find some great node command line tools.)
6. Add a test suite (perhaps multiples, using branches.)
7. Publish this to the npm registry, and use it in another program.
8. Unpublish from the npm registry, because crap like this is noise.
9. Push to git.
10. Figure out how to simulate multiple users to explore git conflicts.
11. Figure out how to publish a site on github pages (and how that works, in general.)
12. ~~Research and install some local markdown editing and preview tools (browser or subl based)~~

