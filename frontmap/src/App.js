import React, { useState, useRef } from 'react'
// import useSwr from 'swr'
import GoogleMapReact from 'google-map-react'
import useSuperCluster from 'use-supercluster'
import './App.css'

import baseURL from './utils/baseURL'
import useGet from './utils/useGet'

const Marker = ({ children }) => children

function App() {

  const urlGetPoints = baseURL + '/pontos/ler'
  const getAllPoints = useGet(urlGetPoints)

  const mapRef = useRef()
  const [zoom, setZoom] = useState(10)
  const [bounds, setBounds] = useState(null)

  let data = []
  let points = []

  if (!getAllPoints.loading) {
    data =  getAllPoints.data.points

    points = data.map(point => (
      {
        "type": "Feature",
        "properties": {
          "name": point.name,
          "cluster": false,
        },
        "geometry": { 
          "type": "Point", 
          "coordinates": [
            parseFloat(point.longitude), 
            parseFloat(point.latitude)
          ] 
        }
             
      }
    ))
    console.log('Pontos:',points)
  }
  

  const { clusters } = useSuperCluster({
    points,
    bounds,
    zoom,
    options: {radius: 75, maxZoom: 20}
  })

  console.log('Clusters: ',clusters)


  return (
    <div style={{ height: '100vh', width: '100%' }} >
      <GoogleMapReact  
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_KEY }}
        defaultCenter={{ lat: -23.550520, lng: -46.633308 }}
        defaultZoom={7}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map }) =>{
          mapRef.current = map
        }}
        onChange={({zoom, bounds}) => {
          setZoom(zoom)
          setBounds([
            bounds.nw.lng,
            bounds.se.lat,
            bounds.se.lng,
            bounds.nw.lat
          ])
        }}
      >
        
        { clusters.map(cluster => {
          const [longitude, latitude] = cluster.geometry.coordinates
          const { cluster: isCluster, point_count: pointCount } = cluster.properties

          if (isCluster) {
            return (
              <Marker key={cluster.id} lat={latitude} lng={longitude} >
                <div className='cluster-marker' style={{
                  width: `${10 + (pointCount / points.length) * 20}px`,
                  height: `${10 + (pointCount / points.length) * 20}px`
                }} > {pointCount} </div>
              </Marker>
            )
          }

          return(
            <Marker 
              key={cluster.properties.cluster_id} 
              lat={latitude}
              lng={longitude}
            >
              <button className='point-marker' >
                <img src='/home.svg'  />
              </button>
            </Marker>
          )

        }) }

      </GoogleMapReact>
    </div>
  )
}

export default App
