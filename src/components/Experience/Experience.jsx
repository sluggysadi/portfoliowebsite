import React from "react";
import { AnimatedCarousel } from "./carousel";
import img0 from "../../assets/experience/img0.jpg"
import img1 from "../../assets/experience/img1.png"
import img2 from "../../assets/experience/img2.jpg";
import img3 from "../../assets/experience/img3.jpg";
import img4 from "../../assets/experience/img4.jpg";
import img5 from "../../assets/experience/img5.jpg";
import img6 from "../../assets/experience/img6.jpg";

const Experience = () => {
  const slides = [
    {
      src: img0,
      alt: "About Me",
      title: "What's a portfolio without an introduction?",
      paragraph:
      "Scroll to learn about my college & career experience + my interests!",    
    },
    {
      src: img1,
      alt: "Career Journey",
      title: "How I chose my path",
      paragraph:
        "I actually always wanted to be a lawyer. But after researching at Georgetown and doing mock trial competitions in real courtrooms, I realized that while I wanted to make a difference, I didn’t want to confine myself to a courtroom. That’s when I chose an interdisciplinary degree in Data Science—because I loved researching, analyzing data, and translating it into stories people could understand. I still hold onto my passion for justice and creating meaningful change, but now I’ve built skills that let me bring those ideas to life in new ways.",
    },
    {
      src: img2,
      alt: "College Journey",
      title: "My College Journey so far",
      paragraph:
        "I am currently a junior at UC Davis! While I am majoring in Data Science, this year I am also pursuing a double major in Design! I did this to continue to advance my skills in creating my passion projects! I am a VP of Girls Who Code, I was part of a dance team freshman year, and I currently hope to continue to join more organizations that align with my aspirations and skills!",
    },
    {
      src: img3,
      alt: "Internship",
      title: "My Career Journey",
      paragraph:
        "I started out my very first internship for a peer-to-peer platform for buying and selling restaurant reservations, primarily at exclusive establishments! I was a data analyst working on explaining data trends to company leadership!",
    },
    {
      src: img4,
      alt: "EchoAI Startup",
      title: "My Career Journey",
      paragraph:
        "I then worked at a Berkeley-based startup that created the first emotionally intelligent AI that can identify users' emotions correctly! Our team and our CEO spent over 30,000 hours mapping, labeling, and training EchoAI. I loved how we shared the value of believing technology should enhance human connection, not replace it. I spent my time here as a data scientist, working on the data pipeline as well as building the frontend of the mobile app.",
    },
    {
      src: img5,
      alt: "Apple Role",
      title: "What I am doing currently",
      paragraph:
        "I am currently working at Apple as a Support Advisor where I help users with their hardware and software issues while I work on my own passion projects on the side. I am currently developing the first intelligent photo organizer that captures the context of your photos and makes a scrapbook of your life!",
    },
    {
      src: img6,
      alt: "My Hobbies",
      title: "My Hobbies",
      paragraph:
        "I’m always up for an adventure. Experiences that challenge and excite me just make me love living! I love experimenting with different cuisines (especially Thai!). I once tried glass fusing at my school’s craft center while I was helping revamp their social media page… let’s just say pottery is much more my style. I also love hiking and going on long, wandering walks, often turning them into little scavenger hunts for myself. Reading and writing poetry are close to my heart, and I’m currently working on a collection I hope to publish one day (shoutout to my high school English teacher who used my poems as examples for her class - my ego is still thriving from that). And finally, I play video games… I saved that for last because I wanted to sound cooler first.",
    },
  ];

  return (
    <section id="Experience" className="py-20">
      <AnimatedCarousel slides={slides} autoplay />
    </section>
  );
};

export default Experience;