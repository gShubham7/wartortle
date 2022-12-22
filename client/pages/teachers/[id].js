import { useRouter } from "next/router";
import style from "./singlepage.module.css";
import {StarIcon} from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";

const Teacher = ({teacher}) => {
  const router = useRouter();
  return (
    <div className={style.box1}>
   
    <Button color='tomato' variant='link' onClick={() => router.back()} style={{ cursor: "pointer" }}>Go Back</Button>
      <div className={style.box2}>
        <img src={teacher.image} alt={teacher.name} />
        <h2>Name: <span>{teacher.name}</span></h2>
        <h3>Category: <span>{teacher.category}</span></h3>
        <p>Experience: <span>{teacher.experience} years</span> </p>
        <p>Rating: <span>{teacher.rating} <StarIcon /></span></p>
        <p>Description: <span>{teacher.description}</span></p>
        <Button color='white' bg="tomato" width="150px" variant='solid'>Ask Questions</Button>
      </div>
    </div>
  )
}
export default Teacher;

export async function getStaticPaths() {
  let res = await fetch("http://localhost:8080/teachers");
  let data = await res.json();

  return {
    paths: data.map((teacher) => ({ params: { id: teacher.id.toString() } })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const {
    params: { id },
  } = context;

  let res = await fetch(`http://localhost:8080/teachers/${id}`);
  let data = await res.json();

  return {
    props: {
      teacher: data,
    },
  };
}
