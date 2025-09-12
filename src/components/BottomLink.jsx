const BottomLink = ({ href, pathname, icon, label }) => {
    const isActive = href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

    return (
        <Link
            href={href}
            aria-current={isActive ? "page" : undefined}
            className={`flex flex-col items-center text-xs font-medium transition-all duration-300 transform-gpu ${isActive ? "text-[#E5C97B]" : "text-white hover:text-[#E5C97B]/80"
                }`}
            style={{ maxWidth: "20%" }} // <-- Prevent children from growing too wide
        >
            <div className={`text-lg mb-0.5 ${isActive ? "drop-shadow-[0_0_8px_#E5C97B]" : ""}`} aria-hidden>
                {icon}
            </div>
            <span className="truncate">{label}</span> {/* prevents overflow text */}
        </Link>
    );
};
