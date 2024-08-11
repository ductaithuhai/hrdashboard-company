import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './styles.css'
import PropTypes from 'prop-types';
import avatarplaceholder from '../../../../assets/icons/avatarplaceholder.png'


const AddUserForm = ({ onSubmit, toggleForm }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [avatar, setAvatar] = useState('/default-avatar.png');
  const [preview, setPreview] = useState(null);
  const handleFormSubmit = (data) => {
    onSubmit(data);
    reset(); // Reset form after submission
    toggleForm(); // Hide form after submission
  };

  AddUserForm.PropTypes = {
    onSubmit: PropTypes.func.required,
    toggleForm: PropTypes.func.required
  }

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        setAvatar(reader.result); // Cập nhật avatar
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className='adduserform'>
        <div className='leftpopup'>
          <div className='formtitle'>Add New User</div>
          <div className='formdes'>User Detail</div>
          <form onSubmit={handleSubmit(handleFormSubmit)}>
            <div className="mailandrole">
              <div className="email">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="email@address.com"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
              </div>
              <div className="role">
                <label>Role</label>
                <select {...register("role", { required: "Role is required" })}>
                  <option value="User">User</option>
                  <option value="Admin">Admin</option>
                </select>
                {errors.role && <p style={{ color: "red" }}>{errors.role.message}</p>}
              </div>
            </div>
            <div className="phone">
              <label>Phone Number</label>
              <input
                type="tel"
                placeholder="0911222333"
                {...register("phoneNumber", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Invalid phone number",
                  },
                })}
              />
              {errors.phoneNumber && (
                <p style={{ color: "red" }}>{errors.phoneNumber.message}</p>
              )}
            </div>
            <div className="name">
              <div className="firstname">
                <label>First Name</label>
                <input
                  type="text"
                  placeholder="John"
                  {...register("firstName", { required: "First name is required" })}
                />
                {errors.firstName && (
                  <p style={{ color: "red" }}>{errors.firstName.message}</p>
                )}
              </div>
              <div className="lastname">
                <label>Last Name</label>
                <input
                  type="text"
                  placeholder="Doe"
                  {...register("lastName", { required: "Last name is required" })}
                />
                {errors.lastName && (
                  <p style={{ color: "red" }}>{errors.lastName.message}</p>
                )}
              </div>
            </div>
            <div className="password">
              <label>Password</label>
              <input
                type="password"
                placeholder="Password"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <p style={{ color: "red" }}>{errors.password.message}</p>
              )}
            </div>
            <div className="password">
              <label>Confirm Password</label>
              <input
                type="password"
                placeholder="Password"
                {...register("confirmPassword", {
                  required: "Confirm password is required",
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match",
                })}
              />
              {errors.confirmPassword && (
                <p style={{ color: "red" }}>{errors.confirmPassword.message}</p>
              )}
            </div>
          </form>
          <div className="botbutton">
            <button className="button submituser" type="submit">
              Add User
            </button>
            <button className="button cancel" type="button" onClick={toggleForm}>
              Cancel
            </button>
          </div>
        </div>
        <div className='rightpopup'>
          <div className="avatarchange">
            <div className='changetitle'>Profile Picture</div>
            <img className='placeholder'
              src={avatarplaceholder}
              alt="avatar"
            />
            <label htmlFor="file-upload" className="custom-file-upload">
              Select Image
            </label>
            <input id="file-upload" type="file" accept="image/*" onChange={handleAvatarChange} style={{ display: 'none' }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddUserForm;
