const getStatusColor = (status: string): string => {
  switch (status) {
    case "NEW":
      return "bg-blue-200 text-blue-800 text-center";
    case "ON_GOING":
      return "bg-yellow-200 text-yellow-800 text-center";
    case "VALIDATED":
      return "bg-green-200 text-green-800 text-center";
    case "REJECTED":
      return "bg-red-200 text-red-800 text-center";
    default:
      return "bg-gray-200 text-gray-800 text-center";
  }
};

const getStatusLabel = (status: string): string => {
  switch (status) {
    case "NEW":
      return "Nouveau";
    case "ON_GOING":
      return "En cours";
    case "VALIDATED":
      return "Validé";
    case "REJECTED":
      return "Rejeté";
    default:
      return "Inconnu";
  }
};

export { getStatusColor, getStatusLabel };
