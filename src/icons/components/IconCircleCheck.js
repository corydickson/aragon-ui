import React from 'react'
import PropTypes from 'prop-types'
import iconSize from '../icon-size'

const IconCircleCheck = ({ size, ...props }) => {
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
        d="M18.653 10.356a.646.646 0 0 0-.646.646v.651a6.316 6.316 0 0 1-1.865 4.495 6.316 6.316 0 0 1-4.492 1.859h-.004a6.364 6.364 0 0 1-6.353-6.36 6.316 6.316 0 0 1 1.864-4.495 6.316 6.316 0 0 1 4.493-1.86h.003a6.32 6.32 0 0 1 2.584.551.646.646 0 1 0 .526-1.18A7.601 7.601 0 0 0 11.654 4h-.004a7.6 7.6 0 0 0-5.406 2.237A7.6 7.6 0 0 0 4 11.646a7.6 7.6 0 0 0 2.237 5.41 7.6 7.6 0 0 0 5.408 2.244h.005a7.6 7.6 0 0 0 5.406-2.238 7.6 7.6 0 0 0 2.244-5.408v-.652a.646.646 0 0 0-.647-.646z"
      />
      <path
        fill="currentColor"
        d="M19.81 4.894a.646.646 0 0 0-.913 0L11.65 12.14l-1.644-1.644a.646.646 0 1 0-.914.915l2.1 2.1a.644.644 0 0 0 .915 0l7.704-7.703a.646.646 0 0 0 0-.914z"
      />
    </svg>
  )
}

IconCircleCheck.propTypes = {
  size: PropTypes.oneOf(['medium', 'small', 'tiny']),
}
export default IconCircleCheck