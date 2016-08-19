import React from 'react'
import { Heading, SequenceMap, SequenceMapStep, Tooltip } from 'rebass'
import { Flex } from 'reflexbox'

const Events = (props) => {
  return (
    <Flex auto style={{width: '90vw'}} column>
      <Heading level={2} big mb={1} color='white'>Events</Heading>
      <SequenceMap
        style={{width: '100%'}}
        active={1}>
        <SequenceMapStep active first>
          <Tooltip title='Perdido Key Florida' style={{zIndex: 99}}>
            <Heading level={3} color='white'>Engaged 5/13/2016</Heading>
          </Tooltip>
        </SequenceMapStep>
        <SequenceMapStep active>
          <Tooltip title='Engagement Party Hosted by John Doe Located at 1012 Lucky Lane' style={{zIndex: 99}}>
            <Heading level={3} color='white'>Party 1 10/1/2016</Heading>
          </Tooltip>
        </SequenceMapStep>
        <SequenceMapStep>
        <Tooltip title='Engagement Party Hosted by John Doe Located at 1012 Lucky Lane' style={{zIndex: 99}}>
          <Heading level={3} color='white'>Party 2 10/1/2016</Heading>
        </Tooltip>
        </SequenceMapStep>
        <SequenceMapStep>
        <Tooltip title='Engagement Party Hosted by John Doe Located at 1012 Lucky Lane' style={{zIndex: 99}}>
          <Heading level={3} color='white'>Party 3 10/1/2016</Heading>
        </Tooltip>
        </SequenceMapStep>
        <SequenceMapStep>
          <Tooltip title='Malbus Alabama' style={{zIndex: 99}}>
            <Heading level={3} color='white'>Wedding 5/13/2017</Heading>
          </Tooltip>
        </SequenceMapStep>
      </SequenceMap>
    </Flex>
  )
}
Events.displayName = 'Events'

export default Events
