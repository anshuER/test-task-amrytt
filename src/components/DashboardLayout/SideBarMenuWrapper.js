expor default const SideBarMenuWrapper = ({
    selectedMenu,
    handleSelectMenu,
    children,
    menuName,
  }) => {
    return (
      <li
        className='flex items-center'
        onClick={() => handleSelectMenu(SIDEBAR.HOME)}
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