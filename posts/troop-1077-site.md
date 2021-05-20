---
title: "Boy Scout Troop 1077 Site"
date: "2019-12-23"
---

Growing up I was a member of the boy scouts. My family is still involved with our local troop and it was recently brought to my attention that their website was in need of a refresh. I saw this as a great oppurtunity to expand my development skills and give back to the community.

Below you can see the original site. It's clear that this site was not being used and reflected poorly of the troop. I wanted to make the site something that would encourage people to join and be useful for the scouts.

For the new site, I could have simply modernized the design. However, I wanted to add functionality to the site and make it something practical.

My idea was to add contact information for the scouts so they could look up each others info. I also wanted a place where events could be posted and scouts could sign up. I knew from experience that it was often unclear how many people were going. This would allow anyone to see exactly who is going and be able to get in touch if needed.

### My Requirements

1. Authorization will be a must. I won't want information on kids being made publicly available. The site will need to be invite only with user logins.
2. Database for Users and Events. I will need to store all the information for users and events.
3. Google Maps and Geocodio API. I will need to stroe and display where the events are, what better way than with storing geolocations and using maps.
4. Photo uploads. Adding pictures for users will make it easier for scouts to identify their friends and find new ones. I will also want to add images for where the events are taking place.

### Part 1 - Building an API

The site that I wanted to build would require a database. I also want to make the database reusable incase someone else takes over the site after me and needs to rebuild it. Making my own API for the database seemed like a great way to keep the project organized and reuseable going forward. I decided on using MongoDB wtih Mongoose and Node.

### Part 2 - Frontend

For the frontend I chose to use React. This makes displaying the data from my API simple. I can create reusable components to display content. I also chose to use Materialize for the styling as I find it have a very simple and clean look that is familiar to users.

### Conclusion and Reflecions

I completed the MVP for the site and was happy with the base functionality. Unofrtunately the Boy Scouts did not end up using my site. This was however a great learning experience. I gained a lot of knowledge on buildling a full stack application. This was my first time building a backend API and working with Google's APIs. If I were to do this project over, I would use Angular with Firebase. This would make building the site more organized, save me time building out the API, and also be cheaper to run.
