const NavButton = ({ label, link, icon: Icon, newTab }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative flex flex-col items-center">
      <div
        className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center border-4 border-gray-700 hover:bg-yellow-300 cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Render the icon dynamically */}
        <Link href={`#${link}`} scroll={false}>
          <Icon className="w-6 h-6 text-white" />
        </Link>
      </div>
      <p className="mt-2 text-gray-300">{label}</p>
    </div>
  );
};
