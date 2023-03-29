import React from 'react'
import { ColorChangeHandler, SketchPicker } from 'react-color'

export const ColorPicker = ({
  color,
  onChange,
}: {
  color: string
  onChange: (color: string) => void
}) => {
  const onColorChange: ColorChangeHandler = (color) => {
    onChange(color.hex)
  }

  return (
    <div>
      <SketchPicker color={color} onChange={onColorChange} />
    </div>
  )
}
