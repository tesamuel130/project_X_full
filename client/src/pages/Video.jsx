import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

//import a navbar
import NavBarTwo from "../components/NavBarTwo";

//import fontawsome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function Videos() {
  const navigate = useNavigate();
  const [uploads, setUploads] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 10;

  useEffect(() => {
    const fetchUploads = async () => {
      try {
        const response = await axios.get(
          `/video/list/down?page=${currentPage}&limit=${limit}`
        );
        setUploads(response.data.videos || []);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error("Error fetching uploaded files", error);
        // toast.erros("Error fetching uploaded files", error);
      }
    };

    fetchUploads();
  }, [currentPage]);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToVideo = (id) => {
    navigate(`/video/play/${id}`);
  };

  return (
    <>
      <NavBarTwo />

      <div className="content-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* <!-- /Updates from Subscriptions --> */}

              {/* <!-- videos component --> */}

              <div className="content-block head-div">
                <div className="cb-header">
                  <div className="row">
                    <div className="col-lg-9 col-sm-8 col-xs-8">
                      <ul className="list-inline">
                        <li>
                          <a href="#" className="color-active">
                            <span className="visible-xs">Most-Viewd</span>
                            <span className="hidden-xs">Most-Viewed</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">New-Video</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-1 col-sm-2 col-xs-5">
                      <div className="btn-group pull-right bg-clean">
                        <button
                          type="button"
                          className="btn btn-default dropdown-toggle"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Country <span className="caret"></span>
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a href="#">
                              <i className="cv cvicon-cv-relevant"></i> Top
                              Rated
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="cv cvicon-cv-calender"></i> Most
                              Chated
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="cv cvicon-cv-view-stats"></i> Cheap
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="cv cvicon-cv-star"></i> Expencive
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="clearfix"></div>
                    </div>
                    <div className="col-lg-1 col-sm-2 col-xs-5">
                      <div className="btn-group pull-right bg-clean">
                        <button
                          type="button"
                          className="btn btn-default dropdown-toggle"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Sort by <span className="caret"></span>
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a href="#">
                              <i className="cv cvicon-cv-relevant"></i> Top
                              Rated
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="cv cvicon-cv-calender"></i> Most
                              Chated
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="cv cvicon-cv-view-stats"></i> Cheap
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="cv cvicon-cv-star"></i> Expencive
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="clearfix"></div>
                    </div>
                    <div className="col-lg-1 col-sm-2 col-xs-5">
                      <div className="btn-group pull-right bg-clean">
                        <button
                          type="button"
                          className="btn btn-default dropdown-toggle"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Sort by <span className="caret"></span>
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a href="#">
                              <i className="cv cvicon-cv-relevant"></i> Top
                              Rated
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="cv cvicon-cv-calender"></i> Most
                              Chated
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="cv cvicon-cv-view-stats"></i> Cheap
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="cv cvicon-cv-star"></i> Expencive
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="clearfix"></div>
                    </div>
                  </div>
                </div>
                <div className="cb-content videolist">
                  <div className="row">
                    {/* video list */}
                    <div>
                      {uploads.map((upload) => (
                        <div key={upload._id}>
                          <div
                            className="col-lg-3 col-sm-6 videoitem"
                            onClick={() => goToVideo(upload._id)}
                          >
                            <div className="b-video">
                              <div className="v-img">
                                <a>
                                  {upload.thumbnail.map((thumbnail) => (
                                    <Link key={thumbnail.filename}>
                                      <img
                                        key={thumbnail.filename}
                                        src={`http://localhost:6050/${thumbnail.path}`}
                                        alt={thumbnail.filename}
                                      />
                                    </Link>
                                  ))}
                                </a>
                                <div class="time">{upload.videoMin}</div>
                              </div>
                            </div>
                            <div class="v-desc">
                              <a href="single-video-tabs.html">
                                {upload.title}
                              </a>
                            </div>
                            <div class="v-views">
                              {upload.views} views
                              <span className="v-percent">
                                <span className="v-circle"></span>{" "}
                                {upload.reating}%
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- / videos component --> */}
            </div>
          </div>

          {/* <!-- pagination --> */}
          <div className="v-pagination">
            <ul className="list-inline">
              <li className="v-pagination-prev">
                <i>
                  <a onClick={handlePreviousPage} disabled={currentPage === 1}>
                    <FontAwesomeIcon
                      icon={faArrowLeft}
                      className="cv cvicon-cv-previous"
                    />
                  </a>
                </i>
              </li>
              {[...Array(totalPages).keys()].map((page) => (
                <li
                  key={page + 1}
                  className={`v-pagination-page ${
                    currentPage === page + 1 ? "active" : ""
                  }`}
                >
                  <a onClick={() => setCurrentPage(page + 1)}>{page + 1}</a>
                </li>
              ))}
              <li className="v-pagination-next">
                <i>
                  <a
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                  >
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="cv cvicon-cv-next"
                    />
                  </a>
                </i>
              </li>
            </ul>
          </div>
          {/* <!-- /pagination --> */}
        </div>
      </div>
    </>
  );
}
