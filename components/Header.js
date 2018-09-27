import Link from 'next/link';

const linkStyle = {
  marginRight: 15,
  padding: '5px 10px',
  border: '1px solid blue',
  borderRadius: 2,
  textDecoration: 'none'
};

const titleStyle = {
  display: 'flex',
  padding: '5px 20px 20px 20px',
  borderBottom: '1px solid #DDD',
  justifyContent: 'flex-start'
};

const Header = () => (
  <div style={titleStyle}>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
  </div>
);

export default Header;
