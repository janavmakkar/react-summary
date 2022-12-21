import React from 'react'
import classes from './MeetupItem.module.css'
import Card from '../ui/Card';
import { useContext } from 'react';
import FavourtiesContext from '../../store/favourite-context';

export default function MeetupItem(props) {

  //Capitalizing the title
  const title=props.title;
  const titleWords = title.split(" ");
  const titleWords2=titleWords.map((word) => { 
      return word[0].toUpperCase() + word.substring(1); 
  }).join(" ");
  // console.log(titleWords," ", title," ",titleWords2)
  
  const favouriteCtx = useContext(FavourtiesContext);
  const isfav = favouriteCtx.itemIsFavourite(props.id);

  function toggleFavouriteHandler() {
    console.log(isfav);
    if (isfav) {
      favouriteCtx.removeFavourite(props.id);
    } else {
      favouriteCtx.addfavourite(
        {
            id:props.id,
            title: props.title,
            imageUrl: props.imageUrl,
            address: props.address,
            description:props.description
        }
      )
    }
    console.log(favouriteCtx.itemIsFavourite(props.id));

  }

  return (
    <Card>
      <li key={props.key} className={classes.item}>
            <div className={classes.image}>
              <img src={props.image} alt={props.title} />
            </div>
            <div className={classes.content}>
              <h2>{titleWords2}</h2>
              <p>{props.description}</p>
              <address>{props.address}</address>
            </div>
            <div className={classes.actions}>
              <button onClick={toggleFavouriteHandler}>{isfav?"Remove from Favourites":"Add to Favourites"}</button>      
            </div>
      </li>
    </Card>
  )
}
