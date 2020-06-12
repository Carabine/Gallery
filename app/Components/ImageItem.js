import React from 'react'
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';


export const ImageItem = ({url, title, author, thumbUrl, goTo}) => {

    if(title && title.length > 18) {
        title = title.slice(0, 18) + '...'
    }

    return (
        <TouchableOpacity onPress={() => goTo(url, title)}>
            <View style={styles.container}>
                <Image style={styles.img} source={{uri: thumbUrl}} />
                <Text style={styles.author}>{title ? title : 'No title'} | {author ? author : 'No author'}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20
    },
    img: {
        height: 250
    },
    author: {
        fontSize: 20,
        marginLeft: 10
    }
})
