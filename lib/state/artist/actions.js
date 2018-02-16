import { SELECT_ARTIST, FAVORITE, UNFAVORITE } from './types'
import { push } from 'react-router-redux'

const setArtist = ({ id }) => {
    return {
        type: SELECT_ARTIST,
        payload: { id }
    }
}

const navigateToArtistDetails = () => {
    return (dispatch) => dispatch(push('/details'))
}

const selectArtist = ({ id }) => {
    // return (dispatch) => {
    //     return dispatch(setArtist(id))
    //         .then(() => navigateToArtistDetails())
    // }

    //
    // return (dispatch) => {
    //     dispatch({
    //         type: SELECT_ARTIST,
    //         payload: { id }
    //     }
    //     return
    //         .then(() => navigateToArtistDetails())
    // }


    // return (dispatch) => {
    //     // Remember I told you dispatch() can now handle thunks?
    //     return dispatch(setArtist(id)).then(() => {
    //         return navigateToArtistDetails()
    //     })
    // }

    // new Promise(function(resolve, reject) {
    //     resolve(setArtist({ id }))
    // }).then(function(data) {
    //     console.log("Data")
    //     console.log(data)
    //     navigateToArtistDetails();
    //     return data
    // }).catch(function(err) {
    //     console.log("Something happened!")
    // });

    console.log(this
    )
    //push is being registered, but my app is not picking up the route changing
    return (dispatch) => {
        dispatch(setArtist({ id }))
        dispatch(push('/ivam'))
    }


    //Different order
    // Promise.resolve(navigateToArtistDetails()).then(function () {
    //     //nothing
    // }).then(function(dxx) {
    //     console.log(dxx)
    //     setArtist({ id })
    // }).then(function (obj) {
    //     console.log("value");
    // })


    // Promise.resolve(setArtist({ id })) // dispatch
    //     .then(function (obj) {
    //         console.log(obj)
    //         return navigateToArtistDetails()
    //     })
    //     .then(function (obj) {
    //         console.log("value");
    //         console.log(obj);
    //         return obj
    //     })



    // return new Promise((resolve) => {
    //     resolve({
    //         type: SELECT_ARTIST,
    //         payload: { id }
    //     })
    // }).then((dispatch) => dispatch(push('your route')))
}

const favorite = (data) => {
    //TODO: Call the api here
    data.favorited = true
    return {
        type: FAVORITE,
        payload: data
    }
}

const unfavorite = (data) => {
    //TODO: Call the api here
    data.favorited = false
    return {
        type: UNFAVORITE,
        payload: data
    }
}

//ASK: Can I export default two functions?
export default {
    selectArtist,
    favorite,
    unfavorite
}