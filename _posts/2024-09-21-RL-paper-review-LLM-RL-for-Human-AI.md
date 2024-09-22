---
layout: post
title:  "Paper Review - Language Instructed Reinforcement Learning for Human-AI Coordination"
date:   2024-09-21 10:00:40
self_learning: true
blurb: "A look at an example post using Bay Jekyll theme."
og_image: /assets/img/learning/HAL.gif
---

<img src="{{ "/assets/img/learning/HAL.gif" | absolute_url }}" alt="mode_shape" class="post-pic"/>
<br />
<br />

In this blog, in collaboration with Yuchen Cui, I review [**Language Instructed Reinforcement Learning for Human-AI Coordination**](https://arxiv.org/pdf/2304.07297) by H. Hu and D. Sadigh.


**Author**: Yaro Kazakov  
**Collaboration**: Yuchen Cui  

## Abstract
In this review, we explore the long-term implications of large language models (LLMs) for reinforcement learning (RL) within multi-agent environments. Our focus is on understanding how human-guided policies influence RL outcomes and proposing further research avenues to enhance human-AI coordination.

## General Idea of the Paper
The authors emphasize that the goal isn't to discover an optimal strategy but to closely follow a human-defined policy. These strategies often reflect equilibrium policies, representing optimal or near-optimal joint outcomes. They suggest that *humans tend to prefer specific policy subsets—equilibria in multi-agent games—that align with our capabilities and common sense*. RL, when isolated from human input, can lead to policies that humans struggle to collaborate with.

**Comment**: This assumption may not hold across all environments. "Common-sense" strategies aren’t always optimal. Consider Edward Thorp’s optimal blackjack strategy or OpenAI’s Deep RL bots defeating Dota 2 champions in 2019. Initially, human players found these strategies unconventional, but later adopted them, improving human gameplay.

We should treat human instructions as a starting point or prior while exploring additional strategies. The examples provided in this paper show near-optimal human-guided strategies, but they are limited to the environments tested. What happens when humans perform sub-optimally without realizing it? Future research could explore regularizing RL policies with LLM priors in such situations.

## Problems with RL-Human Interactions
Existing RL algorithms struggle to produce human-compatible policies. For example, in the Alice-Bob game, RL can generate multiple equally optimal joint policies, but they may rely on arbitrary mappings that make human collaboration challenging.

If we exclude LLMs, one would typically produce diverse policies and then train a generalized best-response strategy that works across different human partners.

### Challenges:
1. RL algorithms must produce policies near human-preferred equilibria, which can be environment-specific.
2. Significant computational resources are required to generate enough policies to generalize. In the Alice-Bob game, even a common best response requires extensive exploration to identify its partner’s policy when interacting with humans.

### Solutions Proposed by the Authors:
1. Policies summarized in natural language are easier for humans to understand and coordinate with.
2. In real-world coordination, humans often communicate and negotiate to agree on conventions or equilibria for collaboration.

<figure>
  <img src="{{ "/assets/img/learning/alice_bob.png.gif" | absolute_url }}" alt="Alice-Bob Optimal Strategy as Defined by a Human" class="post-pic"/>
  <figcaption>Alice-Bob Optimal Strategy as Defined by a Human</figcaption>
</figure>

These aspects are often overlooked in multi-agent reinforcement learning (MARL). Incorporating them can guide RL agents toward human-like policies.

**Comment**: The authors seem to aim for an agent capable of navigating complex environments and communicating verbally with humans. This approach likely merges MARL, RLHF (Reinforcement Learning from Human Feedback), Imitation Learning, and Human-AI interaction. **What is the communication overhead in this scenario?**

[Click here to access my GitHub pdf](https://github.com/YaroKazakov/RL-phd/blob/main/paper_reviews/Paper_review_LLM_RL_Hu_Sadigh.pdf)
