import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import './ProfilePage.css';

const ProfilePage = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    avatar: 'https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001877.png', // External image URL
  });

  useEffect(() => {
    // Simulating an API call to fetch user data
    setTimeout(() => {
      setUser({
        name: ' ',
        email: ' ',
        avatar: 'https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001877.png', // External image URL
      });
    }, 1000);
  }, []);

  const handleSubmit = (values, { setSubmitting }) => {
    // Update user data on form submission
    setUser({
      ...user,
      name: values.name,
      email: values.email,
    });
    setSubmitting(false);
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div className="profile-page">
      <h1>Profile Page</h1>
      <div className="profile-info">
        {/* Avatar Section */}
        <div className="avatar">
          {user.avatar ? (
            <img
              src={user.avatar}
              alt="Avatar"
              onError={(e) => (e.target.src = '/placeholder.png')} // Fallback if image fails to load
            />
          ) : (
            <div className="avatar-placeholder">
              {user.name ? user.name[0] : '?'}
            </div>
          )}
        </div>

        <h2>{user.name || 'Your Name'}</h2>
        <p>{user.email || 'Your Email'}</p>

        {/* Form to update user information */}
        <Formik
          initialValues={{ name: user.name, email: user.email }}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div>
                <label htmlFor="name">Name</label>
                <Field
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <Field
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  type="email"
                  required
                />
              </div>
              <button type="submit" disabled={isSubmitting}>
                Update
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ProfilePage;
