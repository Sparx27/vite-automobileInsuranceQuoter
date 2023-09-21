import AppInsurance from './components/AppInsurance'
import InsuranceProvider from './context/InsuranceContext'

function App () {
  return (
    <InsuranceProvider>
      <AppInsurance />
    </InsuranceProvider>
  )
}

export default App
