---
 layout: post
 title:  "Jupyter and Jekyll"
 date:   2021-05-20 18:02:00 +0000
 categories: jekyll update
 header: test
---
This is a quick test on how to implement jupyter notebooks into a static jekyll site!

{%highlight python%}
import numpy as np
import plotly.express as px
import pandas as pd
{%endhighlight%}



{%highlight python%}
x = np.linspace(0,2*np.pi,100)
y = np.sin(x)
{%endhighlight%}



{%highlight python%}
%matplotlib inline
f = plt.figure(figsize=(8,4))
plt.plot(x, y)
plt.grid(ls=':')
{%endhighlight%}


![svg](/assets/img/jupyter/test_2_0.svg)

Aaaand it worked! 

In brief: 
Convert the notebook to markdown using nbconvert
```bash
jupyter nbconvert my_notebook.ipynb --to markdown
```

Move it into the jekyll `_posts` directory and rename to the same syntax as the other posts.
Then just fix all the image paths and you're done!