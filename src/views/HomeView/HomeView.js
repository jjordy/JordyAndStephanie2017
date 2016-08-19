import React, { Component, PropTypes } from 'react'
import defaultTheme from 'styles/defaultTheme'
import { Banner, Heading, Toolbar, NavItem, SequenceMap, SequenceMapStep, Tooltip } from 'rebass'
import { Flex } from 'reflexbox'
import { StickyContainer, Sticky } from 'react-sticky'
import { Link, Element } from 'react-scroll'

export class HomeView extends Component {
  static childContextTypes = {
    rebass: PropTypes.object,
    reflexbox: PropTypes.object
  };

  getChildContext () {
    return {
      rebass: defaultTheme,
      reflexbox: {
        breakpoints: {
          mobile: '(max-width: 768px)',
          desktop: '(min-width: 769px)'
        }
      }
    }
  }

  render () {
    return (
      <StickyContainer>
        <Element name='home'>
          <Flex align='center' justify='center' p={4} style={{padding: 300}}>
            <Heading level={1} big theme='primary'>
              <span className='nice-text'>Jordy & Stephanie 2017</span>
            </Heading>
          </Flex>
        </Element>
        <Sticky>
          <Toolbar backgroundColor='white'>
            <Flex justify='space-around' auto>
              <NavItem
                is={Link}
                to='home'
                smooth
                duration={1000}
                offset={-465}
                color='primary'>
                <span className='navbar-text'>Home</span>
              </NavItem>
              <NavItem
                is={Link}
                to='events'
                smooth
                offset={-465}
                duration={1000}
                color='primary'>
                <span className='navbar-text'>Events</span>
              </NavItem>
              <NavItem
                is={Link}
                to='gifts'
                smooth
                offset={-465}
                duration={1000}
                color='primary'>
                <span className='navbar-text'>Gifts</span>
              </NavItem>
              <NavItem
                is={Link}
                to='accomodations'
                smooth
                offset={-465}
                duration={1000}
                color='primary'>
                <span className='navbar-text'>Accomodations</span>
              </NavItem>
            </Flex>
          </Toolbar>
        </Sticky>
        <Banner backgroundColor='secondary' my={0}>
          <Element name='events'>
            <Flex auto style={{width: '90vw'}} column>
              <Heading level={2} big mb={1} color='white'>Events</Heading>
              <SequenceMap
                color='white'
                style={{width: '100%'}}
                active={0}>
                <SequenceMapStep>
                  <Tooltip title='Perdido Key Florida' style={{zIndex: 99}}>
                    <Heading level={3} color='white'>Engaged 5/13/2016</Heading>
                  </Tooltip>
                </SequenceMapStep>
                <SequenceMapStep>
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
                  <Tooltip title='Perdido Key Florida' style={{zIndex: 99}}>
                    <Heading level={3} color='white'>Engagement 5/13/2016</Heading>
                  </Tooltip>
                </SequenceMapStep>
              </SequenceMap>
            </Flex>
          </Element>
        </Banner>
        <Banner backgroundColor='success' my={0}>
          <Element name='gifts'>
            Gifts
          </Element>
        </Banner>
        <Banner backgroundColor='warning' my={0}>
          <Element name='accomodations'>
            Accomodations
          </Element>
        </Banner>
      </StickyContainer>
    )
  }
}

export default HomeView
