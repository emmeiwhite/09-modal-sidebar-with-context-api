// Step-1: Create the Context ( GlobalContext for now)
import { createContext } from 'react'

const GlobalContext = createContext()

// Step-2: Create a Component (AppContext for now) which will return GlobalContext.Provider in JSX

function AppContext() {
  return <GlobalContext.Provider></GlobalContext.Provider>
}
