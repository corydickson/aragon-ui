import React from 'react'
import PropTypes from 'prop-types'
import iconSize from '../icon-size'

const IconUnlock = ({ size, ...props }) => {
  const sizeValue = iconSize(size)
  return (
    <svg
      width={sizeValue}
      height={sizeValue}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M17.669 10.48H6.332A2.334 2.334 0 0 0 4 12.812v5.668a2.334 2.334 0 0 0 2.332 2.332h11.337A2.334 2.334 0 0 0 20 18.48v-5.668a2.334 2.334 0 0 0-2.331-2.332zm.907 8c0 .5-.407.908-.907.908H6.332a.909.909 0 0 1-.908-.908v-5.668c0-.5.407-.908.908-.908h11.337c.5 0 .907.407.907.908v5.668z"
      />
      <path
        fill="currentColor"
        d="M16.666 6.813a4.774 4.774 0 0 0-1.655-2.74A4.773 4.773 0 0 0 12 3h-.005A4.73 4.73 0 0 0 8.63 4.398a4.73 4.73 0 0 0-1.39 3.367v3.239a.712.712 0 1 0 1.423 0v-3.24c0-.891.345-1.73.975-2.36a3.315 3.315 0 0 1 2.359-.98H12a3.347 3.347 0 0 1 3.27 2.673.712.712 0 1 0 1.396-.284z"
      />
    </svg>
  )
}

IconUnlock.propTypes = {
  size: PropTypes.oneOf(['medium', 'small', 'tiny']),
}
export default IconUnlock
