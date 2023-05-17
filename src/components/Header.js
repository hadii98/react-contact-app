import React from "react";
import { Menu } from "semantic-ui-react";

const Header = () => {
  return (
    <>
      <Menu fixed="top" size="massive" widths={1} vertical fluid>
        <Menu.Item header className="ui container">
          CONTACT MANAGER
        </Menu.Item>
      </Menu>
    </>
  );
};

export default Header;
