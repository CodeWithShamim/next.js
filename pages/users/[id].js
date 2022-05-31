import React from "react";

const user = ({ user }) => {
  return (
    <div>
      <h3>Name: {user.name}</h3>
      <h3>Email: {user.email}</h3>
      <h3>Phone: {user.phone}</h3>
    </div>
  );
};

export default user;

// load all user data
export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  const paths = users.map((user) => ({
    params: { id: user.id.toString() },
  }));
  return { paths, fallback: false };
}

// load specific user data
export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await res.json();
  return { props: { user } };
}
