import React from "react";

const index = ({ users }) => {
  return (
    <div>
      <h1>This is user: {users?.length}</h1>
    </div>
  );
};

export default index;

// ----------load data by getStaticProp---------
export async function getStaticProps(context) {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: { users: data },
  };
}
