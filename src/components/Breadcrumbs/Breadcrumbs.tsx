import { useState } from "react";
import "./Breadcrumbs.css";
import { Link } from "react-router-dom";

export interface Crumb {
  pathText: string;
  link: string;
}

function Breadcrumbs() {
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
    <div className="navigation">
      <div className="crumbs">
        {crumbs.map((crumb: Crumb, idx: number) => {
          return (
            <div className="nav-item" key={crumb.link}>
              <Link
                to={crumb.link}
                onClick={() => goBack(crumb.link)}
                className="nav-link"
              >
                {crumb.pathText}
              </Link>
              {idx < crumbs.length - 1 && (
                <img src="/assets/icons/caret-right.svg" />
              )}
            </div>
          );
        })}
      </div>
      <button onClick={() => addLinkToBreadcrumb()}>Add Crumb</button>
    </div>
  );
}

export default Breadcrumbs;
