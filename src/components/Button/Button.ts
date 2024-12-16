export interface ButtonOptions {
    label: string;
    onClick?: () => void;
  }
  
  export function createButton(options: ButtonOptions): HTMLButtonElement {
    const button = document.createElement('button');
    button.textContent = options.label;
    if (options.onClick) button.addEventListener('click', options.onClick);
    return button;
  }
  