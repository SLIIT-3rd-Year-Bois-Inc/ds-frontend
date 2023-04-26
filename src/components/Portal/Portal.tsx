import { useRef, useEffect, useState, ReactNode } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: ReactNode;
  open?: boolean;
}

export const Portal = ({ children, open = false }: PortalProps) => {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);
    
  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>("#portal");
    setMounted(true);
  }, []);

  return mounted && ref.current
    ? createPortal(
        <>
          <input type="checkbox" className="modal-toggle" checked={open} />
          <div className="modal">
            {children}
          </div>
        </>,
        ref.current
      )
    : null;
};
