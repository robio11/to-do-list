import React from "react";
import {
  ColorSwatchIcon,
  DotsCircleHorizontalIcon,
  DotsVerticalIcon,
} from "@heroicons/react/solid";
import { useRef } from "react";
import { useState } from "react";

function ShowTo(props) {
  const [colors, setColors] = useState(false);
  const [options, setOptions] = useState(false);
  const [images, setImages] = useState(false);
  const colorRef = useRef();
  const imageRef = useRef();

  const handleWhite = () => {
    colorRef.current.style.backgroundColor = "white";
  };
  const handleCyan = () => {
    colorRef.current.style.backgroundColor = "#48e9fe";
  };
  const handleRed = () => {
    colorRef.current.style.backgroundColor = "#f56d7a";
  };
  const handleGreen = () => {
    colorRef.current.style.backgroundColor = "#6cb878";
  };
  const handleBlue = () => {
    colorRef.current.style.backgroundColor = "#799ce9";
  };
  const handleYellow = () => {
    colorRef.current.style.backgroundColor = "#fef9ae";
  };

  const handleA = () => {
    imageRef.current.src =
      "https://static.vecteezy.com/system/resources/thumbnails/007/229/575/small/cute-wild-animal-face-with-flowers-on-head-boho-forest-avatar-funny-deer-illustration-for-kids-woodland-icon-isolated-on-white-background-vector.jpg";
  };

  const handleS = () => {
    imageRef.current.src =
      "https://media.istockphoto.com/vectors/colorful-cute-vector-horse-face-in-sunglasses-one-object-on-a-white-vector-id1251243932?b=1&k=20&m=1251243932&s=170667a&w=0&h=2c_A1bFCnWUq24X2zL8DVY3ypKGSYhbJYa5qTfjmgmc=";
    colorRef.current.style.backgroundColor = "#48e9fe";
  };

  const handleD = () => {
    imageRef.current.src =
      "https://w7.pngwing.com/pngs/179/541/png-transparent-raccoon-computer-icons-animal-avatar-woodland-mammal-animals-cat-like-mammal-thumbnail.png";
  };

  const handleF = () => {
    imageRef.current.src =
      "https://w7.pngwing.com/pngs/867/134/png-transparent-giant-panda-dog-cat-avatar-fox-animal-tag-mammal-animals-carnivoran-thumbnail.png";
  };

  const handleG = () => {
    imageRef.current.src =
      "https://cdn.dribbble.com/users/6534834/screenshots/15856259/media/9d4f1109f4fbe997313d098447e40d90.png?compress=1&resize=400x300&vertical=top";
  };

  const handleH = () => {
    imageRef.current.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6ol_1foTEG2r2TCXto5BAm_4M92fHHX4exA&usqp=CAU";
  };

  return (
    <div className="flex flex-col gap- justify-center items-center">
      <div className="flex text-xs text-gray-400 mt-4 justify-center items-center">
        {new Date().toDateString()}
      </div>
      <div className="flex">
        <div className="flex border-2 rounded-full border-gray-400 w-14 h-14 justify-center items-center">
          <img
            className="flex rounded-full w-12 h-12 cursor-pointer"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-vWL06qbKx_pfPr-bFrIjw1t7y5ogYgIiNITgPVmXcHS6DSN3T793hhNAWRngBnR3dec&usqp=CAU"
            alt=""
            onClick={() => setImages(!images)}
            ref={imageRef}
          />
          {images && (
            <div className="flex absolute bg-white w-48 h-28 px-2 rounded-xl shadow-md flex-wrap justify-center items-center gap-2 -translate-x-32">
              <img
                className="flex rounded-full w-12 h-12 cursor-pointer"
                src="https://static.vecteezy.com/system/resources/thumbnails/007/229/575/small/cute-wild-animal-face-with-flowers-on-head-boho-forest-avatar-funny-deer-illustration-for-kids-woodland-icon-isolated-on-white-background-vector.jpg"
                alt=""
                onClick={() => handleA()}
              />
              <img
                className="flex rounded-full w-12 h-12 cursor-pointer"
                src="https://media.istockphoto.com/vectors/colorful-cute-vector-horse-face-in-sunglasses-one-object-on-a-white-vector-id1251243932?b=1&k=20&m=1251243932&s=170667a&w=0&h=2c_A1bFCnWUq24X2zL8DVY3ypKGSYhbJYa5qTfjmgmc="
                alt=""
                onClick={() => handleS()}
              />

              <img
                className="flex rounded-full w-12 h-12 cursor-pointer"
                src="https://w7.pngwing.com/pngs/179/541/png-transparent-raccoon-computer-icons-animal-avatar-woodland-mammal-animals-cat-like-mammal-thumbnail.png"
                alt=""
                onClick={() => handleD()}
              />

              <img
                className="flex rounded-full w-12 h-12 cursor-pointer"
                src="https://w7.pngwing.com/pngs/867/134/png-transparent-giant-panda-dog-cat-avatar-fox-animal-tag-mammal-animals-carnivoran-thumbnail.png"
                alt=""
                onClick={() => handleF()}
              />

              <img
                className="flex rounded-full w-12 h-12 cursor-pointer"
                src="https://cdn.dribbble.com/users/6534834/screenshots/15856259/media/9d4f1109f4fbe997313d098447e40d90.png?compress=1&resize=400x300&vertical=top"
                alt=""
                onClick={() => handleG()}
              />

              <img
                className="flex rounded-full w-12 h-12 cursor-pointer"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6ol_1foTEG2r2TCXto5BAm_4M92fHHX4exA&usqp=CAU"
                alt=""
                onClick={() => handleH()}
              />
            </div>
          )}
        </div>

        <h1
          className="flex bg-gray-100 w-80 h-fit py-2 px-2 justify-center items-center break-all rounded-lg shadow-md cursor-pointer font-serif text-xl ml-2"
          ref={colorRef}
        >
          {props.taskName}
        </h1>

        <button
          className="flex font-bold text-2xl text-red-700 ml-2 justify-center items-center"
          onClick={() => props.deleteTask(props.id)}
        >
          {" "}
          X
        </button>
        <div className="flex justify-center items-center">
          <DotsCircleHorizontalIcon
            className="flex absolute w-4 h-4 cursor-pointer text-gray-400 justify-center items-center mt- mx-2"
            onClick={() => setOptions(!options)}
          />

          {options && (
            <div className="flex bg-white w-10 h-10 translate-x-10 rounded-md shadow-md absolute">
              <ColorSwatchIcon
                className="flex w-4 h-4 cursor-pointer text-gray-400 justify-center items-center mt-3 mx-2 absolute"
                onClick={() => setColors(!colors)}
              />

              {colors && (
                <div className="flex absolute gap-1 bg-white shadow-md w-24 h-16 px-2 py-2 rounded-md flex-wrap translate-x-16">
                  <div
                    className="flex border w-6 h-6 bg-white rounded-full cursor-pointer"
                    onClick={() => handleWhite()}
                  ></div>
                  <div
                    className="flex border w-6 h-6 bg-cyan-400 rounded-full cursor-pointer"
                    onClick={() => handleCyan()}
                  ></div>
                  <div
                    className="flex border w-6 h-6 bg-red-400 rounded-full cursor-pointer"
                    onClick={() => handleRed()}
                  ></div>
                  <div
                    className="flex border w-6 h-6 bg-green-500 rounded-full cursor-pointer"
                    onClick={() => handleGreen()}
                  ></div>
                  <div
                    className="flex border w-6 h-6 bg-blue-400 rounded-full cursor-pointer"
                    onClick={() => handleBlue()}
                  ></div>
                  <div
                    className="flex border w-6 h-6 bg-yellow-300/50 rounded-full cursor-pointer"
                    onClick={() => handleYellow()}
                  ></div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ShowTo;
