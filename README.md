# Ideas On Purpose Development Standards and Guidelines

Ideas On Purpose is a creative company and we understand and respect coding as it's own creative process. 

We aren't interested in telling anyone how to work, but we do ask that a few guidelines be followed to ensure efficient maintenance of our projects over time. 

The intent of these guidelines is to define a common technical baseline for projects produced at Ideas On Purpose. This baseline makes it easier to switch between projects and collaborate across diverse teams.


Please remember that very few of these rules are explicitly mandatory and we're open to discussion. 



Finally, this is a living document. Technology advances very quickly, especially on the web. We welcome suggestions, criticisms and alternatives, please share your ideas and help us make things easier for all of us.


### Definitions and Language

This document loosely adheres to common requirement keywords as defined in [RFC 2119][2119].

<dl><dt>MUST, REQUIRED</dt>
<dd>We need you to do these.</dd>

<dt>SHOULD, RECOMMENDED</dt>
<dd>Practices we strongly recommend. This could be understood as "strongly prefers". Please let us know if you will be doing something different. </dd>

<dt>MAY, OPTIONAL</dt>
<dd>We really like these things and believe projects would benefit from following them.</dd>

</dl>

## Git and Source Code Management
Git is REQUIRED for source code management and version control. Developers will be granted access to a project repository hosted on GitHub.

Code SHOULD be pushed frequently, ideally several times a day. There's no point in pushing something broken or partially implemented, but please try to keep updates flowing.

Commits SHOULD be granular. Smaller commits are easier to understand and debug. 

Compiled code and build output SHOULD be committed separately from other code changes. 

Libraries and dependencies SHOULD NOT be committed to the project repository. Repositories SHOULD use a `.gitignore` file to separate third-party code from our development tree.


## Coding Standards

Files SHOULD be indented with spaces, NOT tabs. 

Files MUST NOT mix tabs and spaces.

Files SHOULD use UTF-8 encoding.

Files SHOULD use Unix (LF) line endings.

Trailing whitespace SHOULD be removed (syntax exceptions: Markdown, YAML)

Line length SHOULD be 80 characters or less. 




Modern tooling has made it much easier to deliver clean, appropriately formatted code. Please consider using [IOP's `.editorconfig`][editorconfig] file as a starting point. 

IOP RECOMMENDS the use of linting and code-quality tools. 




## HTML

HTML files SHOULD be formatted consistently with either two-space or four-space indents. 

HTML files MUST include a DOCTYPE declaration. 

## JavaScript

JavaScript code SHOULD follow the "mostly resonable" [Airbnb JavaScript Style Guide()][airbnb5].

JavaScript code SHOULD be indented using two-space indents.


OPTIONALLY use transpilers and ES6 syntax. Seriously though, it's awesome. 

OPTIONALLY use [JSDoc][] compatible doc blocks.



## CSS & SCSS

CSS code SHOULD follow the [GitHub CSS coding style guide][github-css].

CSS files should be indented using two-space indents.

Use of CSS preprocessors is OPTIONAL. IOP RECOMMENDS Sass over Less. 



## PHP

PHP code SHOULD follow [PSR-1][] and [PSR-2][] style guidelines. WordPress projects MAY choose to use  [WordPress coding standards][wpcode] instead.

PHP files should be indented using four-space indents.


## Thanks
[Isobar Front-end Code Standards][isobar] and TMW Unlimited's [Front-End Dev guidelines][tmw] were a great help in putting this together, thanks for making those public.

## License

<p><a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />This <span xmlns:dct="http://purl.org/dc/terms/" href="http://purl.org/dc/dcmitype/Text" rel="dct:type">work</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="http://ideasonpurpose.com" property="cc:attributionName" rel="cc:attributionURL">Ideas On Purpose</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.</p>

## About

[![iop_logo](https://cloud.githubusercontent.com/assets/8320/9443542/944a8bce-4a4f-11e5-9d2f-54999b1687d5.png)][iop]  
An [Ideas On Purpose][iop] project.

[iop]: http://ideasonpurpose.com



[editorconfig]: http://github.com/ideasonpurpose/#
[2119]: http://www.ietf.org/rfc/rfc2119.txt
[airbnb5]: https://github.com/airbnb/javascript/tree/master/es5
[airbnb6]: https://github.com/airbnb/javascript
[jsdoc]: http://usejsdoc.org/about-getting-started.html
[github-css]: http://primercss.io/guidelines/#scss
[psr-1]: https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-1-basic-coding-standard.md
[psr-2]: https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-2-coding-style-guide.md
[wpcode]: https://make.wordpress.org/core/handbook/best-practices/coding-standards/php/
[isobar]: http://isobar-idev.github.io/code-standards/#css_css_best_practices
[tmw]: http://tech.tmw.co.uk/code/TMW-frontend-guidelines
