import { Link } from "react-router-dom";
import BlockMessage from "../components/BlockMessage";

const NotFoundPage = () => {
  return (
    <div>
      <BlockMessage title="Page Not Found">
        Oops!The link is broken or doesn't exists,{" "}
        <Link to="/">Start Application</Link>
      </BlockMessage>
    </div>
  );
};

export default NotFoundPage;
