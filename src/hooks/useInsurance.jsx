import { useContext } from "react"
import { InsuranceContext } from "../context/InsuranceContext"

export const useInsurance = () => {
  return useContext(InsuranceContext)
}