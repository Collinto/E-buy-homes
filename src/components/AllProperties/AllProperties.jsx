import React from 'react';
import useFetch from '../useFetch';
import "./AllProperties.css";

const AllProperties = () => {
    const {propertyData, error, loading} = useFetch("https://ebuy-api.onrender.com/");

    if (loading) return <div className='container'>
        <div className="loader"></div>
        <div className="load">LOADING...</div> 
        </div>
        
    if (error) return <div className='container'>
      <h1>{error.message}</h1> 
      </div>
  return (
    <div className='container'>
         <div className="properties">
         {
            propertyData?.map((data)=>(
                <div className='property-card' key={data.id}>
                <h2>{data.type}</h2>
                <img src={data.thumbnail} alt="" className="property-image"/>
                <p className='property-price'>{data.price}</p>
                <p>{data.address}</p>
                <p>{data.description}</p>
                <ul>
                  <h3>Amenities</h3>
                {data.amenities.map((amenity)=>(
                  <li>{amenity}</li>
                ))}
                </ul>
                </div>
            ))
        }
         </div>
    </div>
  )
}

export default AllProperties
