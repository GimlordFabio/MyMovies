import { useEffect, useState } from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import axios from "axios";

export default function Details({ route }){

    const { id } = route.params

    const [details, setDetails] = useState()

    useEffect(() => {

        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=c9e23b610c2f0c1040a493fc10ce5aaf&language=fr-FR`)
            .then(({data}) =>{
                setDetails(data)
                console.log(data)
            })
        
    }, [])

    return(
        <>
            {details && (
                <><View style={styles.imageDetail}>
                    <View>

                        <Image style={styles.image} source={{
                            uri: "https://image.tmdb.org/t/p/original/" + details.poster_path
                        }}
                        ></Image>

                    </View>
                    <View>
                    <Text>{details.title}</Text>
                    <Text>{details.vote_average}</Text>
                    {/* <Text>{details.genres}</Text> */}
                    </View>
                </View><View style={styles.overview}>
                        <Text>{details.overview}</Text>
                    </View></>
                
            )}
        </>
        
    )
}


const styles = StyleSheet.create({

    imageDetail:{
        flexDirection:"row"
    },
    
    image: {
        height:300,
        width:220
    },

    overview:{
        padding:10,
    }


})




// rajouter un "switch" ou mettre un coeur "vide/rempli" ==> Image + Pressable et changer Image on press ? 


// mettre une taille a  l image !!! pour pouvoir la voir affichée

// regler le probleme de la liste de genre et comment l affichée