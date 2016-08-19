import React, { Component, PropTypes } from 'react'
import defaultTheme from 'styles/defaultTheme'
import { Banner, Heading, Toolbar, NavItem } from 'rebass'
import Events from 'components/Events'
import Accomodations from 'components/Accomodations'
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
    const bg = require('./home.jpg')
    return (
      <StickyContainer>
        <Element name='home'>
          <Flex
            align='center'
            justify='center'
            column
            p={4}
            style={{
              padding: 300,
              background: `url(${bg}) no-repeat center center fixed`
            }}>
            <Heading level={1} big color='white' mb={1}>
              <span className='nice-text'>Jordy & Stephanie 2017</span>
            </Heading>
            <Heading level={2} big color='white'>
              <span className='nice-text'>F A I R H O P E - A L</span>
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
                offset={-450}
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
                offset={-10}
                duration={1000}
                color='primary'>
                <span className='navbar-text'>Accomodations</span>
              </NavItem>
            </Flex>
          </Toolbar>
        </Sticky>
        <Banner backgroundColor='error' my={0}>
          <Element name='events'>
            <Events />
          </Element>
        </Banner>
        <Banner backgroundColor='success' mt={0} mb={1}>
          <Element name='gifts'>
            Gifts
          </Element>
        </Banner>
        <Element name='accomodations'>
          <Flex align='center' justify='center' p={4}>
            <Heading level={3} big>Accomodations</Heading>
          </Flex>
          <Accomodations />
        </Element>
      </StickyContainer>
    )
  }
}

export default HomeView
