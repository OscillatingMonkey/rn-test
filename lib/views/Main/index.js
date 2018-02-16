import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View
} from 'react-native'
import ArtistHorizontalList from '../../components/ArtistHorizontalList'
import StudioHorizontalList from '../../components/StudioHorizontalList'

export default class List extends Component {

    arts = [
        {
            id: 1,
            key: "Traditional",
            photos: [
                { id: 1, image: "http://tattoo-journal.com/wp-content/uploads/2015/09/American-traditional-tattoo_-9-650x650.jpg" },
                { id: 2, image: "http://www.theinkfactory.ie/wp-content/uploads/2017/01/13537720_1254383967912696_5955772952669720603_n-360x360-1.png" },
                { id: 3, image: "https://i.pinimg.com/736x/4e/31/37/4e313779e5d842bd99d65b3ee44d27a1--american-traditional-tattoos-bear-traditional-tattoo.jpg" },
                { id: 4, image: "http://nextluxury.com/wp-content/uploads/amazing-black-angry-beast-tattoo-guys-hands.jpg" },
                { id: 5, image: "https://www.inkdoneright.com/wp-content/uploads/2015/07/traditional-tattoos-5-1.jpg" },
            ]
        },
        {
            id: 2,
            key: "Realism",
            photos: [
                { id: 6, image: "http://tattooss.net/wp-content/uploads/2016/06/Amazing-Half-Sleeve-Warrior-Angel-Tattoo-1.JPG" },
                { id: 7, image: "http://boredomfiles.com/wp-content/uploads/2016/06/08-realistic-tattoos.jpg" },
                { id: 8, image: "http://aceshightattooshop.com/wp-content/uploads/2017/04/Branden-Martin-Realism-1.jpg" },
                { id: 9, image: "https://i.pinimg.com/736x/31/bb/f9/31bbf9a614d40147407f6f688ef46804--django-unchained-realism-tattoo.jpg" },
                { id: 10, image: "http://nextluxury.com/wp-content/uploads/guys-arms-orange-fish-and-relfection-realism-tattoos.jpg" },
            ]
        },
        {
            id: 3,
            key: "Watercolor",
            photos: [
                { id: 11, image: "http://cdn2-www.thefashionspot.com/assets/uploads/gallery/41-watercolor-tattoos-that-are-picture-perfect/tattoolazo-arm-tree-watercolor-tattoo.jpg" },
                { id: 12, image: "https://i.pinimg.com/736x/dd/f1/a4/ddf1a46ffd77a3298c08d093fd01a9f3--geometric-triangle-tattoo-geometric-flower-tattoos.jpg" },
                { id: 13, image: "http://cdn3.tattooeasily.com/wp-content/uploads/2014/09/3160916-watercolor-tattoos.jpg" },
                { id: 14, image: "https://mymodernmet.com/wp/wp-content/uploads/2017/03/watercolor-tattoos-koray-karagozler-1.jpg" },
                { id: 15, image: "https://www.askideas.com/wp-content/uploads/2017/09/Amazing-Watercolor-Flowers-Tattoo-On-Forearm.jpg" },
            ]
        },
        {
            id: 4,
            key: "Tribal",
            photos: [
                { id: 16, image: "http://www.menstattooideas.net/tattooimages/2014/07/tribal-tattoos-09.jpg" },
                { id: 17, image: "https://www.gettattoosideas.com/wp-content/uploads/2015/05/tribal-tattoos-2.jpg" },
                { id: 18, image: "http://www.cuded.com/wp-content/uploads/2012/12/tribal-Foot-Tattoo.jpg" },
                { id: 19, image: "https://www.askideas.com/media/13/Black-Tribal-Lion-Face-Tattoo-On-Man-Right-Shoulder.jpg" },
                { id: 20, image: "https://i.pinimg.com/736x/8f/ce/71/8fce71e7494ac2f6ab9257592eb052a0--mandala-tattoo-design-tribal-tattoo-designs.jpg" },
            ]
        },
    ]

    artists = [
        {
            id: 1,
            key: "Don Ed Hardy",
            totalProjects: 23,
            joined_at: "12/03/2018",
            updated_at: "12/03/2018",
            photo: "https://images.vice.com/vice/images/articles/meta/2015/06/04/talking-ink-needle-and-paint-with-legendary-tattoo-artist-don-ed-hardy-1433435544.jpg?crop=0.5925925925925926xw:1xh;center,center&resize=1200:*\"}",
            arts: this.arts
        },
        {
            id: 2,
            key: "Boyle Scott",
            totalProjects: 34,
            joined_at: "12/03/2018",
            updated_at: "12/03/2018",
            photo: "https://milk.imgix.net/2015/11/Boyle_ScottCambell_116.jpg?auto=format&ixlib=php-1.1.0&q=95&s=dd8dc8ccd5f5e625bbded32b0ab12049",
            arts: this.arts
        },
        {
            id: 3,
            key: "Ami James",
            totalProjects: 12,
            joined_at: "12/03/2018",
            updated_at: "12/03/2018",
            photo: "http://articlebio.com/uploads/bio/2017/02/15/ami-james.jpg",
            arts: this.arts
        },
        {
            id: 4,
            key: "Chris Nunez",
            totalProjects: 53,
            joined_at: "12/03/2018",
            updated_at: "12/03/2018",
            photo: "https://i.pinimg.com/736x/26/99/5e/26995e12345ddb91cdd57f2fcdde5cee--chris-nunez-tattoos-latino-men.jpg",
            arts: this.arts
        },
        {
            id: 5,
            key: "Paul Timman",
            totalProjects: 51,
            joined_at: "12/03/2018",
            updated_at: "12/03/2018",
            photo: "https://speakerdata2.s3.amazonaws.com/photo/image/872075/DSC_0107-1.jpg",
            arts: this.arts
        },
    ]

    studio = [
        {
            id: 1,
            name: "Chronic Ink",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
            phone: "(416) 544-0311",
            schedule: "12–8PM",
            address: "252 Eglinton Ave E, Toronto, ON M4P 1K2",
            website: "https://www.chronicinktattoo.com/",
            joined_at: "2/03/2018",
            updated_at: "2/03/2018",
            logo: "https://scontent-yyz1-1.xx.fbcdn.net/v/t31.0-8/20776663_1530695270320551_5597201630574127965_o.jpg?oh=e1701b2d324c3ac71394f7ff70293588&oe=5AD12AC0",
            arts: [],
            images: [],
            artists: this.artists
        },
        {
            id: 2,
            name: "Golden Iron Tattoo Studio",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
            phone: "(416) 544-0311",
            schedule: "12–8PM",
            address: "252 Eglinton Ave E, Toronto, ON M4P 1K2",
            website: "https://www.chronicinktattoo.com/",
            joined_at: "2/03/2018",
            updated_at: "2/03/2018",
            logo: "http://goldenirontattoostudio.com/wp-content/uploads/2015/05/Logo.png",
            images: [],
            arts: [],
            artists: this.artists,

        },
        {
            id: 3,
            name: "Black Line Studio",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
            phone: "(416) 544-0311",
            schedule: "12–8PM",
            address: "252 Eglinton Ave E, Toronto, ON M4P 1K2",
            website: "https://www.chronicinktattoo.com/",
            joined_at: "2/03/2018",
            updated_at: "2/03/2018",
            images: [],
            logo: "http://blacklinestudio.com/wp-content/uploads/2017/12/blackline_logo-copy.jpg",
            arts: [],
            artists: this.artists,
        }
    ]

    render () {
        return (
          <View>
            <Text style={styles.title} fontWeight={"bold"}>Studios</Text>
            <StudioHorizontalList data={this.studio} />
            <Text style={styles.title} fontWeight={"bold"}>Artists</Text>
            <ArtistHorizontalList data={this.artists} />
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