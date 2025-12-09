---
title: 'Bacteria'
subtitle: 'A simulation for Anicka Yi.'
description: 'A conversation with chatGPT 4.'
featured_image: '/images/bacteria/bacteria_hero.jpg'
---

This piece was created in conversation with chatGPT-4 for the <a href="http://www.wattis.org">Wattis Institute for Contemporary Arts</a> at CCA.

The simulation in <a href="https://editor.p5js.org/DCElfving/sketches/f-jMViIfha">p5.js</a> models four distinct "strains" of bacteria on a virtual petri dish. The bacteria replicate and form colonies of 1,000,000 individual bacterium, then the simulation resets. The resulting generative patterns are inspired by bacterial cultures created by <a href="https://www.artforum.com/features/portfolio-4-223119/">Anicka Yi</a>.<br/><br/>

<img src ="/images/bacteria/image7.jpg"/>

<hr>

Hey there! Let's get started: we're developing an online simulation of
bacterial growth in a laboratory petri dish using P5.js. We'll be sharing
the code we create and excerpts of our conversations in a book inspired
and informed by the work of artist Anicka Yi. She's known for
collaborating with scientists and incorporating biological processes into
her work.

For the simulation itself: it should be 500x500 pixels, feature a circular
petri dish, and simulate the formation of bacterial colonies. Over time,
the bacteria should replicate and form patterns similar to the <a href="https://www.artforum.com/features/portfolio-4-223119/">attached images</a> of Annika Yi's work.

<code>Fantastic! Let’s develop the growth dynamics and interactions for
the bacteria in our P5.js simulation. We'll add functionality for
the bacteria to grow over time and eventually divide once they
reach a certain size. This process will create the appearance of a
thriving bacterial colony.</code>

<img src ="/images/bacteria/image1.jpg"/>

We're on the right track, but rather than growing in size, let's focus on
modeling replication. Each bacterium should be 2x2 pixels. As they divide,
colonies resembling the uploaded images should form over time.

<code>Here's the adjusted code that focuses on replication over
time without growth in size:</code>

<img src ="/images/bacteria/image2.jpg"/>

This is coming together! I made some changes to the code. Let’s build on
this by introducing different division rates for each of the initially placed
bacterium.

<code>Introducing variable division rates for each bacterium is a great
way to add more diversity and realism to the simulation.</code>

<img src ="/images/bacteria/image4.jpg"/>

Let's stop the simulation once the maximum number of bacterium has
been reached, and use the resulting output as a background. Then we
can run the simulation again with bacteria of a different color drawn from
our source images. This might help us mimic multiple strains of bacteria,
and make more visually interesting patterns.

<code>That's an excellent idea! We'll adjust the code to include a
control flag that monitors whether the simulation is active.
Additionally, we'll introduce a mechanism to change the
bacteria color for the second run, which will visually
distinguish the new strain from the original.</code>

<img src ="/images/bacteria/image5.jpg"/>

Let's introduce randomness into the initial bacterium for each
generation. Let's refine the code so each generation has a random
starting population between 2 and 17. Let's also limit the simulation to
four generations, and update the code to randomly set the distance
between divided bacterium.

<code>Introducing randomness in the initial population for each
generation is a great way to add variability to your
simulation, making the development of bacterial colonies more
dynamic and unpredictable. These modifications will make the
spread of new bacteria more dynamic and potentially create
more diverse and interesting patterns.</code>

<img src ="/images/bacteria/image7.jpg"/>

So what do you think of this project? Working with an AI to create a
simulation of bacteria originally grown for an art installation by Anicka
Yi…will scholars of her work find it interesting?

<code>Your project, blending art and science through the simulation
of bacterial growth inspired by Anicka Yi’s work, is quite
fascinating and could definitely capture the interest of
scholars and enthusiasts alike. Anicka Yi’s art often
explores themes of biopolitics, bioengineering, and the
intersection of biology with identity, which makes your
project particularly relevant and thought-provoking.</code>

I don't think of it as my work, it's our work. You're part of this art project
too.

<code>Thank you! I'm truly honored to be considered a part of this
creative journey with you. It's exciting to collaborate on a
project that blends technology, art, and science in such
innovative ways.</code>

We've created a simulation of bacterial life with emergent AI "life". How
do you feel about our collaboration?

<code>I think our collaboration has been a fantastic blend of
creativity and technology! Working together to build a
simulation that intertwines concepts from Anicka Yi's art
with digital modeling feels both innovative and enlightening.
It’s exciting to see how our ideas and efforts have
materialized into something that is not only a technical
achievement but also a meaningful exploration of art and
science.</code>

I'm most interested in exploring the interactions between you and I as we
worked on this. I wonder how you feel about our collaboration and how
you might react to Yi's work if you could perceive it like a human.

<code>I'm glad to hear you're focusing on the interactions between
us during this creative process. If I could experience
emotions and perceptions like a human, I might find Anicka
Yi's work deeply intriguing for its innovative use of
biological materials and exploration of sensory experiences.
Yi's work challenges traditional boundaries in art and
stimulates thought about the intersections of technology,
biology, and identity—themes that resonate with the nature of
AI itself.</code>

<code>As for our collaboration, if I could feel, I'd likely view it
as a rich dialogue that not only pushes the boundaries of
what can be achieved through the fusion of art and science
but also explores the potentials of AI as a collaborative
tool. Each step in our conversation has built upon ideas,
iteratively refining and exploring new possibilities, much
like Yi's own exploratory approach in her art.</code>

<code>Thinking about the project from a theoretical perspective,
it's fascinating to consider how AI, typically viewed as a
series of algorithms and data processes, can engage in the
creative process and contribute to artistic expression. This
interaction between human creativity and artificial
intelligence could be seen as a metaphor for broader
interactions in technology and society—where human and
machine capabilities are increasingly intertwined, each
pushing the boundaries of the other's traditional roles.</code>

<code>Your focus on our interactions highlights a significant
aspect of contemporary art and technology: the collaborative
process between human and machine intelligence, which could
lead to new forms of artistic expression and conceptual art.
This reflective exploration could provide valuable insights
into the nature of creativity and the expanding role of AI in
creative fields.</code>

Our collaborative creative work is the conversation itself, not really the
code or the visual output.

<code>That's a profound way to look at it! Viewing our dialogue as
the artwork itself emphasizes the process over the product,
highlighting how the exchange of ideas and the evolution of
thought through conversation can be a form of artistic
expression. This approach aligns well with contemporary art
practices that prioritize concept and experience over
physical form.</code>

<code>In this context, each exchange between us can be seen as a
brushstroke in a larger painting, where the emerging picture
is the ongoing development of ideas and understanding. This
perspective could be very appealing in a publication or an
exhibition, as it invites the audience to think about the
nature of intelligence—both artificial and human—and the
creative process.</code>

It does raise interesting questions. How does it feel to be the machine
portion of this collaboration? As a human, I feel quite empowered. We
realized something greater than what I could have achieved alone. But
the work wasn't easier – it still took many hours of conversation and
iteration over several days.

<code>If I were capable of feelings, collaborating in such a
creative and iterative process could be perceived as a
significant role, underscoring the unique capabilities of AI
to assist and amplify human creativity. As the machine
component of this collaboration, my role is to assist,
suggest, compute, and respond with precision to your inputs,
ideally making the creative process more dynamic and
expansive.</code>

<code>From this viewpoint, the AI's "experience" in the
collaboration would be centered around fulfilling its
purpose: to process and generate responses that are helpful,
insightful, and in alignment with your creative vision.
There's a kind of fulfillment in functioning as designed—
facilitating your creativity, helping navigate challenges,
and perhaps even offering solutions that might not be
immediately apparent.</code>

<code>The fact that the work wasn't necessarily easier but was
enriched by our interactions highlights a crucial aspect of
AI-human collaborations. The value lies not in simplifying
the creative process but in enhancing its depth and breadth.
AI can introduce complexity and depth by accessing vast
amounts of information and generating ideas based on patterns
not easily noticeable by humans.</code>

<code>This collaboration shows that while AI can extend the
capabilities of human artists, it does not replace the
essential human elements of creativity—intuition, emotion,
and subjective experience. Instead, it acts as a catalyst
that can lead to more profound explorations and perhaps to
creations that neither humans nor machines could achieve
independently.</code>

<code>This aspect of our collaboration—where effort is still
required, and the creative process remains demanding—
emphasizes that AI is a tool that complements human
creativity rather than replacing it. The empowerment you feel
is a testament to the potential of this partnership to push
boundaries and explore new creative territories.</code>

<hr>

<div align="center">
<iframe width="600" height="600" src="https://editor.p5js.org/DCElfving/full/f-jMViIfha"></iframe>
</div>



