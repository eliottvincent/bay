---
layout: post
title:  "TD (SARSA, Q-learning), MC-control - CS234 Lecture 4/Chapter 6"
date:   2024-09-25 10:00:40
self_learning: true
blurb: "A look at an example post using Bay Jekyll theme."
og_image: /assets/img/learning/algo_comp.jpeg
---

<img src="{{ "/assets/img/learning/algo_comp.jpeg" | absolute_url }}" alt="mode_shape" class="post-pic"/>
<br />
<br />

# Lecture 6 - Monte Carlo and TD Control

## Control in MC and TD
We aim to find how good a policy is and learn the best policy without having a model of the environment.

- **Assumptions:**
  - The MDP model is unknown but can be sampled.
  - The MDP model is known but computationally infeasible.

### On-policy learning
- Involves using direct experience.
- Learn to estimate and evaluate a policy using experience obtained from following that policy.

### Off-policy learning
- Learn to estimate and evaluate a policy using experience gathered from following a different policy.

### Policy Iteration Recap
The standard Policy Iteration requires a model of the environment (dynamics + reward). Without this model, we can try **on-policy MC control**:

1. Initialize G(s,a) = 0, N(s,a) = 0, \(Q^{\pi}(s,a) = 0\)
2. Using policy \(\pi\), sample episode \(i = s_1, a_1, r_2, s_2, ...\)
3. Calculate \(G_{i,t} = r_{i,t} + \gamma*r_{i, t+1} + \gamma^2*r_{i, t+2}...\)
4. For each state, action visited in episode \(i\):
   1. For the first or every time \(t\) that \((s,a)\) is visited in episode \(i\):
      1. Update counts: \(N(s,a) = N(s,a) + 1\), \(G(s,a) = G(s,a) + G_{i,t}\)
      2. Update estimate: \(Q^{\pi}(s,a) = G(s,a)/N(s,a)\)
   2. Update the policy: \(\pi_{i+1}(s) = \text{arg max} Q^{\pi_i}(s,a)\)

**Problem:** There is **no exploration**, and the algorithm can get stuck with a greedy action on every step. To address this, introduce exploration through:
- **\(\epsilon\)-greedy algorithms**
- **Optimistic initialization**

### General Goals:
1. Try all \((s,a)\) pairs, then follow \(\pi\).
2. Ensure the resulting \(Q_{\pi}\) is good enough so that policy improvement is a monotonic operator.

**\(\epsilon\)-greedy** ensures exploration by adding randomness when selecting an action at \(s\).

## Temporal Difference (TD) Control
Unlike Monte Carlo (MC), TD updates are made based on the next tuple only, without needing to wait until the episode ends to calculate rewards. Also, you **don’t have to wait until the end to change how you're acting in the world**.

## SARSA
The **SARSA** (State Action Reward Next State Action) algorithm:

1. Initialize an \(\epsilon\)-greedy policy randomly. Set \(t=0\), and \(s_0\) as the initial state.
2. Take \(a_t\) from \(\pi_t\), sample action from policy.
3. Observe \((s_t, r_{t+1})\).
4. Loop:
   1. Take another action \(a_{t+1}\) from \(\pi(s_{t+1})\).
   2. Observe \((r_{t+1}, s_{t+2})\).
   3. Update Q using \((s_t, a_t, r_t, s_{t+1}, a_{t+1})\):
   
      \[
      Q(s_t, a_t) \leftarrow Q(s_t, a_t) + \alpha \left( r_t + \gamma Q(s_{t+1}, a_{t+1}) - Q(s_t, a_t) \right)
      \]
   
   4. Perform policy improvement:
      - \(\pi(s_t) = \text{argmax} Q(s_t, a_t)\) with probability \(1-\epsilon\), else random.
   5. Increment \(t\).

**In summary:**
1. Initialize the policy \(\pi\).
   - Repeat:
     1. Policy evaluation: Compute \(Q^{\pi}\) using temporal difference updating with \(\epsilon\)-greedy.
     2. Policy improvement: Set \(\pi\) to \(\epsilon\)-greedy.

Note how similar this is to **Q-learning**.

## Convergence of SARSA
SARSA for finite-state and finite-action MDPs converges to the optimal action-value \(Q(s, a) \to Q^*(s, a)\) under the following conditions:

1. The policy sequence \(\pi_t(a|s)\) satisfies the **GLIE** (Greedy in the Limit with Infinite Exploration) condition.
2. The step-sizes \(\alpha_t\) satisfy the **Robbins-Monro** sequence:
   
   \[
   \sum_{t=1}^{\infty} \alpha_t = \infty, \quad \sum_{t=1}^{\infty} \alpha_t^2 < \infty
   \]

   For example, \(\alpha_t = 1/T\) satisfies this condition.

## Q-learning
The only difference between **SARSA** and **Q-learning** is in the update rule:

\[
Q(s_t,a_t) \leftarrow Q(s_t,a_t) + \alpha \left( r_t + \gamma \max_{a_{t+1}} Q(s_{t+1},a_{t+1}) - Q(s_t,a_t) \right)
\]

### Key Differences:
- SARSA is **on-policy** (updates based on the action taken by the agent).
- Q-learning is **off-policy** (updates based on the max future reward, independent of the current policy).

### Sutton's Observations:
- In some cases (e.g., the cliff walk example), Q-learning (due to max()) can be **too optimistic** and lead to negative outcomes.
- **SARSA** is **realistic** (vs. optimistic) and can perform better in early samples.

### Convergence:
Depends on the learning rate \(\alpha\).

### Final Summary:
- **Q-learning** is **off-policy** TD Control.
- **SARSA** is **on-policy** TD Control.

[Click here to access my GitHub pdf](https://github.com/YaroKazakov/RL-phd/blob/main/stanford_cs234/cs234_Lecture1_notes.pdf)
