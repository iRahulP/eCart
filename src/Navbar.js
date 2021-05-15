import React from 'react';

//class Navbar extends React.Component {

//changed to functional Component
const Navbar = () => {
    return (
        <div style={styles.nav}>
            <div style={styles.cartIconContainer}>
                <img style={styles.cartIcon} src="https://t3.ftcdn.net/jpg/03/03/05/78/240_F_303057896_UOqpWEaLAEwRVFlh5OUq0RIB3EfHNnAi.jpg" alt="cart-icon" />
                <span style={styles.cartCount}>3</span>
            </div>
        </div >
    )
}

const styles = {
    cartIcon: {
        height: 32,
        marginRight: 20,
        background: '#4267b2',
    },
    nav: {
        height: 70,
        background: '#4267b2',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    cartIconContainer: {
        position: 'relative'
    },
    cartCount: {
        background: 'yellow',
        borderRadius: '50%',
        padding: '4px 8px',
        position: 'absolute',
        top: -9,
        right: 0
    }
}

export default Navbar;