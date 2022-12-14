import {collection, getDocs, addDoc, deleteDoc, updateDoc, doc, getDoc, query, onSnapshot} from 'firebase/firestore'

class StudentService {
    static list = (firestoreDb,callback)=> {
        getDocs(collection(firestoreDb,'student'))
        .then(
            (studentSnapshot)=>{
                const students = []
                studentSnapshot.forEach(
                    (student)=>{
                        // console.log(student.id)
                        // console.log(name+" "+course+" "+ira)

                        const id = student.id
                        const {name,course,ira} = student.data()
                        students.push({id,name,course,ira})
                    }
                )
                callback(students)
            }
        )
        .catch(error=>console.log(error))
    }

    static listOnSnapshot = (firestoreDb,callback)=> {
        const q = query(collection(firestoreDb,'student'))
        const unscribe = onSnapshot(
            q,
            (querySnapshot)=>{
                const students = []
                querySnapshot.forEach(
                    (doc)=>{
                        const id = doc.id
                        const {name,course,ira} = doc.data()
                        students.push({id,name,course,ira})
                    }
                )
                callback(students)
            }
        )
    }

    static add = (firestoreDb,callback,student) => {
        addDoc(collection(firestoreDb,'student'),student)
        .then(
            (docRef)=>{
                callback(docRef.id)
            }
        )
        .catch(error=>console.log(error))
    }

    static retrieve = (firestoreDb, callback,id)=> {
        getDoc(doc(firestoreDb,'student',id))
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

    static update = (firestoreDb, callback, id, student)=> {
        updateDoc(doc(firestoreDb, 'student', id), student)
        .then(
            ()=>{
                callback(true)
            }
        )
        .catch(error=>console.log(error))
        
    }

    static delete = (firestoreDb,callback,id)=> {
        deleteDoc(doc(firestoreDb,'student',id))
        .then(
            ()=>{
                callback(true)
            }
        )
        .catch(error=>console.log(error))
    }
}

export default StudentService