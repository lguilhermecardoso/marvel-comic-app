import React, { createContext, useCallback, useState, useContext } from 'react'

export const HQContext = createContext({})

export const HQProvider = ({ children }) => {
  const [hqSelected, setHqSelected] = useState([])

  const handleSelectedHQ = useCallback((selectedHQ) => {
    setHqSelected((prev = []) => {
      const currenteHQ = prev?.find(hq => hq.id === selectedHQ.id)

      if (currenteHQ) {
        return prev.filter(hq => hq.id !== selectedHQ.id)
      }

      return [...prev, selectedHQ]
    })
  }, [setHqSelected])

  const isSelected = (id) => {
    return Boolean(hqSelected.find(hq => hq.id === id))
  }

  const getSelectedHqs = () => {
    return hqSelected
  }

   return (
    <HQContext.Provider value={{
      handleSelectedHQ,
      isSelected,
      getSelectedHqs
    }}
    >
      {children}
    </HQContext.Provider>
  )
  
}

export function useUHQSelectedContext() {
  const context = useContext(HQContext)
  
  if (!context) {
    throw new Error('Error! on use HQSelectedCntext')
  }

  return context
}