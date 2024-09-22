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
  <img src="{{ "/assets/img/learning/alice_bob.png" | absolute_url }}" alt="Alice-Bob Optimal Strategy as Defined by a Human" class="post-pic"/>
  <figcaption>Alice-Bob Optimal Strategy as Defined by a Human</figcaption>
</figure>

These aspects are often overlooked in multi-agent reinforcement learning (MARL). Incorporating them can guide RL agents toward human-like policies.

**Comment**: The authors seem to aim for an agent capable of navigating complex environments and communicating verbally with humans. This approach likely merges MARL, RLHF (Reinforcement Learning from Human Feedback), Imitation Learning, and Human-AI interaction. **What is the communication overhead in this scenario?**

# Specifics of the Framework

The authors introduced InstructRL, a framework that enables humans to specify the types of strategies they expect from their AI partners through natural language instructions. They used pretrained large language models to generate a prior policy conditioned on the human instruction and used the prior to regularize the RL objective. They first (1) construct a prior policy by querying large language models (LLMs) based on the (2) instructions and (3) short descriptions of the current observation.

## LLM Prior Policy

For instance, in the Say-Select example in Figure 1, we can give the instruction “Select the same number as Alice” to the Bob agent. The description of the current observations could be “Alice said 1.” We then train an RL agent, where its objective is regularized using the generated LLM prior as a reference policy.

**COMMENT:** Regularization based on a reference policy usually involves applying a penalty for the difference between the proposed policy and the reference.

They construct the prior policy by letting an LLM predict the probability of possible actions given the observation and the instruction. To do so, they evaluate:

$$p_{LLM}[lang(a_t)|lang(\tau^{i}{t}), inst]$$

$$p_{LLM}$$ = softmax($$\beta * logit$$), 

where $$\beta$$ is an optional scaling factor and the logit is a function of the language components, i.e.,

$$\text{logit} = f(inst, lang(\tau), lang(a_t))$$

For actions that have homogeneous descriptions, such as in Say-Select, the logit function $$f$$ can simply be the prediction loss. A reminder that prediction loss is:

$$ \text{Loss} = -\sum_{i=1}^{n} y_i \cdot \log(\hat{y}_i) $$

Here one needs to iterateve over the true and observed probabilities of all actions in a given state. We want the loss to approach 0.

**COMMENT/POINT OF IMPROVEMENT:** This is a great idea. Problems may arise when it's difficult to map to $$a_t$$. LLMs are non-deterministic and can hallucinate. While the instructions remain constant, the wording of the observations might change slightly. This paper tries to emulate an interaction between a human and a robot. Suppose, even in simple settings, a human says/prompts: "I'd recommend you pick 1," "Pick one," "One is good," or "Good to go with 1." Are we sure that these minor changes in the wording of the observation won’t cause the model to hallucinate or map us to a different action? This challenge can be overcome with fine-tuning and using more advanced language models, but this prior reliance on the inherently stochastic nature of LLMs can be tricky.

The authors also mention that: It is easy to convert actions to language descriptions in the games considered in this paper. However, it is worth noting that many environments contain actions that cannot be easily abstracted into language, e.g., in a robotics setting, where the actions are the continuous joint angles of a robot arm.

**COMMENT:** This is true, but even in simpler settings, models can generate language interpretations of actions that do not exist in your $$lang(a_t)$$ space.

**SUGGESTION:** What if we instead use LLMs to convert back to dictionaries or history lists? That is, a human says/prompts something, and we use function calling to only produce a parameterized probability of possible actions?

**SUGGESTION:** Additionally, what if we experiment with the current settings and introduce variable instructions?

**SUGGESTION:** The authors suggest that in real-world scenarios that require grounding in the physical environment, we may use image captioning models. Instead of words, we could experiment with descriptive languages of the scenes or extend the framework to allow humans to specify instructions in video format.


**SUGGESTION:**  
"The LLM prior $$p_{LLM}$$ itself is not sufficient to solve complex tasks. For example, a moderate-sized LM with roughly 6B parameters cannot figure out when to quit in Say-Select in Figure 1, and even the largest LM to date cannot play Hanabi." Why use a 6B model for this task? A larger model can definitely follow human instructions. **Discuss with Yuchen.**

## Regularization

Regularization has been widely used in RL to encourage exploration (Mnih et al., 2016) or to **encourage an RL policy to stay close to a given prior**. In this paper, the author wants to similarly regularize an RL agent to guide the equilibria towards desirable behaviors. They consider two types of regularization techniques for **Q-learning** ([check my blog on this](https://yarokazakov.com/2024/09/19/RL-Q-learning)) and **PPO**, respectively.\\

For Q-learning with priors, the authors reference [this](https://www.nature.com/articles/nature14236), which I don't have access to. I assume the authors reference the Q-learning update rule for prior knowledge and prior probabilities.

The $$p_{LLM}$$ becomes:

$$
a = \epsilon\text{-GREEDY}(Q_\theta + \lambda \log p_{LLM})
$$

and the training update rule becomes

$$
Q_\theta(\tau_t^i, a_t) \leftarrow r_t + \gamma Q_\theta(\tau_t^{i+1}, a_{t+1}),
$$

where

$$
a_{t+1}^{'} = \arg\max_{a} \left[ Q(\tau_{t+1}^i, a) + \lambda \log p_{LLM}(\tau_{t+1}^i, a) \right].
$$

Note how this algorithm is different from the standard Q-learning:

$$
Q(s_t, a_t) \leftarrow Q(s_t, a_t) + \alpha \left( r_t + \gamma \max_{a'} Q(s_{t+1}, a') - Q(s_t, a_t) \right)
$$

Choosing action using the exploration policy:

$$
a_t = \epsilon\text{-GREEDY}(Q)
$$

For PPO (Schulman et al., 2017b;a), we add a KL penalty term to the objective:

$$
J(\theta) = \mathbb{E}_{\tau \sim \pi_\theta} \left[ R(\tau) + \lambda \text{KL}(\pi_\theta || p_{LLM}) \right].
$$

The policy loss becomes:

$$
\mathbb{E}_{\tau \sim \pi_\theta} \left[ \sum_t \left[ - \log \pi_\theta(a_t | \tau_i^t) A_t + \lambda \text{KL}[\pi_\theta(\tau_i^t) || p_{LLM}(\tau_i^t)] \right] \right].
$$

**COMMENT:** Read the paper on PPO or get a hang of it by reading supplementary material. PPO seems to provide better stability and better transition under the gradient policy ascent than Q-learning.

## Experiment
In this game, we use instructQ for Bob, while allowing Alice to use vanilla Q-learning.

**COMMENT:** Why does Alice need to use vanilla Q-learning at all? Doesn't she emulate a human?

The authors map Bob’s observation to text $$lang(\tau_i^t)$$ by converting Alice’s most recent action (1 through 5) from integer to string.
Note that the RL policy still observes the last two actions. For Bob’s actions, they map them to the strings {"0", "1", ..., "5"}, with 0 for quitting and the remaining 1 through 5 for selecting the corresponding ball. They combine all these components to create the following prompt:

1. inst
2. My partner selected $$lang(\tau_i^t)$$
3. So should I select

**COMMENT:** It would be interesting to see how prompt-specific this part is.

The authors feed the prompt to an open-sourced GPT-J model with 6 billion parameters and use the prediction loss for the action strings as logits (Ahn et al., 2022).

**COMMENT:** Confirm with Yuchen that this means outputting probabilities of each word? Sometimes GPT-J can output it in the form of logits directly.

They apply SOFTMAX to the logits with $$\beta = 1$$ to get the prior policy $$p_{LLM}$$. They use tabular Q-learning with no neural network as the state space is small enough, and a regularization weight $$\lambda = 0.25$$ for instructQ. Details on the hyperparameters are in Appendix A.1.

**COMMENT:** A neural network would be better for a more sophisticated problem then? Check with Yuchen.

**COMMENT:** The learning rate was mentioned in the Appendix. It is not in the formula. I guess the author mentioned it for the vanilla Q-learning for Alice? The update rule for the regularized version doesn't include the learning rate, right?

## Result
With instructQ, Alice and Bob always (10 out of 10 seeds) converge to the intuitive joint policy.

**COMMENT:** These results are fascinating because the first two tables are constructed based on the Q-learning algorithms that had not been able to identify a human-defined strategy, meaning quitting when Alice says the same number twice. Now I understand the purpose of a human-defined policy. The optimality of the first two strategies cannot be defined in human terms as "common sense" or "sensible." The first two strategies are essentially randomly fitted rewards.

<figure>
  <img src="{{ "/assets/img/learning/score_table.png" | absolute_url }}" alt="Score Table" class="post-pic"/>
  <figcaption>Optimality based on Q-learning and InstructQ</figcaption>
</figure>


## Hanabi

The idea is the same as before, but the environment is more complex. Q-learning and PPO are as good as the `instructQ` policies in terms of collected reward! The downside of vanilla Q-learning and PPO is the lack of interpretability and the inability for humans to enjoy the optimal strategy.

**SUGGESTION:** Try a better language model first.

**SUGGESTION:** Different question style? What can we do instead of YES/NO questions?

The authors pre-compute the logits for all $$\text{lang}(\tau^i_t)$$ and $$\text{lang}(a_t)$$ pairs and cache them before training RL.

**COMMENT:** Discuss this idea with Yuchen.

The LLM prior policy only needs to provide coarse guidance to bias the RL agent to converge to desired equilibria. Second, we do not want the RL agent to suffer from the inherent biases of the LLM because they can lead to sub-optimal outcomes.

**COMMENT:** Discuss this too. How coarse is coarse? How well would it converge to the policy if the priors were more detailed?


[Click here to access my GitHub pdf](https://github.com/YaroKazakov/RL-phd/blob/main/paper_reviews/Paper_review_LLM_RL_Hu_Sadigh.pdf)
