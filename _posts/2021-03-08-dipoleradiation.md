---
 layout: post
 title:  "Dipole Radiation"
 date:   2021-03-08 18:02:00 +0000
 categories: jekyll update
 header: test
---

Antennas possess [radiation patterns](https://en.wikipedia.org/wiki/Radiation_pattern). These patterns are directional gain patterns that tell us how sensitive antennas are in a given direction. This pattern depends on many things, and can form quite complex shapes.

In the end, it comes down to the shape and size of your antenna and the observing (or transmitting) frequency. Proved by the reciprocity theorem, antenna behalf the same way whether you are using them to transmit signals to a receiver around the globe, or receiving signals from the depths of space.

I have written a simple python app using [Dash](https://plotly.com/dash/) and hosted on Heroku, that calculates the radiation pattern for a [dipole antenna](https://en.wikipedia.org/wiki/Dipole_antenna) for a range of observing wavelengths and antenna lengths. 

[Dipole Antenna Radiation Pattern App](http://rad-pattern.herokuapp.com/)

Note that this is a simple 2-d model, and does not calculate the pattern from first principles, but rather from the analytical shape of dipole antenna radiation patterns. 

Nonetheless, it provides a useful too for understanding how the pattern changes depending on what antenna we use!

This was my first time using Dash to write an app in Python. 


Development: Easy. Deployment: Not easy. 
