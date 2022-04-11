---
layout: project
title: Project
slug: /project
items:
  # - category: Computer Vision
  #   title:
  #   image:
  #     src:
  #     alt:
  #   description:
  #   link:
  - category: Data Science
    subcategory: Computer Vision
    title: Unsupervised Face Clustering via Adversarial Variational Graph Auto-Encoder and Similarity Density
    image: 
      src: /assets/img/project/clu_face-image.png
      alt: dissertation
    description: these graph-based methods use label data for training models although face clustering is an unsupervised learning problem. Because of this, there still remains a need for an unsupervised learning method that can solve face clustering problems. In this regard, the aim of this study is unsupervised face clustering via adversarial variational graph auto-encoder(VGAE), which can be trained without label data. The adversarial VGAE makes use of latent information by using graph-structured data and can regularise latent infor- mation by a discriminator. Its decoder can achieve competitive performance on a link prediction task. By utilising the link prediction, the clusters of face images can be found.
    link: https://github.com/ksuchoi216/private-project/tree/master/face-clustering

  - category: Data Science
    subcategory: Computer Vision
    title: Developed CNN based objects classification model
    image:
      src: /assets/img/project/cls_moving-object.png
      alt: water
    description: 
      <p>
      <i>Objective</i> <br/>
        &nbsp &nbsp To classify lego blocks extracted from video. The lego part is moving objects because data form is video <br/>

      <i>Difficulties</i> <br/>
        &nbsp &nbsp - To get images from video <br/>
        &nbsp &nbsp - To distinguish objects from background <br/>
        &nbsp &nbsp - To create bounding boxes for objects <br/>
        &nbsp &nbsp - To classify objects <br/>

      <i>Methods</i>(with what I've learned)<br/>
        &nbsp &nbsp - <span style="color:violet"><b>[OpenCV]</b></span> <b>extracted frames from video</b> <br/>
        &nbsp &nbsp - <span style="color:violet"><b>[OpenCV]</b></span> <b>used color tranfromation(hue color) for histogram</b> <br/>
        &nbsp &nbsp - <span style="color:violet"><b>[OpenCV]</b></span> <b>applied gaussian background subtraction with burring</b> <br/>
        &nbsp &nbsp - <span style="color:violet"><b>[OpenCV]</b></span> <b>applied bounding boxes</b> <br/>
        &nbsp &nbsp - <span style="color:violet"><b>[OpenCV]</b></span> <b>applied canny edge detection</b> <br/>
        &nbsp &nbsp - <span style="color:violet"><b>[Keras]</b></span> <b>used CNNs</b> <br/>
    
    
  - category: Data Science
    subcategory: Computer Vision
    title: Improved accuracy of microscopy cell image regression
    image:
      src: /assets/img/project/reg_cell-image.png
      alt: sand
    description: 
      <p>
      <i>Objective</i> <br/>
        &nbsp &nbsp To develop a regression method for predicting the number of 6 different types of celss in a given microscopy image patch <br/>

      <i>Difficulties</i> <br/>
        &nbsp &nbsp - To extract features from cell images<br/>
        &nbsp &nbsp - To reduce dimensionality for regression <br/>
        &nbsp &nbsp - To find out proper model <br/>
        
      <i>Methods</i>(with what I've learned)<br/>
        &nbsp &nbsp - <span style="color:violet"><b>[PyTouch]</b></span> <b>Customized CNN model by using pytorch</b> <br/>
        &nbsp &nbsp - <span style="color:violet"><b>[Cuda]</b></span> <b>Used Cuda method of Pytorch for GPU running</b> <br/>
        &nbsp &nbsp - <span style="color:violet"><b>[Sklearn]</b></span> <b>used PCA method</b> <br/>
        &nbsp &nbsp - <span style="color:violet"><b>[Sklearn]</b></span> <b>used k-fold cross validation</b> <br/>

  - category: Data Science
    subcategory: NLP
    title: Developed emoji preprocessing with Bi-LSTM
    image:
      src: /assets/img/project/cls_tweet.png
      alt: sand
    description: 
      <p>
      <i>Objective</i> <br/>
        &nbsp &nbsp To classify sentiment about tweet(Tweet sentiment analysis) <br/>

      <i>Difficulties</i> <br/>
        &nbsp &nbsp - To do preprocessing for extracting information from tweets<br/>
        &nbsp &nbsp - To tranform emoji or other emotion expression(e.g.:()  <br/>
        &nbsp &nbsp - To select a proper model <br/>
        
      <i>Methods</i>(with what I've learned)<br/>
        &nbsp &nbsp - <span style="color:violet"><b>[Python]</b></span> <b>Used regular expression</b> <br/>
        &nbsp &nbsp - <span style="color:violet"><b>[NLP]</b></span> <b>applied constomed preprocessing for emotion information(including tokenization, removal of stopwords, lemmatisation)</b> <br/>
        &nbsp &nbsp - <span style="color:violet"><b>[sklearn]</b></span> <b>tried executing various models(Bi-LSTM, SVM, Naive Bayes)</b> <br/>

  - category: Data Science
    subcategory: Machine Learning
    title: Analysed London air pollutants data by Linear regression and classification
    image:
      src: /assets/img/project/sand.png
      alt: sand
    description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  
  - category: Computer Science
    subcategory: High Performance Computing
    title: Improved calculation performance of computational fluid dynamics(CFD)
    image:
      src: /assets/img/project/sand.png
      alt: sand
    description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  
  - category: Computer Science
    subcategory: UI/UX
    title: Improving UI/UX and analyzing UI/UX for Grocery Shopping Homepage
    image:
      src: /assets/img/project/sand.png
      alt: sand
    description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  
  - category: Computer Science
    subcategory: Full Stack
    title: Page
    image:
      src: /assets/img/project/sand.png
      alt: sand
    description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  
---

This is my project page with belif explanation regarding what I did. <br />
If you want to know more about my project, please click "see more" link at each project description
<br />
