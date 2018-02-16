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

 class InfoLabel extends Component {
    constructor(props) {
        super(props);
        console.log((props))
        this.state = {
            title: this.props.title,
            value: this.props.value,
            isAnchoredOnLeftSide: this.props.isAnchoredOnLeftSide
        };
    }

    render () {
        return (
            <View style={this.state.isAnchoredOnLeftSide ? styles.leftSideContainer :  styles.rightSideContainer}>
                <Text style={styles.title }>{ this.state.title }</Text>
                <Text style={styles.value}>{ this.state.value }</Text>
            </View>
        )
    }
}



const actions = (dispatch) => ({
    // onSelectedArtist: ({ id }) => dispatch(push(`/details/${id}`))
    // onSelectedArtist: ({ id }) => dispatch(push('/ivam')),
})

//export default (connect(null, actions)(ArtistHorizontalList))
export default withRouter(connect(null, actions)(InfoLabel))

const styles = StyleSheet.create({
    container: {
      marginStart: 12,
      marginEnd: 12,
      marginTop:8,
      marginBottom:8,
    },
    leftSideContainer: {
        alignItems: 'flex-start'

    },
    rightSideContainer: {
        alignItems: 'flex-end'
    },
    title: {
        color: '#BF242D',
        fontSize: 16,
    },
    value: {
        fontSize: 14,
    },
});