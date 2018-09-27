import Link from 'next/link';
import Layout from '../components/MyLayout';

const titleStyle = {
  textAlign: 'center',
  fontSize: 36
};

const Index = () => (
  <div>
    <Layout>
      <h2 style={titleStyle}>My Next.js Blog</h2>
      <ul>
        <li>This seems cool</li>
        <li>Never mind, this app is garbage</li>
        <li>10 Cool Tricks to Learning Web Development</li>
      </ul>
    </Layout>
  </div>
);

export default Index;
