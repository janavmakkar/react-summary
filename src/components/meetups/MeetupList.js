import React from 'react'
import MeetupItem from './MeetupItem'
import classes from './MeetupList.module.css'

export default function MeetupList(props) {
  return (
    <ul className={classes.list}>
        {props.data.map((meetup) => {
          return <MeetupItem
              id={meetup.id}
              image={meetup.imageUrl}
              address={meetup.address}
              description={meetup.description}
              title={meetup.title}
              key={meetup.id}
            />;
        })}
    </ul>
  )
}
