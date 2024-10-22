import { createContext, useState } from 'react'

export const GlobalContext = createContext()
// Now this is our context by the name GlobalContext

// Now we create a Component from which we return GlobalContext.Provider, that's the idea to proceed with

export default function AppContext({ children }) {
  // Here we can add our state & functions (business logic) as per the requirement
  const [test, setTest] = useState('test string')

  function updateTestString() {
    setTest('Testing Done! Welcome to the real world!')
  }
  return (
    <GlobalContext.Provider value={{ test, updateTestString }}>{children}</GlobalContext.Provider>
  )
}
