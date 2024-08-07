import React, { useState } from 'react';
import { IoMdHome } from 'react-icons/io';
import { MdInsertChartOutlined } from 'react-icons/md';
import { FaFileCircleCheck } from 'react-icons/fa6';
import { MdOutlineAccountBalanceWallet } from 'react-icons/md';
import { IoBagCheck } from 'react-icons/io5';
import { IoMdLogOut } from 'react-icons/io';

const SIDEBAR = {
  HOME: 'HOME',
  CHART: 'CHART',
  FILE: 'FILE',
  WALLET: 'WALLET',
  BAG: 'BAG',
};

const SideBarMenuWrapper = ({
  selectedMenu,
  handleSelectMenu,
  children,
  menuName,
}) => {
  return (
    <li
      className='flex items-center'
      onClick={() => handleSelectMenu(menuName)}
    >
      <div
        className={`relative flex items-center p-2 ${
          selectedMenu === menuName
            ? 'before:absolute before:left-0 h-6 before:top-0 before:bottom-0 before:w-1 before:rounded-t-md before:rounded-b-md before:bg-blue-500'
            : ''
        }`}
      ></div>
      {children}
    </li>
  );
};

const Sidebar = () => {
  const [selectedMenu, setSelectedMenu] = useState(SIDEBAR.HOME);

  const handleSelectMenu = (name) => {
    setSelectedMenu(name);
  };

  return (
    <aside
      id='logo-sidebar'
      className='fixed top-0 left-0 z-40 w-14 h-screen pt-20 transition-transform -translate-x-full  border-r  md:translate-x-0 bg-gray-800 border-gray-700'
      aria-label='Sidebar'
    >
      <div className=' flex flex-col justify-between h-full  pb-4 overflow-y-auto bg-gray-800'>
        <div>
          <ul className='space-y-8 font-medium'>
            <SideBarMenuWrapper
              handleSelectMenu={handleSelectMenu}
              menuName={SIDEBAR.HOME}
              selectedMenu={selectedMenu}
            >
              <IoMdHome
                className={`h-6 w-6 ${SIDEBAR.HOME === selectedMenu ? ' text-blue-500' : 'text-white'}`}
              />
            </SideBarMenuWrapper>

            <SideBarMenuWrapper
              handleSelectMenu={handleSelectMenu}
              menuName={SIDEBAR.CHART}
              selectedMenu={selectedMenu}
            >
              <MdInsertChartOutlined
                className={`h-6 w-6 ${SIDEBAR.CHART === selectedMenu ? ' text-blue-500' : 'text-white'}`}
              />
            </SideBarMenuWrapper>

            <SideBarMenuWrapper
              handleSelectMenu={handleSelectMenu}
              menuName={SIDEBAR.FILE}
              selectedMenu={selectedMenu}
            >
              <FaFileCircleCheck
                className={`h-6 w-6 ${SIDEBAR.FILE === selectedMenu ? ' text-blue-500' : 'text-white'}`}
              />
            </SideBarMenuWrapper>

            <SideBarMenuWrapper
              handleSelectMenu={handleSelectMenu}
              menuName={SIDEBAR.WALLET}
              selectedMenu={selectedMenu}
            >
              <MdOutlineAccountBalanceWallet
                className={`h-6 w-6 ${SIDEBAR.WALLET === selectedMenu ? ' text-blue-500' : 'text-white'}`}
              />
            </SideBarMenuWrapper>

            <SideBarMenuWrapper
              handleSelectMenu={handleSelectMenu}
              menuName={SIDEBAR.BAG}
              selectedMenu={selectedMenu}
            >
              <IoBagCheck
                className={`h-6 w-6 ${SIDEBAR.BAG === selectedMenu ? ' text-blue-500' : 'text-white'}`}
              />
            </SideBarMenuWrapper>
          </ul>
        </div>

        <div className='mx-auto'>
          <IoMdLogOut className='h-6 w-6 text-white' />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
