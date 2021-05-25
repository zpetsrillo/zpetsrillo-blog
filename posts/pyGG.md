---
title: "pyGG - Easily retrieve op.gg data for use in Python"
date: "2021-05-25"
---

## [Github link](https://github.com/zpetsrillo/pyGG)

Easily retrieve op.gg data for use in Python

## Motivations

I wanted to use data from the game League of Legends to conduct my own analysis. Riot games (the makers of the game) [have an API](https://developer.riotgames.com) that can be used to get all game related data, but this API is restricted in use. Unless one gets a project proposal approved by them, you get very limited personal access. This pushed towards looking into third party solutions. I couldn't find any other APIs for the data. There are a few websites that use their access to Riot's API for presenting game data. On GitHub there were a couple small projects which scraped data from [OP.GG](http://op.gg), the largest of these third party sites. None of them were fully featured and ran very slowly. I took the best one I saw (which you can see [here](https://github.com/emily-yu/scrape.gg). This still left a lot of additional work before it would be useful for me.

## Goals

- Easy to use access to League of Legends data
- Fast and efficient retrieval of data
- Clear and understandable documenation
- Unit testing to insure functionality

## Challenges

As mentioned in motivations, I began by building on top of Emily Yu's work with scrapeGG. There were some inefficiencies in her code that I refactored. I then began adding features to scrape additional data as she had left the project incomplete. Once I got the project to a reasonable point, I tried testing it out on a raspberry pi. Once I got everything configured and attempted to run the code, the pi couldn't handle it. I realized that using selenium wasn't going to work for this. Every project I had seen on GitHub had been using selenium. Every third party site that has game data was some kind of web app that doesn't load all data initially. The project was looking doomed and I thought I may have to give up. I started looking for creative solutions. Upon close inspection of OP.GG I realized that when the page loaded, it made requests to their own AJAX API. After some trial and error, I reverse engineered how the API works. Through a combination of directly using their website, and requests directly to their AJAX API I was able to gather everything I needed. This approach allowed me to use BeautifulSoup.

## Reflections

I learned my lesson to look for the best solution for scraping first. Having to rebuild my project 3 times was not ideal. This project also taught me a lot about how to build packages in Python. After a couple attempts I also gained better insight on how the project should be broken up into separate classes.

## Summary

There wasn't a good solution for programmatically gathering game data for League of Legends. This pushed me towards building my own web scraping solution in Python. I learned a lot about web scraping, package development, and unit testing. I hope this can empower others to quickly perform analysis or build small applications without going through the approval process with Riot.
