function Header() {
  return (
    <header id="header">
      <h1 className="logo">JJ PROJECT</h1>
      {/* 24.02.02 comment by jiwon 각 네비게이션들은 추후 Link태그 사용해서 라우팅 할 것 */}
      <nav className="gnb">
        <span className="link-home">Home</span>
        <div className="search-area">
          <form className="search-form">
            <input type="text" placeholder="search" />
            <button className="search-btn">Search</button>
          </form>
        </div>
        <span className="link-contact">Contact</span>
        <span className="link-login">Login</span>
      </nav>
    </header>
  );
}

export default Header;
