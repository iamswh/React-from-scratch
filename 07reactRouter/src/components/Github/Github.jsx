import React, { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/iamswh")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div className="text-3xl text-white bg-gray-700 p-5">
      Github followers: {data.followers}
    </div>
  );
}

export default Github;

///////////////////Api calling optimization pending using loader///////////////
