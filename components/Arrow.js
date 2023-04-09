const Arrow = ({ ...props }) => {
  return (
    <svg
      width={12}
      height={12}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.392 11.21 5.37 10.2 8.92 6.648H0V5.17h8.92L5.37 1.625 6.391.608l5.301 5.301-5.3 5.301Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Arrow;
