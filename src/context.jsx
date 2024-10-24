// Step-1: Create the Context ( GlobalContext for now)
import { createContext, useContext, useState } from 'react'

const GlobalContext = createContext()

// Step-2: Create a Component (AppContext for now) which will return GlobalContext.Provider in JSX

// Step-3: The App Component will be passed as children to the AppContext Component so that the App and its children can directly receive the state and function using useContext() or useCustomContext() hook [which saves few lines of our code]

export default function AppContext({ children }) {
  // Write your application state and business logic to be passed to value prop

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  /** 1. Modal Business Logic*/
  function openModal() {
    setIsModalOpen(true)
  }

  function closeModal() {
    setIsModalOpen(false)
  }

  /** 1. Sidebar Business Logic */
  function openSidebar() {
    setIsSidebarOpen(true)
  }

  function closeSidebar() {
    setIsSidebarOpen(false)
  }

  return (
    <GlobalContext.Provider
      value={{ isModalOpen, openModal, closeModal, isSidebarOpen, openSidebar, closeSidebar }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(GlobalContext)
}
