---
layout: post
title:  "Research Internship at Imperial Rocketry"
date:   2020-06-20 10:00:40
research: false
blurb: "A look at an example post using Bay Jekyll theme."
og_image: /assets/img/work/gas-turbine-gif.gif
---

<img src="{{ "/assets/img/work/spaceport.jpg" | absolute_url }}" alt="gas" class="post-pic"/>
<br />
<br />

The project was part of the annual Imperial College Rocketry Team's entry in the Spaceport America Cup. This internship provided an excellent introduction to high-performance computing (HPC) using Julia. The main objective was to implement a Mesh Adaptive Direct Search (MADS) algorithm in Julia for trajectory estimation of a gas-propelled rocket. MADS is an optimization algorithm designed to solve nonlinear optimization problems, particularly those with non-smooth or non-differentiable objective functions. It adapts the search mesh size based on the local behavior of the objective function, improving efficiency in finding optimal solutions.


The control algorithm aimed to optimize in-flight fuel consumption to maximize the rocket's apogee (the highest point in its trajectory). The internship was a success: the algorithm's runtime was reduced threefold, largely due to the effective introduction of caching mechanisms.
<br />

##### FOOTNOTES

[^1]: Sulzer is one the largest gas turbine maintenance service providers in the world. 
