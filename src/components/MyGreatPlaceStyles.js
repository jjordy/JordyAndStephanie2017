const K_SIZE = 30

const greatPlaceStyle = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: 'absolute',
  width: K_SIZE,
  height: K_SIZE,
  left: '50%',
  top: '50%',
  margin: '-20px 0 0 -20px',
  animationName: 'bounce',
  animationFillMode: 'both',
  animationDuration: '1s',
  border: '9px solid #F30',
  borderRadius: '50% 50% 50% 0',
  backgroundColor: '#e7e7e7',
  cursor: 'pointer'
}

const greatPlaceStyleHover = {
  ...greatPlaceStyle,
  transform: 'scale(1.2)',
  border: '6px solid #3f51b5',
  color: '#f44336'
}

export {greatPlaceStyle, greatPlaceStyleHover, K_SIZE}
