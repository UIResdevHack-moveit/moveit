import React from 'react';

interface TextProps {
  ftz: string;
  fwt: string | number ;
  color: string;
  text: string | null | undefined;
  rest?: React.HTMLProps<HTMLParagraphElement>;
}

function Text({ ftz, fwt, color, text, ...rest }: TextProps) {
  const fontStyle = {
    fontSize: ftz,
    fontWeight: fwt,
    color: color,
    fontFamily: 'Poppins',
    margin: 0,
    ...rest 
  };

  return (
    <div>
      <p style={fontStyle}>{text}</p>
    </div>
  );
}

export default Text;
