import React, {useContext} from 'react';
import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import {ABOUT_ROUTE, ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import {useHistory} from 'react-router-dom'

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <Navbar bg="dark" variant="dark" style={{height: 70} }>
            <Container>
                <NavLink className="ml-5" style={{color: "#52fc03", fontSize:25}} to={ABOUT_ROUTE}>ЭйрЛайт</NavLink>
                <NavLink className="ml-5" style={{color: "#52fc03", fontSize:25}} to={SHOP_ROUTE}>Магазин</NavLink>
                {user.isAuth ?
                    <Nav  style={{color: 'white'}}>
                        <Button
                            variant={"outline-info"}
                            onClick={() => history.push(ADMIN_ROUTE)}
                        >
                            Вход только для админа
                        </Button>
                        <Button
                            variant={"outline-info"}
                            onClick={() => logOut()}
                            className="ml-2"
                        >
                            Выйти
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-5" style={{color: 'white'}}>
                        <Button variant={"outline-info"} onClick={() => history.push(LOGIN_ROUTE)}>Войти или авторизироваться</Button>
                    </Nav>
                }
            </Container>
        </Navbar>

    );
});

export default NavBar;
