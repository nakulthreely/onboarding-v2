//@ts-ignore
const NewWalletButton = ({ bgColor }) => {
  const hexToRgba = (hex: string, opacity: number) => {
    hex = hex.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };

  const rgbaColor = hexToRgba(bgColor, 1);
  const rgbaShadowColor = hexToRgba(bgColor, 0.4);

  const buttonStyle = {
    width: "145px",
    height: "135px",
  };
  const containerStyle = {
    display: "flex",
    "--gradient-color": rgbaColor,
    "--gradient-shadow-color": rgbaShadowColor,
  };
  return (
    <div
      style={buttonStyle}
      className="flex items-center justify-center cursor-pointer"
    >
      <div style={containerStyle} className="rotating-glow-container">
        <svg
          width="68"
          height="69"
          viewBox="0 0 68 69"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_iiii_555_5586)">
            <path
              d="M46.9292 2.64062H21.0707C10.5382 2.64062 2 11.1789 2 21.7113V47.5698C2 58.1022 10.5382 66.6405 21.0707 66.6405H46.9292C57.4617 66.6405 65.9999 58.1022 65.9999 47.5698V21.7113C65.9999 11.1789 57.4617 2.64062 46.9292 2.64062Z"
              fill="url(#paint0_linear_555_5586)"
            />
          </g>
          <path
            d="M44.99 9.10547H23.0103C14.9771 9.10547 8.46484 15.6177 8.46484 23.6509V45.6306C8.46484 53.6638 14.9771 60.1761 23.0103 60.1761H44.99C53.0233 60.1761 59.5355 53.6638 59.5355 45.6306V23.6509C59.5355 15.6177 53.0233 9.10547 44.99 9.10547Z"
            fill="url(#paint2_linear_555_5586)"
            stroke="url(#paint3_linear_555_5586)"
            stroke-width="0.128"
          />
          <path
            d="M41.7579 15.5703H26.2428C19.9947 15.5703 14.9297 20.6354 14.9297 26.8834V42.3985C14.9297 48.6466 19.9947 53.7116 26.2428 53.7116H41.7579C48.006 53.7116 53.071 48.6466 53.071 42.3985V26.8834C53.071 20.6354 48.006 15.5703 41.7579 15.5703Z"
            fill="url(#paint4_linear_555_5586)"
            stroke="url(#paint5_linear_555_5586)"
            stroke-width="0.128"
          />
          <line
            opacity="0.5"
            x1="34.0832"
            y1="2.64063"
            x2="34.0832"
            y2="66.6405"
            stroke="url(#paint6_linear_555_5586)"
            stroke-width="0.1664"
          />
          <line
            opacity="0.5"
            x1="66"
            y1="34.7238"
            x2="2.0001"
            y2="34.7238"
            stroke="url(#paint7_linear_555_5586)"
            stroke-width="0.1664"
          />
          <g filter="url(#filter1_ddddd_555_5586)">
            <path
              d="M34.0869 29.1304V36.5057L46.1948 32.3937C47.3841 31.9899 48.1739 30.9473 48.1739 29.7814V25.0821C48.1739 24.7211 47.8191 24.4669 47.4772 24.583L34.0869 29.1304Z"
              fill="url(#paint8_linear_555_5586)"
            />
            <path
              d="M33.8008 21.6869C33.9719 21.745 34.087 21.9055 34.087 22.0862V31.0996C34.087 29.9337 33.2972 28.8912 32.1079 28.4873L21.9791 25.0474C20.7898 24.6435 20 23.6009 20 22.4351V17.5886C20 17.2998 20.2838 17.0964 20.5574 17.1893L33.8008 21.6869Z"
              fill="url(#paint9_linear_555_5586)"
            />
            <path
              d="M34.0869 36.5057L34.087 43.8811L21.9791 39.7691C20.7898 39.3652 20 38.3227 20 37.1568V32.3103C20 32.0215 20.2839 31.8181 20.5574 31.911L34.0869 36.5057Z"
              fill="url(#paint10_linear_555_5586)"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M28.2883 37.648V52.5783C28.2883 52.8112 28.4771 53 28.71 53H33.67C33.9031 53 34.092 52.8108 34.0917 52.5777L34.0721 37.648H28.2883Z"
              fill="url(#paint11_linear_555_5586)"
            />
          </g>
          <defs>
            <filter
              id="filter0_iiii_555_5586"
              x="-2.85035"
              y="0.640625"
              width="70.8503"
              height="70.8503"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="-0.237529" dy="0.237529" />
              <feGaussianBlur stdDeviation="0.475058" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.17 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_555_5586"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="-1.42517" dy="0.950116" />
              <feGaussianBlur stdDeviation="0.831351" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_innerShadow_555_5586"
                result="effect2_innerShadow_555_5586"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="-3.08788" dy="2.13776" />
              <feGaussianBlur stdDeviation="1.18764" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
              />
              <feBlend
                mode="normal"
                in2="effect2_innerShadow_555_5586"
                result="effect3_innerShadow_555_5586"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="-5.7007" dy="4.03799" />
              <feGaussianBlur stdDeviation="1.42517" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
              />
              <feBlend
                mode="normal"
                in2="effect3_innerShadow_555_5586"
                result="effect4_innerShadow_555_5586"
              />
            </filter>
            <filter
              id="filter1_ddddd_555_5586"
              x="19.413"
              y="15.2095"
              width="46.3695"
              height="44.247"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="0.586956" dy="0.195652" />
              <feGaussianBlur stdDeviation="0.586956" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_555_5586"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="2.15217" dy="0.391304" />
              <feGaussianBlur stdDeviation="1.07609" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.26 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_dropShadow_555_5586"
                result="effect2_dropShadow_555_5586"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="4.8913" dy="0.97826" />
              <feGaussianBlur stdDeviation="1.46739" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
              />
              <feBlend
                mode="normal"
                in2="effect2_dropShadow_555_5586"
                result="effect3_dropShadow_555_5586"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="8.80434" dy="1.76087" />
              <feGaussianBlur stdDeviation="1.76087" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
              />
              <feBlend
                mode="normal"
                in2="effect3_dropShadow_555_5586"
                result="effect4_dropShadow_555_5586"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="13.6956" dy="2.54348" />
              <feGaussianBlur stdDeviation="1.95652" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"
              />
              <feBlend
                mode="normal"
                in2="effect4_dropShadow_555_5586"
                result="effect5_dropShadow_555_5586"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect5_dropShadow_555_5586"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_555_5586"
              x1="2.85216"
              y1="3.33813"
              x2="23.8349"
              y2="43.2413"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#383838" />
              <stop offset="1" stop-color="#101010" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_555_5586"
              x1="61.4284"
              y1="7.89775"
              x2="39.7142"
              y2="47.4405"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color={bgColor} />
              <stop offset="1" stop-color="#1E1E1E" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_555_5586"
              x1="9.08189"
              y1="9.59885"
              x2="25.8681"
              y2="41.5214"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#2A2A2A" />
              <stop offset="1" stop-color="#111111" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_555_5586"
              x1="11.928"
              y1="17.3673"
              x2="36.0219"
              y2="38.8928"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" stop-opacity="0.11" />
              <stop offset="1" stop-color="white" stop-opacity="0.04" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_555_5586"
              x1="15.3117"
              y1="15.8595"
              x2="27.9014"
              y2="39.8014"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#1A1A1A" />
              <stop offset="1" stop-color="#111111" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_555_5586"
              x1="17.4463"
              y1="21.6859"
              x2="35.5167"
              y2="37.8299"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" stop-opacity="0.11" />
              <stop offset="1" stop-color="white" stop-opacity="0.04" />
            </linearGradient>
            <linearGradient
              id="paint6_linear_555_5586"
              x1="34"
              y1="66.0005"
              x2="34"
              y2="2.64063"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#3C3C3C" />
              <stop offset="0.354167" stop-color="#242424" stop-opacity="0.2" />
              <stop offset="0.666667" stop-color="#242424" stop-opacity="0.2" />
              <stop offset="1" stop-color="#3C3C3C" />
            </linearGradient>
            <linearGradient
              id="paint7_linear_555_5586"
              x1="2.6401"
              y1="34.6406"
              x2="66"
              y2="34.6406"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#3C3C3C" />
              <stop offset="0.354167" stop-color="#242424" stop-opacity="0.2" />
              <stop offset="0.666667" stop-color="#242424" stop-opacity="0.2" />
              <stop offset="1" stop-color="#3C3C3C" />
            </linearGradient>
            <linearGradient
              id="paint8_linear_555_5586"
              x1="18.337"
              y1="15.8613"
              x2="48.9565"
              y2="46.383"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="1" stop-color="#E9E9E9" />
            </linearGradient>
            <linearGradient
              id="paint9_linear_555_5586"
              x1="18.337"
              y1="15.8613"
              x2="48.9565"
              y2="46.383"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="1" stop-color="#E9E9E9" />
            </linearGradient>
            <linearGradient
              id="paint10_linear_555_5586"
              x1="18.337"
              y1="15.8613"
              x2="48.9565"
              y2="46.383"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="1" stop-color="#E9E9E9" />
            </linearGradient>
            <linearGradient
              id="paint11_linear_555_5586"
              x1="18.337"
              y1="15.8613"
              x2="48.9565"
              y2="46.383"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="1" stop-color="#E9E9E9" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default NewWalletButton;
