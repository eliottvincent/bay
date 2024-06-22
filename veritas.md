---
layout: veritas
title: Veritas
slug: /veritas
items:
  - title: The Original Idea - Financial Advisor LLM for Retail Investors - February 2024
    image:
      src: /assets/img/work/water.png
      alt: water
    description: After a short trip to Europe to see my family in January 2024, I came back to Austin thinking about the future of domain knowledge LLMs. At a very early stage of Veritas (back then Pulse), I concluded that general-purpose LLMs were not great at answering domain-specific questions and accessing niche information online. In my view, the future lay in fine-tuning/retraining on data from specific tasks, rather than on scraped data from all over the Internet.

    Since I was mainly interested in Quant Finance, I started testing open-source models to see how they'd answer questions on portfolio allocation, stochastic modeling, finance/economic theories, trading considerations, and more. As expected, the results were too generic and lacked good references. My initial idea was to build an AI financial advisor by simply taking an open-source LLM and fine-tuning it using relevant websites, books, forums, and articles.

    I started by using Alpaca LoRA 4-bit and quickly noticed some performance issues and hallucinations when using the 7B model. Using LoRA outside of Alpaca seemed like a lot of friction back then. Alpaca was not as good as GPT-4 or Mistral's large model. I met someone who recommended using RAG (Retrieval Augmented Generation) with AnythingLLM to quickly eliminate any product risk. AnythingLLM is a nice UI where a user can emulate a domain-specific database by uploading PDFs, text files, etc., which the model of your choice will refer to in the answers.

    Now that the product risk had been removed, the billion-dollar question was if there was a market for it...

  - title: The Idea for YC S24 - March/April 2024
    image:
      src: /assets/img/work/sand.png
      alt: sand
    description: The idea to apply to YC came to me around January - February 2024, and luckily, I had plenty of time to prepare before the deadline. Knowing how tough startups can be 90% of the time, I was determined to first find the right cofounder. Like any founder, I tapped into my network first, but the problem was that I had changed cities too many times and didn't know any solid technical people in Austin.

    Although there are cases when entrepreneurs build long-lasting relationships over Zoom, I thought this option would not work for me. According to Chris Voss, you miss out on a strong emotional connection when you're not meeting people in person. For a startup where success is 99% defined by founders' determination and sheer power of will, not hanging out with one another seemed like a deal breaker to me. "Wait, there are friends you have relationships with? Doesn't matter if you work online or offline. Ask them first!" Most of my friends have legal constraints put on them by the government. The U.S. and the U.K. have some of the most absurd career limitations when it comes to visas and residence permits. Among "free" friends, I found no success either because the risk of starting something without PMF was too high for them.

    I didn't give up and registered on the YC co-founder matching platform, starting to "date" potential co-founders here in Austin. Soon after, I found a solid technical person, and we began working together. We brainstormed different ideas, read case studies, shared insights into LLMs, and tried to focus on defining that "acute and frequent" problem. One thing I wish I had understood better was the extreme focus on product-market fit. Coding and engineering are not the bottleneck anymore, and hence the product risk in the post-ChatGPT era is much lower than the market risk. We perhaps got too excited about the product aspect.

    Among many case studies, I remember reading about [Truebill's story](https://www.news.aakashg.com/p/rocket-plus-truebill), thinking that their idea was genius and simple—cancel useless subscriptions and/or negotiate new rates. I got super inspired by this and immediately suggested we build Truebill for financial products. Asset managers charge investors a monthly "subscription" for investing in their product, also known as a management fee. The idea was to look into your portfolio (multiple investment accounts), analyze how much you're paying for an ETF/Mutual Fund, and recommend the most similar product at a lower cost.

    Our prototype collected your investment data through Excel/Plaid and provided an actionable report showing if you're overpaying for a given category. Think of the S&P 500 index; the most liquid S&P 500 ETF is SPY, which charges you 0.09%. There is an alternative four times cheaper—SPLG, a tracking index ETF by State Street that charges 0.02%. Both ETFs perform the exact same function, and even though SPLG is less liquid, it shouldn't matter if you're investing long-term. Thus, there is a clear, cost-effective solution to your problem.
---

Veritas is a startup I began working on full-time in May '24. The philosophy behind the startup is influenced by three books: The Four Steps to the Epiphany by Steve Blank, The Lean Startup by Eric Ries, and The Mom Test by Rob Fitzpatrick. As of June '24, I have pivoted twice from the original idea due to a lack of product-market fit. With each new pivot, I strive to follow a lean approach—validating the idea first and gaining traction without committing months to a product that no one will end up paying for. In this section, I want to share my startup milestones, mistakes I've made, and the ideas behind each iteration, pivot, product, and customer segment.
<br />
<br />
