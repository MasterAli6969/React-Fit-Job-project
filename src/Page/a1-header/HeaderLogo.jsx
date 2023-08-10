import "./Header.css";
function Logo() {
  return (
    <div>
      <img
        src={process.env.PUBLIC_URL + "/image/headerNavLogo.png"}
        className="header_desktop_logo"
      />
    </div>
  );
}

export default Logo;
