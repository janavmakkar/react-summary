import React from 'react'
import {useHistory} from 'react-router-dom'
import MeetupForm from '../components/meetups/MeetupForm'

export default function NewMeetup() {
    const history = useHistory();

    function firebaseStorage(data) {
        fetch('https://react-demo-app-ff960-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type':'application/json'
            }
        }).then(() => { history.replace('/'); });
        
    }

  return (
      <div>
          <h1>
              NewMeetup
          </h1>
          <MeetupForm dataSender={firebaseStorage} />
      </div>
  )
}
