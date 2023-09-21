import { createContext, useState } from "react"

const InsuranceContext = createContext()

function InsuranceProvider({ children }) {
  const [stateData, setStateData] = useState({
    brand: '',
    year: '',
    plan: ''
  })
  const [errorMessage, setErrorMessage] = useState('')
  const [cost, setCost] = useState(0)
  const [loading, setLoading] = useState(false)

  const handleStateData = (e) => {
    setStateData({
      ...stateData,
      [e.target.name]: e.target.value
    })
  }

  const handleErrorMessage = (message) => {
    setErrorMessage(message)
  }

  const handleInsurance = () => {
    //Base = 2000
    let cost = 2000

    //3% less for each year
    cost -= cost * (((new Date().getFullYear() - stateData.year) * 3 ) / 100)

    //Add 30% if European, 15% if American, 5% if Asian
    stateData.brand === 'European'
      ? cost *= 1.3
      : stateData.brand === 'American'
        ? cost *= 1.15
        : cost *= 1.05

    //Add 20% if Basic, 50% if Full
    stateData.plan === "1" ? cost *= 1.2 : cost *= 1.5

    cost = cost.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    })

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setCost(cost)
    }, 2500)
  }

  return (
    <InsuranceContext.Provider
      value={{
        stateData, 
        handleStateData,
        errorMessage,
        handleErrorMessage,
        handleInsurance,
        cost,
        loading
      }}
    >{children}
    </InsuranceContext.Provider>
  )
}

export {
  InsuranceContext
}
export default InsuranceProvider