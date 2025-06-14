import { search } from "@/services";
import type { Declaration } from "@/types/Declaration";
import { useEffect, useState } from "react";

function useDeclaration() {
    const [declaration, setDeclaration] = useState<Declaration[]>([]);
  const getDeclaration = async () => {
    const data = await search('declarations')
    setDeclaration(data);
  };
  useEffect(() => {
    getDeclaration();
  }, []);
  return {declaration}
}

export { useDeclaration }