import * as C from "components";
import React from "react";

const List = React.lazy(() => import("./components/list"));
const Create = React.lazy(() => import("./components/create"));
const Edit = React.lazy(() => import("./components/edit"));
const Show = React.lazy(() => import("./components/show"));

const Posts: React.FC = () => {
  return <C.Resource list={List} create={Create} edit={Edit} show={Show} />;
};

export default Posts;
