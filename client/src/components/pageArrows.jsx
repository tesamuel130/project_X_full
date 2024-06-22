import React from "react";

export default function pageArrows() {
  return (
    <>
      {/* <!-- pagination --> */}
      <div className="v-pagination">
        <ul className="list-inline">
          <li className="v-pagination-prev">
            <a href="#">
              <i>
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  className="cv cvicon-cv-previous"
                />
              </i>
            </a>
          </li>
          <li className="v-pagination-first">
            <a href="#">1</a>
          </li>
          <li>
            <a href="#">2</a>
          </li>
          <li>
            <a href="#">3</a>
          </li>
          <li>
            <a href="#">4</a>
          </li>
          <li>
            <a href="#">5</a>
          </li>
          <li>
            <a href="#">...</a>
          </li>
          <li>
            <a href="#">10</a>
          </li>
          <li className="v-pagination-skin visible-xs">
            <a href="#">Skip 5 Pages</a>
          </li>
          <li className="v-pagination-next">
            <a href="#">
              <i>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="cv cvicon-cv-next"
                />
              </i>
            </a>
          </li>
        </ul>
      </div>
      {/* <!-- /pagination --> */}
    </>
  );
}
