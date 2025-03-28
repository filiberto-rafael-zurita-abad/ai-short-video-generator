import React from "react";

export default function Banner({ title, content }) {
  return (
    <div className="border rounded-md p-4 w-full">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <p className="text-gray-700">{content}</p>
    </div>
  );
}
