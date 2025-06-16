---
title: Which MLB broadcasts provide pitch type information, or, using LLMs to generate MLB broadcast data
date: 2025-06-16
---

I've been a baseball fan since I was six, and I've watched a lot of games, but I'm still not great at recognizing pitch types. Is it a four-seam fastball or a sinker/two-seam fastball? Is it a slider or a cutter? A lot of MLB broadcasts show this information with every pitch, which means I can watch games, pay attention to what each pitch looks like and what type the broadcast says it is, and train the pattern-recognition part of my brain. But, as of June 2025, not all broadcasts provide pitch type data. Further, with one welcome exception, the broadcasts that do show the information show it in the corner or bottom of the screen, and flicking my eyes back and forth makes it harder to learn. Ideally, I want to see the pitch type overlaid above the batters box/home plate. The only broadcast that does this? The Chicago White Sox.

<image>

(The displayed pitch type itself comes from MLB's [Statcast system](https://en.wikipedia.org/wiki/Statcast), which is itself an amazing system for generating useful and interesting data.)

Where do LLMs come in?

People like structured data: think about paragraphs of text compared to something like a table... the table is often easier to parse, makes it easier to compare values, etc. Computers like structured data too: most ML algorithms need rows of data, with the same fields for each observation; it's easy to visualize tabular data, and so on.

LLMs make generating structured data amazingly easy. For example, Simon Willison's written about this a good amount, his [LLM command line tool makes it easy](https://simonwillison.net/2025/Feb/28/llm-schemas/), and done conference talks with cool examples, like [extracting FEMA disaster declarations](https://github.com/simonw/nicar-2025-scraping/?tab=readme-ov-file#3-structured-data-extraction-using-llm).

One really cool thing LLMs can do is make it easier to

TODO Reference to Off Speed book
