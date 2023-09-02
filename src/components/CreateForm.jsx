import { useState } from "react"
import { useNavigate } from "react-router-dom"
import supabase from "../services/supabase"

const CreateeForm
 = () => {
    const [name, setName] = useState("")
    const [formError, setFormError] = useState(null)
    const [description, setDescription] = useState("")
    const [rating, setRating] = useState("")
    const navigate = useNavigate()

    const handleSubmut = async (e) => {
        e.preventDefault()
        if(!name || !description || !rating){  
            setFormError("Please fll in all the fields") 
            return
        }

        const {data, error} = await supabase
        .from("smoothies")
        .insert([{name, description, rating}])
        .select()
        
        if(error){
            console.log(error)
            setFormError(error)
        }
        
        if(data){   
            navigate("/")
            console.log(data)
            setFormError(null)
            setName("")
            setDescription("")
            setName("")
        }
    }

  return (
    <form onSubmit={handleSubmut} className="mt-20 flex flex-col gap-3  text-center w-96 bg-teal-600 col-span-1 rounded-md p-3 text-white relative">
        <h1 className="text-3xl font-semibold">Create Smoothie</h1>
        <input className="p-2 outline-none text-black rounded-md caret-teal-600" placeholder="Name" onChange={(e) => setName(e.target.value)}value={name}type="text" />
        <input className="p-2 outline-none text-black rounded-md caret-teal-600" placeholder="Description" onChange={(e) => setDescription(e.target.value)}value={description}type="text" />
        <input className="p-2 outline-none text-black rounded-md caret-teal-600" placeholder="Rating" onChange={(e) => setRating(e.target.value)}value={rating}type="number" />
        <button type="submit" className="p-2 bg-purple-700 rounded-md">Create</button>
        { formError && <div className="p-2 bg-rose-500 rounded-md">{formError}</div>}
    </form>
  )
}

export default CreateeForm

