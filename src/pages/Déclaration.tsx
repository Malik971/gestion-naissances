import DECLARATION from "../utils/declaration";

function Déclaration() {
  return ( <section className="border-2 bg-white shadow-md rounded-lg p-4">
          {DECLARATION.map((item) => (
            <article key={item.id}>
              <span>{item.registered}</span>
            </article>
          ))}
        </section>
          );
}

export default Déclaration;
