import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/About.css'

function About() {
  return (
    <div>
      <Navbar />
      <div class="part-1-container">
        <section class="part-1-content">
          <h1 class="about-me-title">My Inspirations</h1>
          <p class="about-me-body">
            I’ve always admired intricate compositions of art and innovative advancements in technology since I can remember.
            Growing up, I longed to find a career where I can apply my two polar-opposite interests. Overtime, the two naturally
            became one, with new innovative tech coming out each year applying creative solutions to our daily problems and
            beautifully designed hardware. From cellphone to flat-screens and even modern smart cars, I’m blessed to live in an era
            where passionate artists can express their uniquely creative minds onto innovative technology, revolutionizing the way
            we live our lives in a fashionable matter. Today, as a full stack developer, I love creating software that helps
            the imaginative vision come to life, allowing businesses to thrive; applying modern, best-practice code, a robust and
            stable back-end with a complimentary, artistic, user-friendly front-end. Just like the modern greats who have inspired
            and paved the way for me, I intend on paying it forward by continuously raising the bar in technology and making
            contributions to a better world with an open and creative mind.
        </p>
        </section>
      </div>

      {/* <!-- <div class="part-2-container">
        <section class="part-2-content">
          <h1 class="about-me-title">Part 2: Tech Lifestyle/Platform</h1>
          <p class="about-me-body">
            Software engineering provides a platform that allows some of the most creative geniuses on earth to come together and
            develop creative products.
            Aside from the technical aspect, I really enjoy team meetings and bouncing ideas with such intelligent and creative
            people that expand the imagination, creative mind, collective IQ, ambitious drive and excitement on daily goals towards the
            final product. Although I do enjoy working remotely for its own benefits, I can truly say working with passionate,
            diverse-minded teams have always been a personal preference. The mutual growth as developers alike on a team over the
            course of a project, proficient productivity with mob-coding, and diverse resources we provide each other makes for
            working with a team such a wonderful experience.
        </p>
        </section>
      </div> --> */}
  
    <div class="part-3-container">
        <section class="part-3-content">
          <h1 class="about-me-title">Infinite Possibilities</h1>
          <p class="about-me-body">
            I even tend to find joy in what most people find most struggling about coding, debugging. The analytical approach in
            finding robust solutions keep me fully submerged in my work until final product is complete and delivered to a
            more-than-satisfied client.
            The entire process of coming up with something new and exciting, gathering ideas to make the best product we can,
            working day in and day out on the little things that make the bigger picture, concluding in such an accomplished
            satisfaction that I’ve never felt with previous work-fields. Compared to my experience with jobs that require repetition
            day-in and day-out, I can truly enjoy the various challenges of day-to-day programming, the little victories from
            beginning to end makes every part of the job fresh, new and exciting.
        </p>
        </section>
      </div>

      <div class="part-4-container">
        <section class="part-4-content">
          <h1 class="about-me-title">Working as a team</h1>
          <p class="about-me-body">
            Software engineering provides a platform and allows some of the most creative geniuses on earth to stand-out and stand
            tall next to their great(choose an other adjective with more dept) contribution towards a better world. The entire
            process of programming and developing moves me in ways I've never been aspired to
            achieve/pursuit(better word choice here). I love project meetings because you get to bounce ideas with such intelligent
            and creative people that expand the imagination, creativity, collective IQ, ambitious drive and excitement!
        </p>
        </section>
      </div>

      <div class="part-5-container">
        <section class="part-5-content">
          <h1 class="about-me-title">Humble Beginnings</h1>
          <p class="about-me-body">
            I remember the first time I launched an html file onto the browser immediately realizing it was a pivotal moment for me.
            I typed my name in an h1 tag, added a style sheet to make the text red, and saw my name in big colored letters. I felt
            like a kid at magic show; my jaw dropped with fascination and wonder. My mind began to race on all the potential
            applications I could create with my creative mind and the advanced skill of a developer. My search in finding a career
            that applies both creativity and logistics was finally discovered and I knew this was something I wanted to do for the
            rest of my life. From then on I completed online courses, and gradually advanced to the full-stack developer I am today
            through hard work and dedication.
        </p>
        </section>
      </div>

      <div class="part-6-container">
        <section class="part-6-content">
          <h1 class="about-me-title">Conclusion</h1>
          <p class="about-me-body">
            In conclusion, my artistic admiration, infatuation with tech, joy in social practices and aspiration for greatness has
            driven into a career I love and enjoy today, a software engineer and developer for a better world tomorrow.
        </p>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default About;