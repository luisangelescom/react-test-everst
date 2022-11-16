function Header(): JSX.Element {
  return (
    <>
      <button hidden={false}>test</button>
      <div id="app">
        <label htmlFor="username-input">Username</label>
        <input aria-labelledby="username-input" />

        <label htmlFor="Header">Header</label>
        <input placeholder="Header" id="Header" />
        <div>Hello World</div>
        <h1>Header</h1>
        <div id="div-id">
          <h1>Kno2</h1>
        </div>
      </div>
      <label>
        <span>Username</span>
        <input placeholder="Username" />
      </label>

      <a href="/about">About ℹ️</a>
      <input type="submit" value="Send data" />

      <input type="text" id="lastName" defaultValue="Norris" />

      <select defaultValue="AK">
        <option value="">State</option>
        <option value="AL">Alabama</option>
        <option value="AK">Alaska</option>
        <option value="AZ">Arizona</option>
      </select>

      <img alt="Incredibles 2 Poster" src="/incredibles-2.png" />

      <span title="Delete" id="2" />
    </>
  );
}

export default Header;
