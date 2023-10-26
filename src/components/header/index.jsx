import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";

// IMPORTANDO AS ACTIONS
import { loginUser, logoutUser } from "../../redux/user/actions";

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const dispatch = useDispatch(); //DISPARANDO O ESTADO DAS ACTIONS

  const { currentUser } = useSelector((state) => state.userReducer); //PUXA OS ESTADOS PARA O COMPONENTE QUE ESTÁ REQUISITANDO

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  //ESSAS FUNÇÕES AO SEREM ACIONADAS, DESPACHAM O ESTADO ATUAL AO FAZER UM LOGIN COM A ACTION
  const handleLoginClick = () => {
    dispatch(loginUser({ name: "Felipe Rocha", email: "felipe@rocha.com" }));
  };

  // DESPACHAM O ESTADO ATUAL AO FAZER UM LOGOUT COM A ACTION
  const handleLogoutClick = () => {
    dispatch(logoutUser());
  };

  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        {currentUser ? (
          <div onClick={handleLogoutClick}>Sair</div>
        ) : (
          <div onClick={handleLoginClick}>Login</div>
        )}

        <div onClick={handleCartClick}>Carrinho</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
