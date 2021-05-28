```python
import numpy as np
import plotly.express as px
import pandas as pd
```


```python
x = np.linspace(0,2*np.pi,100)
y = np.sin(x)
```


```python
%matplotlib inline
f = plt.figure(figsize=(8,4))
plt.plot(x, y)
plt.grid(ls=':')
```


![svg](test_files/test_2_0.svg)

