import "./App.scss";
import React from "react";
//import HelloWorld from "./components/HelloWorld";
import Users from "./components/Users";
import Card from "./components/Card";

import { users } from "../src/data";
import Event from "./components/Event";

function App() {
  return (
    <div>
      <Event />

      {/* <h1>Hello World!!!</h1> */}
      {/* <HelloWorld /> */}

      {/* <h1>List of Users</h1>
      {users.map((user) => {
        return (
          <Card key={user.id}>
            <Users name={user.name} job={user.job} />
          </Card>
        );
      })} */}

      {/* <Card>
        <h2>This is a card</h2>
        <p>Lorem25 is Lorem ipsum dolor sit amet, consectet</p>
      </Card> */}
      {/* <Users />
      <Users name="Kunal" job="Technical Architect" />
      <Users name="KK" job="Technical Manager" /> */}
    </div>
  );
}

export default App;
