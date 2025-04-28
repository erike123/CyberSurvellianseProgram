import { useState } from "react";
import Logo from "../../components/shared/Logo/Logo";
import Menu from "./Menu";

export default function Navigation() {
    const [menuIsOpened, setMenuIsOpened] = useState(false);


    const MenuClickHandler = () => {
        /* This function handles the mobile version (Hamburger button) */

        if (menuIsOpened) {
            setMenuIsOpened(false);
        } else {
            setMenuIsOpened(true);
        }
    };

    return(
        <header className="flex max-container items-center justify-between padding-x py-5 relative border-1 border-bottom">
            <div>
                <Logo />
            </div>

            <nav >
                <Menu 
                    MenuClickHandler={MenuClickHandler}    
                    isOpen={menuIsOpened}
                />
            </nav>
        </header>
    );
}