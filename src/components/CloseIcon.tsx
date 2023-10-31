import {IconProps} from "@/utlities/models";

interface CloseIconProps extends IconProps {
  onClick: () => void;
}

export const CloseIcon = ({size, color, onClick}: CloseIconProps) => {
  return (
    <svg onClick={onClick} xmlns="http://www.w3.org/2000/svg" height={size} viewBox="0 -960 960 960" width={size} fill={color}>
      <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
    </svg>
  )
}
