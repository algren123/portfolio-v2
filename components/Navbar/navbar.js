import { useState } from 'react';
import Image from 'next/image';

// Helpers
import { scrollToElement } from '../../helpers/index.tsx';

// Styles
import { Button } from '../../pages/_app';
import { BiX, BiMenu } from 'react-icons/bi';
import {
  NavContainer,
  Nav,
  NavLogo,
  MenuIcon,
  Menu,
  MenuItem,
} from './navbar.style';

export default function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <>
      <NavContainer>
        <Nav>
          <NavLogo onClick={() => scrollToElement('.home', 'end')}>
            <Image
              src="/personal_logo.png"
              alt="personal-logo"
              width={80}
              height={80}
              layout="fixed"
              quality={100}
            />
          </NavLogo>
          <MenuIcon onClick={handleClick}>
            {click ? <BiX /> : <BiMenu />}
          </MenuIcon>

          <Menu onClick={handleClick} click={click}>
            <>
              <MenuItem>
                <Button onClick={() => scrollToElement('.projects', 'start')}>
                  Projects
                </Button>
              </MenuItem>
              <MenuItem>
                <Button
                  onClick={() => scrollToElement('.work-experience', 'start')}
                >
                  Experience
                </Button>
              </MenuItem>
              <MenuItem>
                <Button onClick={() => scrollToElement('.contact', 'start')}>
                  Contact
                </Button>
              </MenuItem>
            </>
          </Menu>
        </Nav>
      </NavContainer>
    </>
  );
}
