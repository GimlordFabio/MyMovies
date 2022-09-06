import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { getFavourites } from "../dataBase/Database";
import MoviesItem from "./MoviesItem";



export default function Favs(){

    const [favourite, setFavourite] = useState([])
    const isFocus = useIsFocused()

    useEffect(()=>{
        if (isFocus) {
            getFavourites()
            .then((data)=>{
                console.log(data.rows._array)
                setFavourite(data.rows._array)            
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    }, [isFocus])


    const renderItem = ({item}) => {

        return <MoviesItem 
        id={item.id}
        title={item.title}
        poster_path={item.image}
        vote_average={parseFloat(item.rating).toFixed(1)}
        release_date={item.date}
        ></MoviesItem>
    }

    return(

        <View>
            <FlatList
            
                data={favourite}
                renderItem={renderItem}
                keyExtractor={(item)=>item.id}

            ></FlatList>

                

        </View>
        
    )

}

