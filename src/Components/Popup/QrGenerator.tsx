import React, { useEffect, useRef, useState } from "react";
import QRCodeStyling from "qr-code-styling";

enum FileExtension {
  PNG = "png",
  JPG = "jpg",
  // Add other supported file extensions here
}

const qrCode = new QRCodeStyling({
  width: 200,
  height: 200,
  image:
    "https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=029",
  dotsOptions: {
    color: "black",
    type: "rounded"
  },
  imageOptions: {
    crossOrigin: "anonymous",
    margin: 20
  }
});

const qrCode2 = new QRCodeStyling({
  width: 200,
  height: 200,
  image:
    "https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=029",
  dotsOptions: {
    color: "black",
    type: "rounded"
  },
  imageOptions: {
    crossOrigin: "anonymous",
    

  }
});

interface Props{
 content ?: string
}

export const QrGenerator: React.FC<Props> = ({content}) => {
  const [url, setUrl] = useState<string>(content ||  "");

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      qrCode.append(ref.current);
    }
  }, []);

  useEffect(() => {
    qrCode.update({
      data: url
    });
  }, [url]);




  return (
    <div className="App">     
      <div ref={ref} />
    </div>
  );
};

