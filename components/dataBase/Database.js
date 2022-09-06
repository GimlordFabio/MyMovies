import * as SQLite from "expo-sqlite"

const db = SQLite.openDatabase("Database.db")

function querySql(query, args) {
    return new Promise((resolve, reject) => {
        db.transaction(
            (tx) => {
                tx.executeSql(query, args, 
                    (_, data) => {
                        resolve(data)
                    }, 
                    (_, err) => {
                        reject(err)
                    })
            }
        )
    })
}

export function deleteDatabase() {
    return querySql("drop table if exists favourites")
}

export function loadDatabase(){
    return querySql("create table if not exists favourites(id integer primary key not null, title text, rating text, image text, date text)",[])
}

export function getFavourites(){
    return querySql("select * from favourites", null)
}
export function getFavouritesById(id){
    return querySql("select * from favourites where id=?", [id])
}

export function insertFavourite(id, title, rating, image, date){
    return querySql("insert into favourites(id, title, rating, image, date) values(?, ?, ?, ?, ?)", [id, title, rating, image, date])
}

export function removeFavourite(id){
    return querySql("delete from favourites where id=?", [id])
}

//  jouer avec le isFav ?? 
/// ==>  mettre la totalité des films dans la database avec fav ou non pour une utilisation hors ligne ??
