import { Fragment } from 'react'
import { BRANDS, YEARS, PLANS } from '../constants'
import { useInsurance } from '../hooks/useInsurance'
import Error from './Error'


const Form = () => {
  const { stateData, handleStateData, errorMessage, handleErrorMessage, handleInsurance } = useInsurance()

  const handleSubmit = e => {
    e.preventDefault()

    if(Object.values(stateData).includes('')) {
      handleErrorMessage('All fields are required')
    } else {
      handleErrorMessage('')
      handleInsurance()
    }
  }

  return (
    <>
      {errorMessage && <Error />}
      <form onSubmit={handleSubmit}>
        <div className='my-5'>
          <label className='block mb-3 font-bold text-gray-400 uppercase'>Brand</label>
          <select
            name='brand'
            className='w-full p-3 bg-white border border-gray-200 text-center'
            onChange={handleStateData}
          >
            <option value=''>----- Select Brand -----</option>
            {
              BRANDS.map(b => {
                const { id, brand } = b
                return (
                  <option 
                    key={id}
                    value={brand}
                  >{brand}
                  </option>
                )
              })
            }
          </select>
        </div>

        <div className='my-5'>
          <label className='block mb-3 font-bold text-gray-400 uppercase'>Year</label>
          <select
            name='year'
            className='w-full p-3 bg-white border border-gray-200 text-center'
            onChange={handleStateData}
          >
            <option value=''>----- Select Year-----</option>
            {
              YEARS.map(year => <option key={year} value={year}>{year}</option>)
            }
          </select>
        </div>

        <div className='my-5'>
          <label className='block mb-3 font-bold text-gray-400 uppercase'>Select Plan</label>
          <div className='flex gap-3 items-center'>
            {
              PLANS.map(plan => (
                <Fragment key={plan.id}>
                  <label htmlFor={plan.id} className='cursor-pointer text-lg'>{plan.name}</label>
                  <input
                    id={plan.id}
                    className='cursor-pointer'
                    type='radio'
                    name='plan'
                    value={plan.id}
                    onClick={handleStateData}
                  />
                </Fragment>
              ))
            }
          </div>
        </div>

        <input
          type='submit'
          className='w-full text-center p-3 bg-indigo-500 hover:bg-indigo-600 transition-colors cursor-pointer font-black text-white text-lg rounded-lg uppercase'
        />

      </form>
    </>
  )
}

export default Form
