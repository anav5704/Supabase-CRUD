import { Link } from "react-router-dom"
import supabase from "../services/supabase"

function Smoothie({smoothie, onDelete}) {
  const handleDelete = async () => {
    const {data, error} = await supabase
    .from("smoothies")
    .delete()
    .eq("id", smoothie.id)
    .select()

    if(error){
      console.log(error)
    }

    if(data){
      console.log(data)
      onDelete(smoothie.id)
    }
  }

  return (
    <div className="bg-teal-600 col-span-1 rounded-md p-3 text-white relative flex flex-col justify-between">
        <h1 className="text-xl font-semibold">{smoothie.name}</h1>
        <p>{smoothie.description}</p>
        <div className="font-semibold text-xl absolute -top-4  -right-4 h-10 w-10 grid place-content-center rounded-lg bg-purple-700">
            {smoothie.rating}
        </div>
        <Link to={"/" + smoothie.id}>
          <button className="p-2 w-full rounded-md border border-white">Update smoothie</button>
        </Link>
        <button onClick={handleDelete} className="p-2 mt-3 w-full rounded-md border border-white">Delete smoothie</button>
    </div>
  )
}

export default Smoothie
