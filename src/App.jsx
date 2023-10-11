import { useEffect, useState } from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import NavBar from './components/NavBar'
import ResourceList from './components/ResourceList'
import temp_data from './temp_data'
import temp_data_categories from './temp_data_categories'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://rczlpbrswmmgbteefilv.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)


let { data: categoryItems, error } = await supabase
  .from('categories')
  .select('*')


function App() {
  const [data, setData] = useState(0)
  const [categories, setCategories] = useState("")

useEffect(() => {
  loadData();
})

  const loadData = () => {
    setData(temp_data.resources)
    setCategories(categoryItems)
  }

  if(!data){
    return(
      <p>loading...</p>
    )
  }

  const routes = categories.map((category) => {
    let pageData = data.filter((el) => {
      return el.category_ids.includes(category.id)
  }
  )
    return <Route key={category.id} path={category.name} element={<ResourceList data={pageData}/>}/>
  })

  const navLinks = categories.map((category, index) => {
    return <Link key={index} to={category.name}><h1>{category.name}</h1></Link>
  })

  return (
    <>
    <Router>
      <div>
    <h1>Web Dev Resources</h1>
    <NavBar navLinks={navLinks}/>
    <Routes>
      {routes}
    </Routes>
    </div>
    </Router>
    </>
  )
}

export default App
