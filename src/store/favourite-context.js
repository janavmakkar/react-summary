import { createContext, useState } from "react";

const FavourtiesContext = createContext({  
    favourites: [],
    totalfavourites: 0,
    addfavourite: (favouriteMeetup) => { },
    removeFavourite: (meetupId) => { },
    itemIsFavourite:(meetupId)=>{}
});

export function FavouritesContextProvider(props) {

    const [userFavouritesItems,setUserFavouritesItems] = useState([]);

    const context = {
        favourites: userFavouritesItems,
        totalfavourites: userFavouritesItems.length,
        addfavourite: addFavouriteItemHandler,
        removeFavourite: removeFavouriteItemHandler,
        itemIsFavourite: checkFavouriteItemHandler
    }

    function addFavouriteItemHandler(favouriteMeetup) {
        return setUserFavouritesItems((prevFav)=>{prevFav.concat(favouriteMeetup)})
    }
    function removeFavouriteItemHandler(meetupId) {
        return setUserFavouritesItems((prevfav) => { prevfav.filter(meetup => { return meetup.id !== meetupId }) });
    }
    function checkFavouriteItemHandler(meetupId) {
        return userFavouritesItems.some((meetup) => { return meetup.id === meetupId });
    }

    return (<FavourtiesContext.Provider  value={context}>
        {props.children}
    </FavourtiesContext.Provider>);
}

export default FavourtiesContext;


