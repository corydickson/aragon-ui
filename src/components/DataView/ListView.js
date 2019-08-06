import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import { Transition, animated } from 'react-spring'
import { GU, springs, textStyle } from '../../style'
import { useTheme } from '../../theme'
import { Checkbox } from '../Input/Checkbox'
import { ToggleButton } from './ToggleButton'
import { OpenedSurfaceBorder } from './OpenedSurfaceBorder'

function ListView({
  allSelected,
  entries,
  fields,
  hasAnyChild,
  onSelect,
  onSelectAll,
  renderSelectionCount,
  selectable,
}) {
  const theme = useTheme()

  const [opened, setOpened] = useState(-1)

  const toggleEntry = useCallback(index => {
    setOpened(opened => (opened === index ? -1 : index))
  }, [])

  const sideSpace = selectable || hasAnyChild

  return (
    <React.Fragment>
      {entries.map((entry, index) => {
        const hasChildren = entry.children.length > 0
        return (
          <div
            key={index}
            css={`
              position: relative;
              padding: 0;
              padding-right: ${3 * GU}px;
              padding-left: ${(sideSpace ? 6.5 : 3) * GU}px;
              border-bottom: ${Number(index !== entries.length - 1)}px solid
                ${theme.border};
              transition: background 150ms ease-in-out;
              background: ${entry.selected ? theme.surfaceSelected : 'none'};
            `}
          >
            <OpenedSurfaceBorder opened={entry.index === opened} />
            {sideSpace && (
              <div
                css={`
                  position: absolute;
                  top: ${1.5 * GU}px;
                  left: 0;
                  display: flex;
                  justify-content: center;
                  width: ${6.5 * GU}px;
                `}
              >
                {selectable && (
                  <Select
                    index={entry.index}
                    selected={entry.selected}
                    onSelect={onSelect}
                  />
                )}
                {!selectable && hasChildren && (
                  <ToggleButton
                    opened={entry.index === opened}
                    onClick={() => toggleEntry(entry.index)}
                  />
                )}
              </div>
            )}
            {entry.actions && (
              <div
                css={`
                  position: absolute;
                  top: ${2 * GU}px;
                  right: ${3 * GU}px;
                `}
              >
                {entry.actions}
              </div>
            )}
            <div>
              {entry.entryNodes
                .map((content, index) => [
                  // field content
                  content,
                  // field label
                  fields[index].label,
                  // priority number
                  (fields[index].priority && fields[index].priority) || 0,
                ])
                // sort by priority
                .sort((a, b) => b[2] - a[2])
                .map(([content, label], index, entryNodes) => (
                  <div
                    key={index}
                    css={`
                      display: flex;
                      flex-direction: column;
                      padding-bottom: ${index === entryNodes.length - 1
                        ? 2 * GU
                        : 0}px;
                    `}
                  >
                    <div
                      css={`
                        display: flex;
                        align-items: center;
                        margin: ${2 * GU}px 0 ${1 * GU}px;
                        color: ${theme.surfaceContentSecondary};
                        ${textStyle('label2')};
                      `}
                    >
                      {label}
                    </div>

                    <div>{content}</div>
                  </div>
                ))}
            </div>
            <Transition
              native
              items={hasChildren && entry.index === opened}
              from={{ totalHeight: 0 }}
              enter={{ totalHeight: 8 * GU * entry.children.length }}
              leave={{ totalHeight: 0 }}
              config={springs.lazy}
            >
              {show =>
                show &&
                /* eslint-disable react/prop-types */
                (({ totalHeight }) => (
                  <animated.div
                    css={`
                      overflow: hidden;
                      background: ${theme.surfaceUnder};
                      margin-left: ${-6.5 * GU}px;
                      margin-right: ${-3 * GU}px;
                      padding-left: ${6.5 * GU}px;
                      box-shadow: inset 0 6px 4px -4px rgba(0, 0, 0, 0.16);
                    `}
                    style={{
                      height: totalHeight.interpolate(v => `${v}px`),
                    }}
                  >
                    {entry.children.map((child, i) => (
                      <div
                        key={i}
                        css={`
                          display: flex;
                          align-items: center;
                          height: ${8 * GU}px;
                          padding-right: ${3 * GU}px;
                        `}
                      >
                        {child}
                      </div>
                    ))}
                  </animated.div>
                ))
              /* eslint-enable react/prop-types */
              }
            </Transition>
          </div>
        )
      })}
    </React.Fragment>
  )
}

ListView.propTypes = {
  allSelected: PropTypes.oneOf([-1, 0, 1]).isRequired,
  entries: PropTypes.array.isRequired,
  fields: PropTypes.array.isRequired,
  hasAnyChild: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
  onSelectAll: PropTypes.func.isRequired,
  renderSelectionCount: PropTypes.func.isRequired,
  selectable: PropTypes.bool.isRequired,
}

/* eslint-disable react/prop-types */

function Select({ index, selected, onSelect }) {
  const change = useCallback(
    check => {
      onSelect(index, check)
    },
    [index, onSelect]
  )

  return <Checkbox onChange={change} checked={selected} />
}

/* eslint-enable react/prop-types */

export { ListView }