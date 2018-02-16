import React, { Component } from 'react'
import {
    View,
    Text,
    ScrollView, StyleSheet,
} from 'react-native'
import ArtHorizontalList from '../../components/ArtHorizontalList'

export default class StudioDetails extends Component {
  title = "Artist name"
  data = [
      {id: 1, key: "Traditional", photos: [
              { id: 1, image: "http://tattoo-journal.com/wp-content/uploads/2015/09/American-traditional-tattoo_-9-650x650.jpg" },
              { id: 2, image: "http://www.theinkfactory.ie/wp-content/uploads/2017/01/13537720_1254383967912696_5955772952669720603_n-360x360-1.png" },
              { id: 3, image: "https://i.pinimg.com/736x/4e/31/37/4e313779e5d842bd99d65b3ee44d27a1--american-traditional-tattoos-bear-traditional-tattoo.jpg" },
              { id: 4, image: "http://nextluxury.com/wp-content/uploads/amazing-black-angry-beast-tattoo-guys-hands.jpg" },
              { id: 5, image: "https://www.inkdoneright.com/wp-content/uploads/2015/07/traditional-tattoos-5-1.jpg" },
          ]},
      {id: 1, key: "Realism", photos: [
              { id: 6, image: "http://tattooss.net/wp-content/uploads/2016/06/Amazing-Half-Sleeve-Warrior-Angel-Tattoo-1.JPG" },
              { id: 7, image: "http://boredomfiles.com/wp-content/uploads/2016/06/08-realistic-tattoos.jpg" },
              { id: 8, image: "http://aceshightattooshop.com/wp-content/uploads/2017/04/Branden-Martin-Realism-1.jpg" },
              { id: 9, image: "https://i.pinimg.com/736x/31/bb/f9/31bbf9a614d40147407f6f688ef46804--django-unchained-realism-tattoo.jpg" },
              { id: 10, image: "http://nextluxury.com/wp-content/uploads/guys-arms-orange-fish-and-relfection-realism-tattoos.jpg" },
          ]},
      {id: 1, key: "Watercolor", photos: [
              { id: 11, image: "http://cdn2-www.thefashionspot.com/assets/uploads/gallery/41-watercolor-tattoos-that-are-picture-perfect/tattoolazo-arm-tree-watercolor-tattoo.jpg" },
              { id: 12, image: "https://i.pinimg.com/736x/dd/f1/a4/ddf1a46ffd77a3298c08d093fd01a9f3--geometric-triangle-tattoo-geometric-flower-tattoos.jpg" },
              { id: 13, image: "http://cdn3.tattooeasily.com/wp-content/uploads/2014/09/3160916-watercolor-tattoos.jpg" },
              { id: 14, image: "https://mymodernmet.com/wp/wp-content/uploads/2017/03/watercolor-tattoos-koray-karagozler-1.jpg" },
              { id: 15, image: "https://www.askideas.com/wp-content/uploads/2017/09/Amazing-Watercolor-Flowers-Tattoo-On-Forearm.jpg" },
          ]},
      {id: 1, key: "Tribal", photos: [
              // { id: 16, image: "http://www.menstattooideas.net/tattooimages/2014/07/tribal-tattoos-09.jpg" },
              { id: 17, image: "https://www.gettattoosideas.com/wp-content/uploads/2015/05/tribal-tattoos-2.jpg" },
              { id: 18, image: "http://www.cuded.com/wp-content/uploads/2012/12/tribal-Foot-Tattoo.jpg" },
              { id: 19, image: "https://www.askideas.com/media/13/Black-Tribal-Lion-Face-Tattoo-On-Man-Right-Shoulder.jpg" },
              { id: 20, image: "https://i.pinimg.com/736x/8f/ce/71/8fce71e7494ac2f6ab9257592eb052a0--mandala-tattoo-design-tribal-tattoo-designs.jpg" },
          ]},
  ]
  render () {
      // console.log(this.data.photos)
    return (
      <View>
          <ScrollView>
              <View>
                <Text style={styles.title} fontWeight={"bold"}>{this.data[0].key}</Text>
                <ArtHorizontalList data={this.data[0].photos} />
              </View>
              <View>
                <Text style={styles.title} fontWeight={"bold"}>{this.data[1].key}</Text>
                <ArtHorizontalList data={this.data[1].photos} />
              </View>
              <View>
                <Text style={styles.title} fontWeight={"bold"}>{this.data[2].key}</Text>
                <ArtHorizontalList data={this.data[2].photos} />
              </View>
              <View>
                <Text style={styles.title} fontWeight={"bold"}>{this.data[3].key}</Text>
                <ArtHorizontalList data={this.data[3].photos} />
              </View>
          </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    //TODO: Refact that
    title: {
        // fontWeight: 'bold',
        fontSize: 16,
        padding: 10,
        color: '#BF242D',
    },
});