import React from 'react'

export default function Footer() {
  return (
    <div>
      <div className="w-[416px] h-[43px] py-3 rounded-[44px] justify-start items-start inline-flex">
        <div className="grow shrink basis-0 h-[19px] justify-center items-center gap-2 flex">
          <div className="w-[19px] h-[19px] relative rounded-[5px]" />
          <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_240_3997)">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M19 0H0V19H19V0ZM10.079 5.60869V8.07896L14.1585 6.47031V8.29788C14.1585 8.68991 13.9298 9.04048 13.5854 9.17628L10.079 10.559V8.73509C10.0767 8.34551 9.84853 7.99783 9.5059 7.86274L6.57263 6.70603C6.22823 6.57021 5.99951 6.21964 5.99951 5.82761V4.00003L10.079 5.60869ZM10.079 10.5699V11.0459H10.0848V16.2081H8.404V12.3894L6.57263 11.6672C6.22823 11.5314 5.99951 11.1809 5.99951 10.7888V8.96124L10.079 10.5699Z" fill="#808080" fill-opacity="0.4" />
            </g>
            <defs>
              <clipPath id="clip0_240_3997">
                <rect width="19" height="19" rx="5" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <div className="text-center text-zinc-500 text-opacity-40 text-sm font-semibold font-['Montserrat'] leading-[16.80px]">Powered by Tria</div>
        </div>
      </div>
    </div>
  )
}