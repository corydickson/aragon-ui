import React from 'react'
import PropTypes from 'prop-types'
import iconSize from '../icon-size'

const IconTrash = ({ size, ...props }) => {
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
        d="M18.618 6.941H5.382a.646.646 0 0 0 0 1.293h13.236a.646.646 0 1 0 0-1.293z"
      />
      <path
        fill="currentColor"
        d="M17.148 6.941a.646.646 0 0 0-.647.647v10.295c0 .454-.37.824-.824.824H8.323a.825.825 0 0 1-.824-.824V7.588a.646.646 0 0 0-1.293 0v10.295A2.12 2.12 0 0 0 8.323 20h7.354a2.12 2.12 0 0 0 2.117-2.117V7.588a.646.646 0 0 0-.646-.647z"
      />
      <path
        fill="currentColor"
        d="M13.47 4h-2.94a2.12 2.12 0 0 0-2.118 2.117v1.47a.646.646 0 0 0 1.293 0v-1.47c0-.455.37-.824.824-.824h2.942c.454 0 .824.37.824.824v1.47a.646.646 0 0 0 1.293 0v-1.47A2.12 2.12 0 0 0 13.47 4zm-2.94 6.618a.646.646 0 0 0-.647.647v4.412a.646.646 0 1 0 1.293 0v-4.412a.646.646 0 0 0-.647-.647zm2.94 0a.646.646 0 0 0-.646.647v4.412a.646.646 0 1 0 1.293 0v-4.412a.646.646 0 0 0-.646-.647z"
      />
    </svg>
  )
}

IconTrash.propTypes = {
  size: PropTypes.oneOf(['medium', 'small', 'tiny']),
}
export default IconTrash
