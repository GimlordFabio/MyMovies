import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";



export default function MoviesItem({id, poster_path, title, overview, vote_average, release_date }){

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
                <View style={styles.rightImage}>
                    <View style={styles.underTitle}>
                    <Text style={styles.title}>{title}</Text>
                        <Text style={styles.coteMoyenne}>Cote Moyenne: </Text><Text style={styles.rating}>{vote_average}</Text>
                        <Text style={styles.date}>Date de sortie: </Text><Text style={styles.release_date}>{release_date}</Text>
                    </View>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    
    item: {
        flexDirection: "row",
    },

    image: {
        flex:2/5,
        height: 250,
        width: 150
    },

    rightImage: {
        flex:3/5,
        paddingHorizontal:10
                
    },

    title: {
        textAlign: "center",
        fontWeight: "bold",
        flexWrap:"wrap",
        fontSize: 20,
        paddingTop: 5,
        paddingBottom: 15

    },

    underTitle: {
        alignItems: "center"
        
    },

    coteMoyenne: {
        fontSize: 14,
        fontWeight: "bold",
        textDecorationLine:"underline",
        paddingBottom:5
    },

    rating: {
        fontSize: 14,
        fontWeight: "bold",
        paddingBottom:5
    },

    date: {
        fontSize: 14,
        fontWeight: "bold",
        textDecorationLine:"underline",
        paddingBottom:5
    },

    release_date: {
        fontSize: 14,
        fontWeight: "bold",
        paddingBottom:5
    }

})

