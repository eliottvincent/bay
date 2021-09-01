---
 layout: post
 title:  "Folium"
 date:   2021-05-27 18:02:00 +0000
 categories: jekyll update
 header: test
---
```python
import folium
```


```python
m = folium.Map(location=[53.5, -7.5], zoom_start=7)
```


```python
m
```

<iframe src="/assets/html/folium/f_map.html" height="700" width="1000"></iframe>

Hard to google but embedding a map like this into jekyll is actually easy.
With the map above (m), just do:

```python
m.save('folium.html')
```

Then in your markdown file you can insert the map using:

```markdown
<iframe src="/path/to/html/assets/f_map.html" height="700" width="1000"></iframe>
```