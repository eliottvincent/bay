---
layout: post
title:  "Blackjack Policy Evaluation"
date:   2024-09-25 10:00:40
self_learning: true
blurb: "A look at an example post using Bay Jekyll theme."
og_image: /assets/img/learning/BlackjackPlanes.png
---

<img src="{{ "/assets/img/learning/BlackjackPlanes.png" | absolute_url }}" alt="mode_shape" class="post-pic"/>
<br />
<br />

# Blackjack Policy Evaluation using First-visit Monte Carlo Sampling

This is my implementation of the idea shared by Sutton and Barto. Edward Thorpe was able to derive the optimal policy many years ago but Sutton discovered that there is a Reinforcement Learning angle to this problem which I found absolutely fascinating.

## Introduction to Blackjack
Blackjack is a popular casino card game where the objective is to accumulate cards that sum to a value as close to 21 as possible without exceeding it. The card values are defined as follows:

- All face cards (J, Q, K) count as 10.
- An ace can count as either 1 or 11.

In this version of the game, players compete independently against a dealer. The game begins with each player and the dealer receiving two cards, one of the dealer's cards being face up.

## Game Dynamics
The player may either hit (request another card) or stick (stop taking cards). If the player exceeds a total of 21, they "bust" and lose the game. The dealer follows a fixed strategy: they must hit until their total is at least 17. If the dealer busts, the player wins. The outcome is determined based on whose total is closer to 21.

## Markov Decision Process (MDP) Formulation
This game can be represented as a finite Markov Decision Process (MDP) where:

### States
States are defined by three variables:
- The player’s current sum ($S_p$) ranging from 12 to 21.
- The dealer’s showing card ($S_d$) ranging from Ace to 10.
- The count of usable aces ($A_u$), indicating whether the player has an ace that can be counted as 11.

The total number of states is calculated as:
$$
\text{Total States} = \text{Number of Sums} \times \text{Number of Dealer Cards} \times \text{Usable Ace Indicator} = 10 \times 10 \times 2 = 200
$$

### Rewards
Rewards are assigned as follows:
- +1 for a win.
- -1 for a loss.
- 0 for a draw.

The rewards are provided only at the end of each game, leading to the return for each state being equal to the terminal reward. In this scenario, there is no discounting of future rewards, so we have $\gamma = 1$.

## Policy Definition
In this implementation, we define a simple policy where the player sticks if their sum is 20 or 21, and otherwise hits. The goal is to estimate the state-value function ($V(s)$) for this policy using Monte Carlo methods.

## Monte Carlo Estimation
To estimate the state-value function, we simulate many games of blackjack under the defined policy and average the returns following each state. The state-value function can be represented mathematically as:
$$
V(s) = \frac{1}{N(s)} \sum_{i=1}^{N(s)} G_i
$$
where:
- $N(s)$ is the number of visits to state $s$.
- $G_i$ is the return following the $i$-th visit to state $s$.

## Implementation
The following code simulates the blackjack game using the Monte Carlo method to compute the state-value function for the player's sum, the dealer's showing card, and the usability of an ace.

## Conclusion
Estimating the state-value function for blackjack using Monte Carlo methods provides valuable insights into optimal decision-making in the game. Through simulation, we can understand the value of different states and improve strategies for better outcomes.

[Click here to access my GitHub pdf](https://github.com/YaroKazakov/RL-phd/blob/main/stanford_cs234/cs234_Lecture1_notes.pdf)
