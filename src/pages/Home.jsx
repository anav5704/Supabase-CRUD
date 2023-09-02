import { useEffect, useState } from "react"
import Smoothie from "../components/Smoothie"
import supabase from "../services/supabase"

useState
function Home() {
  const [err, setErr] = useState(null)
  const [data, setData] = useState(null)
  const [orderBy, setOrderBy] = useState("created_at")

  const updateLocal = (id) => {
    setData(prevData => {
      return prevData.filter(data => data.id != id)
    })
  }

  const fetchData = async () => {
    const {data, error} = await supabase
    .from("smoothies")
    .select()
    .order(orderBy, {ascending: false})

    if(error){
      setErr("Supabase: Failed to fetch data")
      setData(null)
      console.log("Fetch error", error)
    }

    if(data){
      setData(data)
      setErr(null)
      console.log("Fetch data", data)
    }
  }

  useEffect(() => {
    fetchData()
  }, [orderBy])

   return (
    <div className="p-10">
        { err && <h1>{err}</h1> }
        <div className=" flex gap-5 mb-10 items-center">
          <p>Order by:</p>
          <button className="px-4 py-1 text-white rounded-md bg-purple-700" onClick={() => {setOrderBy("created_at")}}>Time created</button>
          <button className="px-4 py-1 text-white rounded-md bg-purple-700" onClick={() => {setOrderBy("name")}}>Name</button>
          <button className="px-4 py-1 text-white rounded-md bg-purple-700" onClick={() => {setOrderBy("rating")}}>Rating</button>
        </div>
        <div className="grid grid-cols-5 gap-10">
          { data?.map(data => <Smoothie onDelete={updateLocal} key={data.id} smoothie={data}/>)}
        </div>
    </div> 
  )
}

export default Home
