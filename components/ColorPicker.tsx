import { useState } from "react";
import { HexColorPicker } from "react-colorful";

interface props {
    value? : string;
    onPickerChange : (color: string) => void;
}

const ColorPicker = ({value,onPickerChange}) => {
  const [color, setColor] = useState("#aabbcc");
  const [isOpen, setIsOpen] = useState(false)
  return <HexColorPicker color={color} onChange={setColor} />;
};

export default ColorPicker;