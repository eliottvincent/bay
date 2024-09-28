---
layout: post
title:  "Understanding Challenges in Reward Function Modeling"
date:   2024-09-16 10:00:40
research: false
blurb: "A look at an example post using Bay Jekyll theme."
og_image: /assets/img/learning/cs234_lecture1.jpg
---


<br />
For any of you exploring the field of Reinforcement Learning (RL), I hope  this blog is useful in dissecting the various dimensions of Reward Function modeling - the cornerstone of RL.
<br />



When I first set out to understand Reinforcement Learning and wrap my head around Tesla announcing Optimus, I was overwhelmed just with the amount of different orthogonal and correlated directions the field is exploring. Reinforcement Learning with Human Feedback, Language Instructed RL, Multi-agent learning, multi-agent learning with humans, reward function modeling, multi-armed bandit setups, contextual multi-armed bandits, partially-observable MDPs, model-free learning, model-based learning, spatial reward problems and many more. I started without a tutor or mentor, driven by the internal curiosity about the field and knowing that doing research in this field would be extremely interesting to me. A friend of mine recommended reading the "bible" of RL by Sutton and Barto (later referred to as the RL book) to get the hand of what RL actually does. As of now I am still on Chapter 8 and while many methods there are the very fundamental blocks of all modern research, I still struggle to see the bigger picture and the direction(s) the field is going. So I decided, to create this short blog on one of the three corner-stones of RL - Reward Function Modeling.

Reward function modeling at the end of the day is the heart of reinforcement learning. Note that this field is everchanging, and as of 2024, there is a an interesting paper that questions the reward hypothesis but IN GENERAL, the RL community agrees on the following:

All goals can be well thought of in terms of reward maximization.

The RL book mainly works with games, like maze walking, poker, blackjack, grid games and many more. While I was reading the book I did not have a perspectpctive on how difficult it can be to define a reward space. Most problems we want to tackle with AI are a lot more involved than games with scoring points. 

Consider a case of going from point A to point B. How do you specify the reward function? Do you want to move as fast as you can? Do you want to follow a specific scenic route? Do you you want to walk the shortest distance? Perhaps you care about the environment and can only use electric scooters or bike? How about a combination of all of the above? Even though many papers seem to solve for the commuting problem, there are many more areas where it is difficult to define a trivial reward function for every state. How many reward points do you lose if you hit a speed bump?

Anyway... I want to share how the field of reward function modeling evolved and where we started. I believe the first challenges came with reward sparsity and delayed rewards.

### Sparse and Delayed Rewards

Reward Sparsity is a problem where an agent receives rewards very infrequently or after a significant delay, making it difficult for the agent to learn which actions are beneficial or harmful. 

Think of a robot in a maze that only gets a reward if he finds the way out. Depending on complexity of the maze, the robot takes many steps and hence it is arduous for the algorithm to pinpoint which actions led to the reward. "The delay between actions and resulting rewards,
which can be thousands of timesteps long" [CITATION]

#### Example 1: Slow Updates in Q-Learning

In Q-learning, the Q-function updates based on the following rule:

$$Q(s_t, a_t) \leftarrow Q(s_t, a_t) + \alpha \left( r_t + \gamma \max_a Q(s_{t+1}, a) - Q(s_t, a_t) \right)$$
When rewards are sparse, \( r_t = 0 \) for most steps, meaning that:

$$\delta_t = r_t + \gamma \max_a Q(s_{t+1}, a) - Q(s_t, a_t) \approx 0$$

This results in very small updates to \( Q(s_t, a_t) \), causing action values to stay close to zero for long periods until a reward is encountered.

### Example 2: Slow TD Error in Temporal Difference Methods

For TD methods like SARSA, the TD error is defined as:

$$\delta_t = r_t + \gamma Q(s_{t+1}, a_{t+1}) - Q(s_t, a_t)$$

Again, when $$\( r_t = 0 \)$$ due to sparse rewards, the TD error remains small, leading to minimal changes in $$\( Q(s_t, a_t) \)$$. The agent continues to take actions without significantly updating its action values, slowing down learning.

### Solution 1 - Reward Shaping

Reward shaping is a technique  to provide agents with additional guidance through intermediate rewards. The key idea is to introduce additional reward signals to make the learning process smoother without changing the optimal policy.

The concept of reward shaping was formalized by Andrew Ng, Daishi Harada, and Stuart Russell in their 1999 paper, "Policy Invariance Under Reward Transformations: Theory and Application to Reward Shaping" .

#### Core Idea:
The basic form of **potential-based reward shaping** is as follows. Consider a standard RL setup where the agent learns through interacting with an environment modeled as a Markov Decision Process (MDP). The reward shaping technique introduces a potential function \( \Phi(s) \), which maps states to scalar values. The shaped reward \( R'(s, a, s') \) is given by modifying the original reward \( R(s, a, s') \) as follows:

$$
R'(s, a, s') = R(s, a, s') + \gamma \Phi(s') - \Phi(s)
$$

Here:

- \( \gamma \) is the discount factor.
- \( \Phi(s) \) represents a potential function that defines the value of being in state \( s \).

The critical result from **Ng et al. (1999)** was that potential-based reward shaping ensures **policy invariance**, meaning the optimal policy under the shaped reward \( R'(s, a, s') \) is the same as under the original reward \( R(s, a, s') \). This property allows shaping to speed up learning by providing more frequent reward signals, while guaranteeing the agent still converges to the correct policy.

#### Proof of Policy Invariance:
The policy invariance result is derived from the fact that the potential-based reward shaping does not change the Bellman equations that govern the optimal policy. To see why this is true, consider the action-value function for the shaped reward \( Q'(s, a) \):

$$
Q'(s, a) = \mathbb{E} \left[ \sum_{t=0}^{\infty} \gamma^t R'(s_t, a_t, s_{t+1}) \right]
$$

Substitute \( R'(s, a, s') \) from the shaping formula:

$$
Q'(s, a) = \mathbb{E} \left[ \sum_{t=0}^{\infty} \gamma^t \left( R(s_t, a_t, s_{t+1}) + \gamma \Phi(s_{t+1}) - \Phi(s_t) \right) \right]
$$

The terms involving \( \Phi(s) \) cancel out over the sum of the episode due to the telescoping nature of the sum:

$$
Q'(s, a) = Q(s, a) + \Phi(s_0) - \gamma^T \Phi(s_T)
$$

Since \( \Phi(s_0) \) is const

<br />