import Tree from './Tree'; 
import treeData from './treeData';
import './Tree.css';

const App = () => {
  return (
    <div>
      <h1>Tree Structure</h1>
      <Tree data={treeData} />
    </div>
  );
};

export default App;
