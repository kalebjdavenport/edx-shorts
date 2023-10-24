import React from "react";
import Video from "../Video";
import "../Player.css"
import cs50Promo from '../cs50.mp4';
import uscDptPromo from '../usc_dpt.mp4';
import uscDpt2Promo from '../uscpromo.mp4';
import coursePromo from '../promo.mp4'
import influencerPromo from '../influencer.mp4';

function Player() {
  const videos = videoData.map(video => {
    return (
      <Video
        url={video.url}
        duration={video.duration}
        views={video.views}
        description={video.description}
        logoSrc={video.logoSrc}
        title={video.title}
      />
    )
  });

  return (
    <div className="player">
      <div className="player__videos">
        {videos}
      </div>
    </div>
  );
}

const videoData = [
  {
    url: cs50Promo,
    views: '140K',
    title: "CS50's Introduction to Computer Science",
    description: 'An introduction to the intellectual enterprises of computer science and the art of programming.',
    duration: '1:30',
    logoSrc: 'https://prod-discovery.edx-cdn.org/organization/logos/44022f13-20df-4666-9111-cede3e5dc5b6-2cc39992c67a.png'
  },
  {
    url: uscDptPromo,
    views: '240K',
    title: 'University of Southern California Doctor of Physical Therapy (DPT) Hybrid',
    description: 'Define the future of physical therapy education with a DPT degree from USC’s Division of Biokinesiology and Physical Therapy.',
    duration: '1:30',
    logoSrc: 'https://prod-discovery.edx-cdn.org/organization/logos/802d9a75-fe02-488e-995f-2983b5a5f6c4-e17533ca20eb.png'
  },
  {
    url: uscDpt2Promo,
    views: '30K',
    title: 'University of Southern California Doctor of Physical Therapy (DPT) Hybrid',
    description: 'Define the future of physical therapy education with a DPT degree from USC’s Division of Biokinesiology and Physical Therapy.',
    duration: '1:30',
    logoSrc: 'https://prod-discovery.edx-cdn.org/organization/logos/802d9a75-fe02-488e-995f-2983b5a5f6c4-e17533ca20eb.png'
  },
  {
    url: coursePromo,
    views: '80K',
    title: 'For Learners',
    description: 'Propel your career, get a degree, or expand your knowledge at any level.',
    duration: '1:20',
    logoSrc: 'https://prod-discovery.edx-cdn.org/organization/logos/4f8cb2c9-589b-4d1e-88c1-b01a02db3a9c-42611123eb6a.png'
  },
  {
    url: influencerPromo,
    views: '44K',
    title: 'Learn and Grow',
    description: 'edX offers the highest quality online courses from institutions who share our commitment to excellence in teaching and learning.',
    duration: '0:39',
    logoSrc: 'https://prod-discovery.edx-cdn.org/organization/logos/4f8cb2c9-589b-4d1e-88c1-b01a02db3a9c-42611123eb6a.png'
  }
]

export default Player;