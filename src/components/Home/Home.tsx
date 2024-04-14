import { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export interface Crumb {
  pathText: string;
  link: string;
}

function Breadcrumb() {
  const [crumbs, setCrumbs] = useState([
    {
      pathText: "Home",
      link: "/",
    },
  ]);

  function addLinkToBreadcrumb() {
    const newLink = {
      pathText: `Link ${crumbs.length}`,
      link: `/link/${crumbs.length}`,
    };
    setCrumbs((prevCrumb) => [...prevCrumb, newLink]);
  }

  function goBack(crumbLink: string) {
    setCrumbs((crumbs) => {
      const newCrumbs: Crumb[] = [...crumbs];
      while (
        newCrumbs.length > 0 &&
        newCrumbs[newCrumbs.length - 1].link !== crumbLink
      ) {
        newCrumbs.pop();
      }
      return newCrumbs;
    });
  }

  return (
    <>
      <div className="">
        {crumbs.map((crumb: Crumb) => {
          return (
            <Link
              to={crumb.link}
              key={crumb.link}
              onClick={() => goBack(crumb.link)}
            >
              {crumb.pathText}
            </Link>
          );
        })}
      </div>
      <button onClick={() => addLinkToBreadcrumb()}>Add Crumb</button>
    </>
  );
}

function Home() {
  return (
    <div className="home">
      <div className="shell">
        <Breadcrumb />
      </div>
    </div>
  );
}

export default Home;
