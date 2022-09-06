import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";



export default function MoviesItem({id, poster_path, original_title, overview, vote_average }){

    const navigation = useNavigation()
    
    const onPressFunction =() =>{
        navigation.navigate("Details", {
            id: id,
        })
    }

    return(
        <Pressable onPress={onPressFunction}>
            <View style={styles.item}>
                <Image style={styles.image} source={{
                    uri: "https://image.tmdb.org/t/p/original/" + poster_path
                }}></Image>
                <View>
                    <Text>{original_title}</Text>
                    <Text>{vote_average}</Text>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 250,
        width: 150
    },

    item: {
        flex: 1,
        flexDirection: "row",
    }
})

