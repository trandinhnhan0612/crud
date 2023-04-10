import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

const SidebarStyles = styled.div`
  width: 200px;
  background-color: #ffffff;
  box-shadow: 10px 10px 20px rgba(218, 213, 213, 0.15);
  border-radius: 12px;
  margin-top: 76px;
  .menu-item {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 14px 20px;
    font-weight: 500;
    color: gray;
    margin-bottom: 20px;
    cursor: pointer;
    text-decoration: none;
    &.active,
    &:hover {
      background: #e3f2fd;
      color: #1565c0;
    }
  }
`;

const sidebarLink = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Student",
    url: "/details-redux",
  },
  {
    title: "Manage",
    url: "/manage",
  },
];
const SideBar = () => {
  return (
    <>
      <SidebarStyles>
        {sidebarLink.map((link) => {
          return (
            <NavLink to={link.url} className="menu-item" key={link.title}>
              <span className="menu-title">{link.title}</span>
            </NavLink>
          );
        })}
      </SidebarStyles>
      <Outlet></Outlet>
    </>
  );
};

export default SideBar;
