import logo from './logo.svg';
import './App.css';
import { Writer } from './writer';
import SomeInfo from './components/info';
import { Film } from './film';


export default function App(defaultProps) {
  let writer=new Writer("William", "Shakespear", "William Shakespeare (bapt. 26 April[b] 1564 – 23 April 1616)[c] was an English playwright, poet and actor. He is widely regarded as the greatest writer in the English language and the world's pre-eminent dramatist.[2][3][4] He is often called England's national poet and the , .[5][d] His extant works, including collaborations, consist of some 39 plays,[e] 154 sonnets, three long narrative poems, and a few other verses, some of uncertain authorship. His plays have been translated into every major living language and are performed more often than those of any other playwright.[7] He remains arguably the most influential writer in the English language, and his works continue to be studied and reinterpreted.","/Img/title.jpg");
  let film=new Film("Interstellar", "Christopher Nolan", "2014", ["Matthew McConaughey", "Anne Hathaway", "Jassica Chastain"], "Legendary Pictures", "/Img/interstellar.jpg" )
  let stars=[];
  film.actors.forEach(el=>{stars.push(<span> {el} </span>)});
  
  return (
    <div >
      <h1>Task1</h1>
      <h2>{writer.name} {writer.lastName}</h2>
      <hr></hr>
      <div class="box">
        <div class="content">
          <p>{writer.description}</p>
        </div>
        <div class="photo">
          <img src={writer.photo}></img> 
        </div>
      </div>
      <hr></hr>
      <SomeInfo></SomeInfo>
      <hr></hr>
      <h1>Task2</h1>
      <div class="content">
        <img src={film.poster}></img>
      </div>
          <h2  class="task2">{film.title}</h2>
         <p class="task2">
          director: {film.director}<br></br>
          year: {film.releaseDate}<br></br>
          studio: {film.studio}<br></br>
          stars: {stars} <br></br>
          </p> 
    </div>
  );
}


