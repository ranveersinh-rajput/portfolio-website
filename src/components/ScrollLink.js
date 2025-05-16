import React, { forwardRef } from 'react';
import { Link } from 'react-scroll';

const ScrollLink = forwardRef((props, ref) => (
  <Link {...props} innerRef={ref} />
));

export default ScrollLink;
