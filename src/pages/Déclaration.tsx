import { DECLARATION, FORMAT_DATE, getStatusColor, getStatusLabel } from "../utils";

function Déclaration() {
  return (
    <section className="border-2 bg-white shadow-md rounded-lg p-4">
      <article className="grid grid-cols-12 text-gray-700 font-bold col-span-2 items-center">
        <span className={`p-2`}>Date</span>
        <span className={`p-2 col-span-2 flex flex-col`}>Prenom Enfant</span>
        <span className={`p-2`}>Date de Naissance</span>
        <span className={`p-2`}>Hopital</span>
        <span className={`p-2 col-span-2 flex flex-col`}>Parent 1</span>
        <span className={`p-2 col-span-2 flex flex-col`}>Parent 2</span>
        <span className={`p-2 text-center`}>Statut</span>
        <span>ACTIONS</span>
      </article>
      {DECLARATION.map((item, index) => (
        <article
          key={item.id}
          className={`grid grid-cols-12 text-gray-700 border-b ${
            index % 2 === 0 ? "bg-gray-100" : "bg-white"
          }`}
        >
          <span className={`p-2`}>{FORMAT_DATE(item.registered)}</span>
          <span className={`p-2 col-span-2 flex flex-col`}>
            <span>{item.child.firstName}</span>
            <span className="uppercase">{item.child.lastName}</span>
          </span>
          <span className={`p-2`}>{FORMAT_DATE(item.child.brithDate)}</span>
          <span className={`p-2`}>
            <span className={`p-2`}>{item.company.name}</span>
          </span>
          <span className={`p-2 col-span-2 flex flex-col`}>
            <span>{item.firstParent.firstName}</span>
            <span>{item.firstParent.lastName}</span>
          </span>
          <span className={`p-2 col-span-2 flex flex-col`}>
            <span>{item.seconParent.firstName}</span>
            <span>{item.seconParent.lastName}</span>
          </span>
          <span className={`p-3 text-center ${getStatusColor(item.status)}`}>{getStatusLabel(item.status)}</span>
          <span className={`p-2 col-span-2 flex flex-col`}>ACTIONS</span>
        </article>
      ))}
    </section>
  );
}

export default Déclaration;
