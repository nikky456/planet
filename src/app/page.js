import Image from "next/image";
import Navbar from "./navbar/page";
import BelowNav from "./hero/page";
import Page from "./middle/page";
import Middle from "./middle1/page";
import Middle2 from "./middle2/page";
import Example from "./components/section/header/navbar/page";
import ExampleComponent from "./components/section/header/page";




export default function Home() {
  return (
    <main>
      <Navbar/>
      <BelowNav/>
      <Page/>
      <Middle/>
      <Middle2/>
      <Example />
      <ExampleComponent />
      

     
    </main>
  );
}
