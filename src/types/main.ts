export interface InputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}
