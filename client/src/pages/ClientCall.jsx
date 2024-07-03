import React, { useEffect, useRef, useState } from "react";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { TextField } from "@material-ui/core";
import AssignmentIcon from "@material-ui/icons/Assignment";
import PhoneIcon from "@material-ui/icons/Phone";
import { CopyToClipboard } from "react-copy-to-clipboard";
// import peer from "simple-peer";
import io from "socket.io-client";
import "../assets/style/clientCall.css";

const socket = io.connect("http://localhost:5000");

export default function ClientCall() {
  return (
    <>
      <div>
        <dic className="container"></dic>
      </div>
    </>
  );
}
