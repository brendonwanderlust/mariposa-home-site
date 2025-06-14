interface PhoneLinkProps {
  phoneNumber?: string;
  displayText?: string;
  className?: string;
}

const PhoneLink: React.FC<PhoneLinkProps> = ({
  phoneNumber = "+16124004532",
  displayText = "(612) 400-4532",
  className = "",
}) => {
  const cleanNumber = phoneNumber.replace(/[^\d+]/g, "");

  return (
    <a href={`tel:${cleanNumber}`} className={className}>
      {displayText || phoneNumber}
    </a>
  );
};

export default PhoneLink;
