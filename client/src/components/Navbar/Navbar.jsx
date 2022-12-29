import './Navbar.css';

const Navbar = () => {
  return (
    <>
      <div className="header">
        <div className="header__left">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" alt="" />
          <div className="header__input">
            <span className="material-icons"> search </span>
            <input type="text" placeholder="Search Facebook" />
          </div>
        </div>

        <div className="header__middle">
          <div className="header__option active">
            <span className="material-icons"> home </span>
          </div>
          <div className="header__option">
            <span className="material-icons"> flag </span>
          </div>
          <div className="header__option">
            <span className="material-icons"> subscriptions </span>
          </div>
          <div className="header__option">
            <span className="material-icons"> storefront </span>
          </div>
          <div className="header__option">
            <span className="material-icons"> supervised_user_circle </span>
          </div>
        </div>

        <div className="header__right">
          <div className="header__info">
            <h4>Kurao Hikari</h4>
          </div>
          <span className="material-icons"> add </span>
          <span className="material-icons"> forum </span>
          <span className="material-icons"> notifications_active </span>
          <span className="material-icons"> expand_more </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
