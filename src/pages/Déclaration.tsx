import DECLARATION from "../utils/declaration";

function Déclaration() {
  return ( <section className="border-2 border-red-700">
          {DECLARATION.map((item) => (
            <article key={item.id}> </article>
          ))}
        </section>
          );
}

export default Déclaration;
