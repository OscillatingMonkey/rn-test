import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    ScrollView
} from 'react-native'
import {connect} from "react-redux";

import { artistActions } from "../../state/artist";
import { push } from 'react-router-redux'

 import {
     withRouter
 } from 'react-router-native';

 class DetailHeader extends Component {
     artist = {
         id: 2,
         key: "Boyle Scott",
         totalProjects: 34,
         joined_at: "12/03/2018",
         updated_at: "12/03/2018",
         cover: "https://s.hswstatic.com/gif/tatto-hero-622x415.jpg",
         photo: "https://milk.imgix.net/2015/11/Boyle_ScottCambell_116.jpg?auto=format&ixlib=php-1.1.0&q=95&s=dd8dc8ccd5f5e625bbded32b0ab12049",
         arts: this.arts
     }

    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data

        };
    }

    render () {

        return (
            <View>
                <ImageBackground style={styles.cover} source={{uri: this.artist.cover }} />
                <View style={styles.info}>
                    <Image style={styles.thumbnail} source={{uri: this.artist.photo }} borderRadius={5} />
                    <Text style={styles.artistName}>{ this.artist.key }</Text>
                    <Text style={styles.artistJoinedIn}>since { this.artist.joined_at }</Text>
                    <Text style={styles.numberOfProjects}>{ this.artist.totalProjects } projects</Text>
                </View>
            </View>
        )
    }
}



const actions = (dispatch) => ({
    // onSelectedArtist: ({ id }) => dispatch(push(`/details/${id}`))
    // onSelectedArtist: ({ id }) => dispatch(push('/ivam')),

})

//export default (connect(null, actions)(ArtistHorizontalList))
export default withRouter(connect(null, actions)(DetailHeader))

const styles = StyleSheet.create({
    //TODO: Refact this
    cover: {
        backgroundColor: '#BF242D',
        // fontWeight: 'bold',
        height: 125,
        justifyContent: 'center',
        alignItems: 'center'
    },
    info: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    thumbnail: {
        width: 100,
        height: 100,
        marginTop: -30,
    },
    artistName: {
        color: '#BF242D',
        fontSize: 20,
    },
    artistJoinedIn: {
        fontSize: 14,
    },
    numberOfProjects: {
        fontSize: 12,

    }
});