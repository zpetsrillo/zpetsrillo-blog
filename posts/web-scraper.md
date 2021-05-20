---
title: "Book Information Web Scraper"
date: "2020-05-02"
---

## [Github Link](https://github.com/zpetsrillo/book-information)

My father enjoys collecting books and comics. I noticed that he spends a lot of time entering information about the books into an excel file on his computer. I thought there must be a better way for him to do this. He had been searching for the books on Amazon.com and copying the information down. A task like this lends itself perfectly towards being automated. I did some research and learned that web scraping could accomplish this.

I used puppeteer to write a simple script that searches Amazon.com for the first result of that ISBN and then copies the data from that page. I ran into some difficulties around different versions of a book. The data for the kindle edition, hardcover, and paperback can vary. There is also the issue of sponsored links. When the search result contains a sponsored link, the first result will not link to the correct book. I also needed to use regular expressions for pulling the data out from the page as it was not all cleanly formatted.

This program was a good practice in learning the basics of web scraping and regular expressions. I got the basic functionality completed but there is still more work that needs to be done (for example dealing with sponsored links). When I get some more time I would like to go back and fix these issues so the program can be more reliable.
