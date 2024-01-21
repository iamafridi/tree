import Tree from './Tree'; 
import treeData from './treeData';
import './Tree.css';

const App = () => {
  return (
    <div>
      <h1 className=' text-2xl text-center font-bold'>Tree Structure</h1>
      <Tree data={treeData} />
    </div>
  );
};

export default App;
