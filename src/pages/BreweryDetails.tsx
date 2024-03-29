import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import ButtonComponent from '../components/ButtonComponent'
import { BrewaryType } from '../types'

function BreweryDetails() {
  const { id } = useParams()

  const [data, setData] = useState<BrewaryType | null>(null)
  const URL = `https://api.openbrewerydb.org/breweries/${id}`

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(URL)
      setData(result.data)
    }
    fetchData()
  }, [URL])

  if (data === null) {
    return null
  }

  const {
    name,
    brewery_type,
    street,
    address_2,
    address_3,
    city,
    state,
    county_province,
    postal_code,
    country,
    longitude,
    latitude,
    phone,
  } = data
  return (
    <div className='mx-auto my-4 bg-gray-100 rounded-md shadow-lg p-7 text-clip font-extralight max-w-7xl min-h-fit '>
      <div>
        {/* Yes i know :) it looks messy */}
        {{ name } && <div> Name : {name} </div>}
        {{ brewery_type } && <div> Brewery Type : {brewery_type}</div>}
        {{ street } && <div> Street: {street}</div>}
        {{ address_2 } && <div> Address 2 : {address_2}</div>}
        {{ address_3 } && <div> Address 3 : {address_3}</div>}
        {{ city } && <div> City : {city}</div>}
        {{ state } && <div> State : {state}</div>}
        {{ county_province } && <div>County Province : {county_province}</div>}
        {{ postal_code } && <div> Postal Code : {postal_code}</div>}
        {{ country } && <div> Country : {country}</div>}
        <div>
          Location : [{longitude},{latitude} ]
        </div>
        {{ phone } && <div>Phone number : {phone}</div>}
      </div>

      <Link to='/'>
        <ButtonComponent label='Back'  />
      </Link>
    </div>
  )
}

export default BreweryDetails
