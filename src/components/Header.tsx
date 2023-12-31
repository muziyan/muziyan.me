import Link from "./Link";

const Header = () => {

  return (
    <header className={'layout-header'}>
      <Link  href='/' className={"logo"}>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><g fill="currentColor"><path d="M4.45 6.52a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71C6.47 3.3 9.61 2 12.96 2c1.23 0 2.46.18 3.63.54a.5.5 0 0 1 .33.62c-.08.27-.36.42-.62.33A11.79 11.79 0 0 0 12.96 3C9.88 3 6.98 4.2 4.81 6.38c-.1.1-.23.14-.36.14Z"/><path d="M2.5 16.48c-.28 0-.5-.22-.5-.5C2 9.94 6.92 5.02 12.96 5.02c.28 0 .5.22.5.5s-.22.5-.5.5C7.47 6.02 3 10.49 3 15.98c0 .28-.22.5-.5.5Zm19.81 0c0 .28.22.5.5.5c1.49 0 2.92-.45 4.13-1.31A7.203 7.203 0 0 0 30 9.78c0-.27-.22-.5-.5-.5s-.5.22-.5.5c0 2.02-.99 3.91-2.63 5.08a6.21 6.21 0 0 1-3.56 1.12c-.28 0-.5.22-.5.5Z"/><path d="m6.5 15.087l.876.913h7.07c6.443 0 11.584 5.487 11.584 12.14v.63c0 1.193-.932 2.25-2.188 2.25h-7.258C10.14 31.02 5 25.533 5 18.88v-5.75c0-.41.34-.75.75-.75s.75.34.75.75v1.957ZM16.584 29.02h7.258a.156.156 0 0 0 .115-.055a.28.28 0 0 0 .073-.195v-.63c0-5.647-4.34-10.14-9.584-10.14H7.148c.123.115.26.216.412.3l11.9 6.5c.36.2.5.65.3 1.02c-.13.25-.39.39-.65.39c-.12 0-.24-.03-.36-.09l-11.718-6.4c.405 5.245 4.572 9.3 9.552 9.3ZM28 2.53c0-.28-.23-.51-.51-.51s-.51.23-.51.51v1.722l-.317.248h-4.98c-4.323 0-7.773 3.785-7.773 8.2v.43c0 .728.572 1.35 1.319 1.35h4.999c4.31 0 7.772-3.622 7.772-8.05v-3.9ZM26.801 5.5c-.125.222-.311.41-.541.54l-8.08 4.41c-.25.13-.34.44-.2.69a.514.514 0 0 0 .69.21l8.08-4.41a2.49 2.49 0 0 0 .242-.154c-.179 3.745-3.155 6.694-6.764 6.694h-5c-.158 0-.318-.138-.318-.35v-.43c0-3.925 3.062-7.2 6.772-7.2h5.119Z"/></g></svg>
      </Link>
      <div className={'nav'}>
        <ul className={'menu'}>
          <li className={"menu-item"}>
            <Link href='/blog'>Blog</Link>
          </li>
          <li className={'menu-item'}>
            <Link href='https://github.com/muziyan' target='_blank'>
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M10.07 20.503a1 1 0 0 0-1.18-.983c-1.31.24-2.963.276-3.402-.958a5.708 5.708 0 0 0-1.837-2.415a1.2 1.2 0 0 1-.167-.11a1 1 0 0 0-.93-.645h-.005a1 1 0 0 0-1 .995c-.004.815.81 1.338 1.141 1.514a4.44 4.44 0 0 1 .924 1.36c.365 1.023 1.423 2.576 4.466 2.376l.003.098l.004.268a1 1 0 0 0 2 0l-.005-.318c-.005-.19-.012-.464-.012-1.182ZM20.737 5.377a5.39 5.39 0 0 0 .09-.42a6.278 6.278 0 0 0-.408-3.293a1.002 1.002 0 0 0-.615-.58c-.356-.12-1.67-.357-4.184 1.25a13.87 13.87 0 0 0-6.354 0C6.762.75 5.455.966 5.102 1.079a.997.997 0 0 0-.631.584a6.3 6.3 0 0 0-.404 3.357c.025.127.051.246.079.354a6.27 6.27 0 0 0-1.256 3.83a8.422 8.422 0 0 0 .043.921c.334 4.603 3.334 5.984 5.424 6.459a4.591 4.591 0 0 0-.118.4a1 1 0 0 0 1.942.479a1.678 1.678 0 0 1 .468-.878a1 1 0 0 0-.546-1.745c-3.454-.395-4.954-1.802-5.18-4.899a6.61 6.61 0 0 1-.033-.738a4.258 4.258 0 0 1 .92-2.713a3.022 3.022 0 0 1 .195-.231a1 1 0 0 0 .188-1.025a3.388 3.388 0 0 1-.155-.555a4.094 4.094 0 0 1 .079-1.616a7.543 7.543 0 0 1 2.415 1.18a1.009 1.009 0 0 0 .827.133a11.777 11.777 0 0 1 6.173.001a1.005 1.005 0 0 0 .83-.138a7.572 7.572 0 0 1 2.406-1.19a4.04 4.04 0 0 1 .087 1.578a3.205 3.205 0 0 1-.169.607a1 1 0 0 0 .188 1.025c.078.087.155.18.224.268A4.122 4.122 0 0 1 20 9.203a7.039 7.039 0 0 1-.038.777c-.22 3.056-1.725 4.464-5.195 4.86a1 1 0 0 0-.546 1.746a1.63 1.63 0 0 1 .466.908a3.06 3.06 0 0 1 .093.82v2.333c-.01.648-.01 1.133-.01 1.356a1 1 0 1 0 2 0c0-.217 0-.692.01-1.34v-2.35a4.881 4.881 0 0 0-.155-1.311a4.256 4.256 0 0 0-.116-.416a6.513 6.513 0 0 0 5.445-6.424A8.697 8.697 0 0 0 22 9.203a6.13 6.13 0 0 0-1.263-3.826Z"/></svg>
            </Link>
          </li>
          <li className={'menu-item'} id="theme-btn">
            <svg id={"sun-svg"} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M21.64 13a1 1 0 0 0-1.05-.14a8.05 8.05 0 0 1-3.37.73a8.15 8.15 0 0 1-8.14-8.1a8.59 8.59 0 0 1 .25-2A1 1 0 0 0 8 2.36a10.14 10.14 0 1 0 14 11.69a1 1 0 0 0-.36-1.05Zm-9.5 6.69A8.14 8.14 0 0 1 7.08 5.22v.27a10.15 10.15 0 0 0 10.14 10.14a9.79 9.79 0 0 0 2.1-.22a8.11 8.11 0 0 1-7.18 4.32Z"/></svg>
            <svg id={"moon-svg"} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m5.64 17l-.71.71a1 1 0 0 0 0 1.41a1 1 0 0 0 1.41 0l.71-.71A1 1 0 0 0 5.64 17ZM5 12a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2h1a1 1 0 0 0 1-1Zm7-7a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v1a1 1 0 0 0 1 1ZM5.64 7.05a1 1 0 0 0 .7.29a1 1 0 0 0 .71-.29a1 1 0 0 0 0-1.41l-.71-.71a1 1 0 0 0-1.41 1.41Zm12 .29a1 1 0 0 0 .7-.29l.71-.71a1 1 0 1 0-1.41-1.41l-.64.71a1 1 0 0 0 0 1.41a1 1 0 0 0 .66.29ZM21 11h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2Zm-9 8a1 1 0 0 0-1 1v1a1 1 0 0 0 2 0v-1a1 1 0 0 0-1-1Zm6.36-2A1 1 0 0 0 17 18.36l.71.71a1 1 0 0 0 1.41 0a1 1 0 0 0 0-1.41ZM12 6.5a5.5 5.5 0 1 0 5.5 5.5A5.51 5.51 0 0 0 12 6.5Zm0 9a3.5 3.5 0 1 1 3.5-3.5a3.5 3.5 0 0 1-3.5 3.5Z"/></svg>
          </li>
        </ul>
      </div>
    </header>
  )
}


export default Header
