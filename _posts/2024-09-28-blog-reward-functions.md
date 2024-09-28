---
layout: post
title:  "Reward Function Modeling"
date:   2024-09-16 10:00:40
research: false
blurb: "A look at an example post using Bay Jekyll theme."
og_image: /assets/img/learning/cs234_lecture1.jpg
---

<img src="{{ "/assets/img/learning/cs234_lecture1.jpg" | absolute_url }}" alt="mode_shape" class="post-pic"/>
<br />
For any of you exploring the field of Reinforcement Learning (RL), I hope  this blog is useful in dissecting the various dimensions of Reward Function modeling - the cornerstone of RL.
<br />



When I first set out to understand Reinforcement Learning and wrap my head around Tesla announcing Optimus, I was overwhelmed just with the amount of different orthogonal and correlated directions the field is exploring. Reinforcement Learning with Human Feedback, Language Instructed RL, Multi-agent learning, multi-agent learning with humans, reward function modeling, multi-armed bandit setups, contextual multi-armed bandits, partially-observable MDPs, model-free learning, model-based learning, spatial reward problems and many more. I started without a tutor or mentor, driven by the internal curiosity about the field and knowing that doing research in this field would be extremely interesting to me. A friend of mine recommended reading the "bible" of RL by Sutton and Barto (later referred to as the RL book) to get the hand of what RL actually does. As of now I am still on Chapter 8 and while many methods there are the very fundamental blocks of all modern research, I still struggle to see the bigger picture and the direction(s) the field is going. So I decided, to create this short blog on one of the three corner-stones of RL - Reward Function Modeling.

Reward function modeling at the end of the day is the heart of reinforcement learning. Note that this field is everchanging, and as of 2024, there is a an interesting paper that questions the reward hypothesis but IN GENERAL, the RL community agrees on the following:

All goals can be well thought of in terms of reward maximization.

The RL book mainly works with games, like maze walking, poker, blackjack, grid games and many more. While I was reading the book I did not have a perspectpctive on how difficult it can be to define a reward space. Most problems we want to tackle with AI are a lot more involved than games with scoring points. 

Consider a case of going from point A to point B. How do you specify the reward function? Do you want to move as fast as you can? Do you want to follow a specific scenic route? Do you you want to walk the shortest distance? Perhaps you care about the environment and can only use electric scooters or bike? How about a combination of all of the above? Even though many papers seem to solve for the commuting problem, there are many more areas where it is difficult to define a trivial reward function for every state. How many reward points do you lose if you hit a speed bump?

Anyway... I want to share how the field of reward function modeling evolved and where we started. I believe the first challenges came with reward sparsity and delayed rewards.

**Sparse and Delayed Rewards**

Reward Sparsity is a problem where an agent receives rewards very infrequently or after a significant delay, making it difficult for the agent to learn which actions are beneficial or harmful. 

Think of a robot in a maze that only gets a reward if he finds the way out. Depending on complexity of the maze, the robot takes many steps and hence it is arduous for the algorithm to pinpoint which actions led to the reward. "The delay between actions and resulting rewards,
which can be thousands of timesteps long" [CITATION]

### Example 1: Slow Updates in Q-Learning

In Q-learning, the Q-function updates based on the following rule:

$$\[
Q(s_t, a_t) \leftarrow Q(s_t, a_t) + \alpha \left( r_t + \gamma \max_a Q(s_{t+1}, a) - Q(s_t, a_t) \right)
\]$$
When rewards are sparse, \( r_t = 0 \) for most steps, meaning that:

$$\[
\delta_t = r_t + \gamma \max_a Q(s_{t+1}, a) - Q(s_t, a_t) \approx 0
\]$$

This results in very small updates to \( Q(s_t, a_t) \), causing action values to stay close to zero for long periods until a reward is encountered.

### Example 2: Slow TD Error in Temporal Difference Methods

For TD methods like SARSA, the TD error is defined as:

$$\[
\delta_t = r_t + \gamma Q(s_{t+1}, a_{t+1}) - Q(s_t, a_t)
\]$$

Again, when $$\( r_t = 0 \)$$ due to sparse rewards, the TD error remains small, leading to minimal changes in $$\( Q(s_t, a_t) \)$$. The agent continues to take actions without significantly updating its action values, slowing down learning.


<br />