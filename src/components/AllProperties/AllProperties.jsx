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
                <h2 className='label'>{data.type}</h2>
                <img src={data.thumbnail} alt="Property" className="property-image"/>
                <p className='property-price'>{data.price}</p>
                <p className='property-address'><span className='label'>Address: </span>{data.address}</p>
                <p className='property-location'><span className='label'>Location: </span>{data.location}</p>
                <p>{data.description}</p>
                <ul>
                  <h3 className='label'>Amenities</h3>
                {data.amenities.map((amenity, index)=>(
                  <li key={index}>{amenity}</li>
                ))}
                </ul>
                <button className='buy-button' onClick={()=>{window.open(`${propertyData.sellerlink}`)}}>BUY</button>
                </div>
            ))
        }
         </div>
    </div>
  )
}

export default AllProperties
