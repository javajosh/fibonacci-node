Fibonacci in Node
===========================

This is a simple project who's sole purpose is to explore building basic node command-line applications, and sharing them on github. It serves as a review of the following technologies:

1. Node (particularly basic REPL and command line operation)
2. NPM (intermediate package.json)
3. git
4. github
5. markdown (this readme).

# Usage
```
node index.js <fibonnaci>
```

Note that the recursive code is slow and resource intensive, and perceptible delay begins around 30, and becomes actively slow around 40 on my machine. The `linear` branch is incredibly faster.


Notes
===========================

For Markdown, I found a lot of resources, especially the ["Markdown Preview" plugin for Sublime Text](https://github.com/revolunet/sublimetext-markdown-preview). That actually comes with a cheatsheet, but I also like [this Markdown cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet), too.

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

