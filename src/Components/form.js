import React from 'react'


const Form = (props) => {
  return (
        <form className="d-flex flex-column " onSubmit={props.getWeather}>
            <input type="text" className='form-control w-50 my-3 mx-3 ' placeholder='City...' name="city"/>
            <input type="text" className='form-control w-50 my-3 mx-3 ' placeholder='Country...' name="country" />
            <button className='btn btn-dark w-50 my-3 mx-3'>Get Weather</button>

        </form>
  )
}

export default Form