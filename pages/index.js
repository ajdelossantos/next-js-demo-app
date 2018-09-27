import Link from 'next/link';

const linkStyle = {
  fontSize: 20
};

const Index = () => (
  <div>
    <Link href="/about">
      {/* <a style={linkStyle}>About Page</a> */}
      <button>Go to About Page</button>
    </Link>
    <h2>Hello Next.js</h2>
  </div>
);

export default Index;
