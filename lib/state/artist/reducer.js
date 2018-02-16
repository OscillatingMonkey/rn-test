import {
    FAVORITE, SELECT_ARTIST,
    UNFAVORITE
} from './types'

//ASK: Where does payload come from?
const updateState = payload => ({
        ...payload
    }
)

const initialState = {
    name: null,
    totalProjects: 0,
    joined_at: null,
    favorite: false,
}

export default (state = initialState, data) => {
    switch (type) {
        case SELECT_ARTIST:
            console.log("SELECT_ARTIST")
        case FAVORITE:
            data.favorite = true
            return data
        case UNFAVORITE:
            data.favorite = false
            return data
        default:
            return state
    }
}