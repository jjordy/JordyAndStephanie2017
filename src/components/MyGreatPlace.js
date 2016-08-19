import React, {PropTypes, Component} from 'react'
import {greatPlaceStyle, greatPlaceStyleHover} from './MyGreatPlaceStyles'
import { Flex } from 'reflexbox'
import { Panel, NavItem, Text } from 'rebass'

export default class MyGreatPlace extends Component {
  static propTypes = {
    text: PropTypes.string,
    $hover: PropTypes.bool,
    name: PropTypes.string,
    url: PropTypes.string
  };

  static defaultProps = {};

  render () {
    const style = this.props.$hover ? greatPlaceStyleHover : greatPlaceStyle;
    return (
      <Flex>
        <a style={style} href={this.props.url} title='click to view website'/>
        {this.props.$hover && <Panel backgroundColor='white' style={{minWidth: 250}}>
          <Text color='black' bold>{this.props.name}</Text>
          <hr />
          <Text small color='black' bold>{this.props.address}</Text>
        </Panel>}
      </Flex>
    )
  }
}
