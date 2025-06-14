import { useDeclaration } from "@/hooks";
import DeclarationsItems from "@/components/declarations/DeclarationsItems";

function Déclaration() {
  const {declarations, sortByStatus } = useDeclaration()
  return (
    <section className="border-2 bg-white shadow-md rounded-lg p-4">
      <DeclarationsItems declaration={declarations} sortByStatus={sortByStatus}/>
    </section>
  );
}

export default Déclaration;
