# Bay

[![Version](https://img.shields.io/gem/v/bay_jekyll_theme)](https://rubygems.org/gems/bay_jekyll_theme)
[![Downloads](https://img.shields.io/gem/dt/bay_jekyll_theme)](https://rubygems.org/gems/bay_jekyll_theme)

Bay is a simple theme for Jekyll. [[view live]](https://eliottvincent.github.io/bay)

Inspired by [dangrover.com](http://dangrover.com/). Current theme used at [eliottvincent.com](http://eliottvincent.com/).

![](/screenshot.png)


## Table of contents
1. [Installation](#installation)
2. Website sections
    1. [Header](#header)
    2. [Footer](#footer)
    3. [Home page](#home-page)
    4. [Blog page](#blog-page)
5. [GitHub Pages](#github-pages)
6. [Development instructions](#development)


### Installation


The easiest solution is to [fork this repo](https://github.com/eliottvincent/bay/fork).
If you want to start from a clean website, follow the steps below:

Create a new Jekyll website:
```
jekyll new mysite
```

Open `Gemfile` and replace the line:
```
gem "minima"
```
with:
```
gem "bay_jekyll_theme"
```

Open `_config.yml` and replace the line:
```
theme: minima
```
with:
```
theme: bay_jekyll_theme
```
or, for GitHub Pages:
```
remote_theme: eliottvincent/bay
```

Finally, install the dependencies:
```
bundle install
```

and build the website!
```
jekyll serve
```


The website will look somewhat empty at first. That's normal. Follow the next instructions to complete the header and footer components, and the home and blog pages.

#### Header
Open the `_config.yml` file and add the following:
```yml
header:
  pages:
    - name: Home
      slug: /     # <-- index.md
    - name: Blog  # <-- blog.md
    - name: Whatever  # <-- whatever.md
```
Re-run `jekyll serve` to see the header updated.

#### Footer
Open the `_config.yml` file and add the following:
```yml
footer:
  show_powered_by: true
  contact:
    - type: email
      name: Email
      value: yourmail@domain.com
    - type: wechat
      value: YourWeChatUsername
      link: "#"
  follow:
    - type: twitter
      name: Twitter
      link: http://twitter.com/YourTwitterUsername
      username: "@YourTwitterUsername"
    - type: facebook
      name: Facebook
      link: http://facebook.com/YourFacebookUsername
    - type: linkedin
      name: LinkedIn
      link: http://linkedin.com/in/YourLinkedInUsername
    - type: github
      name: GitHub
      link: http://github.com/YourGitHubUsername
    - type: dribbble
      name: Dribbble
      link: https://dribbble.com/YourDribbbleUsername
    - type: rss
      name: RSS
      link: /feed.xml
```
Re-run `jekyll serve` to see the footer updated.

#### Home page
Create (or edit) the `index.markdown` file and add the following:
```yml
---
layout: home
profile_picture:
  src: /assets/img/profile-pic.jpg
  alt: website picture
---

<p>
  Welcome to my site!
</p>
```

#### Blog page
Create `blog.markdown` file and add the following:
```yml
---
layout: blog
title: Blog
slug: /blog
---

This is an example of a "Blog" page, displaying a list of posts.
<br />
```


Your website is ready!


### GitHub Pages

You can deploy your website to GitHub Pages, but you cannot use the 1-click GitHub Pages build and deploy system. The issue is that the Bay theme relies on Jekyll 4.3+ (which uses a more modern Sass processor), whereas the GitHub Pages build system uses an older version of Jekyll.

However, it's fairly easy to build and deploy your website with GitHub Actions, yet use GitHub Pages to host it.

Further explanations and instructions can be found on the official [Jekyll website](https://jekyllrb.com/docs/continuous-integration/github-actions/).

You can also refer to the [`.github/workflows/deploy.yml`](https://github.com/eliottvincent/bay/blob/master/.github/workflows/deploy.yml) file in this repository.

### Development

#### Run development instance (with hot-reload)
```sh
bundle exec jekyll serve
```

#### Build and publish the gem
```sh
gem build bay_jekyll_theme.gemspec
```

```sh
gem push bay_jekyll_theme-1.x.x.gem
```
