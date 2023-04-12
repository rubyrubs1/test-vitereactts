import { useEffect } from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { UserContext, UserContextProvider } from './contexts/UserContext'
import { SelectedPage } from './types/types'

function UserDetails() {

  const { user } = useContext(UserContext)

  return (
    <>
    <p className='text-black'>User Name: {user.name}</p>
    <p className='text-black'>User Email: {user.email}</p>
    </>
  )
}

function AnotherComponent() {

  const {user, setUser} = useContext(UserContext)

  useEffect(() => {
    setUser({
      name: "Husna",
      email: "sitirabiatullhusna@gmail.com"
    })
  }, [])

 return(
   <>
   <p>Some other components</p>
   </>
 )
}


function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)

  return (
   <>
   <UserContextProvider>
   {/*  <div className=''>
      <Navbar 
          selectedPage={selectedPage} 
          setSelectedPage={setSelectedPage} />
    </div>
    <div className='m-20'><UserDetails/></div> */}
    <UserDetails />
    <AnotherComponent />
    </UserContextProvider>
   </>
  )
}

export default App
