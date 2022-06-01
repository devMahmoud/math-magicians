import Tilt from 'react-tilt';
import mathLogo from './math-64.png';
import './Logo.css';

const Logo = () => (
  <div>
    <Tilt className="Tilt" options={{ max: 25 }} style={{ height: 100, width: 100 }}>
      <div className="Tilt-inner">
        <h2 className="logo-title">Math</h2>
        <img src={mathLogo} alt="" />
        <h2 className="logo-title">Magicians</h2>
      </div>
    </Tilt>
  </div>
);

export default Logo;
