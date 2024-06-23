---
layout: veritas
title: Veritas
slug: /veritas
items:
  - title: The Original Idea - Financial Advisor LLM for Retail Investors - February 2024
    image:
      src: /assets/img/work/water.png
      alt: water
    description: After a short trip to Europe to see my family in January 2024, I came back to Austin thinking about the future of domain knowledge LLMs. At a very early stage of Veritas (back then Pulse), I concluded that general-purpose LLMs were not great at answering domain-specific questions and accessing niche information online. In my view, the future lay in fine-tuning/retraining on data from specific tasks, rather than on scraped data from all over the Internet. Since I was mainly interested in Quant Finance, I started testing open-source models to see how they'd answer questions on portfolio allocation, stochastic modeling, finance/economic theories, trading considerations, and more. As expected, the results were too generic and lacked good references. My initial idea was to build an AI financial advisor by simply taking an open-source LLM and fine-tuning it using relevant websites, books, forums, and articles. I started by using Alpaca LoRA 4-bit and quickly noticed some performance issues and hallucinations when using the 7B model. Using LoRA outside of Alpaca seemed like a lot of friction back then. Alpaca was not as good as GPT-4 or Mistral's large model. I met someone who recommended using RAG (Retrieval Augmented Generation) with AnythingLLM to quickly eliminate any product risk. AnythingLLM is a nice UI where a user can emulate a domain-specific database by uploading PDFs, text files, etc., which the model of your choice will refer to in the answers. Now that the product risk had been removed, the billion-dollar question was if there was a market for it...

  
---

<p>
Veritas is a startup I began working on full-time in May '24. The philosophy behind the startup is influenced by three books: The Four Steps to the Epiphany by Steve Blank, The Lean Startup by Eric Ries, and The Mom Test by Rob Fitzpatrick.
</p>

<p>
As of June '24, I have pivoted twice from the original idea due to a lack of product-market fit. With each new pivot, I strive to follow a lean approach—validating the idea first and gaining traction without committing months to a product that no one will end up paying for. In this section, I want to share my startup milestones, mistakes I've made, and the ideas behind each iteration, pivot, product, and customer segment.
</p>
