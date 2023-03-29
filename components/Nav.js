import { Menu } from "antd";
import React, { useState } from "react";

const items = [
  {
    label: "Menu 1",
    key: 1,
  },
  {
    label: "Menu 2",
    key: 2,
  },
  {
    label: "Menu 3",
    key: 3,
  },
];

const Nav = () => {
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <Menu
      style={{justifyContent: 'end', background: '#fff0', borderBottom: '0', width: '80%'}}
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export default Nav;
