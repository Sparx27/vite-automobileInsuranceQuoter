import { useInsurance } from "../hooks/useInsurance"
import { useCallback, useMemo, useRef } from "react"
import { PLANS } from "../constants"

const Cost = () => {
  const { cost, stateData } = useInsurance()
  const { brand, year, plan } = stateData

  const choosedBrand = useMemo(() => brand, [cost]) //Esto guarda un resultado, un valor en memoria. Evita re-renderizar hasta que no cambia algo en la dependencia. Usado en casos de resultados producto de una funcion muy costosa en recursos.
  const yearRef = useRef(year)


  const [choosedPlan] = useCallback(
    PLANS.filter(p => p.id === Number(plan)), //Esto guarda la REFERENCIA de la funcion en memoria, NO el resultado de la funcion.
    [cost]
  )

  if(cost === 0) {
    return null
  }

  return (
    <div className="bg-gray-100 text-center mt-5 p-5 shadow">
      <h2 className="text-gray-600 font-black text-3xl">
        Summary
      </h2>

      <p className="my-2">
        <span className="font-bold">Brand: </span>
          {choosedBrand}
      </p>
      <p className="my-2">
        <span className="font-bold">Year of the car: </span>
          {yearRef.current}
      </p>
      <p className="my-2">
        <span className="font-bold">Choosed Plan: </span>
          {choosedPlan.name}
      </p>
      <p className="my-2 text-2xl">
        <span className="font-bold">Total cost of insurance: </span>
          {cost}
      </p>
    </div>
  )
}

export default Cost
