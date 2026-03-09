import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Topic from "./pages/Topic";
import Article from "./pages/Article";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ProtectedRoute from "./auth/ProtectedRoute";

function App(){

return(

<BrowserRouter>
<BrowserRouter basename="/knowledgehub/"></BrowserRouter>
<Routes>

<Route path="/signin" element={<SignIn/>}/>
<Route path="/signup" element={<SignUp/>}/>

<Route
path="/"
element={
<ProtectedRoute>
<Layout/>
</ProtectedRoute>
}
>

<Route index element={<Home/>}/>
<Route path="topic/:id" element={<Topic />} />
<Route path="article/:topicId/:articleIndex" element={<Article />} />

</Route>

</Routes>

</BrowserRouter>

)

}

export default App;