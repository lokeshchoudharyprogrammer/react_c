// Math.js

import React from 'react';

const Math = () => {
  const loadWebAssembly = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const buffer = await response.arrayBuffer();
    const module = await WebAssembly.instantiate(buffer, {});

    const add = module.instance.exports.add;

    const result = add(2, 3); // Call the C++ function

    console.log(result); // Output: 5
  };

  React.useEffect(() => {
    loadWebAssembly();
  }, []);

  return <div>Math Component</div>;
};

export default Math;
