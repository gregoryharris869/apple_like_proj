const IconItem = ({
  Icon,
  label,
}: {
  Icon: React.ElementType;
  label: string;
}) => {
  return (
    <div className="flex flex-col items-center">
      <Icon className="w-16 h-16 mb-2" />
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
};

export default IconItem;
