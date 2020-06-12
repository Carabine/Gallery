import React from 'react';
import { StyleSheet, Image, View} from 'react-native';

export const SingleImageScreen = ({navigation, route}) => {
    navigation.setOptions({ title: route.params.title ? route.params.title : 'No title' })

    return <View style={styles.container}>
        <Image style={styles.img} source={{uri: route.params.url}} />
    </View>
}

const styles = StyleSheet.create({
    container: {
      height: '100%'
    },
    img: {
        height: '100%'
    }
})
