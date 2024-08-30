export interface ChipProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
  size?: 'small' | 'medium';
}
