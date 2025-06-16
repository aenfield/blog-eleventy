---
title: Which MLB broadcasts provide pitch type information, or, using LLMs to generate MLB broadcast data
date: 2025-06-16
---

I've been a baseball fan since I was six, and I've watched a lot of games, but I'm still not great at recognizing pitch types. Is it a four-seam fastball or a sinker/two-seam fastball? Is it a slider or a cutter? A lot of MLB broadcasts show this information with every pitch, which means I can watch games, pay attention to what each pitch looks like and what type the broadcast says it is, and train the pattern-recognition part of my brain. But, as of June 2025, not all broadcasts provide pitch type data. Further, with one welcome exception, the broadcasts that do show the information show it in the corner or bottom of the screen, and flicking my eyes back and forth makes it harder to learn. Ideally, I want to see the pitch type overlaid above the batters box/home plate. The only broadcast that does this? The Chicago White Sox.

{% image "./mlb-broadcast-example.jpeg", "Screen capture of baseball game showing overlay above home plate", "100vw" %}

(The displayed pitch type itself comes from MLB's [Statcast system](https://en.wikipedia.org/wiki/Statcast), which is itself an amazing system for generating useful and interesting data.)

For each of the 30 MLB team broadcasts, I wanted to know if the broadcast includes pitch type data and, if so, how the pitch type is displayed. I would have gotten out my laptop, created a text file or a file in Excel, and then I would have methodically viewed each broadcast (using MLB At Bat) and typed in the data. Actually, I probably wouldn't have bothered, since having a laptop out while watching baseball takes away from the game.

Where do LLMs come in? Among many benefits, they make it easy to collect data. I pulled out my phone, started a new chat in the ChatGPT app, and verbally told the chat I was going to collect data. Then I flipped through the different games and verbally described what I saw. When I was close to being done ChatGPT confirmed for me what teams I hadn't recorded. And when I was done I asked for a table with the data in Markdown format. ChatGPT complied, happily, and also volunteered to give me a .csv file I could have used in further work. Oh yeah, I noticed that a lot of teams had broadcasts that looked similar and they all had FanDuel branding, so I asked ChatGPT to add a column with the name of the network. A few seconds later, I had an updated table.

Speaking generally about data science best practices, while fancy algorithms get attention, sometimes the grunt work of gathering the right data is what matters. It's exciting that LLMs make this easy.

People like structured data: think about paragraphs of text compared to something like a table... the table is often easier to parse, makes it easier to compare values, etc. Computers like structured data too: most ML algorithms need rows of data, with the same fields for each observation; it's easy to visualize tabular data, and so on.

For background info, and what was to me the inspiration for the above, I thank Simon Willison. He's written about how LLMs make generating structured data amazingly easy, for example, his [LLM command line tool has built-in functionality for generating structured data](https://simonwillison.net/2025/Feb/28/llm-schemas/), and he's delivered conference talks with cool examples, like [extracting FEMA disaster declarations](https://github.com/simonw/nicar-2025-scraping/?tab=readme-ov-file#3-structured-data-extraction-using-llm).

Finally, a great book about pitch types - and also about Felix Hernandez's beautiful 2012 perfect game - is Terry McDermott's [Off Speed: Baseball, Pitching, and the Art of Deception](https://www.amazon.com/Off-Speed-Baseball-Pitching-Deception-ebook/dp/B00NDTQQ58/)

# Pitch type information in MLB broadcasts

- 'Overlay info': What's shown overlaid in the center of the screen
- 'Corner info' and 'Bottom info': What's shown in the corner of the screen or along the bottom of the screen

| Team                  | Overlay info             | Corner info              | Bottom info              | Network                          |
| --------------------- | ------------------------ | ------------------------ | ------------------------ | -------------------------------- |
| Arizona Diamondbacks  | Pitch speed              | Pitch speed              | —                        | MLB Local Media / DBACKS.TV      |
| Atlanta Braves        | Pitch speed              | —                        | Pitch speed & pitch type | FanDuel Sports Network           |
| Baltimore Orioles     | Pitch speed              | Pitch speed & pitch type | —                        | MASN                             |
| Boston Red Sox        | Pitch speed              | Pitch speed & pitch type | —                        | NESN                             |
| Chicago Cubs          | Pitch speed              | Pitch speed              | —                        | Marquee Sports Network           |
| Chicago White Sox     | Pitch speed & pitch type | —                        | —                        | NBC Sports Chicago               |
| Cincinnati Reds       | Pitch speed              | —                        | Pitch speed & pitch type | FanDuel Sports Network Ohio      |
| Cleveland Guardians   | Pitch speed              | Pitch speed              | —                        | MLB Local Media                  |
| Colorado Rockies      | Pitch speed              | Pitch speed              | —                        | MLB Local Media                  |
| Detroit Tigers        | Pitch speed              | —                        | Pitch speed & pitch type | FanDuel Sports Network           |
| Houston Astros        | Pitch speed              | Pitch type               | —                        | Space City Home Network          |
| Kansas City Royals    | Pitch speed              | —                        | Pitch speed & pitch type | FanDuel Sports Network           |
| Los Angeles Angels    | Pitch speed              | —                        | Pitch speed & pitch type | FanDuel Sports Network           |
| Los Angeles Dodgers   | Pitch speed              | —                        | —                        | Spectrum SportsNet LA            |
| Miami Marlins         | Pitch speed              | —                        | Pitch speed & pitch type | FanDuel Sports Network           |
| Milwaukee Brewers     | Pitch speed              | —                        | Pitch speed & pitch type | FanDuel Sports Network Wisconsin |
| Minnesota Twins       | Pitch speed              | Pitch speed              | —                        | MLB Local Media                  |
| New York Mets         | —                        | Pitch speed              | —                        | SportsNet New York (SNY)         |
| New York Yankees      | Pitch speed              | Pitch speed              | —                        | YES Network                      |
| Oakland Athletics     | Pitch speed              | Pitch speed & pitch type | —                        | NBC Sports California            |
| Philadelphia Phillies | Pitch speed              | Pitch speed & pitch type | —                        | NBC Sports Philadelphia          |
| Pittsburgh Pirates    | Pitch speed              | Pitch speed              | —                        | SportsNet Pittsburgh             |
| San Diego Padres      | Pitch speed              | Pitch speed              | —                        | MLB Local Media                  |
| San Francisco Giants  | Pitch speed              | Pitch speed & pitch type | —                        | NBC Sports Bay Area              |
| Seattle Mariners      | Pitch speed              | Pitch speed              | —                        | Root Sports Northwest            |
| St. Louis Cardinals   | Pitch speed              | —                        | Pitch speed & pitch type | FanDuel Sports Network           |
| Tampa Bay Rays        | Pitch speed              | —                        | Pitch speed & pitch type | FanDuel Sports Network           |
| Texas Rangers         | Pitch speed              | Pitch speed & pitch type | —                        | Rangers Sports Network           |
| Toronto Blue Jays     | Pitch speed              | —                        | —                        | Sportsnet                        |
| Washington Nationals  | Pitch speed              | Pitch speed & pitch type | —                        | MASN                             |
