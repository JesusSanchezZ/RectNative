import { View, Text, StyleSheet, Image } from "react-native";

const ImageDetail = ({imageSource, score, title}) => {
    return(
        <View>
            <Image style={styles.img} source={imageSource}/>
            <Text>{title}</Text>
            <Text>Image score - {score}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    img: {
        width: 200,
        height: 100,
    }
});

export default ImageDetail;

