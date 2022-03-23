import React from "react";
import Card from './Card'
import curb from '../../assests/images/curb.png'
import gaultier from '../../assests/images/dr.png'

const cards = [{
    'image': curb,
    'link' :'https://www.curbsidecuts.ca/',
    'name':'Curbside Cuts',
    'resume': 'Curbside Cuts is a custom theme Wordpress website ',
    'key': '13'
  },
  {
    
    'image' : gaultier,
    'link': 'https://www.drgaultier.com/',
    'name':'Dr.Gaultier',
    'resume': 'Dr.Gaultier',
    'key': '23'
  },
  {
    'image': curb,
    'link' :'https://www.google.com/',
    'name':'Ivan',
    'resume': 'Yo soy ivan ',
    'key': '33'
  }
  ]

  function Work(){
      return(
    <section  id="work" className="flex">
      {cards.map(card => <Card key={card.key} link={card.link}
       source={card.image} name = {card.name} resume={card.resume}></Card> )}
       </section>
      )
  }
  
  export default Work