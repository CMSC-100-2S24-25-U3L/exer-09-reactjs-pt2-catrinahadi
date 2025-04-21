function Header({ menus }) {
    return (
        <header className="header">
            <div className="title">Lazado</div>
            <nav className="nav">
                {menus.map((menu) => ( //map function to display all the items in the menu
                    <a className="menu" key={menu.id} href={menu.url}>{menu.name}</a>
                ))}
            </nav>
        </header>
    );
}

export default Header;
