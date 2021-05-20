---
title: "Personal Portfolio Website"
date: "2019-12-21"
---

I needed a site to display all the projects I've been working on. It didn't need to be very complex, a simple static site would do. I still, however, wanted it to demonstrate my knowledge of web development technologies. For these reasons, I decided to make this website using [Gatsby](https://www.gatsbyjs.org/) and [Materialize](https://materializecss.com/).

### Why Gatsby?

Gatsby is a static site generator that uses [React](https://reactjs.org/) and [GraphQL](https://graphql.org/). I already know React from a previous project, and saw it as an opportunity to get some experience with GraphQL. Gatsby is also very well suited for a site of this nature. Because it is a static site, I can host it for free with [Github](http://github.com/) and [Netlify](https://www.netlify.com/). Gatsby also has a plugin called [gatsby-transformer-remark](https://www.gatsbyjs.org/packages/gatsby-transformer-remark/) that makes it easy to store my content in markdown files. Instead of manually updating the content in HTML, I can write up a markdown file and push it to my Github repo. The page will then automatically be generated using the plugin, react and GraphQL. This was used for all the posts of my projects and resume.

### Why Materialize?

I didn't want to fall into the trap of over-designing my portfolio as so many developers do. I wanted the site to look clean, minimalist, and professional, however, my focus is development and not design. Materialize offers a quick way for me to make the content look professional and clean without spending hours on details.

### Github and Netlify

Using Github to store the repo and Netlify for hosting makes updating the page incredibly easy. Netlify offers me advantages such as free hosting, free form submissions, and a free SSL certificate.

### Particles

The page had too much white space and looked boring. To try and breath life into it, I used [Particles](https://marcbruederlin.github.io/particles.js/). It adds texture to the page and gives a developer type of vibe. I added checks for the browser size to load fewer particles for mobile users. Overall I find the neat effect adds just enough style to my site for it to stand out.

### Challenges

When I first implement the particle effect, it caused the page to become very slow. The effect would continue to run in the background after you switch pages due to the PWA nature of gatsby. To combat this, I made the particle effect stored on the state level using the react context API. Once I made this change, a new bug popped up. After some research, I learned that in Gatsby, you should wrap the root element with any state using Gatsby's API runner. Once I got all of this working, I was able to keep the cool effect on the landing page where performance doesn't matter. Once the user navigates to another page, the effect is removed for performance to be maintained.
