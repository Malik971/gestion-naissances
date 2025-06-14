import type { Declaration } from "@/types/Declaration";
import DeclarationArticle from "./DeclarationArticle";
import { FaSort } from "react-icons/fa";

type Props = {
  declaration: Declaration[];
};

function DeclarationsItems(props: Props) {
  const { declaration } = props;

  return (
    <>
      <article className="grid grid-cols-12 text-gray-700 font-bold col-span-2 items-center">
        <span className={`p-2 `}>Date</span>
        <span className={`p-2 col-span-2 flex flex-col`}>Prenom Enfant</span>
        <span className={`p-2 `}>Date de Naissance</span>
        <span className={`p-2 `}>Hopital</span>
        <span className={`p-2  col-span-2 flex flex-col`}>Parent 1</span>
        <span className={`p-2  col-span-2 flex flex-col`}>Parent 2</span>
        <button
          type="button"
          className={`p-2 text-center flex justify-between items-center`}
        >
          Statut <FaSort />
        </button>
        <span className={`p-2 text-center col-span-2`}>ACTIONS</span>
      </article>
      {declaration.map((item: Declaration, index: number) => (
        <DeclarationArticle declaration={item} index={index} key={item.id} />
      ))}
    </>
  );
}

export default DeclarationsItems;
