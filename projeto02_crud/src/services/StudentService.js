import {collection, getDocs} from 'firebase/firestore'

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
}

export default StudentService