import { HeaderButton, HeaderHeading, HeaderWrapper } from './header.styles';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.provider';
import { useLocation } from 'react-router-dom';
import { UserContext } from '../../contexts/user.provider';
import { removeAuthHeader } from '../../utils/axios-client';
import logo from '../../assets/logo_transparent.png';

const Header = () => {
	const { items } = useContext(CartContext);
	const { authenticated, setAuthenticated } = useContext(UserContext);
	const location = useLocation();
	const pageName = location.pathname.split('/')[1];

	const logout = () => {
		setAuthenticated(false);
		removeAuthHeader();
	};

	const title = pageName ? pageName.toUpperCase() : 'Shop';
	return (
		<HeaderWrapper>
			<Link to="/" style={{ flex: '1 1 0px' }}>
				<img src={logo} alt="logo" style={{ width: '50px', height: 'auto', margin: '5px 20px' }}></img>
			</Link>

			<HeaderHeading style={{ flex: '1 1 0px' }}>{title}</HeaderHeading>
			<div>
				{authenticated && <HeaderButton onClick={() => logout()}>Logout</HeaderButton>}

				<Link to="/checkout">
					<HeaderButton className='cartButton'>Cart ({items.length})</HeaderButton>
				</Link>
			</div>
		</HeaderWrapper>
	);
};

export default Header;
