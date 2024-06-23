---
layout: veritas
title: Veritas
slug: /veritas
items:
  - title: "[February 2024] The Original Idea - Financial Advisor LLM for Retail Investors"
    image:
      src: /assets/img/work/water.png
      alt: water
    description: <p>At a very early stage of Veritas (back then Pulse), I concluded that general-purpose LLMs were not great at answering domain-specific questions and accessing niche information online. In my view, the future lay in fine-tuning/retraining on data from specific tasks, rather than on scraped data from all over the Internet.</p> <p>Since I was mainly interested in Quant Finance, I started testing open-source models to see how they'd answer questions on portfolio allocation, stochastic modeling, finance/economic theories, trading considerations, and more. As expected, the results were too generic and lacked good references. My initial idea was to build an AI financial advisor by simply taking an open-source LLM and fine-tuning it using relevant websites, books, forums, and articles.</p> <p>I started by using Alpaca LoRA 4-bit and quickly noticed some performance issues and hallucinations when using the 7B model. Using LoRA outside of Alpaca seemed like a lot of friction back then. Alpaca was not as good as GPT-4 or Mistral's large model. I met someone who recommended using RAG (Retrieval Augmented Generation) with AnythingLLM to quickly eliminate any product risk. AnythingLLM is a nice UI where a user can emulate a domain-specific database by uploading PDFs, text files, etc., which the model of your choice will refer to in the answers.</p> <p>Now that the product risk had been removed, the billion-dollar question was if there was a market for it...</p>

  - title: "[March - April 2024] YC S24 Application"
    image:
      src: /assets/img/work/sand.png
      alt: sand
    description: <p>The idea to apply to YC came to me around January - February 2024, and luckily, I had plenty of time to prepare before the deadline. Knowing the challenges of startups, my first priority was to find the right cofounder. Despite tapping into my network, changing cities frequently meant I didn't know many technical people in Austin.</p> <p>While long-distance collaboration can work, I felt that in-person interactions were crucial for a startup's success. Many of my friends faced legal constraints due to visas and permits, and those without such issues were hesitant to join a venture without proven market fit.</p> <p>I didn't give up and registered on the YC co-founder matching platform, starting to "date" potential co-founders here in Austin. Soon after, I found a solid CTO, and we began working together. We brainstormed different ideas, read case studies, shared insights into LLMs, focusing on finding an "acute and frequent" problem.</p> <p>Among many case studies, I remember reading about <a href="https://www.news.aakashg.com/p/rocket-plus-truebill">Truebill's story</a>, thinking that their idea was genius and simple—cancel useless subscriptions and/or negotiate new rates. I got super inspired by this and immediately suggested we build Truebill for financial products. Asset managers charge investors a monthly "subscription" for investing in their product, also known as a management fee. The idea was to look into your portfolio (multiple investment accounts), analyze how much you're paying for an ETF/Mutual Fund, and recommend the most similar product at a lower cost.</p> <p>Our prototype collected your investment data through Excel/Plaid and provided an actionable report showing if you're overpaying for a given category. Think of the S&P 500 index; the most liquid S&P 500 ETF is SPY, which charges you 0.09%. There is an alternative four times cheaper—SPLG, a tracking index ETF by State Street that charges 0.02%. Both ETFs perform the exact same function, and even though SPLG is less liquid, it shouldn't matter if you're investing long-term. Thus, there is a clear, cost-effective solution to your problem.</p> <p>A few weeks before the application deadline, I realized that the partnership with the CTO was not working out, so I decided to build the prototype myself and apply solo. I quickly developed an MVP in three weeks and even added a custom-made chatbot to follow up on the recommendations. The pipeline was &quot;share your holdings -&gt; get a report showing how much you can save -&gt; follow up on the recommendations with an AI chatbot.&quot; The demo worked well, and I recorded a 3-minute video for YC and sent my application. </p>
    pdf_report: /assets/pdf/Demo_YC_report.pdf
    image: /assets/img/report_image.jpg
    youtube_video: https://www.youtube.com/watch?v=MgI6-_B3K-M
---

<p>
Veritas is a startup I began working on full-time in May '24. The philosophy behind the startup is influenced by three books: The Four Steps to the Epiphany by Steve Blank, The Lean Startup by Eric Ries, and The Mom Test by Rob Fitzpatrick.
</p>

<p>
As of June '24, I have pivoted twice from the original idea due to a lack of product-market fit. With each new pivot, I strive to follow a lean approach—validating the idea first and gaining traction without committing months to a product that no one will end up paying for.</p> <p>In this section, I want to share my startup milestones, mistakes I've made, and the ideas behind each iteration, pivot, product, and customer segment.
</p>
