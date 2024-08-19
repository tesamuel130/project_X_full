import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Import a navbar
import NavBarTwo from "../components/NavBarTwo";

// Import FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowLeft,
  faPhone,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

export default function PersonContact() {
  const navigate = useNavigate();
  const [contactInPerson, setContactInPerson] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `/contactInPerson/chat/list?page=${currentPage}&limit=${limit}`
        );
        if (response.status === 200) {
          const dataWithFirstImage = response.data.results.map((person) => ({
            ...person,
            firstImage:
              person.sellerImage && person.sellerImage.length > 0
                ? person.sellerImage[0].path
                : null,
          }));
          setContactInPerson(dataWithFirstImage);
          setTotalPages(response.data.totalPages || 1); // Ensure totalPages is set correctly
        } else {
          console.error("Unexpected response code:", response.status);
        }
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
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

  const goToPersonConact = (id) => {
    navigate(`/personContact/paymentauth/${id}`);
  };

  return (
    <>
      <NavBarTwo />

      <div className="content-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="content-block head-div">
                <div className="cb-header">
                  <div className="row">
                    <div className="col-lg-10 col-sm-10 col-xs-8">
                      <ul className="list-inline">
                        <li>
                          <a href="#" className="color-active">
                            <span className="visible-xs">Most-Chat</span>
                            <span className="hidden-xs">Most-Chat</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">New-Comer</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-2 col-sm-2 col-xs-4">
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
                            <a href="#">Top Rated</a>
                          </li>
                          <li>
                            <a href="#">Most Chated</a>
                          </li>
                          <li>
                            <a href="#">Cheap</a>
                          </li>
                          <li>
                            <a href="#">Expensive</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="cb-content videolist">
                  <div className="row">
                    {contactInPerson.length > 0 ? (
                      contactInPerson.map((person) => (
                        <div
                          className="col-lg-3 col-sm-6 col-xs-12"
                          key={person._id}
                        >
                          <div
                            className="b-playlist"
                            onClick={() => goToPersonConact(person._id)}
                          >
                            <div className="v-img">
                              <img
                                src={`http://localhost:6010/${person.thirdImage}`}
                                alt={person.name}
                                className="l-1"
                              />
                              <img
                                src={`http://localhost:6010/${person.secondImage}`}
                                alt={person.name}
                                className="l-2"
                              />
                              <a>
                                <img
                                  src={`http://localhost:6010/${person.firstImage}`}
                                  alt=""
                                  className="l-3"
                                />
                              </a>
                              <div className="items">20</div>
                            </div>
                            <div className="v-desc">
                              <br />
                              <a>{person.nickName}</a>
                            </div>
                            <div className="v-views">
                              Price: {person.price}/day
                              <br />
                              {
                                person.calls
                              } <i className="fa fa-phone"></i> Calls | &nbsp;
                              {[...Array(5)].map((_, i) => (
                                <FontAwesomeIcon key={i} icon={faStar} />
                              ))}
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div>No chatters available</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pagination */}
          <div className="v-pagination">
            <ul className="list-inline">
              <li className="v-pagination-prev">
                <button
                  className="btn btn-default"
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                >
                  <FontAwesomeIcon icon={faArrowLeft} />
                </button>
              </li>
              {[...Array(totalPages)].map((_, index) => (
                <li
                  key={index}
                  className={currentPage === index + 1 ? "active" : ""}
                >
                  <button
                    className="btn btn-default"
                    onClick={() => setCurrentPage(index + 1)}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
              <li className="v-pagination-next">
                <button
                  className="btn btn-default"
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                >
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
