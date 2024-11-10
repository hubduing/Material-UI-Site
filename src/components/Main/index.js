import React from "react";
import MainHead from "../MainHead";
import Content from "../Content";
import CardList from "../CardList";
import useStyles from "../../styles";
import { cards, urlImage } from "../../utils/constants";

function Main() {
  const classes = useStyles();

  return (
    <>
      <main>
        <MainHead classes={classes} urlImage={urlImage} />
        <Content classes={classes} />
        <CardList cards={cards} classes={classes} urlImage={urlImage} />
      </main>
    </>
  );
}

export default Main;
