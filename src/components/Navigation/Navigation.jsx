import React, {useState} from "react";
import s from "./Navigation.module.scss";
import {HiOutlineShoppingCart} from "react-icons/hi";
import Hamburger from "hamburger-react";
import {NavLink, useNavigate} from "react-router-dom";

function Navigation() {
    const [isOpen, setOpen] = useState(false);
    const navigate = useNavigate();

    const [count, setCount] = useState(0);

    return (
        <div className={s.navigationWrap}>
            <div className={s.container}>
                <div className={s.navigation}>
                    <div className={s.logo} onClick={()=> navigate('/')}>
                        <h1>studio polly</h1>
                    </div>
                    <div className={s.links}>
                        <p>
                            <NavLink to={'/shop'}>shop</NavLink>
                        </p>
                        <p>
                            <NavLink to={'/about'}>about</NavLink>
                        </p>
                        <p>
                            <NavLink to={'/journal'}>journal</NavLink>
                        </p>
                    </div>

                    <div className={s.menu}>
                        <Hamburger toggled={isOpen} toggle={setOpen}/>
                    </div>

                    <div className={s.order}>
                        <div>
                            <p>search</p>
                        </div>
                        <div>
                            <HiOutlineShoppingCart/>
                            <p>({count})</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navigation;
