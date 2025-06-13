import { Link } from "react-router";

function ErrorPage() {
  return (
    <section>
      <Link type="button" className="btn btn-primary border-b-blue-700 text-blue-700 bg-green-500 p-8 m-8"
       to={"/"}>
        Retour à L'acceuil
      </Link>
      <h1>La page que vous rechercher n'existe pas</h1>
    </section>
  );
}

export default ErrorPage;
