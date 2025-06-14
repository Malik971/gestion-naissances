import { search } from "@/services";
import type { Declaration } from "@/types/Declaration";
import { useEffect, useState } from "react";

function useDeclaration() {
  const [statusOrder, setStatusOrder] = useState(1)
  const [declarations, setDeclarations] = useState<Declaration[]>([]);
  const sortByStatus = () => {
    const sortDeclaration = declarations.sort(
      (itemOne: Declaration, itemTwo: Declaration) => {
        const { status: itemOneStatus } = itemOne;
        const { status: itemTwoStatus } = itemTwo;
        let result = 0;
        if (itemOneStatus > itemTwoStatus) {
          result = 1;
        } else if(itemOneStatus < itemTwoStatus){
          result = -1;
        }

        setStatusOrder(statusOrder * -1)
        return result * statusOrder;
      }
    );
    setDeclarations([...sortDeclaration]);
  };
  const getDeclaration = async () => {
    const data = await search("declarations");
    setDeclarations(data);
  };
  useEffect(() => {
    getDeclaration();
  }, []);
  return { declarations, sortByStatus };
}

export { useDeclaration };
