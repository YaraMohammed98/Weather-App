import React from 'react'

const Weatherdata = (props) => {
  return (
    <div className='my-5 mx-3'>
      <table className='table table-dark  '>
        <tbody>
      {props.tempreature &&
       <tr> <th>Tempreature</th> <td>{props.tempreature}</td> </tr>}
      {props.city && <tr> <th>City</th><td>  {props.city}</td> </tr>}
      {props.country && <tr> <th>Country</th><td>  {props.country}</td> </tr>}
      {props.humidity && <tr> <th>Humidity</th><td>  {props.humidity}</td> </tr>}
      {props.description && <tr> <th>Description</th><td>  {props.description}</td> </tr>}
      {props.error && <tr> <th className='text-danger'> Error </th><td> {props.error}</td> </tr>}
      </tbody>
      </table>
     
    </div>
  )
}

export default Weatherdata
