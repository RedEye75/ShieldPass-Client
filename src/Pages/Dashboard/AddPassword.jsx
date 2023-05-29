import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../Context/AuthProvider";
import { toast } from "react-hot-toast";

const AddPassword = () => {
  const { user } = useContext(authContext);

  const [categories, setCategory] = useState([]);

  useEffect(() => {
    fetch(`https://shieldpass.onrender.com/passCategory`)
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  const handleAddPassword = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const category = form.category.value;
    const password = form.password.value;

    const passInfo = {
      name,
      email,
      category,
      password,
    };
    console.log(passInfo);

    fetch(`https://shieldpass.onrender.com/passwords`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(passInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.acknowledged) {
          toast.success("Successfully stored your password");
        }
      })
      .catch((error) => {
        toast.error("There are an internal Error");
      });
  };
  return (
    <div className="max-w-screen-xl mx-auto">
      <div>
        <h1 id="title" className="text-4xl font-bold">
          Store your password
        </h1>
        <p className="font-bold text-lg mt-5">
          Effortlessly Manage and Secure Your Passwords
        </p>
      </div>
      <div className="grid grid-cols-1 mt-40 lg:mt-0 lg:grid-cols-2">
        <div>
          <lottie-player
            src="https://assets7.lottiefiles.com/packages/lf20_ed9hgtrb.json"
            autoplay
            loop
            speed="1"
          ></lottie-player>
        </div>
        <div className="lg:mt-44 m-10">
          <form onSubmit={handleAddPassword}>
            <input
              type="text"
              name="name"
              readOnly
              defaultValue={user?.displayName}
              className="input w-full max-w-lg mb-3  border border-black"
            />
            <br />

            <input
              name="email"
              type="email"
              readOnly
              defaultValue={user?.email}
              placeholder="Type here"
              className="input w-full max-w-lg mb-3  border border-black"
            />
            <select
              name="category"
              required
              className="select select-bordered w-full max-w-lg mb-3  border border-black"
            >
              {categories.map((category) => (
                <option>{category?.category}</option>
              ))}
            </select>
            <br />
            <input
              required
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input w-full max-w-lg mb-3  border border-black"
            />
            <br />
            <input
              type="submit"
              value="Submit"
              className="input w-full max-w-xs btn btn-outline mb-3 bg-blue-400  border border-black"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPassword;
