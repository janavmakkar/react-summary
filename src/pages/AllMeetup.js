import React,{useState, useEffect} from 'react'
import MeetupList from '../components/meetups/MeetupList';

export default function AllMeetup() {

  const [isLoading, isLoadingChange] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    isLoadingChange(true);
    fetch('https://react-demo-app-ff960-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json').then(
      response => { return response.json() }).then(
        (data) => {
          const meetups = [];
          for (const key in data) {
            const meetup = {
              id: key,
              ...data[key]
            };
            meetups.push(meetup);
          };
          isLoadingChange(false);
          setLoadedMeetups(meetups)
      })
  },[])

  if (isLoading) { return (<section> <p>Is Loading...</p></section>) } else {
    return (
      <div>
          <h1>All Meetups</h1>
          <MeetupList data={loadedMeetups} />
    </div>
    )
  }
    

}
