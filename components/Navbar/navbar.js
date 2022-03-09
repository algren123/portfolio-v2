import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
  const [isBlog, setIsBlog] = useState(false);
  const [isBlogPage, setIsBlogPage] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  useEffect(() => {
    setIsBlog(window.location.href.includes('blog'));
    setIsBlogPage(window.location.href.includes('/blog/'));
  }, [setIsBlog]);

  return (
    <>
      <NavContainer>
        <Nav>
          <Link href={isBlog ? '/' : ''}>
            <NavLogo
              onClick={isBlog ? '' : () => scrollToElement('.home', 'end')}
            >
              <Image
                src="/personal_logo.png"
                alt="personal-logo"
                width={80}
                height={80}
                layout="fixed"
                quality={100}
              />
            </NavLogo>
          </Link>
          <MenuIcon onClick={handleClick}>
            {click ? <BiX /> : <BiMenu />}
          </MenuIcon>

          <Menu onClick={handleClick} click={click}>
            {isBlog ? (
              <>
                {isBlogPage ? (
                  <MenuItem>
                    <Link href="/blog">
                      <Button>Go back</Button>
                    </Link>
                  </MenuItem>
                ) : (
                  ''
                )}
                <MenuItem>
                  <Link href="/">
                    <Button>Home</Button>
                  </Link>
                </MenuItem>
              </>
            ) : (
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
                <MenuItem>
                  <Link href="/blog">
                    <Button>Blog</Button>
                  </Link>
                </MenuItem>
              </>
            )}
          </Menu>
        </Nav>
      </NavContainer>
    </>
  );
}
