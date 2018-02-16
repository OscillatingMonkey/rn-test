import React, { Component } from 'react'
import {
    StyleSheet,
    FlatList,
    Text,
    View,
    Image,
    TouchableNativeFeedback,
    ScrollView
} from 'react-native'
import {connect} from "react-redux";

import { artistActions } from "../../state/artist";
import { push } from 'react-router-redux'

 import {
     withRouter
 } from 'react-router-native';

 class ArtHorizontalList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data

        };
    }

    render () {

        return (
            <View>
                <FlatList
                    data={this.state.data}
                    renderItem = { (data) =>
                        <TouchableNativeFeedback
                            // onPress={() => this.props.onSelectedArtist({ id : data.item.id })}
                            onPress={() => this.props.history.push(`/details/${data.item.id }`)}
                            background={TouchableNativeFeedback.SelectableBackground()}>
                            <View style={styles.listItem}>
                                <Image source={{uri: data.item.image}} style={styles.imageBg}/>
                            </View>
                        </TouchableNativeFeedback>
                    }
                    // scrollRenderAheadDistance={300}
                    initialNumToRender={10}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    automaticallyAdjustContentInsets={true}
                    removeClippedSubviews={false}
                    enableEmptySections={false}
                />
            </View>
        )
    }
}



const actions = (dispatch) => ({
    // onSelectedArtist: ({ id }) => dispatch(push(`/details/${id}`))
    // onSelectedArtist: ({ id }) => dispatch(push('/ivam')),

})

//export default (connect(null, actions)(ArtistHorizontalList))
export default withRouter(connect(null, actions)(ArtHorizontalList))

const styles = StyleSheet.create({
    //TODO: Refact this
    listItem: {
        backgroundColor: '#BF242D',
        // fontWeight: 'bold',
        marginEnd: 4,
        height: 160,
        width: 160,
    },
    imageBg: {
        flex: 1,
        width: undefined,
        height: undefined,
        backgroundColor:'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    artistName: {
        fontSize: 20,
        color: '#FFFFFF',
    },
    projects: {
        fontSize: 12,
        color: '#F6F6F6',
    },
    descriptionContainer: {
        margin: 4
    }
});