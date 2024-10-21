import { createContext, useState } from 'react'

export const GlobalContext = createContext()

function AppContext({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const openSidebar = () => {
    setIsSidebarOpen(true)
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalClose(false)
  }

  const contextState = {
    isModalOpen,
    setIsModalOpen,
    isSidebarOpen,
    setIsSidebarOpen,
    openSidebar,
    closeSidebar,
    openModal,
    closeModal
  }
  return <GlobalContext.Provider value={contextState}>{children}</GlobalContext.Provider>
}

export default AppContext
