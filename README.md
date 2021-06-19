# Bay
> A simple theme for Jekyll

[![Version](https://img.shields.io/gem/v/bay_jekyll_theme)](https://rubygems.org/gems/bay_jekyll_theme)
[![Downloads](https://img.shields.io/gem/dt/bay_jekyll_theme)](https://rubygems.org/gems/bay_jekyll_theme)


## Preview

[Live demo](https://eliottvincent.github.io/bay)

![Sample screenshot](/screenshot.png)

Inspired by [dangrover.com](http://dangrover.com/). Current theme used at [eliottvincent.com](http://eliottvincent.com/).

## Requirements 

- [Ruby](https://www.ruby-lang.org/)

## Installation

The easiest solution is to [fork this repo](https://github.com/eliottvincent/bay/fork).

If you want to start from a clean website, follow the steps below. These assume you have Jekyll installed globally.

Create a new Jekyll website:

```sh
jekyll new mysite
```

Open `Gemfile` and replace the line:

```ruby
gem "minima"
```
with:
```ruby
gem "bay_jekyll_theme"
```

Open `_config.yml` and replace the line:
```yaml
theme: minima
```
with:
```yaml
theme: bay_jekyll_theme
```
or, for GitHub Pages:
```yaml
remote_theme: eliottvincent/bay
```

Finally, install the dependencies:

```sh
bundle config set --local path vendor/bundle
bundle install
```

And serve the website!

```sh
jekyll serve
```

Open in the browser at the URL shown.

## Customization

The website will look somewhat empty at first. That's normal. Follow the instructions below to complete the header and footer components, and the home and blog pages.

### Header

Open the `_config.yml` file and add the following:

```yaml
header:
  pages:
    - name: Home
      slug: /     # <-- index.md
    - name: Blog  # <-- blog.md
    - name: Whatever  # <-- whatever.md
```

Stop and start `jekyll serve` to see the header updated.

### Footer

Open the `_config.yml` file and add the following:

```yaml
footer:
  show_powered_by: true
  contact:
    - name: Email
      value: yourmail@domain.com
      link: mailto:yourmail@domain.com
    - name: WeChat
      value: YourWeChatUsername
      link: "#"
  follow:
    - name: Twitter
      link: http://twitter.com/YourTwitterUsername
      username: "@YourTwitterUsername"
    - name: Facebook
      link: http://facebook.com/YourFacebookUsername
    - name: LinkedIn
      link: http://linkedin.com/in/YourLinkedInUsername
    - name: GitHub
      link: http://github.com/YourGitHubUsername
    - name: Dribbble
      link: https://dribbble.com/YourDribbbleUsername
    - name: Weibo
      link: http://weibo.com/u/YourWeiboUsername
    - name: RSS
      link: /feed.xml
```

Stop and start `jekyll serve` to see the footer updated.

### Homepage

Create (or edit) the `index.markdown` file and add the following:

```yml
---
layout: home
profile_picture:
  src: /assets/img/profile-pic.jpg
  alt: website picture
---

<p>
  Welcome to mysite!
</p>
```

### Blog page

Create `blog.markdown` file and add the following:

```yaml
---
layout: blog
title: Blog
slug: /blog
---

This is an example of a "Blog" page, displaying a list of posts.
<br />
```

Your website is ready!


## Development

### Run development server

Jekyll will watch for file changes and rebuild by default. Add a flag to push the browser to reload too. The trace flag makes errors a lot more verbose.

```sh
bundle exec jekyll serve --trace --livereload
```

### Build and publish the gem

For maintaining this theme as published on RubyGems.

```sh
gem build bay_jekyll_theme.gemspec
```

```sh
gem push bay_jekyll_theme-1.x.x.gem
```

## License

Licensed under [ISC](/LICENSE.md) by [eliottvincent](https://github.com/eliottvincent).
