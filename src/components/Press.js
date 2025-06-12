import './Press.css';

export default function Press() {
  return (
    <section className="press">
      <h2>Press Releases</h2>
      <div className="cards">
        <div className="card">
          <p>Publish Date: 11/23/2021</p>
          <h4><a href='#'>NSCP Announces the Sale of Premium</a></h4>
        </div>
        <div className="card">
          <p>Publish Date: 01/05/2020</p>
          <h4><a href=''>NSCP Expands its National Millwork Portfolio</a></h4>
        </div>
        <div className="card">
          <p>Publish Date: 12/09/2018</p>
          <h4><a href=''>NSCP invests in Interior Building Systems</a></h4>
        </div>
      </div>
      <button >Read More</button>
    </section>
  );
}
