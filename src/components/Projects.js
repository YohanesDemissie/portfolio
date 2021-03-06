import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/Projects.css'

function Projects() {
  return (
    <div>
      <Navbar />
      <div class="shopping-cart-container">
        <section class="projects-content">
          {/* <img class="shopping-cart-img" 
      <!-- src="https://dumielauxepices.net/sites/default/files/discount-clipart-shopping-cart-503584-8748177.png" /> */} 
      <h1 class="projects-title">E-Commerce</h1>
          <p class="projects-body">
            I wanted to create something useful, something that the every day small business owner can use to compete with
            major online corporations. I wanted to create something completely re-usable across all client, yet tailorable
            to
            personal preferences and specific business types.
      </p>
          <p class="projects-body">
            This is a generic online shopping application I created using React JS, Redux, Redux-Form, React-Router 4 and
            Node
            JS, interacting with a real api back end. In the React JS components, you can see I've excercised multiple ways
            to
            render the pages according to what I presume best practice.
      </p>
          <a target="#" href="https://checkout-cart.azurewebsites.net" class="checkout-cart-link">Under Construction. Link Coming Soon</a>
        </section>
      </div>

      <div class="my-meme-container">

        <section class="projects-content">
          {/* <img class="my-meme-img" src="https://i.imgflip.com/2vwpo1.jpg" /> */}
      <h1 class="projects-title">My Meme</h1>
          <p class="projects-body">
            During football season, my fantasy group chats get really active with hilarious memes that can take some time to
            find the right one for the right moment. Searching for a meme, scrolling through options and picking the right
            one
            can take as a little as a few minutes. And in that time, a lot is missed in watching a live game. Some times
            interceptions, fumbles, trick plays and in overall, live excitement is missed out on and we were spending too
        much time on our phones. </p>
          <p class="projects-body">I thought it would be funny and time efficient to just make my own app that allows a
            user to grab a funny image from top 100 funny memes, write their own custom jokes, and post to the group chat;
            spending less time on the phone and more time enjoying each others company, enjoy the game and live in the
            moment
      </p>
          <a target="#" href="http://create-memes.azurewebsites.net/" class="checkout-cart-link">Click Here to Create Your Meme</a>
        </section>
      </div>

      <div class="dev-chat-container">
        <section class="projects-content">
          <img class="dev-chat-image" src='../images/dev-chat-image.png' />
          <h1 class="projects-title">Messenger App (Slack replica ReactJS X Firebase)</h1>
          <p class="projects-body">
            Curious on how cross platform messenger apps work, I thought It would be really cool to look under the roof on
            how
            these apps are made. Now that the app is near exact replica of Slack, I want to incorporate video calling.
      </p>
          <a target="#" href="https://messenger-auth.firebaseapp.com/" class="checkout-cart-link">Public Link Coming Soon</a>
        </section>
      </div>

      <div class="my-music-container">
        <section class="projects-content">
          <img class="my-music-image" src="https://musconv.com/images/AmazonMusic.png" alt="music-image" />
          <h1 class="my-music-title">Music Finder</h1>
          <p class="projects-body">
            A mobile app that allows you to search for your favorite artists songs and albums using Amazons music store API,
            and allowing you to purchase the music as well. In progress to deploying to google play store
      </p>
          <p class="checkout-cart-link">Google Play Store Availability Coming Soon</p>
        </section>
      </div>

      <div class="bitcoin-container">
        <section class="projects-content">
          <h1 class="projects-title">Coin Currency</h1>
          <p class="projects-body">
            Live updates for the currency of the future. Allows user, consumers and investors to keep up with coin values in
            a
            simple way. The user can search their coin currency, view value fluctuations, view current value, and compare it
            to the USD
      </p>
          <p class="checkout-cart-link">Google Play Availability Coming Soon</p>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Projects;