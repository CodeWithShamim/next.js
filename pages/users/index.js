import Link from "next/link";
import React from "react";

const index = ({ users }) => {
  return (
    <div>
      <h1>This is user: {users?.length}</h1>
      {users?.map((user) => (
        <div key={user.id}>
          <h5>{user.name}</h5>
          <Link href={`/users/${user.id}`}>
            <button>Go</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default index;

// ----------load data by getStaticProp---------
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: { users: data },
  };
}
