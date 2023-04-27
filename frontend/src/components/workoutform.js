import { useState } from "react"
import React  from "react"

const Workoutform = () =>{

    const [title,setTitle] = useState('')
    const [load,setLoad] = useState('')
    const [reps,setReps] = useState('')

    const [error,setError] = useState(null)
    const [emptyFields,setEmptyFields] = useState([])
    


    const handleSubmit =async(e)=>{
            e.preventDefault()

            const workout = {title,load,reps}

            const responce = await fetch('/api/workouts',{
                method:'POST',
                body:JSON.stringify(workout),
                headers:{
                        'Content-type':'application/json'
                }
            })

            const json = await responce.json

            if(!responce.ok){
                setError(json.error)
                setEmptyFields(json.emptyFields)
            }

            if(responce.ok){

                setTitle('')
                setLoad('')
                setReps('')

                setError(null)
                setEmptyFields([])
                console.log('New workout add ')
                console.log(responce)

            }
    }




    return(
        <div>
            <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Workout</h3>

            <label htmlFor="">Exersize Title </label>
            <input type="text"  onChange={(e) => setTitle(e.target.value)} value={title} className={emptyFields.includes('title') ? 'error':''}/>

            <label htmlFor="">Load (Kg) </label>
            <input type="number"  onChange={(e) => setLoad(e.target.value)} value={load} className={emptyFields.includes('load') ? 'error':''}/>

            <label htmlFor="">Reps </label>
            <input type="number"  onChange={(e) => setReps(e.target.value)} value={reps} className={emptyFields.includes('reps') ? 'error':''}/>

            <button>Add Workout</button>

            {error && <div className="error" >{error}</div>}

            </form>
        </div>
    )
}

export default Workoutform