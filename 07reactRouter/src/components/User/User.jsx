import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userId } = useParams();
  return (
    <div className="text-3xl bg-slate-600 text-white p-6">User:{userId}</div>
  );
}

export default User;
