import { useNavigate } from "react-router-dom";

interface NavigationButtonProps {
  url: string;
  children: React.ReactNode;
  className?: string;
  openInNewTab?: boolean;
  disabled?: boolean;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({
  url,
  children,
  className = "btn btn-primary",
  openInNewTab = false,
  disabled = false,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (disabled) return;

    // Check if it's an external URL
    if (url.startsWith("http://") || url.startsWith("https://")) {
      if (openInNewTab) {
        window.open(url, "_blank", "noopener,noreferrer");
      } else {
        window.location.href = url;
      }
    }
    // Check if it's a phone number
    else if (url.startsWith("tel:")) {
      window.location.href = url;
    }
    // Check if it's an email
    else if (url.startsWith("mailto:")) {
      window.location.href = url;
    }
    // Assume it's an internal route
    else {
      navigate(url);
    }
  };

  return (
    <button onClick={handleClick} className={className} disabled={disabled}>
      {children}
    </button>
  );
};

export default NavigationButton;
