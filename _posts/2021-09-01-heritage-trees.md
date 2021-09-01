---
 layout: post
 title:  "Heritage Trees in Ireland"
 date:   2021-09-01 12:02:00 +0000
 categories: jekyll update
 header: test
---

The government public [database](data.gov.ie) is a cool resource, and something I want to experiment with more in the future.
Definitely useful for data viz, and perhaps useful for some data analysis!

Anyway, I found that there was a survey in 2009 that catalogued all the [heritage trees in Ireland](https://data.gov.ie/dataset/heritage-trees-of-ireland?package_type=dataset). These are trees that have some significant importance. They could be extremely old, rare species, or significant landmarks.

Using the folium + python combination I learned a while back, we can make a cool website map to show all these trees and some of their information! Markers show the tree locations, coloured by age. Clicking on a marker will reveal additional tree information.

See if you live near any of them!

<iframe src="/assets/html/folium/trees_map.html" height="700" width="1000"></iframe>
