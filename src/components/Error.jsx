import { useInsurance } from "../hooks/useInsurance"

const Error = () => {
  const { errorMessage } = useInsurance()

  return (
    <div className="p-3 font-bold border border-red-400 bg-red-100 text-red-600 text-center">
      {errorMessage}
    </div>
  )
}

export default Error
