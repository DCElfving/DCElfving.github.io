---
title: 'Stars'
subtitle: 'Portraits realized in Augmented Reality.'
#date: 2020-03-07 00:00:00
#description:
featured_image: '/images/stars/stars_hero.png'
---

These are three dimensional portraits captured with the depth sensor of an iPhone. As visitors investigate a mantlepiece crowded with star charts, the portraits are revealed in augmented reality.

<iframe src="https://player.vimeo.com/video/377403981" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

<div class="gallery" data-columns="2">
	<img src ="/images/stars/stars_1.png"/>
	<img src ="/images/stars/stars_2.png"/>
</div>

<em>Give me my Romeo; and, when he shall die,<br>
Take him and cut him out in little stars,<br>
And he will make the face of heaven so fine<br>
That all the world will be in love with night<br>
And pay no worship to the garish sun.<br>
<strong>– Shakespeare, Romeo and Juliet</strong></em>

<h3>Beginner’s Mind</h3>
The delightful uncertainty and curiosity of learning. It's a reassuring concept for creating in augmented reality.

<h3>The Beauty of Point Clouds</h3>

How to make three dimensional portraits? It’s remarkably easy, then really complex…

Our devices are capable of far more than photos and video; they can capture the topology of our faces and the geometry of our surroundings.

Products like the iPhone X and Microsoft Kinect are able to model the environment by projecting and analyzing infrared light. The resulting data can be saved as a set of coordinates called a point cloud – the raw material for a 3D model. Visualized, they look to us like delicate constellations; to our devices they're just a big list of numbers.

<img src ="/images/stars/stars_3.png"/>

There are several apps and third party sensors that make it easy to scan things this way (I used Capture for iPhone). 

<h3>An Unexpected Collaborator</h3>
The most challenging aspect of this project wasn’t technical, it was optical.

To function, AR experiences need to be aligned with something in the real world. It can be the plane of a tabletop, a unique object, or an image. This often results in a two step process for users: first scan an anchor, then see something interesting.

While exploring ways to render these AR portraits as constellations (point clouds evoke a stellar mindset), I realized a star chart might serve as an anchor and a texture for the models.

Merged this way, the act of scanning is integrated into the experience. It becomes more like peering through a magic window, a bit less like checking out at the grocery store. But there’s a catch: not every image makes for a good anchor.

<img src ="/images/stars/stars_5.png"/>

Apple’s development tools use a machine learning algorithm that issues a warning when an image isn’t suitable for tracking. But as the color and texture of the charts would determine the aesthetic of the piece, these warnings felt like creative criticism from an unwelcome collaborator. Heedless of its protests, I tried all the charts.

<img src ="/images/stars/stars_6.png"/>

I was lucky. The chart most acceptable to my machine learning partner was also what I liked best.

<img src ="/images/stars/stars_7.png"/>

They worked, even in the dim lighting of my apartment.

Seen side by side, it seems obvious that greater contrast and simpler patterns would make for better anchors. But I couldn't have intuited this at the outset; integrating anchors requires a give and take with the AR platform itself.

<h3>What's Next?</h3>
This is a proof of concept. It'd be fascinating to develop a room scale experience and bring it to life with short animations – a laugh or a smile – rather than static models. I’m also deeply curious how the experience will eventually feel in AR headsets.

More than anything, this was a profound learning experience. I’m not at all certain where these rapidly evolving technologies will lead. Could there be a better time to create with them?
