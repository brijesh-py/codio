const ButtonIcon = ({
  className = "",
  children,
  onClick = () => {},
  ...props
}) => {
  return (
    <button
      {...props}
      className="ml-1 text-lg text-zinc-300 p-1 border border-transparent rounded-lg hover:text-zinc-200  hover:bg-zinc-800/50 active:text-white  active:border-sky-500 disabled:text-zinc-500 disabled:border-zinc-700 disabled:cursor-not-allowed" 
      onClick={onClick}
    >
      <span className={`${className}`}>{children}</span>
    </button>
  );
};

export default ButtonIcon;
