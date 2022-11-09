import {collection, getDocs, addDoc, deleteDoc, updateDoc, doc, getDoc, query, onSnapshot} from 'firebase/firestore'

class TeatcherService {
    static list = (firestoreDb,callback)=> {
        getDocs(collection(firestoreDb,'teatcher'))
        .then(
            (teatcherSnapshot)=>{
                const teatchers = []
                teatcherSnapshot.forEach(
                    (teatcher)=>{
                        // console.log(Teatcher.id)
                        // console.log(name+" "+course+" "+salary)

                        const id = teatcher.id
                        const {name,course,salary} = teatcher.data()
                        teatchers.push({id,name,course,salary})
                    }
                )
                callback(teatchers)
            }
        )
        .catch(error=>console.log(error))
    }

    static listOnSnapshot = (firestoreDb,callback)=> {
        const q = query(collection(firestoreDb,'teatcher'))
        const unscribe = onSnapshot(
            q,
            (querySnapshot)=>{
                const teatchers = []
                querySnapshot.forEach(
                    (doc)=>{
                        const id = doc.id
                        const {name,course,salary} = doc.data()
                        teatchers.push({id,name,course,salary})
                    }
                )
                callback(teatchers)
            }
        )
    }

    static add = (firestoreDb,callback,teatcher) => {
        addDoc(collection(firestoreDb,'teatcher'),teatcher)
        .then(
            (docRef)=>{
                callback(docRef.id)
            }
        )
        .catch(error=>console.log(error))
    }

    static retrieve = (firestoreDb, callback,id)=> {
        getDoc(doc(firestoreDb,'teatcher',id))
        .then(
            (docSnap)=>{
                if(docSnap.exists()){
                    //console.log("Document data:", docSnap.data())
                    callback(docSnap.data())
                }
            }
        )
        .catch(error=>console.log(error))
    }

    static update = (firestoreDb, callback, id, teatcher)=> {
        updateDoc(doc(firestoreDb, 'teatcher', id), teatcher)
        .then(
            ()=>{
                callback(true)
            }
        )
        .catch(error=>console.log(error))
        
    }

    static delete = (firestoreDb,callback,id)=> {
        deleteDoc(doc(firestoreDb,'teatcher',id))
        .then(
            ()=>{
                callback(true)
            }
        )
        .catch(error=>console.log(error))
    }
}

export default TeatcherService