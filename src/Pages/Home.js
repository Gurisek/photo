import './Home.css'
import Profile from "../Images/IMG_9235.jpg";

export default function Home() {
  return (
    <div className="Home">
      <section>
        <p>
            <h1>Terka</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          totam vel laudantium molestias voluptate. Illum, voluptatem? Optio
          laboriosam qui quibusdam, cupiditate molestiae, ad, vel velit neque
          esse minima ipsam minus.
        </p>
        <img
          src={Profile}
          alt="profile img"
          style={{ width: "350px", height: "450px" }}
        />
      </section>
      {/* <div className="gallery" >
        <img src="https://picsum.photos/200/300" alt="1" />
        <img src="https://picsum.photos/200/300" alt="2" />
        <img src="https://picsum.photos/200/300" alt="3" />
        <img src="https://picsum.photos/200/300" alt="4" />
      </div> */}
    </div>
  );
}
