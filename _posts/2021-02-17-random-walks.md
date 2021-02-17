---
 layout: post
 title:  "Random Walks"
 date:   2021-02-17 13:38:22 +0000
 categories: jekyll update
 header: test
---

A random walk is a concept I first encountered during my undergraduate, in regards to the Sun. While it was a relatively brief encounter, the concept is actually quite interesting and warrants a futher look. In the case of astrophysics, photons that are produced in the center of the Sun through fusion, undergo random walks to get to the solar surface. As they move randomly, it takes them some 30,000 years on average to travel from the center of the Sun to the surface and then only 8 minutes or so to travel from the solar surface to the Earth!

It also turns out that random walks are applicable to many other areas of maths, physics, statistics/probability, and finance. For example, the stock markets can be considered to take random walks as they change, in a continuous fashion. There are many problems in statistics that deal with similar issues.

# **Monkey on a Cliff**
So how do we define a random walk? Wikipedia defines it as a mathematical object, a stochastic process, that describes a path that consists of a succession of random steps on some mathematical space. That is fairly vague. Let's make it a bit more real. There are two common problems I want to have a look at here: The monkey on the cliff, and the drunk on his way home.

<!--<span class="image fit"><img src="../images/monkey.png" alt=""/></span> -->
A monkey stands at distance $x = 1$ from the edge of a cliff on his left, at $x = 0$. He takes steps randomly in each direction, with probability of $p$ away from the cliff, and $q$ towards the cliff. In this case, we really don't need to know what $p$ is. The probability that the monkey steps off the cliff from $x = 1$ is $P_1$. So the probability that it walks off the cliff in the first step is $q$, easy. But what is the probability it will fall off the cliff any time in the future? In this case, the probability increases, as it can take any number of random steps but if the sum of steps ever reaches -1, the monkey falls off the cliff.

\[\LaTeX code\]
$$P_1 = q + p \cdot P_2$$

Here, $P_2$ is the probability that the monkey will fall off the cliff, when starting at $x = 2$. However, this is just the same probability of moveing 1 integer left from $x = 1$. Therefore we can say that $P_2 = P_1 \times P_1$, as it is the same probability as moving one to the left, twice! Filling this in gives a quadratic function with the solutions: $$P_1 = 1$$ $$P_1 = \frac{q}{p}$$ Now, if $q>p$, we can elimate the second solution as this would give a probability greater than 1. This means $P_1 = 1$ and our monkey always falls off the cliff. This makes sense as in this case, it is more likely to walk towards the cliff than away from it! On the other hand, if $p>q$, we can say that the solution is $q/p$.

For example, if $p=0.8$, our very wary monkey still has a $25\%$ chance of falling off the cliff! A more erratic monkey, say where $p=0.6$, has a greater chance of $66\%$ of falling from the cliff. This problem becomes much more interesting---and realistic--- if we assume that the step size is not an integer, but a continuous function across some interval. Something for the future!
