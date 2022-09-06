import { useEffect, useState } from "react";
import { Image, Text, View, StyleSheet, Switch, FlatList } from "react-native";
import axios from "axios";
import { isEnabled } from "react-native/Libraries/Pressability/PressabilityDebug";
import { getFavouritesById, insertFavourite, removeFavourite } from "../dataBase/Database";

export default function Details({ route }){

    const { id } = route.params

    const [details, setDetails] = useState()
    const [isEnabled, setIsEnabled] = useState(false)

    const toggleSwitch = () => {
        
        if(isEnabled==false){

            insertFavourite(id, details.title,details.vote_average, details.poster_path, details.release_date)

            .then(() => {
                console.log("movie inserted")
            })
            .catch((err)=>{
                console.log(err)
            })

        }else{
            
            removeFavourite(id)

            .then(()=>{
                console.log("movie removed")
            })
            .catch((err)=>{
                console.log(err)
            })
            
        }
        setIsEnabled(previousState => !previousState)
    }
    

    useEffect(() => {


        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=c9e23b610c2f0c1040a493fc10ce5aaf&language=fr-FR`)

            .then(({data}) =>{
                setDetails(data)
                console.log(data)
            })
            .catch((err)=>{
                console.log(err)
            })
        
        getFavouritesById(id)
            .then((data)=>{
                if(data.rows._array.length > 0){setIsEnabled(true)}
            })
            .catch((err)=>{
            console.log(err)
            })

        
        
    }, [])

    const renderItem = ({item}) =>{
        return <Text style={styles.genreList}>{item.name}</Text>
    }


    return(
        <>
            {details && (
                <>
                <View>
                    <Text style={styles.title}>{details.title}</Text>
                </View>
                
                <View style={styles.imageDetail}>
                    <View style={styles.imageContainer}>

                        <Image style={styles.image} source={{
                            uri: "https://image.tmdb.org/t/p/original/" + details.backdrop_path
                        }}
                        ></Image>

                    </View>
                    <View style={styles.rightImage}>
                    
                        <Text style={styles.coteMoyenne}>Cote moyenne: </Text>
                        <Text style={styles.vote}>{parseFloat(details.vote_average).toFixed(1)}</Text>
                        <Text style={styles.genre}>genre(s): </Text>
                        <FlatList
                            data={details.genres}
                            renderItem={renderItem}
                            keyExtractor={(item)=>item.id}
                        />
                    </View>
                </View>
                <View style={styles.overview}>
                        <Text>{details.overview}</Text>
                </View>
                <View>
                    <Switch
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    ></Switch>
                </View>
                </>
                
            )}
        </>
        
    )
}


const styles = StyleSheet.create({

    title:{
        textAlignVertical:"center",
        textAlign:"center",
        padding:25,
        fontSize:16,
        fontWeight:"bold"
        
    },

    imageDetail:{
        flexDirection:"row"
    },
    imageContainer: {
        flex: 1,
        height: 300
    },
    rightImage: {
        flex: 1
    },

    image: {
        height:300,
        width:200
    },

    coteMoyenne:{
        textAlignVertical:"center",
        textAlign:"center",
        fontSize:14,
        fontWeight:"bold",
        textDecorationLine:"underline"
        
    },

    vote:{
        textAlignVertical:"center",
        textAlign:"center",
        fontSize:14,
        fontWeight:"bold"
    },

    genre:{
        textAlignVertical:"center",
        textAlign:"center",
        fontSize:14,
        fontWeight:"bold",
        textDecorationLine:"underline"
    },

    genreList:{
        textAlignVertical:"center",
        textAlign:"center",
        fontSize:14,
        fontWeight:"bold"
    },

    overview:{
        padding:10,
    },
  

})




// rajouter un "switch" ou mettre un coeur "vide/rempli" ==> Image + Pressable et changer Image on press ? 


// mettre une taille a  l image !!! pour pouvoir la voir affichée

// regler le probleme de la liste de genre et comment l affichée