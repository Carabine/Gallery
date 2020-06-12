import React, {useEffect} from 'react';
import {ImageItem} from '../Components/ImageItem';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import {fetchImages} from '../redux/actions/gallery';
import {Text, StyleSheet} from 'react-native';


const GalleryScreen = (props) => {
    useEffect(() => {
        props.fetchImages()
    }, [])

    const goToImageScreen = (url, title) => {
        return props.navigation.navigate('SingleImage', {url, title})
    }

    const renderItem = ({item}) => {
        return <ImageItem id={item.id} thumbUrl={item.urls.thumb} url={item.urls.regular}
                          author={item.user.username} title={item.description} goTo={goToImageScreen} />
    }
    
    if(props.isFetching) {
        return <Text style={styles.loading}>Loading...</Text>
    }

    return <FlatList data={props.data} keyExtractor={(item) => item.id} renderItem={renderItem} />
}

const styles = StyleSheet.create({
    loading: {
        fontSize: 30,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto'
    }
})

const mstp = state => {
    return {
        data: state.gallery.imagesData,
        isFetching: state.gallery.isFetching
    }
}

export default connect(mstp, { fetchImages })(GalleryScreen)
