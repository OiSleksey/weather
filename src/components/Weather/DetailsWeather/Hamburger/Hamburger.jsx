import React from 'react';
import './Hamburger.sass';
import { Sling as Hamburger } from 'hamburger-react';

const HamburgerMenu = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div class="detail__hamburger hamburger">
      hello
      {/* <Hamburger toggled={isOpen} toggle={setOpen} /> */}
    </div>
  );
};

export default HamburgerMenu;
