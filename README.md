# Ideas On Purpose Development Standards and Guidelines

Ideas On Purpose is a creative company which understands and respects coding as a distinct creative process. 

This document defines a loose, common technical baseline for web projects produced at [Ideas On Purpose][iop]. We aren't interested in telling anyone how to work, but we do ask that a few guidelines be followed to ensure smooth collaboration and efficient maintenance of our projects into the future. 

Very few of these rules are mandatory and we're open to discussion. 

Technology advances very quickly, especially on the web. This is a living document and we welcome suggestions, criticisms and alternatives. Please share your ideas and help make it easier for all of us to make [great work][iop work] together.


### Definitions and Language

The rules below loosely adhere to common requirement keywords as defined in [RFC 2119][2119].

<dl>

<dt>MUST, REQUIRED</dt>
<dd>We need you to do these.</dd>

<dt>SHOULD, RECOMMENDED</dt>
<dd>Practices we strongly recommend. This could be understood as "strongly prefers". Please let us know if you will be doing something different. </dd>

<dt>MAY, OPTIONAL</dt>
<dd>We really like these and believe projects and developers will benefit from following them.</dd>

</dl>

---



##  Confidentiality, Staging & Development Environments

IOP’s work is created under strict confidentiality agreements with our clients. Projects under development **MUST NOT** be publicly accessible. Staging, preview and development environments **MUST** be password protected. 

Images and examples from projects under development **MUST NOT** be shared to social networks without explicit written permission.





## Authorship

Ideas On Purpose **MUST** be the author of all code and assets. We're all contributors and will be individually credited where appropriate. 

## Git and Source Code Management
Git is **REQUIRED** for source code management and version control. Developers will be granted access to a project repository on GitHub.

Code **SHOULD** be pushed frequently, ideally daily. There's no point in pushing broken or partially implemented commits, but please try to keep updates flowing.

Commits **SHOULD** be granular. Smaller commits are easier to understand and debug. 

Libraries and dependencies **SHOULD NOT** be committed to the project repository. Repositories **SHOULD** use a `.gitignore` file to separate third-party code from our development tree. External resources **SHOULD** be canonical unless explicitly forked.

Versioned files **SHOULD** follow the [SemVer][] semantic versioning standard.

SemVer versioned files **SHOULD** begin at version `0.1.0`, incrementing patch and minor as appropriate. When a project is launched, versioned files should be bumped to `1.0.0`. ([Semver Faq][0.1.0])

Git **SHOULD** be configured to push tags with commits. Set `push.followTags` to `true` in your git config.


## Coding Standards

Files **SHOULD** be indented with spaces, **NOT** tabs. 

Files **MUST NOT** mix tabs and spaces.

Files **SHOULD** use UTF-8 encoding.

Files **SHOULD** use Unix (LF) line endings. (Windows developers, set [`git config --global core.autocrlf true`](https://help.github.com/articles/dealing-with-line-endings/#platform-windows))

Files **MUST** end with a newline. ([ref](https://stackoverflow.com/a/729795))

Trailing whitespace **SHOULD** be removed. (exceptions: Markdown, YAML)

Lines more than 80 characters long **SHOULD** be avoided. ([js][crockford80], [php][php80], [python][pep8])




Modern tooling makes it easy to deliver clean, appropriately formatted code. Please consider using IOP’s [`.editorconfig`][editorconfig] file as a starting point, most of the coding rules in this document are included in that file.

IOP **RECOMMENDS** the use of linting and code-quality tools like [eslint][] and [phpcs][]. 



## HTML

HTML files **MUST** start with the [HTML 5 doctype][html5]: `<!DOCTYPE html>`

HTML files **MUST** include the [IE Compatibility meta tag][x-ua] as the first meta tag in the `<head>` section, before any conditional comments. References: [1](http://stackoverflow.com/questions/6156639/x-ua-compatible-is-set-to-ie-edge-but-it-still-doesnt-stop-compatibility-mode/9624500#9624500), [2](https://github.com/h5bp/html5-boilerplate/issues/378)

```html
<meta http-equiv="X-UA-Compatible" content="IE=Edge">
```

HTML files **SHOULD** be formatted consistently with two-space (soft) indents. 

Deliverable HTML files **MUST** use the full `.html` file extension, not `.htm`.

All asset references **MUST** be case-sensitive. 

**OPTIONALLY** adhere to [Code Guide][codeguide-html]'s HTML recommendations.


**OPTIONALLY** format HTML files with [Prettier][].


Image tags **MUST** include alt-text attributes.


## JavaScript

JavaScript source code **SHOULD** be formatted with [Prettier][].

JavaScript source code using ES2015+ syntax **SHOULD** be transpiled with [Babel][] for distribution.

JavaScript code **SHOULD** run in [strict mode][], production code **SHOULD NOT** display errors, warnings or messages in the console.

**OPTIONALLY** use [JSDoc][] compatible doc blocks.



## CSS & SCSS

IOP **RECOMMENDS** authoring stylesheets with the [Sass][] CSS preprocessor.

Stylesheet source files **SHOULD** follow the [GitHub CSS coding style guide][github-css].

Stylesheet source files **SHOULD** be indented using two-space indents.

**OPTIONALLY** use our [CSScomb][] dotfile.

**OPTIONALLY** adhere to [Code Guide][codeguide-html]'s CSS recommendations or [Idiomatic CSS][].


## PHP

PHP code **SHOULD** adhere to [PSR-1][] and [PSR-2][] style guidelines. WordPress projects **MAY** choose to use  [WordPress coding standards][wpcode] instead.

PHP files **SHOULD** be indented using four-space indents. ([PSR-2][])

PHP code **SHOULD** be developed with [`error_reporting`][error_reporting] set to `E_ALL` and **SHOULD NOT** display any errors or warnings. IOP **RECOMMENDS** using [Xdebug][] for additional backtraces.


## WordPress

A theme's `styles.css` file **MUST** be based on [IOP's boilerplate metadata block][wp-boilerplate].

Theme directories **MUST** be prefixed with `iop-`. E.g. `iop-client-theme`.

Namespaced PHP files **SHOULD** use the `ideasonpurpose` namespace.

WordPress development servers **SHOULD** enable [`WP_DEBUG`][wp_debug], `WP_DEBUG_LOG` and `WP_DEBUG_DISPLAY`.


## File naming

IOP **RECOMMENDS** descriptive, self-documenting filenames.

Filenames **SHOULD** be cased logically and consistently. (eg. `file1.jpg` & `file2.jpg`; not `File1.JPG` & `FILE2.jpg`)

Filenames containing multiple words **SHOULD** be joined with [dashes (hyphens), not underscores][-_].

Image files **SHOULD** be descriptively named. (eg. `empire-state-building.jpg` not `bldg-1.jpg`)




## Metadata, Analytics and Social Sharing

Public-facing HTML pages **MUST** include page-specific metadata. [IOP’s recommended metadata block][iop metadata] assigns page properties for the [Open Graph Protocol][ogp] and [Twitter Cards][]. WordPress projects should use the [SEO Framework][] plugin.

Public-facing projects **SHOULD** collect analytics data. IOP will provide code snippets on a per-project basis. 

Projects **MUST** use the newest available tracking code snippets, always request fresh snippets. (e.g. [Google Analytics][]) 

Third-party tracking code **SHOULD NOT** be modified, unless explicitly necessary. 



## Configuration and dotfiles

This repository contains several dotfiles. Don't miss them just because they're invisible in the Finder. 

## Work with us

Interested in working with us? [We're hiring!][iop jobs]

## Thanks
These coding standards documents were a great towards putting this together, thanks to their authors for making them public. 
* @mdo's [Code Guide][]
* Isobar's [Front-end Code Standards][isobar]
* TMW Unlimited's [Front-End Dev guidelines][tmw]
* [Google HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html)

## License

<p><a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />This <span xmlns:dct="http://purl.org/dc/terms/" href="http://purl.org/dc/dcmitype/Text" rel="dct:type">work</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="http://ideasonpurpose.com" property="cc:attributionName" rel="cc:attributionURL">Ideas On Purpose</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.</p>

## About

[![iop_logo](https://avatars1.githubusercontent.com/u/2059022?s=100&v=4)][iop]  

An [Ideas On Purpose][iop] project.


[iop work]: https://www.ideasonpurpose.com/work/
[iop]: http://ideasonpurpose.com
[iop jobs]: https://www.ideasonpurpose.com/jobs/

[semver]: https://semver.org
[0.1.0]: https://semver.org/#faq

[editorconfig]: https://github.com/ideasonpurpose/developer-guidelines/blob/master/.editorconfig
[2119]: http://www.ietf.org/rfc/rfc2119.txt

[babel]: http://babeljs.io
[prettier]: https://github.com/prettier/prettier
[airbnb5]: https://github.com/airbnb/javascript/tree/master/es5
[airbnb6]: https://github.com/airbnb/javascript
[strict mode]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode/Transitioning_to_strict_mode
[jsdoc]: http://usejsdoc.org/about-getting-started.html

[github-css]: http://primercss.io/guidelines/#scss
[psr-1]: https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-1-basic-coding-standard.md
[psr-2]: https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-2-coding-style-guide.md
[wpcode]: https://make.wordpress.org/core/handbook/best-practices/coding-standards/php/
[codeguide-html]: http://codeguide.co/#html
[codeguide-css]: http://codeguide.co/#css
[html5]: http://www.w3.org/TR/html5/syntax.html#the-doctype
[Idiomatic CSS]: https://github.com/necolas/idiomatic-css
[sass]: http://sass-lang.com/
[csscomb]: http://csscomb.com/

[iop metadata]: https://github.com/ideasonpurpose/developer-guidelines/blob/master/metadata/iop_html_metadata.html
[ogp]: http://opengraphprotocol.org/
[twitter cards]: https://dev.twitter.com/cards/overview
[seo framework]: https://theseoframework.com/

[error_reporting]: http://php.net/manual/en/function.error-reporting.php
[xdebug]: https://xdebug.org/
[wp-boilerplate]: https://github.com/ideasonpurpose/developer-guidelines/blob/master/wordpress/theme-boilerplate/styles.css
[wp_debug]: https://codex.wordpress.org/WP_DEBUG

[isobar]: http://isobar-idev.github.io/code-standards/#css_css_best_practices
[tmw]: http://tech.tmw.co.uk/code/TMW-frontend-guidelines
[Code Guide]: http://codeguide.co/

[crockford80]: http://javascript.crockford.com/code.html#line%20length
[php80]: https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-2-coding-style-guide.md#user-content-1-overview
[pep8]: http://legacy.python.org/dev/peps/pep-0008/#maximum-line-length

[eslint]: http://eslint.org
[phpcs]: http://www.squizlabs.com/php-codesniffer

[-_]: https://www.mattcutts.com/blog/dashes-vs-underscores/
[x-ua]: http://stackoverflow.com/a/6771584/503463

[google analytics]: https://support.google.com/analytics/answer/1008080?hl=en
