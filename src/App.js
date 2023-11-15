import logo from './logo.svg';
import './App.css';

// 関数コンポーネント
function App() {

  const attrs = {
    href: 'https://wings.msn.to/',
    download: false,
    target: '_blank',
    rel: 'help'
  }

  return (
    <div className="App">
      <a href={attrs.href} download={attrs.download} target={attrs.target} rel={attrs.rel}>
        サポートページへ
      </a>
      <br/>
      <br/>
      <a {...attrs}>
        サポートページへスプレッド構文
      </a>
    </div>
  );
}

export default App;
