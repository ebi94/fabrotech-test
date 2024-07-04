import Header from "./header";
import Sidebar from "./sidebar";

export default function Container(props) {
  const { content } = props;

  return (
    <>
      <Header />
      <Sidebar />
      <div className="mt-20 ml-64 p-4">{content}</div>
    </>
  );
}
