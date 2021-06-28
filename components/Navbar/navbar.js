import { NavContainer,
Nav,
NavLogo,
MenuIcon,
Menu,
MenuItem,
    } from './navbar.style';
import Image from 'next/image';
import { Button } from '../../pages/_app';
import { useState } from 'react';
import { BiX, BiMenu } from 'react-icons/bi';

export default function Navbar() {

    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
    };

    const closeMenu = () => {
        setClick(false);
    };

    function scrollTo(element, block) {
        document.querySelector(`${element}`).scrollIntoView({
            behavior: 'smooth',
            block: block
        });
    }

    return (
        <>
            <NavContainer>
                <Nav>
                    <NavLogo onClick={() => scrollTo('.home', 'center')}>
                        <Image
                            src="/personal_logo.png"
                            alt="personal-logo"
                            width={80}
                            height={80}
                            layout={'fixed'}
                            quality={100}
                        />
                    </NavLogo>

                    <MenuIcon onClick={handleClick}>
                        { click ? <BiX /> : <BiMenu />}
                    </MenuIcon>

                    <Menu onClick={handleClick} click={click}>
                        <MenuItem>
                            <Button onClick={closeMenu} onClick={() => scrollTo('.projects', 'center')}>Projects</Button>
                        </MenuItem>
                        <MenuItem>
                            <Button onClick={closeMenu} onClick={() => scrollTo('.work-experience', 'center')}>Experience</Button>
                        </MenuItem>
                        <MenuItem>
                            <Button onClick={closeMenu} onClick={() => scrollTo('.contact', 'start')}>Contact</Button>
                        </MenuItem>
                    </Menu>
                </Nav>
            </NavContainer>
        </>
    )
}