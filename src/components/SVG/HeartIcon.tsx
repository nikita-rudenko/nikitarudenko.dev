const HeartIcon = ({ width = '1em', height = '1em' }): JSX.Element => {
  console.log(width)

  return (
    <svg width={width} height={height} viewBox="0 0 47.5 47.5">
      <defs>
        <clipPath id="prefix__a">
          <path d="M0 38h38V0H0v38z" />
        </clipPath>
      </defs>
      <g clipPath="url(#prefix__a)" transform="matrix(1.25 0 0 -1.25 0 47.5)">
        <path
          d="M3.067 25.68c0 8.8 12.184 12.06 15.933 1.875 3.749 10.186 15.933 6.925 15.933-1.874C34.933 16.12 19 4 19 4S3.067 16.12 3.067 25.68"
          fill="#dd2e44"
        />
      </g>
    </svg>
  )
}

export default HeartIcon
