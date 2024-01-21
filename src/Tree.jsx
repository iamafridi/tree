const Tree = ({ data }) => {
  const renderNode = (node) => (
    <div className="tree-node" key={node.title}>
      {node.title}
      {node.child && (
        <div className="child-nodes">
          {node.child.map(renderNode)}
        </div>
      )}
      {node.curve && <div className="curve-line" />}
    </div>
  );

  return (
    <div className="tree-node">
      {data.map(renderNode)}
    </div>
  );
};

export default Tree;
