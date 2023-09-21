import { useInsurance } from '../hooks/useInsurance'
import Cost from './Cost'
import Form from './Form'
import Loader from './Loader'

const AppInsurance = () => {
  const { cost, loading } = useInsurance()

  return (
    <>
      <header className='my-10'>
        <h1 className='text-white text-center text-4xl font-black'>Automobile Insurance Quoter System</h1>

        <main className='bg-white shadow mx-auto rounded-lg p-10 md:w-3/4 lg:w-2/4 mt-5'>
          <Form />

          {loading ? <Loader /> : <Cost />}
        </main>
      </header>
    </>
  )
}

export default AppInsurance
