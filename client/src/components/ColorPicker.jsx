import React from 'react'
import { ChromePicker, SketchPicker } from 'react-color'
import { useSnapshot } from 'valtio'

import state from '../store'

const ColorPicker = () => {
  const snap = useSnapshot(state)

  return (
    <div className='absolute left-full ml-3'>
      <SketchPicker
        color={snap.color}
        disableAlpha
        onChange={(color) => (state.color = color.hex)}
        presetColors={[
          '#000000',
          '#ffffff',
          '#ff0000',
          '#00ff00',
          '#0000ff',
          '#ffff00',
          '#00ffff',
          '#ff00ff',
          '#000080',
          '#bebebe',
          '#228b22',
          '#800000',
          '#4169e1',
          '#556B2F',
          '#36454f',
          '#ff7f50',
          '#ff1493',
          '#ff4500',
        ]}
      />
    </div>
  )
}

export default ColorPicker
