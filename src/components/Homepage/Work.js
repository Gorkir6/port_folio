import React from "react";
import Card from './Card'
import curb from '../../assests/images/curb.webp'
import gaultier from '../../assests/images/dr.webp'

const cards = [
  {
    'image': curb,
    'link' :'https://www.curbsidecuts.ca/',
    'name':'Curbside Cuts',
    'resume': 'Curbside Cuts is a custom theme Wordpress website, made in december 2021 ',
    'key': '13'
  },
  {
    
    'image' : gaultier,
    'link': 'https://www.drgaultier.com/',
    'name':'Dr.Gaultier',
    'resume': 'Dr.Gaultier is another custom theme Wordpress website, made in February 2022',
    'key': '23'
  }
  ]

  function Work(){
      return(
        
    <section  id="work" className="flex">
        <h2 className="work_h2">My projects</h2>
      {cards.map(card => <Card key={card.key} link={card.link}
       source={card.image} name = {card.name} resume={card.resume}></Card> )}
       </section>
      )
  }
  
  export default Work