import React, { useEffect, useState } from "react";
import axios from "axios";
import "./WomenClothing.css";
import { IoStarSharp } from "react-icons/io5";
import Like from "../Like";

const WomenClothing = () => {
  const [clothingData, setClothingData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClothingData = async () => {
      try {
        const response = await axios.get(
          "https://mira-boutique-backend-1.onrender.com/api/women-clothing"
        );
        setClothingData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchClothingData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="flex justify-center bg-slate-100 -mb-[6rem]">
      <div className="mt-[5rem]">
        <h1 className="flex justify-center font-bold">Women's Clothing</h1>
        <div className="clothing-grid">
          {clothingData.map((item) => (
            <div key={item.id} className="clothing-item">
              {item.image && (
                <img
                  src={`https://mira-boutique-backend-1.onrender.com${item.image}`}
                  alt={item.title}
                  width="100"
                  className="w-max"
                />
              )}
              <div className="mt-[30px]">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <p className="font-medium">Quantity: {item.Quantity}</p>
                <div className="flex justify-between">
                  <p className="text-blue-600 font-medium">₦{item.price}</p>
                  <Like className="mt-3" />
                </div>
                <div className="flex gap-1 mt-1">
                  <IoStarSharp className="mt-1 text-yellow-400" fontSize={18} />
                  <span className="text-slate-500 font-medium">{item.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WomenClothing;
