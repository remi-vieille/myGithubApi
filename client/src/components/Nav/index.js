import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
    return (
        <Menu>
            <Menu.Item
                name="recherche"
                as={NavLink}
                to="/"
            />
            <Menu.Item
                name="faq"
                content="FAQ"
                as={NavLink}
                to="/faq"
            />
        </Menu>
    );
}