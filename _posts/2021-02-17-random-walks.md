---
 layout: post
 title:  "Random Walks"
 date:   2021-02-17 13:38:22 +0000
 categories: jekyll update
 header: test
---

In the Sun, photons that are produced in the center of the Sun through fusion, undergo random walks to get to the solar surface. As they move randomly, it takes them some 30,000 years on average to travel from the center of the Sun to the surface and then only 8 minutes or so to travel from the solar surface to the Earth!

It also turns out that random walks are applicable to many other areas of maths, physics, statistics/probability, and finance. For example, the stock markets can be considered to take random walks as they change, in a continuous fashion. There are many problems in statistics that deal with similar issues.

# **Monkey on a Cliff**
So how do we define a random walk? Wikipedia defines it as a mathematical object, a stochastic process, that describes a path that consists of a succession of random steps on some mathematical space. That is fairly vague. Let's make it a bit more real. Imagine a discrete monkey on a cliff:

![Monkey image](/assets/img/content/rwalks/monkey.png "Monkey on a cliff!")

A monkey stands at distance $$x = 1$$ from the edge of a cliff on his left, at $$x = 0$$. He takes steps randomly in each direction, with probability of $$p$$ away from the cliff, and $$q$$ towards the cliff. In this case, we really don't need to know what $$p$$ is. The probability that the monkey steps off the cliff from $$x = 1$$ is $$P_1$$. So the probability that it walks off the cliff in the first step is $$q$$, easy. But what is the probability it will fall off the cliff any time in the future? In this case, the probability increases, as it can take any number of random steps but if the sum of steps ever reaches -1, the monkey falls off the cliff.

$$P_1 = q + p \cdot P_2$$

Here, $$P_2$$ is the probability that the monkey will fall off the cliff, when starting at $$x = 2$$. However, this is just the same probability of moving 1 integer left from $$x = 1$$. Therefore we can say that $$P_2 = P_1 \times P_1$$, as it is the same probability as moving one to the left, twice! Filling this in gives a quadratic function with the solutions: $$P_1 = 1$$ $$P_1 = \frac{q}{p}$$ Now, if $$q>p$$, we can elimate the second solution as this would give a probability greater than 1. This means $$P_1 = 1$$ and our monkey always falls off the cliff. This makes sense as in this case, it is more likely to walk towards the cliff than away from it! On the other hand, if $$p>q$$, we can say that the solution is $$q/p$$.

For example, if $$p=0.8$$, our very wary monkey still has a $$25\%$$ chance of falling off the cliff! A more erratic monkey, say where $$p=0.6$$, has a greater chance of $$66\%$$ of falling from the cliff. This problem becomes much more interesting---and realistic--- if we assume that the step size is not an integer, but a continuous function across some interval. Something for the future!

# The Drunkard's Walk
This guy leaves the pub, fashionably inebriated. He is $$n$$ steps from his home in one direction, and $$m$$ steps from the nightclub (the original problem states a police station...), he takes random steps. What is the probability he will go home?

This problem is similar to the previous monkey problem, however now there are two boundaries where the drunk could end up, instead of a single boundary (the cliff above).             

Let us say that $$P_n$$ is the probability he reaches his house. If his first step is towards the house, then he moves to $$n-1$$ and evetually makes it home with probability of $$P_{n-1}$$. This trend can continue forever. If he takes a step towards the nightclub, he eventually reaches his home with probability of $$P_{n+1}$$. Either way it doesn't matter, the total probability must equal one, so we can say

$$ P_{n} = 0.5 P_{n-1} + 0.5 P_{n+1} $$

Here we are assuming that the direction the man walks is unbiased. Now this is essentially just a recursion relation. A well known mathematical concept, defining a sequence of numbers, I have mainly crossed them before while studying fourier series/analysis. Given an initial values/boundary conditions, the general solutions for the most common recursions are easily described. So let's solve it:
            
$$0.5 P_{n+1} - P_{n} + 0.5 P_{n-1} = 0 $$

$$ P_{n+1} - 2 P_{n} + P_{n-1} = 0$$

$$ x^2 - 2x +1 = 0$$

Which has the characteristic double root $$x=1$$. In the usual recurrence relationship the solution is given by $$z = Ax_1^n + Bx_2^n$$ when the roots are different or $$ z = Ax^n + Bnx^2$$ when the roots are the same. Therefore we can say $$P_n = a(1)^n + bn(1)^n = a + bn$$. To solve this we need boundary conditions, which we were given in the problem. Let's say that the drunks house is at $$n=0$$, and the nightclub is at $$n=q$$, where $$n+m=q$$. Then $$P_0 = 1$$ that is, the probability he gets home, if his pub was hs house, is 1, and $$P_q = 0$$, that is the probability is 0 if the pub is the nightclub! That allows us to solve for a and b:

$$a = 1, b = -1/q$$

$$ P_n = 1 - \frac{n}{q} = \frac{q - n}{q}$$

Since probability is nice, we can find the probability the drunk gets to the nightclub as the sum of both probabilities must equal 1. It turns out the probability he makes it to the nightclub is $$\frac{q}{n}$$.
