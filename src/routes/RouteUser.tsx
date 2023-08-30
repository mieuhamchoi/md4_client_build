import Lazy from "@/utils/lazies/Lazy";
import { Route } from "react-router-dom";

export default 
<>
    <Route path="/register" element={Lazy(() => import("@pages/users/Register"))()} />
</>
