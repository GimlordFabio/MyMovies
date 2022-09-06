import { TabActions } from "@react-navigation/native";
import { Image, Text, View } from "react-native";

import { useEffect, useState } from "react";
import axios from "axios";
import MoviesItem from "./MoviesItem";
import { FlatList } from "react-native-gesture-handler";




export default function Recent(){

    

    const [movies, setMovies] = useState([])

    useEffect(() =>{
      axios.get("https://api.themoviedb.org/3/movie/popular?api_key=c9e23b610c2f0c1040a493fc10ce5aaf&language=fr-FR&page=1") 
        .then(
            ({data}) => {
                console.log(data.results)
                setMovies(data.results)
            }
        )
    }, [])

    const renderItem = ({item}) => {

        return <MoviesItem 
        id={item.id}
        title={item.title}
        poster_path={item.poster_path}
        vote_average={item.vote_average}
        release_date={item.release_date}
        ></MoviesItem>
    }

    return(

        <View>
            <FlatList

                data={movies}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}

            ></FlatList>
        </View>
        
    )
}


