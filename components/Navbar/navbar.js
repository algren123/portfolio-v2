import {
  NavContainer,
  Nav,
  NavLogo,
  MenuIcon,
  Menu,
  MenuItem,
} from './navbar.style';
import Image from 'next/image';
import { Button } from '../../pages/_app';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { BiX, BiMenu } from 'react-icons/bi';

export default function Navbar() {
  const [click, setClick] = useState(false);
  const [isBlog, setIsBlog] = useState(false);
  const [isBlogPage, setIsBlogPage] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const closeMenu = () => {
    setClick(false);
  };

  useEffect(() => {
    setIsBlog(window.location.href.includes('blog'));
    setIsBlogPage(window.location.href.includes('/blog/'));
  }, [setIsBlog]);

  function scrollTo(element, block) {
    document.querySelector(`${element}`).scrollIntoView({
      behavior: 'smooth',
      block: block,
    });

    closeMenu();
  }

  return (
    <>
      <NavContainer>
        <Nav>
          <Link href={isBlog ? '/' : ''}>
            <NavLogo onClick={isBlog ? '' : () => scrollTo('.home', 'end')}>
              <Image
                src="/personal_logo.png"
                alt="personal-logo"
                width={80}
                height={80}
                layout={'fixed'}
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
                  <Link href="/">
                    <Button onClick={() => scrollTo('.projects', 'start')}>
                      Projects
                    </Button>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Button onClick={() => scrollTo('.work-experience', 'start')}>
                    Experience
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Link href="/blog">
                    <Button>Blog</Button>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Button onClick={() => scrollTo('.contact', 'start')}>
                    Contact
                  </Button>
                </MenuItem>
              </>
            )}
          </Menu>
        </Nav>
      </NavContainer>
    </>
  );
}
