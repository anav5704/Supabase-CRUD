import supabase from "../services/supabase"

function Home() {
  console.log(supabase)
  return (
    <div>
        <h1>Home</h1>
    </div>
  )
}

export default Home
