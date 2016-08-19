import React, { Component, PropTypes } from 'react'
import MyGreatPlace from './MyGreatPlace'
import GoogleMap from 'google-map-react'
import { Flex } from 'reflexbox'
import data from '../data'

export default class Accomodations extends Component {
  static defaultProps = {
    center: {lat: 30.5194118, lng: -87.9030137},
    zoom: 16
  };

  render () {
    const renderPlaces = () => {
      return data.accomodations.map((place, id) => {
        const { lat, lng, ...rest } = place
        return <MyGreatPlace key={id} lat={lat} lng={lng} {...rest} />
      })
    }
    return (
      <Flex mb={4} style={{height: '100vh'}}>
        <div className='map-container'>
          <GoogleMap
            bootstrapURLKeys={{
              key: 'AIzaSyAy-dkJSF104N1nQaCe2jfiroEwyZWRF_4',
              language: 'en'
            }}
            defaultCenter={this.props.center}
            zoom={15}
            defaultZoom={this.props.zoom}>
            {renderPlaces()}
          </GoogleMap>
        </div>
      </Flex>
    )
  }
}

Accomodations.displayName = 'Accomodations'

Accomodations.propTypes = {
  center: PropTypes.object,
  zoom: PropTypes.number
}

export default Accomodations
