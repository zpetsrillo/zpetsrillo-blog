---
title: "Discord Movie Bot"
date: "2020-12-11"
---

[Movie bot](https://github.com/zpetsrillo/pirate-bot)

## Pirate Bot

Discord bot for organizing movie nights with friends on our personal Discord server.

### Motivations

Recently my friends and I have been watching a lot movies together. Deciding what movie to watch, scheduling a date, and informing everyone about it has proved to be annoying. I wanted a bot that would simplify this process, leading to more movie nights and less event planning.

### Goals

The bot should be able to gather all relevant information for a movie given the title. It should also allow for users to vote on which movie they want to watch next. Once we have decided on a movie to watch, you should be able to schedule an announcement to be sent out with all relevant information. It would also be nice if we could track information such as what movies have been watched.

### Dependencies

- discord.py
- tabulate
- APScheduler
- OMDB
- SQLite3

Discord.py is the obvious chose when working with discord. I could have used the JavaScript version, but I prefer working in Python. OMDB was used to retrieve information about the movies. It had all the information I needed and the request limit is more than enough for my purposes. This API is free and simple enough for my purposes. I then needed to store all the information gathered on movies. I made a simple database using SQLite3. I chose this because it comes built in to Python and will be more than sufficient for a project of this scale. This database will be used to hold the information on users, watched movies, schedule, votes, etc. along with the movie information. I needed a simple way to show database tables to users on request. Tabulate was a simple solution to convert my sql queries into ascii tables for output. APScheduler allowed me to set up events to trigger in the future. This is used to announce movies the day before the date we will watch them, along with marking them as being watched in the database.
