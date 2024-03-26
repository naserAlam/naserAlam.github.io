function NavItem({ItemContainer, link, styles, children}) {
    return ( <ItemContainer href={link} className={styles}>{children}</ItemContainer> );
}

export default NavItem;