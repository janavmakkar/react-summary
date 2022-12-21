import React,{useRef} from 'react'
import Card from '../ui/Card'
import classes from './MeetupForm.module.css'

export default function MeetupForm(props) {

    const titleInputRef = useRef();
    const imageUrlInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();


    function submitHandler(event) {
        event.preventDefault();

        const titleInputValue = titleInputRef.current.value; 
        const imageUrlInputValue = imageUrlInputRef.current.value; 
        const addressInputValue = addressInputRef.current.value; 
        const descriptionInputValue = descriptionInputRef.current.value;         
        
        const meetUpData = {
            title: titleInputValue,
            imageUrl: imageUrlInputValue,
            address: addressInputValue,
            description:descriptionInputValue
        }

        // console.log(meetUpData);

        props.dataSender(meetUpData);
    }

  return (
    <Card>
          <form action="" className={classes.form} onSubmit={submitHandler}>
              <div className={classes.control}>
                  <label htmlFor="title">Meetup Title</label>
                  <input type="text" required id='title' ref={titleInputRef} />
              </div>
              <div className={classes.control}>
                  <label htmlFor="image">Meetup Image</label>
                  <input type="url" required id='image' ref={imageUrlInputRef} />
              </div>
              <div className={classes.control}>
                  <label htmlFor="address">Address</label>
                  <input type="text" required id='address' ref={addressInputRef} />
              </div>
              <div className={classes.control}>
                  <label htmlFor="description">Description</label>
                  <textarea rows='5' required id='description' ref={descriptionInputRef} />
              </div>
              <div className={classes.actions}>
                  <button>Submit</button>
              </div>
          </form>
    </Card>
  )
}
